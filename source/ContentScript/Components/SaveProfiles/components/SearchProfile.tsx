import { Box, Button, Image, Text } from "@mantine/core";
import { useRef, useState } from "react";
import useStyles from "./SearchProfile.style";
import { getImagePath } from "../../../../Utils";
import React from "react";
import { isLinkedInSNProfilePage } from "../../../../Config";
import { getNameFromProfilePage, getNameFromProfilePageOfSales } from "../../../../LinkedInParser";

interface SocialItem {
  name: string;
  icon: string;
  url: string;
  getSearchLink: (name: string) => string;
}

export default function SearchProfile({ hideUnderMe }: { hideUnderMe?: (v: boolean) => void }) {
  const { classes } = useStyles();
  const [showList, setShowList] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const socialMediaList = useRef<SocialItem[]>([
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      icon: getImagePath("social/facebook.svg"),
      getSearchLink(name: string) {
        return `${this.url}/search/people?q="${name}"`;
      },
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      icon: getImagePath("social/instagram.svg"),
      getSearchLink(name: string) {
        return `https://google.com/search?q="${name}" site:instagram.com`;
      },
    },
    {
      name: "Google",
      url: "https://www.google.com",
      icon: getImagePath("social/google.svg"),
      getSearchLink(name: string) {
        return `${this.url}/search?q="${name}"`;
      },
    },
    {
      name: "X",
      url: "https://www.x.com",
      icon: getImagePath("social/x.svg"),
      getSearchLink(name: string) {
        return `${this.url}/search?q="${name}"&src=typed_query`;
      },
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      icon: getImagePath("social/youtube.svg"),
      getSearchLink(name: string) {
        return `${this.url}/results?search_query="${name}"`;
      },
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com",
      icon: getImagePath("social/tiktok.svg"),
      getSearchLink(name: string) {
        return `${this.url}/search/user?q="${name}"`;
      },
    },
  ]);
  const [checkedLinks, setCheckedLinks] = useState<Record<string, boolean>>({});

  const handleShowList = () => {
    if (hideUnderMe) hideUnderMe(!showList);
    setShowList(!showList);
  };

  function handleCheckClick(item: SocialItem) {
    setCheckedLinks((prev) => ({ ...prev, [item.url]: !prev[item.url] }));
  }

  function handleSearchClick() {
    const isSalesNavigator = isLinkedInSNProfilePage(window.location.href);
    const profileName = isSalesNavigator ? getNameFromProfilePageOfSales() : getNameFromProfilePage();
    Object.entries(checkedLinks).forEach(([link, enabled]) => {
      if (!enabled) return;
      const item = socialMediaList.current.find((item) => item.url === link);
      if (!item) return;
      window.open(item.getSearchLink(profileName), "_blank");
    });
  }

  return (
    <>
      <Button
        className={classes.dropdownBtn}
        style={{
          display: "flex",
          justifyContent: "space-between",
          ...(showList
            ? {
                backgroundColor: "#F5F1FB",
                color: "#2F3178",
              }
            : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleShowList}
      >
        <span>Search Profile</span>
        <Image
          src={getImagePath(showList ? "openedList.svg" : isHovered ? "closedListBlack.svg" : "closedList.svg")}
          width={16}
          style={{
            display: "flex",
            justifyContent: "end",
            width: "58px",
          }}
          height={16}
        />
      </Button>
      {showList && (
        <>
          <span className={classes.filledListSpan}>
            <Box>
              <span
                style={{
                  whiteSpace: "break-spaces",
                  fontSize: "14px",
                }}
              >
                Select the platforms you want to search this profile on
              </span>
            </Box>
            <Box className={classes.showList} style={{ border: "none" }}>
              {socialMediaList.current &&
                socialMediaList.current.map((item) => {
                  const isChecked = checkedLinks[item.url];
                  return (
                    <Box
                      onClick={() => handleCheckClick(item)}
                      key={item.name}
                      className={classes.singleList}
                      style={{
                        gap: "4px",
                        cursor: "pointer",
                      }}
                      role="button"
                    >
                      <Image
                        src={getImagePath(isChecked ? "Check.svg" : "unCheck.svg")}
                        width={20}
                        height={20}
                        style={{
                          cursor: "pointer",
                        }}
                      />
                      <Image
                        src={item.icon}
                        width={20}
                        height={20}
                        style={{
                          pointerEvents: "none",
                        }}
                        alt={item.name + " icon"}
                      />
                      <Text
                        style={{
                          color: "#696A6F",
                          fontWeight: isChecked ? "700" : "400",
                          fontSize: "14px",
                          lineHeight: "20px",
                          marginLeft: "5px",
                        }}
                      >
                        {item.name}
                      </Text>
                    </Box>
                  );
                })}
            </Box>
            <Box>
              <Button onClick={handleSearchClick} className={classes.searchButton}>
                <span>Search</span>
              </Button>
            </Box>
          </span>
        </>
      )}
    </>
  );
}
