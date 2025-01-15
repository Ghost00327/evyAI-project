import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Loader,
  Select,
  Stack,
  Text,
  Textarea,
  SegmentedControl,
  TextInput,
  clsx,
  SelectItem,
} from "@mantine/core";
import React, { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
// import { gptLengths } from "../../../Config";
import { IconChevronDown, IconTemplate } from "@tabler/icons-react";
import Draggable, { DraggableData, DraggableEvent, DraggableEventHandler } from "react-draggable";

import {
  API_REQUEST_TYPE,
  ArticleInfo,
  AuthenticationState,
  COMMENT_GOALS,
  DIRECT_MESSAGE_GOALS,
  GLOBAL_STYLES,
  GOALS,
  INVITATION_CONNECTION_REQUEST_GOALS,
  InvitationNoteRequestParams,
  LinkedInMessage,
  MESSAGE_ACTION,
  PARAMETER_KEY,
  POSTING_GOALS,
  Profile,
  PROFILE_EDITING_HEADLINE_GOALS,
  RECOMMENDATION_GOALS,
  RecommendationInfo,
  SECONDS_TO_KEEP_THE_CONTENT_COPIED_MESSAGE,
  STORAGE_KEYS,
  SubscriptionStatus,
  TextGenerationInfo,
  TONES,
  CONTRIBUTED_ARTICLE_GOALS,
  removeEmojis,
  IUser,
  SubScriptionStaus_Type,
  SubscriptionStatusDB,
  PAGINATION_LIMITS,
  PERSONAS_DROPDOWN_CONSTANTS,
} from "../../../Config";
import {
  APP_VERSION,
  CLASS_NAMES,
  extension_update_page,
  extensionPage,
  LOCAL_STORAGE_KEYS,
} from "../../../LinkedInParser/constants";
import { getImagePath, sleep } from "../../../Utils";
import { sendMessageToExtensionPages } from "../../../Utils/extensionUtils";
import * as BrowserStorage from "../../../Utils/storage";
import { RxCross2 } from "react-icons/rx";
import useStyles from "./style";
import { FaLock } from "react-icons/fa";
import _ from "lodash";
import { Timestamp } from "firebase/firestore";
import { COLLECTIONS } from "../../../firebase/firebase";
import { useShowOlderVersion } from "../../Hooks/useShowOlderVersion";
import { User } from "firebase/auth";
import LanguageSelector from "../../Components/LanguageSelector";
import { LanguageKey, languageMapping } from "../../Components/LanguageSelector/LanguageSelector";
import ResponseErrorDialogue from "../../Components/ResponseErrorDialogue/ResponseErrorDialogue";
import LinesEllipsis from "react-lines-ellipsis";
import debounce from "lodash/debounce";
import { CustomPersonaDropdownItem } from "./CustomPersonaDropdownItem";
import { sentryClient } from "../../../Sentry/sentryClient";
import { EvyAILogger } from "../../../Utils/EvyAILogger";
import TtsRecorder from "../../Components/TtsRecorder/TtsRecorder";
import { useNotifications } from "../../../hooks/useNotifications";
import { IAPI_WARNING } from "../../types";
import WarningMsg from "./components/WarningMsg";
export interface IPersona {
  id: string;
  tone: string;
  Tag: string[];
  personaName: string;
  userId: string;
  industry: string;
  profilePictureUrl: string;
  backgroundHistory: string;
  timestamp: Timestamp;
  keywordsPhrases: string;
}

export interface IResponseButton {
  text: string;
  url?: string;
}
export interface ResponseError {
  title: string;
  reason: string;
  button?: IResponseButton;
}

export interface Tags {
  id: string;
  name: string;
  modifiedDate?: Timestamp;
}

export interface ITemplate {
  id: string;
  templateName: string;
  userId: string;
  templateTags: string[] | Tags[];
  templateContent: string;
  timestamp: Timestamp;
  modifiedDate: Timestamp;
}

const InputPopup = ({
  loggedInUser,
  authorName,
  postText,
  lastMessages,
  type,
  commentText,
  commentAuthor,
  postCreationText,
  userEnteredInvitationNote,
  profile,
  aboutText,
  articleInfo,
  recommendationInfo,
  userEnteredRecommendationText,
  currentSubscriptionStatus,
  perpectiveInfo,
  isLoadingSubscriptionStatus,
  currentLinkedInUserName = "",
  currentLinkedInUserURL = "",
  generateLIURL = "",
  setGenerateLIURL,
  setCurrentLinkedInUserURL,
  onCommentSelected,
  onCloseClicked,
  buyNowButtonClick,
  currentPathHref,
  templates,
  setTemplates,
  personas,
  setPersonas,
  selectedPersona,
  setSelectedPersona,
  fullSubscriptionStatus,
  articleResponseError,
  setArticleResponseError,
  lastTemplateDoc,
  setLastTemplateDoc,
  pageForTemplates,
  setPageForTemplates,
  hasMoreTemplates,
  setHasMoreTemplates,
  lastPersonaDoc,
  setLastPersonaDoc,
  pageForPersonas,
  setPageForPersonas,
  hasMorePersonas,
  setHasMorePersonas,
  templatesFetched,
  setTemplatesFetched,
  personasFetched,
  setPersonasFetched,
}: {
  loggedInUser: User | null;
  authorName: string;
  postText: string;
  lastMessages: LinkedInMessage[];
  type: API_REQUEST_TYPE;
  commentText?: string;
  commentAuthor?: string;
  postCreationText?: string;
  userEnteredInvitationNote?: string;
  profile?: Profile;
  aboutText?: string;
  articleInfo?: ArticleInfo | null;
  recommendationInfo?: RecommendationInfo | null;
  userEnteredRecommendationText?: string;
  currentLinkedInUserName?: string;
  currentLinkedInUserURL?: string;
  setCurrentLinkedInUserURL: React.Dispatch<React.SetStateAction<string>>;
  generateLIURL?: string;
  setGenerateLIURL: React.Dispatch<React.SetStateAction<string>>;
  templates: ITemplate[];
  setTemplates: React.Dispatch<React.SetStateAction<ITemplate[]>>;
  personas: IPersona[];
  setPersonas: React.Dispatch<React.SetStateAction<IPersona[]>>;
  selectedPersona: string | null;
  setSelectedPersona: React.Dispatch<React.SetStateAction<string | null>>;
  currentSubscriptionStatus: SubscriptionStatus;
  perpectiveInfo?: any;
  onCommentSelected: (comment: string) => void;
  onCloseClicked: () => void;
  buyNowButtonClick: () => void;
  isLoadingSubscriptionStatus: boolean;
  currentPathHref: string;
  fullSubscriptionStatus: SubScriptionStaus_Type | undefined;
  articleResponseError: boolean;
  setArticleResponseError: React.Dispatch<React.SetStateAction<boolean>>;
  lastTemplateDoc: any | null;
  setLastTemplateDoc: React.Dispatch<React.SetStateAction<any | null>>;
  pageForTemplates: number;
  setPageForTemplates: React.Dispatch<React.SetStateAction<number>>;
  hasMoreTemplates: boolean;
  setHasMoreTemplates: React.Dispatch<React.SetStateAction<boolean>>;
  lastPersonaDoc: any | null;
  setLastPersonaDoc: React.Dispatch<React.SetStateAction<any | null>>;
  pageForPersonas: number;
  setPageForPersonas: React.Dispatch<React.SetStateAction<number>>;
  hasMorePersonas: boolean;
  setHasMorePersonas: React.Dispatch<React.SetStateAction<boolean>>;
  templatesFetched: boolean;
  setTemplatesFetched: React.Dispatch<React.SetStateAction<boolean>>;
  personasFetched: boolean;
  setPersonasFetched: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const uid = (loggedInUser as any)?.uid;
  const initialLastSearchedTemplateDocs = { lastNameDoc: null, lastContentDoc: null };
  const initialHasMoreSearchTemplates = { hasMoreNameDocs: false, hasMoreContentDocs: false };
  const { classes } = useStyles();
  const showExtVersion = useShowOlderVersion();
  const [textareaVal, setTextareaVal] = useState<string>("");
  const [isInitializing, setIsInitializing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isResponseCode402, setIsResponseCode402] = useState(false);
  const [responseError, setResponseError] = useState(false);
  const [responseErrorContent, setResponseErrorContent] = useState<ResponseError>({ title: "", reason: "" });
  const [generatedComments, setGeneratedComments] = useState<string[]>([]);
  // const [summaryText, setSummaryText] = useState('');
  const [errorText, setErrorText] = useState("");
  const [selectedGoal, setSelectedGoal] = useState<string | null>("");
  const [selectedTone, setSelectedTone] = useState<string | null>("");
  const [commandText, setCommandText] = useState("");
  const [generatedTextsHistory, setGeneratedTextsHistory] = useState<TextGenerationInfo[]>([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);
  const [isContentCopied, setIsContentCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isUpdatingSaveCommandStatus, setIsUpdatingSaveCommandStatus] = useState(false);
  const [savedDocumentIdsOfGeneratedTextHistory, setSavedDocumentIdsOfGeneratedTextHistory] = useState<string[]>([]);
  const [showPreDialog, setShowPreDialog] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  // const [personas, setPersonas] = useState<IPersona[]>([]);
  // const [templates, setTemplates] = useState<ITemplate[]>([]);

  const [isLoadingPersonas, setIsLoadingPersonas] = useState(false);
  const [loadingMorePersonas, setLoadingMorePersonas] = useState(false);
  const [personaSelectData, setPersonaSelectData] = useState<{ label: string; value: string }[]>([]);
  const [searchedPersonaSelectData, setSearchedPersonaSelectData] = useState<{ label: string; value: string }[]>([]);
  const [isPersonaDropDownOpen, setIsPersonaDropDownOpen] = useState(false);
  const [isPersonaDropDownClicked, setIsPersonaDropDownClicked] = useState(false);
  const [personaSearchQuery, setPersonaSearchQuery] = useState("");
  const [isSearchingPersonas, setIsSearchingPersonas] = useState(false);
  const [searchingMorePersonas, setSearchingMorePersonas] = useState(false);
  const [searchPersonaPage, setSearchPersonaPage] = useState(1);
  const [hasMoreSearchPersonas, setHasMoreSearchPersonas] = useState(false);
  const [lastSearchedPersonaDoc, setLastSearchedPersonaDoc] = useState<any | null>(null);
  const [paginatedSearchedPersonas, setPaginatedSearchedPersonas] = useState<IPersona[]>([]);
  const [hasSearchedPersonas, setHasSearchedPersonas] = useState(false);
  const [personaSearchStart, setPersonaSearchStart] = useState("");
  const [willShowSearchedPersonas, setWillShowSearchedPersonas] = useState(true);

  const [isLoadingTemplates, setIsLoadingTemplates] = useState(false);
  const [loadingMoreTemplates, setLoadingMoreTemplates] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<ITemplate>();
  const [searchedTemplates, setSearchedTemplates] = useState<ITemplate[]>([]);
  const [paginatedSearchedTemplates, setPaginatedSearchedTemplates] = useState<ITemplate[]>([]);
  const [showTemplateSelectDropDown, setShowTemplateSelectDropDown] = useState(false);
  const [templateSearchField, setTemplateSearchField] = useState("");
  const [searchTemplatePage, setSearchTemplatePage] = useState(1);
  const [templateSearchStartValue, setTemplateSearchStartValue] = useState("");
  const [templateSearchQuery, setTemplateSearchQuery] = useState("");
  const [isSearchingTemplates, setIsSearchingTemplates] = useState(false);
  const [searchingMoreTemplates, setSearchingMoreTemplates] = useState(false);
  const [hasMoreSearchTemplates, setHasMoreSearchTemplates] =
    useState<{ hasMoreNameDocs: boolean; hasMoreContentDocs: boolean }>(initialHasMoreSearchTemplates);
  const [lastSearchedTemplateDocs, setLastSearchedTemplateDocs] = useState<{
    lastNameDoc: any | null;
    lastContentDoc: any | null;
  } | null>(initialLastSearchedTemplateDocs);
  const [hasSearchedTemplates, setHasSearchedTemplates] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  const [appVersion, setAppVersion] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageKey>("ENG_US");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const templatesDropdownRef = useRef<HTMLDivElement | null>(null);
  const [isTtsRecording, setIsTtsRecording] = useState(false);
  const [warning, setWarning] = useState<IAPI_WARNING | undefined>(undefined);

  const gptLengths = [
    {
      label: <span>GPT-4o mini</span>,
      value: "gpt_3.5",
    },
    {
      label: (
        <span>
          GPT-4o
          {currentSubscriptionStatus === SubscriptionStatus.FREE && <FaLock />}{" "}
        </span>
      ),
      value: "gpt_4",
    },
  ];

  const [gptType, setGptType] = useState(gptLengths[0].value);

  const handleUpdatePaymentMethod = async () => {
    const response = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_MANAGE_SUBSCRIPTION_LINK);
    const httpsLink = response?.url;
    window.open(httpsLink, "_blank");
  };

  const handleGetPersonas = useCallback(
    async (throughScroll: boolean = false) => {
      try {
        if (isLoadingPersonas || loadingMorePersonas) {
          setIsLoadingPersonas(false);
          setLoadingMorePersonas(false);
          return;
        }
        if (pageForPersonas === 1 || (pageForPersonas > 1 && hasMorePersonas)) {
          pageForPersonas === 1 && setIsLoadingPersonas(true);
          pageForPersonas > 1 && hasMorePersonas && setLoadingMorePersonas(true);
          const result = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_PERSPONA, {
            user: loggedInUser,
            previousLastDoc: lastPersonaDoc,
            page: pageForPersonas,
            existingPersonas: personas,
            isLoading: isLoadingPersonas || loadingMorePersonas,
          });
          const response = result.data;
          const lastDocRecieved = result.lastDoc;
          const hasMoreDocs = result.hasMoreDocs;
          if (throughScroll || pageForPersonas === 1) {
            setLastPersonaDoc(lastDocRecieved);
            setHasMorePersonas(hasMoreDocs);
            setPageForPersonas(pageForPersonas + 1);
            setPersonas(response);
          }
          setIsLoadingPersonas(false);
          setLoadingMorePersonas(false);
          setPersonasFetched(true);
          return result;
        }
      } catch (error) {
        EvyAILogger.log(error, "error");
        setIsLoadingPersonas(false);
        setLoadingMorePersonas(false);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "handleGetPersonas",
            },
          },
        });
      }
    },
    [lastPersonaDoc, pageForPersonas, hasMorePersonas, loadingMorePersonas, isLoadingPersonas, personas]
  );

  const handleGetTemplates = useCallback(
    async (isRefreshing: boolean = false) => {
      try {
        if (isLoadingTemplates || loadingMoreTemplates) {
          setIsLoadingTemplates(false);
          setLoadingMoreTemplates(false);
          return;
        }
        if (pageForTemplates === 1 || (pageForTemplates > 1 && (hasMoreTemplates || isRefreshing))) {
          (pageForTemplates === 1 || isRefreshing) && setIsLoadingTemplates(true);
          pageForTemplates > 1 && hasMoreTemplates && !isRefreshing && setLoadingMoreTemplates(true);
          const result = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_TEMPLATES, {
            user: loggedInUser,
            previousLastDoc: isRefreshing ? null : lastTemplateDoc,
            page: isRefreshing ? 1 : pageForTemplates,
            existingTemplates: templates,
            isLoading: isLoadingTemplates || loadingMoreTemplates,
          });
          const response = result.data;
          const lastDocRecieved = result.lastDoc;
          const hasMoreDocs = result.hasMoreDocs;
          setLastTemplateDoc(lastDocRecieved);
          setHasMoreTemplates(hasMoreDocs);
          setPageForTemplates(isRefreshing ? 2 : pageForTemplates + 1);
          isRefreshing ? setTemplates(response) : setTemplates((prev) => [...prev, ...response]);
          setTemplatesFetched(true);
        }
      } catch (error) {
        EvyAILogger.log(error, "error");
        setIsLoadingTemplates(false);
        setLoadingMoreTemplates(false);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "handleGetTemplates",
            },
          },
        });
      }
    },
    [lastTemplateDoc, pageForTemplates, hasMoreTemplates, loadingMoreTemplates, isLoadingTemplates, templates]
  );

  const handleSearchTemplates = useCallback(async () => {
    try {
      // if (isSearchingTemplates || searchingMoreTemplates) {
      //   setIsSearchingTemplates(false);
      //   setSearchingMoreTemplates(false);
      //   return;
      // }
      if (templateSearchQuery.trim() === "") {
        return;
      }
      if (
        searchTemplatePage === 1 ||
        (searchTemplatePage > 1 &&
          (hasMoreSearchTemplates.hasMoreNameDocs || hasMoreSearchTemplates.hasMoreContentDocs))
      ) {
        setHasSearchedTemplates(false);
        searchTemplatePage === 1 && setIsSearchingTemplates(true);
        searchTemplatePage > 1 &&
          (hasMoreSearchTemplates.hasMoreNameDocs || hasMoreSearchTemplates.hasMoreContentDocs) &&
          setSearchingMoreTemplates(true);
        const result = await sendMessageToExtensionPages(MESSAGE_ACTION.SEARCH_TEMPLATES, {
          user: loggedInUser,
          previousLastDocs: lastSearchedTemplateDocs,
          page: searchTemplatePage,
          search: templateSearchQuery.trim(),
          existingTemplates: paginatedSearchedTemplates,
          isLoading: isSearchingTemplates || searchingMoreTemplates,
        });
        const response = result.data;
        const lastDocsRecieved = result.lastDocs;
        const hasMoreDocs = result.hasMoreDocs;
        setLastSearchedTemplateDocs(lastDocsRecieved);
        setHasMoreSearchTemplates(hasMoreDocs);
        setSearchTemplatePage(searchTemplatePage + 1);
        setPaginatedSearchedTemplates(response);
        setSearchedTemplates(response);
        // EvyAILogger.log("templates searched", response);
      }
      setHasSearchedTemplates(true);
      setIsSearchingTemplates(false);
      setSearchingMoreTemplates(false);
    } catch (error) {
      EvyAILogger.log(error, "error");
      setIsSearchingTemplates(false);
      setSearchingMoreTemplates(false);
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "handleSearchTemplates",
          },
        },
      });
    }
  }, [
    lastSearchedTemplateDocs,
    searchTemplatePage,
    hasMoreSearchTemplates,
    searchingMoreTemplates,
    isSearchingTemplates,
    templateSearchQuery,
    paginatedSearchedTemplates,
  ]);

  const handleSearchPersonas = useCallback(
    async (throughScroll: boolean = false) => {
      try {
        if (!personasFetched) {
          return null;
        }
        if (personaSearchQuery.trim() === "" || personaSearchStart.trim() === "") {
          return null;
        }
        if (searchPersonaPage === 1 || (searchPersonaPage > 1 && hasMoreSearchPersonas)) {
          searchPersonaPage > 1 && hasMoreSearchPersonas && setSearchingMorePersonas(true);
          const result = await sendMessageToExtensionPages(MESSAGE_ACTION.SEARCH_PERSONA, {
            user: loggedInUser,
            previousLastDoc: lastSearchedPersonaDoc,
            page: searchPersonaPage,
            search: personaSearchQuery.trim(),
            existingPersonas: paginatedSearchedPersonas,
            isLoading: isSearchingPersonas || searchingMorePersonas,
          });
          const response = result.data;
          const lastDocRecieved = result.lastDoc;
          const hasMoreDocs = result.hasMoreDocs;
          if (throughScroll || searchPersonaPage === 1) {
            setLastSearchedPersonaDoc(lastDocRecieved);
            setHasMoreSearchPersonas(hasMoreDocs);
            setSearchPersonaPage(searchPersonaPage + 1);
            setPaginatedSearchedPersonas(response);
          }
          setHasSearchedPersonas(true);
          setIsSearchingPersonas(false);
          setSearchingMorePersonas(false);
          return result;
        } else {
          return null;
        }
      } catch (error) {
        EvyAILogger.log(error, "error");
        setIsSearchingPersonas(false);
        setSearchingMorePersonas(false);
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "handleSearchPersonas",
            },
          },
        });
        return null;
      }
    },
    [
      lastSearchedPersonaDoc,
      searchPersonaPage,
      hasMoreSearchPersonas,
      searchingMorePersonas,
      isSearchingPersonas,
      personaSearchQuery,
      personaSearchStart,
      paginatedSearchedPersonas,
      personasFetched,
    ]
  );

  const handleRefreshTemplates = async () => {
    setTemplateSearchQuery("");
    setTemplateSearchStartValue("");
    setPaginatedSearchedTemplates([]);
    setPageForTemplates(1);
    setLastTemplateDoc(null);
    setHasMoreTemplates(false);
    setTemplatesFetched(false);
    setTemplates([]);
    setSearchedTemplates([]);
    setIsLoadingTemplates(true);
    setLoadingMoreTemplates(false);
    setIsSearchingTemplates(false);
    setSearchingMoreTemplates(false);
    handleGetTemplates(true);
  };

  const handlePersonaDropdown = () => {
    if (!isPersonaDropDownClicked && !personasFetched) {
      setIsPersonaDropDownClicked(true);
      if (!personasFetched && selectedPersona) {
        setPersonas([]);
      }
      handleGetPersonas();
    }
    setIsPersonaDropDownOpen(true);
  };

  useEffect(() => {
    if (templateSearchQuery.trim().length > 0 && templateSearchQuery.trim() !== "") {
      handleSearchTemplates();
    }
  }, [templateSearchQuery]);

  useEffect(() => {
    if (templateSearchStartValue.trim().length > 0 && templateSearchStartValue.trim() !== "") {
      setIsSearching(true);
      setIsSearchingTemplates(true);
      setSearchedTemplates([]);
    } else if (
      templateSearchStartValue.trim().length === 0 ||
      templateSearchStartValue.trim() === "" ||
      templateSearchStartValue.trim() === null
    ) {
      setSearchedTemplates(templates);
      setIsSearching(false);
      setIsSearchingTemplates(false);
      setSearchingMoreTemplates(false);
    }
    setSearchTemplatePage(1);
    setIsLoadingTemplates(false);
    setLoadingMoreTemplates(false);
    setPaginatedSearchedTemplates([]);
    setLastSearchedTemplateDocs(initialLastSearchedTemplateDocs);
    setHasMoreSearchTemplates(initialHasMoreSearchTemplates);
  }, [templateSearchStartValue]);

  const handleTemplateInputSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (searchTemplatePage > 1) {
      setSearchTemplatePage(1);
      setHasMoreSearchTemplates(initialHasMoreSearchTemplates);
      setLastSearchedTemplateDocs(initialLastSearchedTemplateDocs);
      setSearchedTemplates([]);
    }
    const value = e.target.value as string;
    setTemplateSearchQuery(value);
  };

  const debouncedTemplateOnChange = useCallback(
    debounce(handleTemplateInputSearch, 1000, { leading: false, trailing: true }),
    []
  );

  const handlePersonaSelectOnChange = (value: string) => {
    const trimmedValue = value ? value.trim() : "";
    let isPersonaId = false;
    const selectedPersonaValue = personas.find((persona) => persona.id === trimmedValue);
    const selectedPersonaValueInSearched = paginatedSearchedPersonas.find((persona) => persona.id === trimmedValue);
    if (selectedPersonaValue) {
      isPersonaId = selectedPersonaValue.id === trimmedValue;
    } else if (selectedPersonaValueInSearched) {
      isPersonaId = selectedPersonaValueInSearched.id === trimmedValue;
    }
    if (isPersonaId) {
      setSelectedPersona(value);
      BrowserStorage.asyncSetItem(STORAGE_KEYS.LAST_PERSONA_USED, value!);
      setPaginatedSearchedPersonas([]);
      setPersonaSearchQuery("");
      setWillShowSearchedPersonas(false);
    } else {
      setSelectedPersona(null);
      BrowserStorage.asyncSetItem(STORAGE_KEYS.LAST_PERSONA_USED, null!);
    }
  };

  const handlePersonaSearchOnChange = (value: string) => {
    setPersonaSearchStart(value);
    const trimmedValue = value.trim();
    let searchValue = trimmedValue;
    if (selectedPersona) {
      const selectedPersonaValue = personas.find((persona) => persona.id === selectedPersona);
      if (selectedPersonaValue) {
        searchValue = selectedPersonaValue.personaName.trim() === trimmedValue ? "" : value;
      }
      if (searchValue === "") {
        setPersonaSearchQuery("");
      } else {
        debouncedPersonaOnChange(searchValue);
      }
    } else {
      if (searchValue === "") {
        setPersonaSearchQuery("");
      } else {
        debouncedPersonaOnChange(value);
      }
    }
  };

  useEffect(() => {
    if (personaSearchQuery.trim().length > 0 && personaSearchQuery.trim() !== "") {
      handleSearchPersonas();
    }
  }, [personaSearchQuery]);

  useEffect(() => {
    if (personaSearchStart.length > 0 && personaSearchStart !== "") {
      const trimmedQuery = personaSearchStart.trim();
      let value = trimmedQuery;
      if (selectedPersona) {
        const selectedPersonaValue = personas.find((persona) => persona.id === selectedPersona);
        if (selectedPersonaValue) {
          value = selectedPersonaValue.personaName.trim() === trimmedQuery ? "" : trimmedQuery;
        }
        if (value === "") {
          setWillShowSearchedPersonas(false);
        } else {
          setWillShowSearchedPersonas(true);
        }
      } else {
        setWillShowSearchedPersonas(false);
      }
      if (value.length > 0) {
        setWillShowSearchedPersonas(true);
        setIsSearchingPersonas(true);
      } else {
        setWillShowSearchedPersonas(false);
        setIsSearchingPersonas(false);
      }
    } else {
      setWillShowSearchedPersonas(false);
      setIsSearchingPersonas(false);
    }
    setPaginatedSearchedPersonas([]);
    setSearchPersonaPage(1);
    setLastSearchedPersonaDoc(null);
    setHasMoreSearchPersonas(false);
  }, [personaSearchStart]);

  const handlePersonaInputSearch = (query: string) => {
    if (searchPersonaPage > 1) {
      setSearchPersonaPage(1);
      setHasMoreSearchPersonas(false);
      setLastSearchedPersonaDoc(null);
    }
    setPersonaSearchQuery(query);
  };

  const debouncedPersonaOnChange = useCallback(
    debounce(handlePersonaInputSearch, 1000, { leading: false, trailing: true }),
    []
  );

  useEffect(() => {
    if (templatesFetched) {
      if (lastTemplateDoc && templates.length > 0) {
        if (templates[templates.length - 1].id === lastTemplateDoc.id) {
          setIsLoadingTemplates(false);
          setLoadingMoreTemplates(false);
        }
      } else if (templates.length <= 0) {
        setIsLoadingTemplates(false);
        setLoadingMoreTemplates(false);
      }
      setSearchedTemplates(templates);
    }
    // if (templateSearchQuery.length > 0) {
    //   if (lastSearchedTemplateDocs && paginatedSearchedTemplates.length > 0) {
    //     if (
    //       paginatedSearchedTemplates[paginatedSearchedTemplates.length - 1].id === (lastSearchedTemplateDocs.lastNameDoc && lastSearchedTemplateDocs.lastNameDoc.id) ||
    //       paginatedSearchedTemplates[paginatedSearchedTemplates.length - 1].id === (lastSearchedTemplateDocs.lastContentDoc && lastSearchedTemplateDocs.lastContentDoc.id)
    //     ) {
    //       setIsSearchingTemplates(false);
    //       setSearchingMoreTemplates(false);
    //     } else if (paginatedSearchedTemplates.length <= 0) {
    //       setIsSearchingTemplates(false);
    //       setSearchingMoreTemplates(false);
    //     }
    //   }
    //   setSearchedTemplates(paginatedSearchedTemplates);
    // }
    // setSearchedTemplates(templates);
  }, [templates, templatesFetched]);

  const insertTemplateContent = (template: ITemplate) => {
    setSelectedTemplate(template);
    setCommandText(template.templateContent);
    setShowTemplateSelectDropDown(false);
  };

  useEffect(() => {
    if (templateSearchField === "") {
      setSearchedTemplates(templates);
    } else {
      const filteredTemplates = templates.filter(
        (template) =>
          template.templateName.toLowerCase().includes(templateSearchField.toLowerCase()) ||
          template.templateContent.toLowerCase().includes(templateSearchField.toLowerCase())
      );
      setSearchedTemplates(filteredTemplates);
    }
  }, [templateSearchField]);

  useEffect(() => {
    const setInitialGoalAndTone = async () => {
      try {
        const lastUsedGoal = await BrowserStorage.asyncGetItem(`GOAL_USED_${type}`);
        if (lastUsedGoal?.length > 0) {
          const isIncluded = Goals.includes(lastUsedGoal);
          setSelectedGoal(isIncluded ? lastUsedGoal : Goals.sort()[0]);
        } else {
          setSelectedGoal(Goals[0]);
        }

        const lastUsedTone = await BrowserStorage.asyncGetItem(STORAGE_KEYS.LAST_TONE_USED);
        // const lastPersonaUsed = await BrowserStorage.asyncGetItem(
        //   STORAGE_KEYS.LAST_PERSONA_USED
        // );
        const lastUsedGPTTYPE = await BrowserStorage.asyncGetItem(STORAGE_KEYS.GPT_TYPE);
        // if (lastPersonaUsed?.length > 0) {
        //   const persona = await sendMessageToExtensionPages(
        //     MESSAGE_ACTION.GET_SINGLE_PERSONA,
        //     {
        //       user: loggedInUser,
        //       personaId: lastPersonaUsed,
        //     }
        //   )
        //   setSelectedPersona(lastPersonaUsed);
        //   if (persona) {
        //     setPersonas([persona]);
        //   }
        // }

        if (lastUsedTone?.length > 0) {
          setSelectedTone(lastUsedTone);
        } else {
          setSelectedTone(TONES[0]);
        }
        if (lastUsedGPTTYPE?.length > 0) {
          setGptType(lastUsedGPTTYPE);
        }
      } catch (error) {
        // EvyAILogger.log("### Error while getting data from local storage");
        EvyAILogger.log({ error });
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "setInitialGoalAndTone",
            },
          },
        });
      } finally {
        setIsInitializing(false);
      }
    };
    setInitialGoalAndTone();
  }, [loggedInUser]);

  useEffect(() => {
    if (!currentLinkedInUserURL || currentLinkedInUserURL === "") {
      const existingLinkedInUserURL = localStorage.getItem(LOCAL_STORAGE_KEYS.LINKEDIN_URL);
      if (existingLinkedInUserURL) {
        if (existingLinkedInUserURL.startsWith("/in/")) {
          setCurrentLinkedInUserURL("https://www.linkedin.com" + currentLinkedInUserURL);
        } else if (existingLinkedInUserURL.startsWith("https://www.linkedin.com/in/")) {
          setCurrentLinkedInUserURL(existingLinkedInUserURL);
        }
      }
    }
  }, [currentLinkedInUserURL]);

  useEffect(() => {
    if (!generateLIURL || generateLIURL === "") {
      const existingLinkedInUserURL = localStorage.getItem(LOCAL_STORAGE_KEYS.EXISTING_LINKEDIN_URL);
      if (existingLinkedInUserURL) {
        if (existingLinkedInUserURL.startsWith("/in/")) {
          setGenerateLIURL("https://www.linkedin.com" + generateLIURL);
        } else if (existingLinkedInUserURL.startsWith("https://www.linkedin.com/in/")) {
          setGenerateLIURL(existingLinkedInUserURL);
        }
      }
    }
  }, [generateLIURL]);

  const fetchComments = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorText("");
      setIsContentCopied(false);
      const data: any = {};
      data["uid"] = uid;
      data[PARAMETER_KEY.GOAL] = selectedGoal;
      data[PARAMETER_KEY.TONE] = selectedTone;
      data[PARAMETER_KEY.AUTHOR_NAME] = authorName;
      data[PARAMETER_KEY.COMMAND] = commandText;
      data[PARAMETER_KEY.TYPE] = type;
      data[PARAMETER_KEY.CURRENT_USER_NAME] = currentLinkedInUserName;
      data[PARAMETER_KEY.CURRENT_USER_NAME_URL] = currentLinkedInUserURL;
      data[PARAMETER_KEY.GENERATELIURL] = generateLIURL;
      data[PARAMETER_KEY.GENERATE_CURRENT_URL] = window.location.href;
      data[PARAMETER_KEY.MODEL] = gptType;
      data[PARAMETER_KEY.PERSONA] = selectedPersona;
      data[PARAMETER_KEY.LANGUAGE] = languageMapping[selectedLanguage].display;
      if (
        type === API_REQUEST_TYPE.POST_COMMENT ||
        type === API_REQUEST_TYPE.COMMENT_REPLY ||
        type === API_REQUEST_TYPE.RE_POST
      ) {
        data[PARAMETER_KEY.POST_TEXT] = postText;
        if (type === API_REQUEST_TYPE.COMMENT_REPLY) {
          data[PARAMETER_KEY.COMMENT_TEXT] = commentText;
          data[PARAMETER_KEY.COMMENT_AUTHOR_NAME] = commentAuthor;
        }
      } else if (type === API_REQUEST_TYPE.MESSAGE_REPLY) {
        data[PARAMETER_KEY.LAST_MESSAGES] = lastMessages;
      } else if (type === API_REQUEST_TYPE.PERSPECTIVE_COMMENT) {
        data[PARAMETER_KEY.PERCPECTIVE] = perpectiveInfo;
      } else if (type === API_REQUEST_TYPE.CREATE_POST) {
        data[PARAMETER_KEY.POST_CREATION_TEXT] = postCreationText;
      } else if (type === API_REQUEST_TYPE.INVITATION_NOTE) {
        data[PARAMETER_KEY.USER_ENTERED_INVITATION_NOTE] = userEnteredInvitationNote;
        data[PARAMETER_KEY.PROFILE] = profile;
        data[PARAMETER_KEY.URL] = currentPathHref;
      } else if (type === API_REQUEST_TYPE.PROFILE_HEADLINE) {
        data[PARAMETER_KEY.PROFILE] = profile;
        data[PARAMETER_KEY.URL] = currentPathHref;
      } else if (type === API_REQUEST_TYPE.PROFILE_ABOUT) {
        data[PARAMETER_KEY.PROFILE] = profile;
        data[PARAMETER_KEY.ABOUT_TEXT] = aboutText;
        data[PARAMETER_KEY.URL] = currentPathHref;
      } else if (type === API_REQUEST_TYPE.ARTICLE_COMMENT || type === API_REQUEST_TYPE.ARTICLE_COMMENT_REPLY) {
        data[PARAMETER_KEY.ARTICLE_INFO] = articleInfo;
        data[PARAMETER_KEY.URL] = currentPathHref;
        delete data[PARAMETER_KEY.AUTHOR_NAME];
        if (type === API_REQUEST_TYPE.ARTICLE_COMMENT_REPLY) {
          data[PARAMETER_KEY.COMMENT_TEXT] = commentText;
          data[PARAMETER_KEY.COMMENT_AUTHOR_NAME] = commentAuthor;
          data[PARAMETER_KEY.URL] = currentPathHref;
        }
      } else if (type === API_REQUEST_TYPE.RECOMMENDATION_TEXT) {
        data[PARAMETER_KEY.RECOMMENDATION_INFO] = recommendationInfo;
        data[PARAMETER_KEY.USER_ENTERED_RECOMMENDATION_TEXT] = userEnteredRecommendationText;
        data[PARAMETER_KEY.URL] = currentPathHref;
      }
      setGeneratedComments([]);
      if (fullSubscriptionStatus) {
        if (fullSubscriptionStatus?.statusDB === null && fullSubscriptionStatus?.status === SubscriptionStatus.PRO) {
          data[PARAMETER_KEY.STATUS] = SubscriptionStatusDB.ACTIVE;
        } else {
          data[PARAMETER_KEY.STATUS] = fullSubscriptionStatus?.statusDB;
        }
        if (data[PARAMETER_KEY.STATUS] === SubscriptionStatusDB.PAST_DUE) {
          data[PARAMETER_KEY.IS_PRO_USER] = false;
        } else {
          data[PARAMETER_KEY.IS_PRO_USER] = fullSubscriptionStatus?.status === SubscriptionStatus.PRO;
        }
      }

      const response = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SUGGESTED_COMMENTS, data);

      if (response?.success) {
        let generatedText = response?.data?.[0]?.["reply"] ?? "";

        if (data.type === API_REQUEST_TYPE.MESSAGE_REPLY) {
          generatedText = removeEmojis(generatedText);
        }
        const recentActivityId = response?.data?.[0]?.["activity_id"] ?? "";
        const generatedTextInfo: TextGenerationInfo = {
          activityData: data,
          generatedText,
          activityType: type,
          activity_id: recentActivityId,
        };

        setGeneratedTextsHistory((previousHistory) => [...previousHistory, generatedTextInfo]);

        setSavedDocumentIdsOfGeneratedTextHistory((previousItems) => [...previousItems, ""]);

        if (!_.isEmpty(generatedTextInfo)) {
          setTextareaVal(generatedTextInfo.generatedText);
        }

        // setGeneratedComments(
        //   response.data.map((replyObject: any) => replyObject.reply)
        // );
        setIsLoading(false);
      } else {
        setIsLoading(false);

        if (response?.responseCode === 429) {
          setResponseError(true);
          setResponseErrorContent(response.error);
          return;
        } else if (response?.responseCode === 402) {
          setIsResponseCode402(true);
          return;
        }
        setErrorText(
          (response?.message || response?.error?.reason) ?? "Unexpected generation error. Please try again later."
        );
      }

      setWarning(response?.warning);
    } catch (e) {
      EvyAILogger.log(e);
      sentryClient.captureException(e, {
        captureContext: {
          extra: {
            functionName: "InputPopup-fetchComments",
          },
        },
      });
    }
  }, [commandText, selectedTone, selectedGoal, selectedLanguage, gptType, selectedPersona, currentPathHref]);

  const handleNavigateToSubPag = () => {
    const httpsLink = "https://app.evyai.com/subscription-pricing/?isNavigateToSubscription-pricing=true";
    window.open(httpsLink, "_blank");
  };

  useEffect(() => {
    (document.querySelector(`.${CLASS_NAMES.CREATE_POST_MODAL_CLOSE_BUTTON}`) as HTMLElement)?.blur();
  }, []);

  useEffect(() => {
    setCurrentHistoryIndex(Math.max(0, generatedTextsHistory.length - 1));
  }, [generatedTextsHistory]);

  useEffect(() => {
    if (currentHistoryIndex < generatedTextsHistory.length) {
      setCommandText(generatedTextsHistory[currentHistoryIndex].activityData.command);
      setSelectedGoal(generatedTextsHistory[currentHistoryIndex].activityData.goal);
      setSelectedTone(generatedTextsHistory[currentHistoryIndex].activityData.tone);
      setSelectedPersona(generatedTextsHistory[currentHistoryIndex].activityData.persona);
    }
  }, [generatedTextsHistory, currentHistoryIndex]);

  const textInfo = useMemo(() => {
    if (currentHistoryIndex < generatedTextsHistory.length) {
      const words = textareaVal?.split(" ");
      return `${words.length} words/${textareaVal?.length} characters`;
    }
    return "";
  }, [generatedTextsHistory, currentHistoryIndex, textareaVal]);

  const goToPreviousHistoryPage = useCallback(() => {
    if (currentHistoryIndex > 0) {
      setCurrentHistoryIndex((previousValue) => previousValue - 1);
    }
  }, [currentHistoryIndex]);

  const goToNextHistoryPage = useCallback(() => {
    if (currentHistoryIndex < generatedTextsHistory.length - 1) {
      setCurrentHistoryIndex((previousValue) => previousValue + 1);
    }
  }, [currentHistoryIndex, generatedTextsHistory]);

  const copyTextToClipBoard = () => {
    // EvyAILogger.log("### text will be copied to clipboard");
    navigator.clipboard
      .writeText(textareaVal)
      .then(() => {
        setIsContentCopied(true);
        setTimeout(() => {
          setIsContentCopied(false);
        }, SECONDS_TO_KEEP_THE_CONTENT_COPIED_MESSAGE * 1000);
      })
      .catch((error) => {
        // EvyAILogger.log("### Error while copying content to clipboard");
        EvyAILogger.log({ error });
        sentryClient.captureException(error, {
          captureContext: {
            extra: {
              functionName: "copyTextToClipBoard",
            },
          },
        });
      });
  };

  const saveCommand = async () => {
    try {
      setIsUpdatingSaveCommandStatus(true);
      const { docId, error } = await sendMessageToExtensionPages(MESSAGE_ACTION.SAVE_COMMAND, {
        activityType: generatedTextsHistory[currentHistoryIndex].activityType,
        activityData: generatedTextsHistory[currentHistoryIndex].activityData,
        generatedText: generatedTextsHistory[currentHistoryIndex].generatedText,
        id: generatedTextsHistory[currentHistoryIndex].activity_id,
      });
      if (error === null && docId?.length > 0) {
        const _savedDocIds = [...savedDocumentIdsOfGeneratedTextHistory];
        _savedDocIds[currentHistoryIndex] = docId;
        setSavedDocumentIdsOfGeneratedTextHistory(_savedDocIds);
        setIsFavorite(true);
      }
      setIsFavorite(true);
    } catch (error) {
      // EvyAILogger.log("### Error while saving command");
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "saveCommand",
          },
        },
      });
    } finally {
      setIsUpdatingSaveCommandStatus(false);
    }
  };
  const unsaveCommand = async () => {
    try {
      setIsUpdatingSaveCommandStatus(true);
      const { docId, error } = await sendMessageToExtensionPages(MESSAGE_ACTION.REMOVE_SAVED_COMMAND, {
        documentId: savedDocumentIdsOfGeneratedTextHistory[currentHistoryIndex],
      });
      if (error === null && docId?.length > 0) {
        const _savedDocIds = [...savedDocumentIdsOfGeneratedTextHistory];
        _savedDocIds[currentHistoryIndex] = "";
        setSavedDocumentIdsOfGeneratedTextHistory(_savedDocIds);
      }
    } catch (error) {
      // EvyAILogger.log("### Error while unsaving command");
      EvyAILogger.log({ error });
      sentryClient.captureException(error, {
        captureContext: {
          extra: {
            functionName: "unsaveCommand",
          },
        },
      });
    } finally {
      setIsUpdatingSaveCommandStatus(false);
    }
  };

  const fetchAppVersion = async () => {
    const appVersionData = await sendMessageToExtensionPages(MESSAGE_ACTION.GET_SINGLE_COLLECTION_DATA, {
      id: "extension",
      collection: COLLECTIONS.GLOBALS,
    });

    if (appVersionData?.live_version) {
      setAppVersion(appVersionData.live_version);
    }
  };

  const Goals = useMemo(() => {
    switch (type) {
      case API_REQUEST_TYPE.CREATE_POST:
        return POSTING_GOALS;
      case API_REQUEST_TYPE.INVITATION_NOTE:
        return INVITATION_CONNECTION_REQUEST_GOALS;
      case API_REQUEST_TYPE.MESSAGE_REPLY:
        return DIRECT_MESSAGE_GOALS;
      case API_REQUEST_TYPE.RECOMMENDATION_TEXT:
        return RECOMMENDATION_GOALS;
      case API_REQUEST_TYPE.COMMENT_REPLY:
        return COMMENT_GOALS;
      case API_REQUEST_TYPE.PROFILE_HEADLINE:
        return PROFILE_EDITING_HEADLINE_GOALS;
      case API_REQUEST_TYPE.PERSPECTIVE_COMMENT:
        return CONTRIBUTED_ARTICLE_GOALS;
      case API_REQUEST_TYPE.PROFILE_ABOUT:
        return PROFILE_EDITING_HEADLINE_GOALS;
      default:
        return GOALS;
    }
  }, [type]);

  useEffect(() => {
    fetchAppVersion();
  }, []);

  const saveOrUnsaveCommand = () => {
    if (savedDocumentIdsOfGeneratedTextHistory[currentHistoryIndex].length > 0) {
      unsaveCommand();
    } else {
      saveCommand();
    }
  };

  useEffect(() => {
    if (generatedTextsHistory[currentHistoryIndex]?.generatedText) {
      setTextareaVal(generatedTextsHistory[currentHistoryIndex]?.generatedText);
    }
  }, [generatedTextsHistory[currentHistoryIndex]?.generatedText]);
  useEffect(() => {
    if (isFavorite) {
      setTimeout(() => {
        setIsFavorite(false);
      }, 4000);
    }
  }, [isFavorite]);

  useEffect(() => {
    if (gptType === "gpt_4" && currentSubscriptionStatus === SubscriptionStatus.FREE) {
      setShowPreDialog(true);
    }
  }, [gptType]);

  const sortedPersonas = useMemo(() => {
    return personas
      ?.map((item) => ({
        label: item.personaName,
        value: item.id,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [personas, loadingMorePersonas]);

  useEffect(() => {
    if (loadingMorePersonas) {
      const loaderItem = {
        label: PERSONAS_DROPDOWN_CONSTANTS.LOADING_MORE.label,
        value: PERSONAS_DROPDOWN_CONSTANTS.LOADING_MORE.value,
      };
      setPersonaSelectData([...sortedPersonas, loaderItem]);
    } else {
      setPersonaSelectData(sortedPersonas);
    }
  }, [sortedPersonas, loadingMorePersonas]);

  const sortedSearchedPersonas = useMemo(() => {
    if (paginatedSearchedPersonas.length > 0) {
      return paginatedSearchedPersonas
        ?.map((item) => ({
          label: item.personaName,
          value: item.id,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    } else {
      return [];
    }
  }, [paginatedSearchedPersonas, searchingMorePersonas, personaSearchStart]);

  useEffect(() => {
    if (searchingMorePersonas) {
      const loaderItem = {
        label: PERSONAS_DROPDOWN_CONSTANTS.LOADING_MORE.label,
        value: PERSONAS_DROPDOWN_CONSTANTS.LOADING_MORE.value,
      };
      setSearchedPersonaSelectData([...sortedSearchedPersonas, loaderItem]);
    } else {
      setSearchedPersonaSelectData(sortedSearchedPersonas);
    }
  }, [sortedSearchedPersonas, searchingMorePersonas]);

  const handleClickOutside = (event: MouseEvent) => {
    const targetNode = event.target as Node | HTMLElement;

    if (templatesDropdownRef.current && !templatesDropdownRef.current.contains(targetNode)) {
      const targetNodeId = (targetNode as HTMLElement).id;

      if (targetNodeId === "template-dropdown") {
        setShowTemplateSelectDropDown(false);
      } else {
        setIsDropdownClicked(false);
        setShowTemplateSelectDropDown(false);
      }
    }
  };

  const handleScrollTemplates = (event: any) => {
    if (templateSearchQuery.length > 0) {
      if (isSearchingTemplates || searchingMoreTemplates) {
        return;
      }

      if (searchTemplatePage === 1) {
        return;
      } else if (
        searchTemplatePage > 1 &&
        (hasMoreSearchTemplates.hasMoreNameDocs || hasMoreSearchTemplates.hasMoreContentDocs) &&
        (!searchingMoreTemplates || !isSearchingTemplates)
      ) {
        const targetElement = event.target as HTMLElement;

        const scrollTop = targetElement.scrollTop;
        const scrollHeight = targetElement.scrollHeight;
        const clientHeight = targetElement.clientHeight;

        const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 10;

        if (scrolledToBottom) {
          if (
            !searchingMoreTemplates &&
            (hasMoreSearchTemplates.hasMoreNameDocs || hasMoreSearchTemplates.hasMoreContentDocs)
          ) {
            handleSearchTemplates();
          }
        }
      }
      return;
    }

    if (isLoadingTemplates || loadingMoreTemplates) {
      return;
    }

    if (pageForTemplates === 1) {
      return;
    } else if (pageForTemplates > 1 && hasMoreTemplates && (!loadingMoreTemplates || !isLoadingTemplates)) {
      const targetElement = event.target as HTMLElement;

      const scrollTop = targetElement.scrollTop;
      const scrollHeight = targetElement.scrollHeight;
      const clientHeight = targetElement.clientHeight;

      const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 10;

      if (scrolledToBottom) {
        if (!loadingMoreTemplates && hasMoreTemplates) {
          handleGetTemplates();
        }
      }
    }
  };

  const handleScrollPersonas = async (event: any) => {
    if (willShowSearchedPersonas && personaSearchQuery !== "") {
      if (isSearchingPersonas || searchingMorePersonas) {
        return;
      }

      if (searchPersonaPage === 1) {
        return;
      } else if (searchPersonaPage > 1 && hasMoreSearchPersonas && (!searchingMorePersonas || !isSearchingPersonas)) {
        const targetElement = event.target as HTMLElement;

        const scrollTop = targetElement.scrollTop;
        const scrollHeight = targetElement.scrollHeight;
        const clientHeight = targetElement.clientHeight;

        const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 10;

        if (scrolledToBottom) {
          if (!searchingMorePersonas && hasMoreSearchPersonas) {
            const result = await handleSearchPersonas(true);
            if (result !== undefined && result !== null) {
              const response = result.data;
              const lastDocRecieved = result.lastDoc;
              const hasMoreDocs = result.hasMoreDocs;
              setHasMoreSearchPersonas(hasMoreDocs);
              setLastSearchedPersonaDoc(lastDocRecieved);
              setPaginatedSearchedPersonas([...paginatedSearchedPersonas, ...response]);
            }
          }
        }
      }
      return;
    }

    if (isLoadingPersonas || loadingMorePersonas) {
      return;
    }

    if (pageForPersonas === 1) {
      return;
    } else if (pageForPersonas > 1 && hasMorePersonas && (!loadingMorePersonas || !isLoadingPersonas)) {
      const targetElement = event.target as HTMLElement;

      const scrollTop = targetElement.scrollTop;
      const scrollHeight = targetElement.scrollHeight;
      const clientHeight = targetElement.clientHeight;

      const scrolledToBottom = scrollTop + clientHeight >= scrollHeight - 10;

      if (scrolledToBottom) {
        if (!loadingMorePersonas && hasMorePersonas) {
          const result = await handleGetPersonas(true);
          const response = result.data;
          const lastDocRecieved = result.lastDoc;
          const hasMoreDocs = result.hasMoreDocs;
          setHasMorePersonas(hasMoreDocs);
          setLastPersonaDoc(lastDocRecieved);
          setPersonas([...personas, ...response]);
        }
      }
    }
  };

  useEffect(() => {
    let doc = document.querySelector("#linkedin-assistance-extension") as any;
    if (doc) {
      const mainDoc = doc.shadowRoot;
      if (mainDoc) {
        doc = mainDoc.querySelector("#main-dialogue");
      }
    }

    if (doc) {
      const scrollAbleDiv = doc.querySelector("div#scrollableDiv") as HTMLDivElement;

      if (showTemplateSelectDropDown) {
        if (scrollAbleDiv) {
          scrollAbleDiv.addEventListener("scroll", handleScrollTemplates);
        }
        doc.addEventListener("mousedown", handleClickOutside);
      } else {
        doc.removeEventListener("mousedown", handleClickOutside);
        setTemplateSearchQuery("");
        setTemplateSearchStartValue("");
        setPaginatedSearchedTemplates([]);
        setIsSearchingTemplates(false);
        setSearchingMoreTemplates(false);
        setSearchedTemplates(templates);
        if (scrollAbleDiv) {
          scrollAbleDiv.removeEventListener("scroll", handleScrollTemplates);
        }
      }
      return () => {
        doc.removeEventListener("mousedown", handleClickOutside);
        if (scrollAbleDiv) {
          scrollAbleDiv.removeEventListener("scroll", handleScrollTemplates);
        }
      };
    }
  }, [
    templates,
    showTemplateSelectDropDown,
    loadingMoreTemplates,
    isLoadingTemplates,
    hasMoreTemplates,
    pageForTemplates,
    templateSearchQuery,
    searchingMoreTemplates,
    isSearchingTemplates,
    hasMoreSearchTemplates,
    searchTemplatePage,
  ]);

  useEffect(() => {
    let doc = document.querySelector("#linkedin-assistance-extension") as any;
    if (doc) {
      const mainDoc = doc.shadowRoot;
      if (mainDoc) {
        doc = mainDoc.querySelector("#main-dialogue");
      }
    }

    if (doc) {
      let personaDropdownElement = doc.querySelector(".mantine-ScrollArea-viewport") as HTMLDivElement;
      if (isPersonaDropDownOpen) {
        personaDropdownElement = doc.querySelector(".mantine-ScrollArea-viewport") as HTMLDivElement;
        if (personaDropdownElement) {
          personaDropdownElement.addEventListener("scroll", handleScrollPersonas);
        }
      } else {
        if (personaDropdownElement) {
          personaDropdownElement.removeEventListener("scroll", handleScrollPersonas);
        }
      }
      return () => {
        if (personaDropdownElement) {
          personaDropdownElement.removeEventListener("scroll", handleScrollPersonas);
        }
      };
    }
  }, [
    isPersonaDropDownOpen,
    loadingMorePersonas,
    isLoadingPersonas,
    hasMorePersonas,
    pageForPersonas,
    searchingMorePersonas,
    isSearchingPersonas,
    hasMoreSearchPersonas,
    searchPersonaPage,
    personaSearchQuery,
    paginatedSearchedPersonas,
    willShowSearchedPersonas,
  ]);

  useEffect(() => {
    if (isDropdownClicked) {
      setShowTemplateSelectDropDown(true);
    } else if (!isDropdownClicked && showTemplateSelectDropDown) {
      setShowTemplateSelectDropDown(false);
    }
  }, [isDropdownClicked]);

  const handleStart: DraggableEventHandler = (e, data) => {};

  return (
    <div
      id="main-dialogue"
      style={{
        minHeight: 300,
        maxHeight: "100vh",
        position: "relative",
      }}
    >
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        onStart={handleStart}
        // onDrag={handleDrag}
      >
        <div
          style={{
            maxHeight: "100vh",
            overflow: "auto",
          }}
        >
          <div
            style={{
              height: "20px",
            }}
          >
            <Box className={classes.closeIconButton} onClick={onCloseClicked}>
              <Image
                src={getImagePath("close_icon.png")}
                alt={"Close Dialog"}
                width={32}
                height={32}
                style={{ pointerEvents: "none" }}
              />
            </Box>
          </div>
          <div
            style={{
              width: window.self !== window.top ? "100%" : "600px",
              backgroundColor: "white",
              borderRadius: 6,
              // overflow: "hidden",
              display: "flex",
              position: "relative",
              flexDirection: "column",
              overflow: "auto",
            }}
            onClick={(event) => {
              event.stopPropagation();
              (document.querySelector(`.${CLASS_NAMES.CREATE_POST_MODAL_CLOSE_BUTTON}`) as HTMLElement)?.blur();
            }}
          >
            <Box className={`${classes.header}`}>
              <Flex className={`handle`}>
                <img
                  className={`${classes.headerLogo}`}
                  src={getImagePath("evi_ai_logo.png")}
                  alt={"Evy AI Logo"}
                  width={90}
                  height={45}
                  style={{ pointerEvents: "none" }}
                />
              </Flex>
            </Box>
            {isInitializing || isLoadingSubscriptionStatus ? (
              <Center>
                <Loader size={35} mt={30} mb={30} />
              </Center>
            ) : (
              <Box
                style={{
                  paddingLeft: 30,
                  paddingRight: 30,
                  paddingTop: 16,
                  paddingBottom: 16,
                }}
              >
                {appVersion && appVersion !== APP_VERSION && showExtVersion && (
                  <Flex
                    className={classes.selectContainer}
                    mt={10}
                    mb={20}
                    justify="space-between"
                    align="center"
                    style={{
                      background: "#FFF5F5",
                      width: "100%",
                      padding: "6px 8px",
                      borderRadius: "8px",
                    }}
                  >
                    <Box display="flex" sx={{ alignItems: "center", columnGap: "8px" }}>
                      <Image src={getImagePath("Warning.svg")} alt={"warning Dialog"} width={12} height={12} />
                      <Text className={classes.updateExtensionText}>You’re using an old version of the extension.</Text>
                    </Box>
                    <a href={extension_update_page} className={classes.updateLinkText} target="_blank">
                      Update Now
                    </a>
                  </Flex>
                )}
                <Flex mb={20} className={`${classes.selectContainer} ${classes.typeContainer}`}>
                  <Box className={classes.typeWrapper}>
                    <Image
                      src={
                        type === API_REQUEST_TYPE.CREATE_POST || type === API_REQUEST_TYPE.RE_POST
                          ? getImagePath("post.png")
                          : type === API_REQUEST_TYPE.MESSAGE_REPLY
                          ? getImagePath("direct_message.png")
                          : type === API_REQUEST_TYPE.INVITATION_NOTE
                          ? getImagePath("connection_note.png")
                          : type === API_REQUEST_TYPE.PROFILE_HEADLINE || type === API_REQUEST_TYPE.PROFILE_ABOUT
                          ? getImagePath("profile.png")
                          : type === API_REQUEST_TYPE.POST_COMMENT ||
                            type === API_REQUEST_TYPE.ARTICLE_COMMENT ||
                            type === API_REQUEST_TYPE.COMMENT_REPLY ||
                            type === API_REQUEST_TYPE.ARTICLE_COMMENT_REPLY ||
                            type === API_REQUEST_TYPE.PERSPECTIVE_COMMENT
                          ? getImagePath("comment.png")
                          : type === API_REQUEST_TYPE.RECOMMENDATION_TEXT
                          ? getImagePath("recommentation.png")
                          : ""
                      }
                      alt={"Close Dialog"}
                      width={24}
                      height={24}
                    />
                    <Text className={classes.typeTitleText}>
                      {type === API_REQUEST_TYPE.CREATE_POST || type === API_REQUEST_TYPE.RE_POST
                        ? "Post"
                        : type === API_REQUEST_TYPE.MESSAGE_REPLY
                        ? "Direct Message"
                        : type === API_REQUEST_TYPE.INVITATION_NOTE
                        ? "Connection Note"
                        : type === API_REQUEST_TYPE.PROFILE_ABOUT
                        ? "Profile Optimization"
                        : type === API_REQUEST_TYPE.POST_COMMENT
                        ? "Comment"
                        : type === API_REQUEST_TYPE.ARTICLE_COMMENT
                        ? "Article Comment"
                        : type === API_REQUEST_TYPE.COMMENT_REPLY
                        ? "Comment Reply"
                        : type === API_REQUEST_TYPE.ARTICLE_COMMENT_REPLY
                        ? "Article Comment Reply"
                        : type === API_REQUEST_TYPE.RECOMMENDATION_TEXT
                        ? "Recommendation"
                        : type === API_REQUEST_TYPE.PERSPECTIVE_COMMENT
                        ? "Perspective"
                        : ""}
                    </Text>
                  </Box>
                  {currentSubscriptionStatus === SubscriptionStatus.PRO && (
                    <Box className={classes.premiumButton}>
                      <Image src={getImagePath("premium1.png")} alt={"premium Dialog"} width={13} height={13} />
                      <Text className={classes.premiumText}>Premium</Text>
                    </Box>
                  )}
                  {currentSubscriptionStatus === SubscriptionStatus.FREE && (
                    <Box onClick={handleNavigateToSubPag} className={classes.upgradeButton}>
                      <Image src={getImagePath("thunder.svg")} alt={"premium Dialog"} width={13} height={13} />
                      <Text className={classes.upgradeText}>Upgrade Now</Text>
                    </Box>
                  )}
                </Flex>
                {generatedTextsHistory.length > 0 && (
                  <Stack>
                    <Text className={classes.selectTitleText} style={{ width: "auto" }}>
                      Command to Evy
                    </Text>
                    <Textarea
                      mb={16}
                      className={classes.commandTextArea}
                      placeholder="Leave blank and hit ‘generate’ or enter a prompt for evyAI"
                      value={commandText}
                      minRows={1}
                      style={{ marginTop: 5 }}
                      // styles={{ input: { maxHeight: 150 } }}
                      styles={{
                        input: { border: 0, resize: "vertical" },
                      }}
                      onChange={(event) => setCommandText(event.target.value)}
                    />
                  </Stack>
                )}
                <Flex className={classes.selectContainer}>
                  <Text className={classes.selectTitleText}>Goal</Text>
                  <Select
                    className={classes.select}
                    // label='Select Relevant Portfolio'
                    data={Goals.sort()}
                    placeholder="Select Goal"
                    nothingFound="No Goal Found"
                    searchable
                    rightSection={<IconChevronDown size="1rem" />}
                    rightSectionWidth={30}
                    styles={{ rightSection: { pointerEvents: "none" } }}
                    value={selectedGoal}
                    onChange={(value) => {
                      setSelectedGoal(value);
                      BrowserStorage.asyncSetItem(`GOAL_USED_${type}`, value!);
                    }}
                  />
                </Flex>
                <Flex className={classes.selectContainer} mt={12}>
                  <Text className={classes.selectTitleText}>Tone</Text>
                  <Select
                    className={classes.select}
                    // label='Select Relevant Portfolio'
                    data={TONES.sort()}
                    placeholder="Select Tone"
                    nothingFound="No Tone Found"
                    searchable
                    rightSection={<IconChevronDown size="1rem" />}
                    rightSectionWidth={30}
                    styles={{ rightSection: { pointerEvents: "none" } }}
                    value={selectedTone}
                    onChange={(value) => {
                      setSelectedTone(value);
                      BrowserStorage.asyncSetItem(STORAGE_KEYS.LAST_TONE_USED, value!);
                    }}
                  />
                </Flex>
                <Flex className={classes.selectContainer} mt={12}>
                  <Text className={classes.selectTitleText}>Persona</Text>
                  <Select
                    className={classes.select}
                    data={
                      willShowSearchedPersonas
                        ? personaSearchStart.trim() !== "" || paginatedSearchedPersonas.length > 0
                          ? [
                              ...(!isSearchingPersonas && sortedSearchedPersonas.length > 0
                                ? searchedPersonaSelectData
                                : [
                                    ...(isSearchingPersonas
                                      ? [
                                          {
                                            label: PERSONAS_DROPDOWN_CONSTANTS.SELECT_PERSONA.label,
                                            value: PERSONAS_DROPDOWN_CONSTANTS.SELECT_PERSONA.value,
                                          },
                                        ]
                                      : []),
                                  ]),
                            ]
                          : [
                              ...(isSearchingPersonas
                                ? [
                                    {
                                      label: PERSONAS_DROPDOWN_CONSTANTS.SELECT_PERSONA.label,
                                      value: PERSONAS_DROPDOWN_CONSTANTS.SELECT_PERSONA.value,
                                    },
                                  ]
                                : []),
                            ]
                        : personasFetched && sortedPersonas.length > 0
                        ? [
                            {
                              label: isLoadingPersonas
                                ? PERSONAS_DROPDOWN_CONSTANTS.LOADING.label
                                : PERSONAS_DROPDOWN_CONSTANTS.SELECT_PERSONA.label,
                              value: PERSONAS_DROPDOWN_CONSTANTS.SELECT_PERSONA.value,
                            },
                            ...personaSelectData,
                          ]
                        : personaSelectData || []
                    }
                    itemComponent={
                      isLoadingPersonas || loadingMorePersonas || isSearchingPersonas || searchingMorePersonas
                        ? (props) => (
                            <CustomPersonaDropdownItem
                              {...props}
                              props={props}
                              isLoadingPersonas={isLoadingPersonas}
                              loadingMorePersonas={loadingMorePersonas}
                              isSearchingPersonas={isSearchingPersonas}
                              searchingMorePersonas={searchingMorePersonas}
                            />
                          )
                        : undefined
                    }
                    placeholder={PERSONAS_DROPDOWN_CONSTANTS.PLACE_HOLDER}
                    clearable
                    classNames={{
                      nothingFound: clsx("mantine-Select-nothingFound"),
                    }}
                    nothingFound={
                      <CustomPersonaDropdownItem
                        label={
                          (isLoadingPersonas && !personasFetched) || isSearchingPersonas
                            ? PERSONAS_DROPDOWN_CONSTANTS.LOADING.label
                            : PERSONAS_DROPDOWN_CONSTANTS.NOTHING_FOUND.label
                        }
                        value={
                          (isLoadingPersonas && !personasFetched) || isSearchingPersonas
                            ? PERSONAS_DROPDOWN_CONSTANTS.SELECT_PERSONA.value
                            : PERSONAS_DROPDOWN_CONSTANTS.NOTHING_FOUND.value
                        }
                        props={null}
                        isLoadingPersonas={isLoadingPersonas}
                        loadingMorePersonas={loadingMorePersonas}
                        isSearchingPersonas={isSearchingPersonas}
                        searchingMorePersonas={searchingMorePersonas}
                      />
                    }
                    searchable
                    rightSection={<IconChevronDown size="1rem" />}
                    rightSectionWidth={30}
                    styles={{ rightSection: { pointerEvents: "none" } }}
                    value={selectedPersona}
                    onChange={(value: string) => handlePersonaSelectOnChange(value)}
                    searchValue={personaSearchStart}
                    onSearchChange={(value: string) => handlePersonaSearchOnChange(value)}
                    filter={(value: string, item: SelectItem) => true}
                    onDropdownOpen={handlePersonaDropdown}
                    onDropdownClose={() => setIsPersonaDropDownOpen(false)}
                  />
                </Flex>
                {!sortedPersonas.length && !isLoadingPersonas && isPersonaDropDownClicked && (
                  <Flex mt={10} justify="flex-end">
                    <Button
                      onClick={() => window.open("https://app.evyai.com/persona-add", "_blank")}
                      className={classes.insertButton}
                    >
                      Add Persona
                    </Button>
                  </Flex>
                )}
                <Box ref={templatesDropdownRef}>
                  <Box
                    className={classes.templateSelectWrapper}
                    onClick={() => {
                      if (!showTemplateSelectDropDown && !templatesFetched) {
                        handleGetTemplates();
                      }
                      setTemplateSearchField("");
                      setShowTemplateSelectDropDown(!showTemplateSelectDropDown);
                    }}
                  >
                    <Image
                      id="template-dropdown"
                      src={getImagePath("Templates.svg")}
                      alt={"Templates Icon"}
                      width={15}
                      height={15}
                    />
                    <Image
                      id="template-dropdown"
                      src={getImagePath("closedListBlack.svg")}
                      alt={"DropDown Icon"}
                      width={15}
                      height={15}
                    />
                  </Box>
                  <Box
                    className={classes.templateDropDownBoxContainer}
                    style={{ visibility: !showTemplateSelectDropDown ? "hidden" : "visible" }}
                  >
                    <Box className={classes.templateDropDownBoxSearchContainer}>
                      <Box className={classes.templateDropDownBoxSearchContainer1}>
                        <Box className={classes.templateDropDownBoxSearchContainer2}>
                          <img src={getImagePath("Search.svg")} />
                          <input
                            type="search"
                            value={templateSearchStartValue}
                            className={classes.noBorderInput}
                            style={{ borderWidth: "0px", width: "100%", padding: "6px" }}
                            placeholder="Search Templates"
                            onChange={(e) => {
                              const value = e.target.value;
                              setTemplateSearchStartValue(value);
                              if (value.trim() === "") {
                                setTemplateSearchQuery("");
                              } else {
                                debouncedTemplateOnChange(e);
                              }
                            }}
                          />
                        </Box>
                        <Box style={{ cursor: "pointer" }} onClick={handleRefreshTemplates}>
                          <img src={getImagePath("reload.svg")} style={{ width: 32 }} />
                        </Box>
                      </Box>
                    </Box>
                    {(isLoadingTemplates || isSearchingTemplates) && (
                      <Loader size={32} style={{ width: "100%", padding: 10 }} />
                    )}
                    <div id="scrollableDiv" style={{ overflowY: "auto", maxHeight: "230px" }}>
                      {!isLoadingTemplates &&
                        searchedTemplates.length > 0 &&
                        searchedTemplates.map((template: ITemplate) => {
                          return (
                            <Box
                              id="template-dropdown-items"
                              key={template.id}
                              className={classes.templateDropDownBoxTemplateItemContainer}
                              onClick={() => insertTemplateContent(template)}
                            >
                              <Box className={classes.templateDropDownBoxTemplateItemHeading}>
                                <Text
                                  style={{
                                    fontWeight: 700,
                                    fontSize: "14px",
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitLineClamp: "1",
                                    WebkitBoxOrient: "vertical",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {template.templateName}
                                </Text>
                                <img
                                  onClick={() =>
                                    window.open(`https://app.evyai.com/template-add/${template.id}`, "_blank")
                                  }
                                  style={{ cursor: "pointer" }}
                                  src={getImagePath("LinkIcon.svg")}
                                />
                              </Box>
                              <Text
                                style={{
                                  fontWeight: 400,
                                  fontSize: "12px",
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  WebkitLineClamp: "2",
                                  WebkitBoxOrient: "vertical",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {template.templateContent}
                              </Text>
                            </Box>
                          );
                        })}
                      {(loadingMoreTemplates || searchingMoreTemplates) && (
                        <Loader size={32} style={{ width: "100%", padding: 10 }} />
                      )}
                    </div>
                    {!isLoadingTemplates && !isSearchingTemplates && searchedTemplates.length < 1 && (
                      <Box className={classes.templateDropDownBoxTemplateItemContainer}>
                        <Box className={classes.templateDropDownBoxTemplateItemHeading}>
                          <Text
                            style={{
                              fontWeight: 700,
                              fontSize: "14px",
                              width: "100%",
                              textAlign: "center",
                            }}
                          >
                            No Templates {hasSearchedTemplates ? "found!" : "added yet!"}
                          </Text>
                        </Box>
                      </Box>
                    )}
                    <Box className={classes.templateDropDownBoxTemplateFooter}>
                      <button
                        onClick={() => window.open("https://app.evyai.com/template-add", "_blank")}
                        className={classes.templateDropDownBoxTemplateFooterButton}
                      >
                        <img src={getImagePath("Plus.svg")} />
                      </button>
                    </Box>
                  </Box>
                </Box>
                {/* ////// in process */}
                {generatedTextsHistory.length === 0 ? (
                  <>
                    <Box mt={"36px"} className={classes.commandWrapper} style={{}}>
                      {/* <Box style={{}}> */}
                      <Textarea
                        // className={classes.commandTextArea}
                        placeholder="Leave blank and hit ‘generate’ or enter a prompt for evyAI"
                        value={commandText}
                        // styles={{
                        //   input: { height: 110, border: 0 },
                        //   root: { height: 150, maxHeight: 150 },
                        // }}
                        styles={{
                          input: {
                            height: 150,
                            border: 0,
                            resize: "vertical",
                            maxHeight: 300,
                            paddingRight: "4rem",
                            "&[disabled]": {
                              color: "black",
                              opacity: 1,
                            },
                          },
                        }}
                        onChange={(event) => setCommandText(event.target.value)}
                        autoFocus
                        disabled={isTtsRecording}
                      />
                      <div className={classes.ttsWrapper}>
                        <TtsRecorder
                          onStart={() => setIsTtsRecording(true)}
                          onStop={() => setIsTtsRecording(false)}
                          prependText={commandText}
                          onTranscriptChange={setCommandText}
                        />
                      </div>
                      {/* </Box> */}
                      {/* <Button
                    className={classes.generateButton}
                    onClick={fetchComments}
                    loading={isLoading}
                  >
                    Generate
                  </Button> */}
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        columnGap: "10px",
                      }}
                      mx={0}
                      mb={10}
                    >
                      <LanguageSelector selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
                      <Flex align="center" columnGap="10px">
                        <Flex className={classes.segmentContainer}>
                          {gptLengths.map((button) => (
                            <Button
                              className={`${classes.segmentButton} ${button.value === gptType ? "" : "no-bg"}`}
                              key={button.value}
                              onClick={() => {
                                setGptType(button.value);
                                BrowserStorage.asyncSetItem(STORAGE_KEYS.GPT_TYPE, button.value);
                              }}
                            >
                              {button.label}
                            </Button>
                          ))}
                        </Flex>
                        {/* <SegmentedControl
                          style={{ marginTop: "12px", overflow: "visible" }}
                          value={gptType}
                          data={gptLengths}
                          onChange={(value) => {
                            setGptType(value)
                            BrowserStorage.asyncSetItem(STORAGE_KEYS.GPT_TYPE, value!);
                          }}
                        /> */}
                        <Button className={classes.generateButton} onClick={fetchComments} loading={isLoading}>
                          Generate
                        </Button>
                        {textareaVal ||
                          (commandText && (
                            <Button
                              mt="12px"
                              className={classes.insertButton}
                              onClick={() => {
                                if (onCommentSelected) {
                                  if (textareaVal !== "") {
                                    onCommentSelected(textareaVal);
                                  } else if (commandText !== "") {
                                    onCommentSelected(commandText);
                                  }
                                }
                              }}
                            >
                              Insert
                            </Button>
                          ))}
                      </Flex>
                    </Box>
                    {currentSubscriptionStatus === SubscriptionStatus.FREE && (
                      <Flex
                        className={classes.selectContainer}
                        mt={10}
                        style={{
                          background: "#FFF5F5",
                          width: "fit-content",
                          padding: "0px 6px",
                          borderRadius: "8px",
                        }}
                      >
                        <Image src={getImagePath("Warning.svg")} alt={"warning Dialog"} width={12} height={12} />
                        <Text className={classes.upgradeTitlekText}>
                          Your monthly usage is about to finish
                          <a className={classes.upgradeLinkText} onClick={() => buyNowButtonClick()}>
                            <span>Upgrade to Premium</span>
                          </a>
                        </Text>
                      </Flex>
                    )}
                  </>
                ) : (
                  <Stack style={{ width: "100%" }}>
                    <Box mt={0} className={`${classes.commandWrapper}`}>
                      {/* <div style={{ display: "flex", justifyContent: "end", position:"absolute", top:'84%', right:"6%" }}> */}
                      <Textarea
                        // className={classes.commandTextArea}
                        // placeholder='Enter Command Text'
                        value={textareaVal}
                        // value={textareaVal}
                        // check it's onChange
                        onChange={(e) => setTextareaVal(e.target.value)}
                        // readOnly
                        styles={{
                          input: {
                            height: 150,
                            border: 0,
                            resize: "vertical",
                            maxHeight: 220,
                            paddingRight: "4rem",
                            "&[disabled]": {
                              color: "black",
                              opacity: 1,
                            },
                          },
                          // root: { height: 150,},
                        }}
                        disabled={isTtsRecording}
                      />
                      <div className={classes.ttsWrapper}>
                        <TtsRecorder
                          onStart={() => setIsTtsRecording(true)}
                          onStop={() => setIsTtsRecording(false)}
                          prependText={textareaVal}
                          onTranscriptChange={setTextareaVal}
                        />
                      </div>
                      <Flex className={classes.bottomButtonContainer}>
                        <Text className={classes.textInfo} ml={10}>
                          {textInfo}
                        </Text>
                        <Image
                          src={getImagePath("copy_text_icon.png")}
                          alt={"Copy Text"}
                          width={12}
                          height={14}
                          style={{ cursor: "pointer" }}
                          onClick={copyTextToClipBoard}
                          mr={10}
                        />
                        {isUpdatingSaveCommandStatus ? (
                          <Loader size={14} mr={10} />
                        ) : (
                          <Image
                            src={
                              savedDocumentIdsOfGeneratedTextHistory[currentHistoryIndex].length > 0
                                ? getImagePath("star_marked.svg")
                                : getImagePath("star_unmarked.png")
                            }
                            alt={"Save or unsave command"}
                            width={14}
                            height={14}
                            style={{ cursor: "pointer" }}
                            onClick={saveOrUnsaveCommand}
                            mr={10}
                          />
                        )}
                      </Flex>
                      <Box className={classes.bottomButtonContentList} mt={10} mb={10}>
                        <Flex>
                          {generatedTextsHistory.length > 1 && (
                            <>
                              <Box
                                className={classes.arrowButtonContainer}
                                sx={
                                  currentHistoryIndex > 0
                                    ? {
                                        cursor: "pointer",
                                        backgroundColor: "white",
                                      }
                                    : { backgroundColor: "lightgrey" }
                                }
                                onClick={goToPreviousHistoryPage}
                              >
                                <Image
                                  src={getImagePath("left_arrow.png")}
                                  alt={"Previous Commands"}
                                  width={15}
                                  height={15}
                                />
                              </Box>
                              <Box
                                className={classes.arrowButtonContainer}
                                sx={
                                  currentHistoryIndex < generatedTextsHistory.length - 1
                                    ? {
                                        cursor: "pointer",
                                        backgroundColor: "white",
                                      }
                                    : { backgroundColor: "lightgrey" }
                                }
                                onClick={goToNextHistoryPage}
                              >
                                <Image
                                  src={getImagePath("right_arrow.png")}
                                  alt={"Next Commands"}
                                  width={15}
                                  height={15}
                                />
                              </Box>
                            </>
                          )}
                        </Flex>
                        <Flex
                          className={classes.bottomButtonContainer}
                          style={{ justifyContent: "space-between" }}
                          mr={10}
                        >
                          <LanguageSelector
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                          />
                          <Flex align="center">
                            <SegmentedControl
                              style={{ overflow: "visible" }}
                              value={gptType}
                              onChange={(value) => {
                                setGptType(value);
                                BrowserStorage.asyncSetItem(STORAGE_KEYS.GPT_TYPE, value!);
                              }}
                              data={gptLengths}
                            />
                            <Button
                              className={classes.regenerateButton}
                              onClick={fetchComments}
                              loading={isLoading}
                              loaderProps={{
                                color: GLOBAL_STYLES.BUTTON_BLUE_BACKGROUND,
                              }}
                              mr={8}
                              ml={8}
                            >
                              Regenerate
                            </Button>
                            <Button
                              className={classes.insertButton}
                              onClick={() => {
                                if (onCommentSelected) {
                                  onCommentSelected(textareaVal);
                                }
                              }}
                            >
                              Insert
                            </Button>
                          </Flex>
                        </Flex>
                      </Box>
                    </Box>
                    {currentSubscriptionStatus === SubscriptionStatus.FREE && (
                      <Flex
                        className={classes.selectContainer}
                        mt={10}
                        style={{
                          background: "#FFF5F5",
                          width: "fit-content",
                          padding: "0px 6px",
                          borderRadius: "8px",
                        }}
                      >
                        <Image src={getImagePath("warning.svg")} alt={"warning Dialog"} width={12} height={12} />
                        <Text className={classes.upgradeTitlekText}>
                          Your monthly usage is about to finish
                          <a className={classes.upgradeLinkText} onClick={() => buyNowButtonClick()}>
                            <span>Upgrade to Premium</span>
                          </a>
                        </Text>
                      </Flex>
                    )}
                    {isContentCopied && (
                      <Text fz="md" className={classes.statusText}>
                        Copied to Clipboard
                      </Text>
                    )}
                    {isFavorite && (
                      <Text fz="md" className={classes.statusText}>
                        Saved
                      </Text>
                    )}
                  </Stack>
                )}
              </Box>
            )}
            <div style={{ padding: "0px 35px 20px 35px" }}>
              {warning && <WarningMsg warning={warning} />}
              {errorText.length > 0 && (
                <span
                  style={{
                    color: "red",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  {errorText}
                </span>
              )}
            </div>
            {responseError && (
              <ResponseErrorDialogue
                setShow={setResponseError}
                title={responseErrorContent.title}
                content={responseErrorContent.reason}
                onConfirm={() => setResponseError(false)}
                buttonContent={responseErrorContent.button!}
              />
            )}
            {articleResponseError && (
              <ResponseErrorDialogue
                setShow={setArticleResponseError}
                title={"Article Fetch Error"}
                content={
                  "evyAI experienced an issue with this article. Please use templates and contact hello@evyai.com to let us know."
                }
                onConfirm={() => setArticleResponseError(false)}
                buttonContent={responseErrorContent.button!}
              />
            )}
            {isResponseCode402 && (
              <div className={classes.messageContainer}>
                <div className={classes.messageBox}>
                  <button
                    className={classes.crossButton}
                    onClick={() => {
                      onCloseClicked();
                      setIsResponseCode402(false);
                    }}
                  >
                    <RxCross2 style={{ fontSize: "20px", cursor: "pointer" }} />
                  </button>
                  <h4 className={classes.messageHeading}>Your payment method has been declined!</h4>
                  <p className={classes.messagePera}>
                    Please update it by clicking the button below. Alternatively, visit 'Manage Subscription' in your
                    account to ensure uninterrupted use of evyAI.
                  </p>
                  <div className={classes.dialogueBtns}>
                    {/* <Button
                      fullWidth
                      onClick={() => setIsResponseCode429(false)}
                      // loading={buttonLoadingStatus}
                    >
                      Cancel
                    </Button> */}
                    <Button
                      fullWidth
                      onClick={() => handleUpdatePaymentMethod()}
                      // loading={buttonLoadingStatus}
                    >
                      Upgrade Payment Method
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {showPreDialog && (
              <div className={classes.messageContainer}>
                <div style={{ height: "33%" }} className={classes.messageBox}>
                  <button
                    className={classes.crossButton}
                    onClick={() => {
                      setGptType("gpt_3.5");
                      setShowPreDialog(false);
                      BrowserStorage.asyncSetItem(STORAGE_KEYS.GPT_TYPE, STORAGE_KEYS.GPT_3);
                    }}
                  >
                    <RxCross2 style={{ fontSize: "20px", cursor: "pointer" }} />
                  </button>
                  <h4
                    style={{
                      fontSize: "16px",
                      marginTop: "3rem",
                      textAlign: "center",
                    }}
                    className={classes.messageHeading}
                  >
                    Upgrade to evyAI Premium to access GPT-4o
                  </h4>
                  <Button fullWidth style={{ marginTop: "2rem" }} onClick={handleNavigateToSubPag}>
                    Upgrade Now
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default InputPopup;
