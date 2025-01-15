import browser from "webextension-polyfill";

export const getImagePath = (fileName: string) => browser.runtime.getURL(`assets/Images/${fileName}`);

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getAssets = (fileName: string) => browser.runtime.getURL(`assets/${fileName}`);

export const getFontPath = (fileName: string) => browser.runtime.getURL(`assets/Fonts/${fileName}`);

export const trimAllWhiteSpaces = (str: string) => {
  return str.replace(/[\n\r\t\s]+/g, " ").trim();
};

export const isRegexExactMatch = (value: string, regexp: string) => {
  const res = value.match(regexp);
  return res && res[0] && res[0] === res.input;
};

export const isLinkedinProfileUrl = (value: string) => {
  const linkedInProfileURLRegExp = "((https?:\\/\\/(www.)?)?linkedin.com\\/(mwlite\\/|m\\/)?in\\/[a-zA-Z0-9_.-]+\\/?)";
  const httpLinkedInProfileURLRegExp =
    "((http?:\\/\\/(www.)?)?linkedin.com\\/(mwlite\\/|m\\/)?in\\/[a-zA-Z0-9_.-]+\\/?)";
  return (
    !!isRegexExactMatch(value, linkedInProfileURLRegExp) || !!isRegexExactMatch(value, httpLinkedInProfileURLRegExp)
  );
};

export const isValidPhoneNumber = (value: string) => {
  const validPhoneNumberRegExp = /^([+]\d{2})?\d{10}/;
  if (value.match(validPhoneNumberRegExp)) {
    return true;
  }
  return false;
};

export function dateFormater(timestamp: number): string {
  // june 31, 2023
  if (!timestamp) return "";

  const date = new Date(timestamp * 1000);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function formatLinkedInUrl(url: string) {
  const parsedUrl = new URL(url);
  return `${parsedUrl.origin}${parsedUrl.pathname}`;
}

export function extractLinkedInProfile(url: string) {
  // Define a regular expression to match LinkedIn profile URLs including Sales Navigator links
  const regex = /https:\/\/(www\.)?linkedin\.com\/(in|sales\/lead)\/[\w\-\u00C0-\u017F]+/;

  // Use the regular expression to extract the LinkedIn profile URL
  const match = decodeURI(url).match(regex);

  // Check if a match is found
  if (match && match.length > 0) {
    return match[0];
  } else {
    // If no match is found, try extracting from the path
    const pathRegex = /https:\/\/(www\.)?linkedin\.com\/(in|sales\/lead)\/[\w\-\u00C0-\u017F]+/;
    const pathMatch = decodeURI(url).match(pathRegex);

    if (pathMatch && pathMatch.length > 2) {
      return "https://www.linkedin.com/" + pathMatch[1] + "/" + pathMatch[2];
    } else {
      return "";
    }
  }
}

export function validateLinkedRecommendationInUrl(url: string) {
  // Regular expression to match the URL pattern
  var urlPattern =
    /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9\.\-_]+\/details\/recommendations\/edit\/write\/\?[^&\s]+/;

  // Test the URL against the pattern
  return urlPattern.test(url);
}

export const relationshipSelectElementExists = () => {
  return !!document.querySelector(
    "#profile-edit-form-page-content #text-entity-list-form-component-profileEditFormElement-WRITE-RECOMMENDATION-recommendation-1-relationship"
  );
};
