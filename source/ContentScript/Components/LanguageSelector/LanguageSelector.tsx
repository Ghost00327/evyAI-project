import { Flex, Stack } from "@mantine/core";
import { FcGlobe } from "react-icons/fc";

import React, { useState, useRef, ReactNode, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { US, DE, IT, IL, FR, ES, PT, NO, SE, RU, IN, PK, PL, RO, CZ, SK, GB, FI } from "country-flag-icons/react/3x2";

import useStyles from "./LanguageSelector.style";
import { getImagePath } from "../../../Utils";
// import { getItem } from "../../../Utils/storage";
import * as BrowserStorage from "../../../Utils/storage";
import { EvyAILogger } from "../../../Utils/EvyAILogger";
import { STORAGE_KEYS } from "../../../Config";
import { sentryClient } from "../../../Sentry/sentryClient";

type LanguageType = { display: string; icon: ReactNode };

export const languageMapping = {
  ENG_US: {
    display: "English (US)",
    icon: <US style={{ width: "30px", height: "20px" }} />,
  },
  ENG_UK: {
    display: "English (UK)",
    icon: <GB style={{ width: "30px", height: "20px" }} />,
  },
  Spa: {
    display: "Spanish",
    icon: <ES style={{ width: "30px", height: "20px" }} />,
  },
  Ger: {
    display: "German",
    icon: <DE style={{ width: "30px", height: "20px" }} />,
  },
  Fr: {
    display: "French",
    icon: <FR style={{ width: "30px", height: "20px" }} />,
  },
  Ita: {
    display: "Italian",
    icon: <IT style={{ width: "30px", height: "20px" }} />,
  },
  Heb: {
    display: "Hebrew",
    icon: <IL style={{ width: "30px", height: "20px" }} />,
  },
  Por: {
    display: "Portuguese",
    icon: <PT style={{ width: "30px", height: "20px" }} />,
  },
  Fin: {
    display: "Finnish",
    icon: <FI style={{ width: "30px", height: "20px" }} />,
  },
  Dut: {
    display: "Dutch",
    icon: <DE style={{ width: "30px", height: "20px" }} />,
  },
  Dan: {
    display: "Danish",
    icon: <DE style={{ width: "30px", height: "20px" }} />,
  },
  Nor: {
    display: "Norwegian",
    icon: <NO style={{ width: "30px", height: "20px" }} />,
  },
  Swe: {
    display: "Swedish",
    icon: <SE style={{ width: "30px", height: "20px" }} />,
  },
  Pol: {
    display: "Polish",
    icon: <PL style={{ width: "30px", height: "20px" }} />,
  },
  Rus: {
    display: "Russian",
    icon: <RU style={{ width: "30px", height: "20px" }} />,
  },
  Ro: {
    display: "Romanian",
    icon: <RO style={{ width: "30px", height: "20px" }} />,
  },
  Hin: {
    display: "Hindi",
    icon: <IN style={{ width: "30px", height: "20px" }} />,
  },
  Urd: {
    display: "Urdu",
    icon: <PK style={{ width: "30px", height: "20px" }} />,
  },
  CZ: {
    display: "Czech",
    icon: <CZ style={{ width: "30px", height: "20px" }} />,
  },
  SK: {
    display: "Slovak",
    icon: <SK style={{ width: "30px", height: "20px" }} />,
  },
};

export type LanguageKey = keyof typeof languageMapping;

interface IProps {
  selectedLanguage: LanguageKey;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageKey>>;
}

const LanguageSelector: React.FC<IProps> = ({ selectedLanguage, setSelectedLanguage }) => {
  const { classes } = useStyles();

  const [activityDropdown, setActivityDropdown] = useState(false);
  const [searchLists, setSearchedLists] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState<Record<LanguageKey, LanguageType>>(languageMapping);

  const activityDropdownRef = useRef<HTMLDivElement | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    const filtered: Record<LanguageKey, LanguageType> = Object.keys(languageMapping)
      .filter((lang) => {
        return (
          lang.toLowerCase().includes(searchValue) || languageMapping[lang as LanguageKey].display.toLowerCase().includes(searchValue)
        );
      })
      .reduce((obj, key) => {
        //@ts-ignore
        obj[key] = languageMapping[key];
        return obj;
      }, {} as Record<LanguageKey, LanguageType>);
    setFilteredLanguages(filtered);
    setSearchedLists(searchValue);
  };

  const handleLanguageChange = async ([abbr,language]: [LanguageKey , typeof languageMapping[LanguageKey]['display']]) => {
    try {
      setSelectedLanguage(abbr);
      await BrowserStorage.setItem(STORAGE_KEYS.LAST_LANGUAGE_USED, abbr);
      setActivityDropdown(false);
    } catch (error) {
      EvyAILogger.log("Error while setting language value in Local Storage !");
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "handleLanguageChange",
          },
        },
      });
    }
  };

  useEffect(() => {
    const loadLanguageFromLocalStorage = async () => {
      try {
        const savedLanguage = await BrowserStorage.getItem(STORAGE_KEYS.LAST_LANGUAGE_USED);
        if (savedLanguage && languageMapping[savedLanguage as LanguageKey]) {
          setSelectedLanguage(savedLanguage as LanguageKey);
        }
      } catch (error) {
        EvyAILogger.log("error while retrveing language from local stoage !");
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "loadLanguageFromLocalStorage",
            },
          },
        });
      }
    };

    loadLanguageFromLocalStorage();
  }, []);

  return (
    <Stack className={classes.actionButtonsContainer} spacing={5}>
      <Flex className={classes.dropdownContainer}>
        <button
          className={classes.dropdownButton}
          onClick={() => {
            setActivityDropdown(!activityDropdown);
          }}
        >
          <span className={classes.btnText}>
            {/* {languageMapping[selectedLanguage as LanguageKey].icon} */}
            <img src={getImagePath("GlobeIcon.svg")} />
            {/* <FcGlobe size={23} /> */}
            {selectedLanguage}
          </span>

          <span className={classes.btnIcon}>{activityDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </button>

        {activityDropdown && (
          <div ref={activityDropdownRef} className={classes.dropdownMenu}>
            <div className={classes.dropdownContent}>
              <div className={classes.searchInputContainer}>
                <img
                  src={getImagePath("searchIcon.svg")}
                  alt="Search"
                  className={classes.searchIcon}
                  style={{ height: "12px", width: "12px" }}
                />
                <input
                  className={classes.searchInput}
                  onChange={handleSearch}
                  placeholder="Search"
                  value={searchLists}
                />
              </div>

              {Object.entries(filteredLanguages).map(([key,value]) => (
                <span
                  key={key}
                  className={classes.dropDownItem}
                  onClick={() => handleLanguageChange([key as LanguageKey,value.display])}
                >
                  {/* {languageMapping[activity as LanguageKey].icon} */}
                  <span className="ml-2">{languageMapping[key as LanguageKey].display}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </Flex>
    </Stack>
  );
};

export default LanguageSelector;
