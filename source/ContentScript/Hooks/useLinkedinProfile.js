import { useEffect, useState } from "react";
import http from "Utils/http";
import { sendMessageToExtensionPages } from "Utils/extensionUtils";
import { getCookie, getPublicIdentifier } from "Utils/common";
import { CONFIG } from "Config";

const parseContactInfo = (contactObj) => {
  // console.log('contact:::', contactObj);
  let obj = {};
  let { address, emailAddress, phoneNumbers } = contactObj;

  // console.log(emailAddress);
  obj["email"] = emailAddress || "";
  obj["address"] = address || "";
  if (phoneNumbers) {
    phoneNumbers.forEach((item) => {
      let type = item.type.toLowerCase();
      if (type == "work") {
        obj["phone"] = item.number;
      } else if (type == "home") {
        obj["phone"] = item.number;
      } else if (type == "mobile") {
        obj["mobile"] = item.number;
      }
    });
  }
  return obj;
};
const getUserProfile = async ({ url, headers }) => {
  // console.log('getUserProfile:::', url, headers);
  try {
    const response = await http.request({ url, headers });
    if (response) {
      const { profile } = response;
      const obj = {
        firstName: profile.firstName,
        occupation: profile.miniProfile.occupation,
        lastName: profile.lastName,
        locationName: profile.locationName,
      };
      return obj;
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getUserContactInfo = async ({ url, headers }) => {
  const response = await http.request({ url, headers });
  // console.log('contact api response:::', response);
  if (response) {
    const data = parseContactInfo(response);
    return data;
  }
};
const linkedinApiUrl = "https://www.linkedin.com/voyager/api/identity/profiles/";
export const useLinkedinProfile = (linkedInProfilePage) => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const callLinkedinApi = async () => {
      const token = getCookie("JSESSIONID");
      // console.log('token:::', token);
      const publicIdentifier = getPublicIdentifier(url);
      // console.log('publicIdentifier:::', publicIdentifier);
      const profileApiUrl = `${linkedinApiUrl}${publicIdentifier}/profileView`;
      const contactApiUrl = `${linkedinApiUrl}${publicIdentifier}/profileContactInfo`;
      const profile = await getUserProfile({ url: profileApiUrl, headers: { "csrf-token": token } });
      const contact = await getUserContactInfo({ url: contactApiUrl, headers: { "csrf-token": token } });
      setProfile({ ...profile, ...contact });
      const userData = await sendMessageToExtensionPages(CONFIG.MESSAGE_TYPE.SEARCH_CANDIDATE, {
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: contact.email,
      });
      // console.log('userData:::', userData);
    };
    const url = window.location.href;
    // console.log('url changes:::', url);
    if (url.includes("https://www.linkedin.com/in/")) {
      callLinkedinApi();
    }
  }, [window.location.href]);

  return { loading, profile };
};
