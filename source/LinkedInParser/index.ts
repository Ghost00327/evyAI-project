import _ from "lodash";
import {
  LinkedInMessage,
  Profile,
  ProfileEducation,
  ProfileExperience,
  ProfileLicensesAndCertificatioins,
  isLinkedInSNProfilePageCheck,
} from "../Config";
import { trimAllWhiteSpaces } from "../Utils";
import { CLASS_NAMES, ELEMENT_ID, LOCAL_STORAGE_KEYS } from "./constants";
import { getItem, setItem } from "../Utils/storage";
import { EvyAILogger } from "../Utils/EvyAILogger";

// extract post text
const getPostText = (commentBoxEditor: HTMLElement) => {
  let parentElement = commentBoxEditor.parentElement;

  while (parentElement) {
    if (
      (parentElement.classList.contains(CLASS_NAMES.EMBER_VIEW) &&
        parentElement.classList.contains(CLASS_NAMES.OCCLUDABLE_UPDATE)) ||
      parentElement.classList.contains(CLASS_NAMES.RELATIVE) ||
      parentElement.classList.contains("entity-result") ||
      (parentElement.getAttribute("data-id") ?? "").length > 0 ||
      parentElement.classList.contains(CLASS_NAMES.UPDATE_OUTLET) ||
      parentElement.classList.contains(CLASS_NAMES.POST_POPUP_CONTAINER_CLASS)
    ) {
      const postTextOuterContainer = parentElement.querySelector(
        `.${CLASS_NAMES.POST_TEXT_OUTER_CONTAINER}`
      ) as HTMLElement;

      const postTextOuterContainerSearch = parentElement.querySelector(
        `.${CLASS_NAMES.ENTITY_RESULT_CONTENT_SUMMARY}`
      ) as HTMLElement;

      if (postTextOuterContainer) {
        const spanContainer = postTextOuterContainer.querySelector(
          `.${CLASS_NAMES.POST_TEXT_SPAN_CONTAINER}`
        ) as HTMLElement;

        return spanContainer?.innerText ?? "";
      } else if (postTextOuterContainerSearch) {
        return postTextOuterContainerSearch?.innerText ?? "";
      }
    }

    parentElement = parentElement.parentElement;
  }
  return "";
};
// extract post text
const getPostTextFromRepost = (commentBoxEditor: HTMLElement) => {
  let parentElement = commentBoxEditor.parentElement;

  while (parentElement) {
    if (
      parentElement.classList.contains(CLASS_NAMES.OCCLUDABLE_UPDATE) ||
      parentElement.classList.contains(CLASS_NAMES.RELATIVE) ||
      parentElement.classList.contains("share-creation-state__preview-container") ||
      (parentElement.getAttribute("data-id") ?? "").length > 0 ||
      parentElement.classList.contains(CLASS_NAMES.UPDATE_OUTLET)
    ) {
      const postTextOuterContainer = parentElement.querySelector(CLASS_NAMES.FEED_SHARED_UPDATE_V2) as HTMLElement;

      const postTextOuterContainerSearch = parentElement.querySelector(
        `.${CLASS_NAMES.ENTITY_RESULT_CONTENT_SUMMARY}`
      ) as HTMLElement;

      if (postTextOuterContainer) {
        const spanContainer = postTextOuterContainer.querySelector(
          `.${CLASS_NAMES.POST_TEXT_SPAN_CONTAINER}`
        ) as HTMLElement;

        return spanContainer?.innerText ?? "";
      } else if (postTextOuterContainerSearch) {
        return postTextOuterContainerSearch?.innerText ?? "";
      }
    }

    parentElement = parentElement.parentElement;
  }
  return "";
};

// find author name from post
const getPostAuthorName = (commentBoxEditor: HTMLElement) => {
  let parentElement = commentBoxEditor.parentElement;

  while (parentElement) {
    let authorNameOuterContainer: HTMLElement | null = null;
    if (
      (parentElement.classList.contains(CLASS_NAMES.EMBER_VIEW) &&
        parentElement.classList.contains(CLASS_NAMES.OCCLUDABLE_UPDATE)) ||
      parentElement.classList.contains(CLASS_NAMES.ENTITY_RESULT__CONTENT_CONTAINER) ||
      parentElement.classList.contains(CLASS_NAMES.UPDATE_RESULT__CONTENT_CONTAINER) ||
      parentElement.classList.contains(CLASS_NAMES.PROFILE_CREATOR__CONTENT_CONTAINER) ||
      (parentElement.getAttribute("data-id") ?? "").length > 0 ||
      parentElement.classList.contains(CLASS_NAMES.UPDATE_OUTLET)
    ) {
      authorNameOuterContainer = parentElement.querySelector(`.${CLASS_NAMES.AUTHOR_NAME_CONTAINER}`) as HTMLElement;

      if (!authorNameOuterContainer) {
        authorNameOuterContainer = parentElement.querySelector(
          `.${CLASS_NAMES.ENTITY_RESULT__CONTENT_TITLE}`
        ) as HTMLElement;
      }
      if (!authorNameOuterContainer) {
        authorNameOuterContainer = parentElement.querySelector(
          `.${CLASS_NAMES.UPDATE_RESULT__CONTENT_TITLE}`
        ) as HTMLElement;
      }
      if (!authorNameOuterContainer) {
        authorNameOuterContainer = parentElement.querySelector(
          `.${CLASS_NAMES.UPDATE_RESULT__CONTENT_TITLE}`
        ) as HTMLElement;
      }
    } else if (CLASS_NAMES.ART_DECO_CARD) {
      authorNameOuterContainer = parentElement.querySelector(`.${CLASS_NAMES.AUTHOR_NAME_CONTAINER}`) as HTMLElement;
    }
    if (authorNameOuterContainer) {
      return (authorNameOuterContainer.innerText ?? "").split("\n")[0] ?? "";
    }
    parentElement = parentElement.parentElement;
  }
  return "";
};

//Get News letter author
export function getNewsLetterAuthorName() {
  const authorNameElement = document.querySelector(CLASS_NAMES.DATA_TEST_PUBLISHING_AUTHOR_NAME);

  return authorNameElement?.textContent?.trim() || "";
}

const getPostAuthorNameRepost = (commentBoxEditor: HTMLElement) => {
  let parentElement = commentBoxEditor.parentElement;
  while (parentElement) {
    const authorNameContainer = parentElement.querySelector(
      CLASS_NAMES.UPDATE_COMPONENTS_ACTOR__NAME_SPAN
    ) as HTMLElement;

    if (authorNameContainer) {
      const authorName = authorNameContainer.textContent?.trim() || "";
      return authorName;
    }

    parentElement = parentElement.parentElement;
  }
  return "";
};

// find author name from post

const getPostCommentText = (commentBoxEditor: HTMLElement) => {
  let parentElement = commentBoxEditor.parentElement;
  while (parentElement) {
    if (
      parentElement.classList.contains(CLASS_NAMES.COMMENTS_COMMENT_ITEM) ||
      parentElement.classList.contains(CLASS_NAMES.COMMENTS_HIGHLIGHTED_COMMENT_ITEM) ||
      parentElement.classList.contains(CLASS_NAMES.COMMENTS_COMMENT_ITEM_HIGHLIGHTED)
    ) {
      const postCommentTextOuterContainer = parentElement.querySelector(
        `.${CLASS_NAMES.COMMENTS_COMMENT_ITEM_CONTENT_BODY}`
      ) as HTMLElement;
      if (postCommentTextOuterContainer) {
        const spanContainer = postCommentTextOuterContainer.querySelector(
          `.${CLASS_NAMES.COMMENTS_COMMENT_ITEM_SPAN_CONTAINER}`
        ) as HTMLElement;
        return spanContainer?.innerText ?? "";
      } else {
        const postCommentTextOuterContainer = parentElement.querySelector(
          `.${CLASS_NAMES.COMMENTS_HIGHLIGHTED_COMMENT_ITEM_CONTENT_BODY}`
        ) as HTMLElement;
        if (postCommentTextOuterContainer) {
          return postCommentTextOuterContainer.innerText?.trim();
        }
      }
    }
    parentElement = parentElement.parentElement;
  }
  return "";
};
const getPostCommentTextNew1 = (commentBoxEditor: HTMLElement) => {
  //EvyAILogger.log("getPostCommentTextNew1");
  // get parent element and find its mentioned
  let iconParentElement = commentBoxEditor?.parentElement;
  let mentioned_name_element = iconParentElement?.querySelector(
    `div[${CLASS_NAMES.DATA_QL_EDITOR_CONTENT_EDITABLE}="true"]`
  ) as HTMLElement;
  let mentioned_name = mentioned_name_element?.innerText.trim();
  // then loop through all thread and find all comments merge it
  let comment_text = "";
  // get actor name
  // step 1:
  //comments-comment-meta__container
  //comments-thread-entity
  // comment-social-activity comments-thread-entity
  //step 2
  //comment-social-activity
  let threadElemArray: HTMLElement[] = [];
  let parentElement = commentBoxEditor?.closest(CLASS_NAMES.COMMENTS_COMMENT_ITEM) as HTMLElement;
  threadElemArray.push(parentElement);
  let childElementsArray = parentElement?.querySelectorAll(CLASS_NAMES.COMMENTS_COMMENT_ITEM) ?? [];

  // Convert NodeList to an array and push each element individually
  childElementsArray?.forEach((childElement) => {
    threadElemArray.push(childElement as HTMLElement);
  });

  threadElemArray?.forEach((element) => {
    let actor_name_elem = element?.querySelector(CLASS_NAMES.COMMENTS_POST_META_H3_SPAN_COMMENTS__TEXT) as HTMLElement;

    if (actor_name_elem) {
      let actor_name_elem1 = actor_name_elem?.querySelector(`span[aria-hidden="true"]`) as HTMLElement;
      if (actor_name_elem1) {
        actor_name_elem = actor_name_elem1;
      }
    }

    let actor_name = actor_name_elem?.innerText?.trim();
    if (mentioned_name.includes(actor_name)) {
      if (element?.querySelector(CLASS_NAMES.DIV_COMMENTS_COMMENT_ITEM_SHOW_MORE_TEXT)) {
        const comment_div = element.querySelector(CLASS_NAMES.DIV_COMMENTS_COMMENT_ITEM_SHOW_MORE_TEXT) as HTMLElement;
        comment_text += comment_div?.innerText ?? "";
      }
      comment_text += "\n";
    }
  });

  return comment_text;
};

const getPostCommentTextNewUI1 = (commentBoxEditor: HTMLElement) => {
  //EvyAILogger.log("getPostCommentTextNewUI1");
  // get parent element and find its mentioned
  let iconParentElement = commentBoxEditor?.parentElement;
  let mentioned_name_element = iconParentElement?.querySelector(
    `div[${CLASS_NAMES.DATA_QL_EDITOR_CONTENT_EDITABLE}="true"]`
  ) as HTMLElement;
  let mentioned_name = mentioned_name_element?.innerText.trim();
  let comment_text = "";

  // get actor name
  // step 1:
  //comments-comment-meta__container
  //comments-thread-entity
  // comment-social-activity comments-thread-entity
  //step 2
  //comment-social-activity
  let threadElemArray: HTMLElement[] = [];
  let parentElement = commentBoxEditor?.closest(CLASS_NAMES.COMMENTS_COMMENT_ENTITY) as HTMLElement;
  threadElemArray.push(parentElement);
  let childElementsArray = parentElement?.querySelectorAll(CLASS_NAMES.COMMENTS_COMMENT_ENTITY) ?? [];
  if (childElementsArray.length == 0) {
    childElementsArray = parentElement?.querySelectorAll(CLASS_NAMES.COMMENTS_COMMENT_ITEM) ?? [];
  }
  // Convert NodeList to an array and push each element individually
  childElementsArray?.forEach((childElement) => {
    threadElemArray.push(childElement as HTMLElement);
  });

  threadElemArray?.forEach((element) => {
    let actor_name_elem = element?.querySelector(
      `.comments-comment-meta__container h3 .${CLASS_NAMES.COMMENTS_COMMENT_META_DESCRIPTION_TITLE}`
    ) as HTMLElement;

    if (actor_name_elem) {
      let actor_name_elem1 = actor_name_elem?.querySelector(`span[aria-hidden="true"]`) as HTMLElement;
      if (actor_name_elem1) {
        actor_name_elem = actor_name_elem1;
      }
    }
    if (!actor_name_elem) {
      actor_name_elem = element?.querySelector(CLASS_NAMES.COMMENTS_POST_META_H3_SPAN_COMMENTS__TEXT) as HTMLElement;

      if (actor_name_elem) {
        let actor_name_elem1 = actor_name_elem?.querySelector(`span[aria-hidden="true"]`) as HTMLElement;
        if (actor_name_elem1) {
          actor_name_elem = actor_name_elem1;
        }
      }
    }

    let actor_name = actor_name_elem?.innerText?.trim();
    if (mentioned_name.includes(actor_name)) {
      if (element?.querySelector(`div.` + CLASS_NAMES.COMMENTS_COMMENT_CONTENT_ELEMENT)) {
        const comment_div = element.querySelector(`div.` + CLASS_NAMES.COMMENTS_COMMENT_CONTENT_ELEMENT) as HTMLElement;
        comment_text += comment_div?.innerText ?? "";
      }
      comment_text += "\n";
    }
  });

  return comment_text;
};

const getPostCommentTextNewUI = (commentBoxEditor: HTMLElement) => {
  //EvyAILogger.log("getPostCommentTextNewUI");
  // get parent element and find its mentioned
  let iconParentElement = commentBoxEditor?.parentElement;
  let mentioned_name_element = iconParentElement?.querySelector(
    `div[${CLASS_NAMES.DATA_QL_EDITOR_CONTENT_EDITABLE}="true"]`
  ) as HTMLElement;
  let mentioned_name = mentioned_name_element?.innerText.trim();
  let comment_text = "";

  // get actor name
  // step 1:
  //comments-comment-meta__container
  //comments-thread-entity
  // comment-social-activity comments-thread-entity
  //step 2
  //comment-social-activity
  let parentElement = commentBoxEditor?.closest(`.` + CLASS_NAMES.COMMENTS_COMMENT_MAIN_ELEMENT) as HTMLElement;
  //get actor from meta container
  let actor_name_elem = parentElement?.querySelector(
    `.comments-comment-meta__container--parent h3 span.${CLASS_NAMES.COMMENTS_COMMENT_META_DESCRIPTION_TITLE} span[aria-hidden="true"]`
  ) as HTMLElement;

  if (!actor_name_elem) {
    actor_name_elem = parentElement?.querySelector(
      `.comments-comment-meta__container h3 span.${CLASS_NAMES.COMMENTS_COMMENT_META_DESCRIPTION_TITLE} span[aria-hidden="true"]`
    ) as HTMLElement;
  }

  if (!actor_name_elem) {
    actor_name_elem = parentElement?.querySelector(
      `.comments-comment-meta__container h3 .${CLASS_NAMES.COMMENTS_COMMENT_META_DESCRIPTION_TITLE}`
    ) as HTMLElement;
  }

  if (!actor_name_elem) {
    actor_name_elem = parentElement?.querySelector(
      `.${CLASS_NAMES.COMMENTS_COMMENT_META_DESCRIPTION_TITLE} span[aria-hidden="true"]`
    ) as HTMLElement;
  }

  let actor_name = actor_name_elem?.textContent?.trim() || "";

  const commentThreadEntities =
    parentElement?.querySelectorAll(
      ":scope > .comments-thread-entity:not(:scope > .comment-social-activity .comments-thread-entity"
    ) ?? [];
  commentThreadEntities.forEach((element) => {
    if (mentioned_name.includes(actor_name)) {
      if (element?.querySelector(`div.` + CLASS_NAMES.COMMENTS_COMMENT_CONTENT_ELEMENT)) {
        const comment_div = element.querySelector(`div.` + CLASS_NAMES.COMMENTS_COMMENT_CONTENT_ELEMENT) as HTMLElement;
        comment_text += comment_div?.innerText ?? "";
      }
      comment_text += "\n";
    }
  });
  let social_media_element = parentElement?.querySelector(CLASS_NAMES.COMMENTS_SOCIAL_ACTIVITY_COMMENTS_REPLIES_LIST);
  const commentThreadActivity = social_media_element?.querySelectorAll(CLASS_NAMES.COMMENTS_THREAD_ENTITY) ?? [];
  commentThreadActivity.forEach((element) => {
    let actor_name_elem = element.querySelector(
      `.${CLASS_NAMES.COMMENTS_COMMENT_META_ACTOR} h3 span.${CLASS_NAMES.COMMENTS_COMMENT_META_DESCRIPTION_TITLE} span[aria-hidden="true"]`
    ) as HTMLElement;
    if (!actor_name_elem) {
      actor_name_elem = element?.querySelector(
        `.${CLASS_NAMES.COMMENTS_COMMENT_META_ACTOR} h3 .${CLASS_NAMES.COMMENTS_COMMENT_META_DESCRIPTION_TITLE}`
      ) as HTMLElement;
    }

    if (!actor_name_elem) {
      actor_name_elem = element?.querySelector(
        `.${CLASS_NAMES.COMMENTS_COMMENT_META_DESCRIPTION_TITLE} span[aria-hidden="true"]`
      ) as HTMLElement;
    }

    let actor_name = actor_name_elem?.innerText;
    if (mentioned_name.includes(actor_name)) {
      if (element?.querySelector(`div.` + CLASS_NAMES.COMMENTS_COMMENT_CONTENT_ELEMENT)) {
        const comment_div = element.querySelector(`div.` + CLASS_NAMES.COMMENTS_COMMENT_CONTENT_ELEMENT) as HTMLElement;
        comment_text += comment_div?.innerText ?? "";
      }
      comment_text += "\n";
    }
  });
  return comment_text;
};
//find newsletter text

export const getNewLetterHeadline = (commentBoxEditor: HTMLElement) => {
  let parentElement = commentBoxEditor.parentElement;

  while (parentElement) {
    if (
      (parentElement.classList.contains(CLASS_NAMES.EMBER_VIEW) &&
        parentElement.classList.contains(CLASS_NAMES.OCCLUDABLE_UPDATE)) ||
      parentElement.classList.contains(CLASS_NAMES.RELATIVE) ||
      parentElement.classList.contains("entity-result") ||
      (parentElement.getAttribute("data-id") ?? "").length > 0 ||
      parentElement.classList.contains(CLASS_NAMES.UPDATE_OUTLET)
    ) {
      const titleElement = parentElement.querySelector(CLASS_NAMES.t14_UPDATE_COMPONENTS_title) as HTMLElement;
      if (titleElement) {
        // EvyAILogger.log(titleElement.innerText.trim(), "text");
        return titleElement.innerText.trim();
      }
    }
    parentElement = parentElement.parentElement;
  }

  return "";
};

const getPostCommentAuthorName = (commentBoxEditor: HTMLElement) => {
  let parentElement = commentBoxEditor.parentElement;
  while (parentElement) {
    if (
      parentElement.classList.contains(CLASS_NAMES.COMMENTS_COMMENT_ITEM) ||
      parentElement.classList.contains(CLASS_NAMES.COMMENTS_HIGHLIGHTED_COMMENT_ITEM) ||
      parentElement.classList.contains(CLASS_NAMES.COMMENTS_COMMENT_ITEM_HIGHLIGHTED)
    ) {
      const postCommentAuthorOuterContainer = parentElement.querySelector(
        `.${CLASS_NAMES.COMMENT_COMMENT_ITEM_POST_META}`
      ) as HTMLElement;
      if (postCommentAuthorOuterContainer) {
        const spanContainer = postCommentAuthorOuterContainer.querySelector(
          `.${CLASS_NAMES.COMMENT_POST_META_NAME_TEXT_SPAN_CONTAINER}`
        ) as HTMLElement;
        if (spanContainer) {
          if (spanContainer.firstElementChild?.firstElementChild) {
            return (spanContainer?.firstElementChild?.firstElementChild as HTMLElement)?.innerText ?? "";
          } else {
            return spanContainer.innerText;
          }
        }
      }
    }
    parentElement = parentElement.parentElement;
  }
  return "";
};

const getPostCommentAuthorNameNew = (commentBoxEditor: HTMLElement) => {
  // get parent element and find its mentioned
  let iconParentElement = commentBoxEditor?.parentElement;
  let mentioned_name_element = iconParentElement?.querySelector(
    `div[${CLASS_NAMES.DATA_QL_EDITOR_CONTENT_EDITABLE}="true"]`
  ) as HTMLElement;
  //EvyAILogger.log("mentioned_name_element?.innerText",mentioned_name_element?.innerText);
  return mentioned_name_element?.innerText;
  // then loop through all thread and find all comments merge it
};

// extract post data
export const getPostAndCommentInfoIfExists = (commentBoxEditor: HTMLElement) => {
  const postText = getPostText(commentBoxEditor);

  //const commentText = getPostCommentText(commentBoxEditor);
  const postCommentText = getPostCommentTextNew1(commentBoxEditor).trim();
  const commentText = postCommentText === "" ? getPostCommentTextNewUI1(commentBoxEditor) : postCommentText;
  //EvyAILogger.log("commentText",commentText);

  //const commentAuthorName = getPostCommentAuthorName(commentBoxEditor);
  const postCommentAuthorName = getPostCommentAuthorNameNew(commentBoxEditor);
  //EvyAILogger.log("postCommentAuthorName",postCommentAuthorName);
  const commentAuthorName =
    postCommentAuthorName === "" ? getPostCommentAuthorName(commentBoxEditor) : postCommentAuthorName;
  //EvyAILogger.log("commentAuthorName",commentAuthorName);
  const postAutherName = getPostAuthorName(commentBoxEditor);

  return { postText, postAutherName, commentText, commentAuthorName };
};

// extract post data
export const getPostAndCommentInfoIfExistsInRepost = (commentBoxEditor: HTMLElement) => {
  let commentText = "",
    commentAuthorName = "";

  const postText = getPostTextFromRepost(commentBoxEditor);
  const postAutherName = getPostAuthorNameRepost(commentBoxEditor);

  return { postText, postAutherName, commentText, commentAuthorName };
};

const getOtherUserNameOnIndividualMessageBox = (messageBoxTextEditorContainer: HTMLElement) => {
  let parentElement = messageBoxTextEditorContainer.parentElement;
  while (parentElement) {
    if (parentElement.classList.contains(CLASS_NAMES.MESSAGE_OVERLAY_CONVERSATION_BUBBLE)) {
      const messageBoxHeaderElement = parentElement.querySelector(`header`) as HTMLElement;
      const userName = messageBoxHeaderElement.querySelector(`h2`)?.textContent;
      return userName?.trim();
    }

    parentElement = parentElement.parentElement;
  }
  return null;
};

export const getOtherUserNameOnMessagePage = (messageBoxTextEditorContainer: HTMLElement) => {
  const otherUserNameOfIndividualMessageBox = getOtherUserNameOnIndividualMessageBox(messageBoxTextEditorContainer);
  if (otherUserNameOfIndividualMessageBox) {
    return otherUserNameOfIndividualMessageBox;
  }
  const messageThreadOtherUserNameElement = document.getElementById(`${ELEMENT_ID.MESSAGE_THREAD_OTHER_USER}`);
  return messageThreadOtherUserNameElement?.innerText ?? "";
};

export const getMessageThreadContainer = (messageBoxTextEditorContainer: HTMLElement) => {
  let parentElement = messageBoxTextEditorContainer.parentElement;
  while (parentElement) {
    const messageThreadContainer = parentElement.querySelector(
      `.${CLASS_NAMES.MESSAGE_THREAD_CONTAINER}`
    ) as HTMLElement;
    if (messageThreadContainer) {
      return messageThreadContainer;
    }
    parentElement = parentElement.parentElement;
  }
  return null;
};

export const getLastMessageOfOtherUser = (messageBoxTextEditorContainer: HTMLElement, otherUserName: string) => {
  const messageThreadContainer = getMessageThreadContainer(messageBoxTextEditorContainer);
  const messageTextListItems =
    messageThreadContainer?.querySelectorAll(`li.${CLASS_NAMES.MESSAGE_TEXT_LIST_ITEM}`) ?? [];
  let lastMessageOfOtherUser = "";
  for (let i = messageTextListItems.length - 1; i >= 0; i--) {
    const messageSenderInfoElement = messageTextListItems[i]?.querySelector(
      `.${CLASS_NAMES.MESSAGE_TEXT_FROM_USER}`
    ) as HTMLElement;
    const messageTextElement = messageTextListItems[i]?.querySelector(
      `.${CLASS_NAMES.MESSAGE_TEXT_CONTENT}`
    ) as HTMLElement;
    if (lastMessageOfOtherUser === "") {
      lastMessageOfOtherUser = messageTextElement?.innerText ?? "";
    }
    if (messageSenderInfoElement) {
      if (messageSenderInfoElement.innerText.trim() === otherUserName.trim()) {
        break;
      } else {
        lastMessageOfOtherUser = "";
      }
    }
  }
  return lastMessageOfOtherUser;
};

export const getLastMessages = (
  messageBoxTextEditorContainer: HTMLElement,
  otherUserName: string,
  numberOfMessages = 6
) => {
  const messageThreadContainer = getMessageThreadContainer(messageBoxTextEditorContainer);
  const messageTextListItems =
    messageThreadContainer?.querySelectorAll(`li.${CLASS_NAMES.MESSAGE_TEXT_LIST_ITEM}`) ?? [];
  const allMessages: LinkedInMessage[] = [];
  let messageSpeaker = "";
  for (let i = 0; i < messageTextListItems.length; i++) {
    const messageSenderInfoElement = messageTextListItems[i]?.querySelector(
      `.${CLASS_NAMES.MESSAGE_TEXT_FROM_USER}`
    ) as HTMLElement;
    const messageTextElement = messageTextListItems[i]?.querySelector(
      `.${CLASS_NAMES.MESSAGE_TEXT_CONTENT}`
    ) as HTMLElement;
    if (messageSenderInfoElement) {
      if (messageSenderInfoElement.innerText.trim() === otherUserName.trim()) {
        messageSpeaker = otherUserName;
      } else {
        messageSpeaker = "self";
      }
    }
    const messageText = messageTextElement?.innerText ?? "";
    allMessages.push({ messageSpeaker, messageText });
  }
  // EvyAILogger.log(allMessages, "all message");
  return allMessages.reverse().slice(0, numberOfMessages);
};

export const getNameFromProfilePage = () => {
  let profileName = "";
  const profileSection = document.querySelector(CLASS_NAMES.SECTIONS_ARTDECO_CARD);

  if (profileSection) {
    const profileNameElement = profileSection.querySelector(CLASS_NAMES.DIV_MT2_RELATIVE);

    if (profileNameElement) {
      const profileNameSpan = profileNameElement.querySelector(
        CLASS_NAMES.SPAN_ARTDECO_HOVERABLE_TRIGGER_ARTDECO_HOVERABLE_TRIGGER_EMBER_VIEW
      );

      if (profileNameSpan) {
        profileName = profileNameSpan?.textContent?.trim() ?? "";
        return profileName;
      }
    }
  }
  return profileName;
};

export const getConnectingUserNameFromSearch = (connectionDialog: HTMLElement) => {
  const usernameElement = connectionDialog.querySelector(`.${CLASS_NAMES.INVITATION_DIALOG} strong`) as HTMLElement;
  let username = "";
  if (usernameElement) {
    username = usernameElement.innerText.trim() || "";
  }
  return username;
};

export function getProfileImageUrl() {
  const imgElement =
    document.querySelector(`img.${CLASS_NAMES.PROFILE_IMAGE}`) ??
    document.querySelector(`img.${CLASS_NAMES.PERSONAL_PROFILE_IMAGE}`);

  if (imgElement) {
    return imgElement.getAttribute("src");
  } else {
    return null;
  }
}

export const getNameFromProfilePage_salesNavigator = () => {
  let profileName = "";
  const profileSection = document.querySelector(CLASS_NAMES.SECTIONS_HEADER_SQH8TM);

  if (profileSection) {
    const profileNameElement = profileSection.querySelector(CLASS_NAMES.DIV_INSET_PADDING_SQH8TM);

    if (profileNameElement) {
      const profileNameSpan = profileNameElement.querySelector("[data-anonymize='person-name']");
      if (profileNameSpan) {
        profileName = profileNameSpan?.textContent?.trim() ?? "";
        return profileName;
      }
    }
  }
  return profileName;
};

export const getTaglineFromProfilePage_salesNavigator = () => {
  let tagline = "";
  const taglinesection = document.querySelector(CLASS_NAMES.SECTIONS_HEADER_SQH8TM);
  if (taglinesection) {
    const taglineElement = taglinesection.querySelector("[data-anonymize='headline']");
    const tagline = trimAllWhiteSpaces(taglineElement?.textContent ?? "").replaceAll("", "");
    return tagline;
  }
};

export const getExperiencesFromProfilePage_salesNavigator = () => {
  const experienceDivElement = document.getElementById("experience-section");

  const experiencesListItemElements = experienceDivElement?.querySelectorAll(`ul li`);
  const experiences: ProfileExperience[] = [];
  experiencesListItemElements?.forEach((experienceListItem) => {
    const positionElement = experienceListItem.querySelector("[data-anonymize='job-title']");

    if (positionElement) {
      const position = trimAllWhiteSpaces(positionElement?.textContent ?? "");
      const subtitleElements = experienceListItem.querySelectorAll(CLASS_NAMES.T_14);
      const firstCompany = trimAllWhiteSpaces(
        subtitleElements.length > 0 ? subtitleElements[0].firstElementChild?.textContent ?? "" : ""
      );
      const firstTimeline = trimAllWhiteSpaces(
        subtitleElements.length > 1 ? subtitleElements[1].firstElementChild?.textContent ?? "" : ""
      );

      const companyElement = experienceListItem.querySelector("[data-anonymize='company-name']");
      const company = trimAllWhiteSpaces(companyElement?.textContent ?? "");

      const timelineElement = experienceListItem.querySelectorAll(CLASS_NAMES.P_lowEmphasis)[0];
      const timeline = trimAllWhiteSpaces(timelineElement?.textContent ?? "");

      const locationElement = experienceListItem.querySelectorAll(CLASS_NAMES.P_lowEmphasis)[1];
      const location = trimAllWhiteSpaces(locationElement?.textContent ?? "");

      const skills = "";

      const descriptionElement = experienceListItem.querySelectorAll(CLASS_NAMES.P_lowEmphasis)[2];
      const description = trimAllWhiteSpaces(descriptionElement?.textContent ?? "");

      experiences.push({
        position,
        company,
        timeline,
        location,
        description,
        skills,
      });
    }
  });
  return experiences;
};
export const getEducationFromProfilePage_salesNavigator = () => {
  const educationDivElement = document.querySelector("[data-sn-view-name='feature-lead-education'] ul");

  const educationListItemElements = educationDivElement?.querySelectorAll("li");

  const educations: ProfileEducation[] = [];
  educationListItemElements?.forEach((educationListItem) => {
    const institutionElement = educationListItem.querySelector("[data-anonymize='education-name']");
    const institution = trimAllWhiteSpaces(institutionElement?.textContent ?? "");

    const degreeAndDisciplineElement = educationListItem.querySelector(CLASS_NAMES.P_CLASS_BODYTEXT_NTH_TYPE);
    const degreeAndDiscipline = trimAllWhiteSpaces(degreeAndDisciplineElement?.textContent ?? "");

    const timelineElement = educationListItem.querySelector(CLASS_NAMES.P_CLASS_BODYTEXT_NTH_TYPE2);
    const timeline = trimAllWhiteSpaces(timelineElement?.textContent ?? "");

    educations.push({ institution, degreeAndDiscipline, timeline });
  });

  return educations;
};
export const getLicensesAndCertificationsFromProfilePage_salesNavigator = () => {
  return [];
};
export function getProfileImageUrlOfSales() {
  const imgElement =
    document.querySelector(CLASS_NAMES.CIRCLE_ENTITY_8_LAZY_IMAGE) ||
    document.querySelector(CLASS_NAMES.CIRCLE_ENTITY_6_LAZY_IMAGE);
  if (imgElement) {
    return imgElement.getAttribute("src");
  } else {
    return null;
  }
}

export const getNameFromProfilePageOfSales = () => {
  const profileNameElement = document.querySelector(CLASS_NAMES.DATA_PERSON_NAME_MAIN);
  const profileName = profileNameElement?.textContent?.trim() ?? "";
  return profileName;
};
export const getLinkedInUrlFromProfilePageOfSales = () => {
  return new Promise((resolve) => {
    const dismissButton = document.querySelector(CLASS_NAMES.DATA_ACTION_MENU_OVERFLOW);
    if (dismissButton instanceof HTMLElement) {
      const expanded = dismissButton.getAttribute("aria-expanded");
      if (expanded == "false") {
        dismissButton.click();
      }
      waitForElement(CLASS_NAMES.DATA_BASIC_LINKEDIN_LINK, (element) => {
        const profileLinkNode = document.querySelector(CLASS_NAMES.DATA_BASIC_LINKEDIN_LINK);
        if (profileLinkNode instanceof HTMLElement) {
          const closestMenu = profileLinkNode.closest(CLASS_NAMES.DATA_HUE_MENU) as HTMLElement;
          if (closestMenu) {
            closestMenu.style.opacity = "0"; // Use a string value
          }
        }
      });
    }

    function waitForElement(
      selector: string,
      callback: (element: Element) => void,
      checkInterval: number = 100,
      timeout: number = 5000
    ) {
      const startTime = new Date().getTime();

      (function check() {
        const element = document.querySelector(selector);

        if (element) {
          callback(element);
        } else if (new Date().getTime() - startTime < timeout) {
          setTimeout(check, checkInterval);
        } else {
          EvyAILogger.warn(`waitForElement: Timeout while waiting for element ${selector}`);
        }
      })();
    }

    let check_profile_link_interval = setInterval(function () {
      const profileNameElement = document.querySelector(CLASS_NAMES.DATA_BASIC_LINKEDIN_LINK);
      if (profileNameElement) {
        const profileUrl = profileNameElement?.attributes?.getNamedItem("href")?.value + "/" ?? "";
        resolve(profileUrl); // Resolve the promise with the profile URL
        const dismissButton = document.querySelector(CLASS_NAMES.DATA_ACTION_MENU_OVERFLOW);
        if (dismissButton instanceof HTMLElement) {
          const expanded = dismissButton.getAttribute("aria-expanded");
          if (expanded == "true") {
            dismissButton.click();
            const profileLinkNode = document.querySelector(CLASS_NAMES.DATA_BASIC_LINKEDIN_LINK);
            if (profileLinkNode instanceof HTMLElement) {
              const closestMenu = profileLinkNode.closest(CLASS_NAMES.DATA_HUE_MENU) as HTMLElement;
              if (closestMenu) {
                closestMenu.style.opacity = "1"; // Use a string value
              }
            }
          }
        }
        clearInterval(check_profile_link_interval);
      }
    }, 100);
  });
};

export const getSNUrlFromProfilePageOfSN = () => {
  let profileLink = "";
  if (isLinkedInSNProfilePageCheck(window.location.href)) {
    profileLink = window.location.href;
  } else {
    const profileNameElement = document.querySelector(CLASS_NAMES.DATA_PERSON_NAME_MAIN);
    if (profileNameElement) {
      const nextAnchorElement =
        profileNameElement.nextElementSibling?.tagName === "A"
          ? profileNameElement.nextElementSibling
          : profileNameElement.querySelector("a");
      if (nextAnchorElement instanceof HTMLAnchorElement) {
        profileLink = nextAnchorElement.href;
      }
    }
  }
  return profileLink;
};
export const getTaglineFromProfilePage = () => {
  const taglineElement = document.querySelector(CLASS_NAMES.DATA_TAG_LINE_TEXT);
  // EvyAILogger.log("taglineElement", taglineElement);
  const tagline = trimAllWhiteSpaces(taglineElement?.textContent ?? "").replaceAll("", "");
  return tagline;
};
export const getTaglineFromSalesProfilePage = () => {
  const taglineElement = document.querySelector(CLASS_NAMES.DATA_HEAD_LINE_TEXT);
  const tagline = trimAllWhiteSpaces(taglineElement?.textContent?.trim() ?? "").replaceAll("", "");
  return tagline;
};

export const getRawFullProfileInfoData = () => {
  const raw_full_profile_info_data_Element = document.querySelector(CLASS_NAMES.MAIN_SCAFFOLD_LAYOUT__MAIN);
  const raw_full_profile_info_data = trimAllWhiteSpaces(
    raw_full_profile_info_data_Element?.textContent?.trim() ?? ""
  ).replaceAll("", "");
  //EvyAILogger.log("raw_full_profile_info_data >>>" + raw_full_profile_info_data);
  return raw_full_profile_info_data;
};

export const getRawProfileContactInfoData = () => {
  return new Promise((resolve) => {
    const myCSS = `
      .artdeco-modal-overlay--is-top-layer {
        opacity: 0;
      }
      `;
    injectCSS(myCSS);
    const element = document.getElementById(CLASS_NAMES.TOP_CARD_TEXT_DETAILS_CONTACT_INFO);
    if (element) {
      element.click();
    } else {
      // TODO - Send error to the server that element not found
      EvyAILogger.error("Element with ID 'top-card-text-details-contact-info' not found.");
    }
    waitForElement(CLASS_NAMES.DIV_REIA__PV_CONTACT_INFO, (element) => {
      const raw_profile_contact_info_data_Element = document.querySelector(
        CLASS_NAMES.PV_PROFILE_SECTION_SECTION_INFO_SECTION_INFO
      );
      const raw_profile_contact_info_data = trimAllWhiteSpaces(
        raw_profile_contact_info_data_Element?.textContent?.trim() ?? ""
      ).replaceAll("", "");
      //EvyAILogger.log("raw_profile_contact_info_data >>>>" + raw_profile_contact_info_data);
      resolve(raw_profile_contact_info_data);
    });
    function waitForElement(
      selector: string,
      callback: (element: Element) => void,
      checkInterval: number = 100,
      timeout: number = 5000
    ) {
      const startTime = new Date().getTime();

      (function check() {
        const element = document.querySelector(selector);

        if (element) {
          callback(element);
        } else if (new Date().getTime() - startTime < timeout) {
          setTimeout(check, checkInterval);
        } else {
          EvyAILogger.warn(`waitForElement: Timeout while waiting for element ${selector}`);
        }
      })();
    }
  });
};

const injectCSS = (css: string) => {
  if (!document.getElementById("inject-contect-info")) {
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = "inject-contect-info";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }
};

const removeInjectedCSS = () => {
  const styleElement = document.getElementById(CLASS_NAMES.INJECT_CONTECT_INFO);
  if (styleElement) {
    styleElement.remove();
  }
};

export const closeContactInfomodel = () => {
  waitForElement(CLASS_NAMES.DIV_REIA__PV_CONTACT_INFO, (element) => {
    // Select the button with the ID 'evyaiAddProfileBtn' and set the attribute
    const saveProfileButton = document.getElementById("profile-evny-save-btn");
    if (saveProfileButton) {
      // The element is found, you can manipulate it here
      if (saveProfileButton instanceof HTMLElement) {
        saveProfileButton.setAttribute("alreadyExistingCloseModel", "true");
      } else {
        // Log an error if the button is not found
        EvyAILogger.error("Button with ID 'evyaiAddProfileBtn' not found.");
      }
    }
    const element_close = document.querySelector(CLASS_NAMES.ARTDECO_MODAL__DISMISS);
    if (element_close instanceof HTMLElement) {
      element_close.click();
    } else {
      // TODO - Send error to the server that element not found
      EvyAILogger.error("Element with ID 'artdeco-modal__dismiss' not found.");
    }
    removeInjectedCSS();
  });
  function waitForElement(
    selector: string,
    callback: (element: Element) => void,
    checkInterval: number = 100,
    timeout: number = 5000
  ) {
    const startTime = new Date().getTime();

    (function check() {
      const element = document.querySelector(selector);

      if (element) {
        callback(element);
      } else if (new Date().getTime() - startTime < timeout) {
        setTimeout(check, checkInterval);
      } else {
        EvyAILogger.warn(`waitForElement: Timeout while waiting for element ${selector}`);
      }
    })();
  }
};

export const getRawFullProfileInfoDataSN = () => {
  return new Promise((resolve) => {
    const element = document.querySelector(CLASS_NAMES.CONTENT_WIDTH_1DTBSB);
    if (element instanceof HTMLElement) {
      element.click();
    } else {
      // TODO - Send error to the server that element not found
      EvyAILogger.error("Element with ID 'CONTENT_WIDTH_1DTBSB' not found.");
    }
    setTimeout(() => {
      const raw_full_profile_info_data_Element = document.querySelector(
        CLASS_NAMES.CONTENT_MAIN_HOMEPAGE_V2_CONSISTENT
      );
      const raw_full_profile_info_data = trimAllWhiteSpaces(
        raw_full_profile_info_data_Element?.textContent?.trim() ?? ""
      ).replaceAll("", "");
      EvyAILogger.log("getRawFullProfileInfoDataSN >> raw_full_profile_info_data >>>" + raw_full_profile_info_data);

      const element_close = document.querySelector(CLASS_NAMES.POST_TEXT_BUTTON_1D1VLQ_UNSTYLED_BUTTON_4EDPGZ);
      if (element_close instanceof HTMLElement) {
        element_close.click();
      } else {
        EvyAILogger.error("Element with ID 'POST_TEXT_BUTTON_1D1VLQ_UNSTYLED_BUTTON_4EDPGZ' not found.");
      }
      resolve(raw_full_profile_info_data);
    }, 500);
  });
};

export const getRawProfileContactInfoDataSN = () => {
  return new Promise((resolve) => {
    const myCSS = `
      .artdeco-modal-overlay--is-top-layer {
        opacity: 0;
      }
      `;
    injectCSS(myCSS);
    const element = document.querySelector(CLASS_NAMES.CONTACT_INFO_CTA);
    if (element instanceof HTMLElement) {
      element.click();
    } else {
      // TODO - Send error to the server that element not found
      EvyAILogger.error("Element with ID 'CONTACT_INFO_CTA' not found.");
    }
    waitForElement(CLASS_NAMES.CONTACT_INFO_FORM_PHONE, (element) => {
      const raw_profile_contact_info_data_Element = document.querySelector(
        CLASS_NAMES.ARTDECO_MODAL_CONTENT_EMBER_VIEW
      );
      const raw_profile_contact_info_data = trimAllWhiteSpaces(
        raw_profile_contact_info_data_Element?.textContent?.trim() ?? ""
      ).replaceAll("", "");
      const element_close = document.querySelector(CLASS_NAMES.ARTDECO_MODAL__DISMISS);
      if (element_close instanceof HTMLElement) {
        element_close.click();
      } else {
        // TODO - Send error to the server that element not found
        EvyAILogger.error("Element with ID 'artdeco-modal__dismiss' not found.");
      }
      removeInjectedCSS();
      EvyAILogger.log("raw_profile_contact_info_data >>>>" + raw_profile_contact_info_data);
      resolve(raw_profile_contact_info_data);
    });
    function waitForElement(
      selector: string,
      callback: (element: Element) => void,
      checkInterval: number = 100,
      timeout: number = 5000
    ) {
      const startTime = new Date().getTime();

      (function check() {
        const element = document.querySelector(selector);

        if (element) {
          callback(element);
        } else if (new Date().getTime() - startTime < timeout) {
          setTimeout(check, checkInterval);
        } else {
          EvyAILogger.warn(`waitForElement: Timeout while waiting for element ${selector}`);
        }
      })();
    }
  });
};

export const getExperiencesFromProfilePage = () => {
  const experienceDivElement = document.getElementById(ELEMENT_ID.EXPERIENCE_DIV_ID);
  const experiencesContainerSectionElement = experienceDivElement?.parentElement;
  // const experiencesListElement =
  //   experiencesContainerSectionElement?.querySelector(
  //     `.${CLASS_NAMES.PVS_LIST_OUTER_CONTAINER} .${CLASS_NAMES.PVS_LIST}`
  //   );
  const experiencesListItemElements = experiencesContainerSectionElement?.querySelectorAll(`li`);
  const experiences: ProfileExperience[] = [];
  experiencesListItemElements?.forEach((experienceListItem) => {
    const positionElement = experienceListItem.querySelector(CLASS_NAMES.DATA_EXP_LIST_ITEM);
    if (positionElement) {
      const position = trimAllWhiteSpaces(positionElement?.textContent ?? "");

      const subtitleElements = experienceListItem.querySelectorAll(CLASS_NAMES.T_14);
      const company = trimAllWhiteSpaces(
        subtitleElements.length > 0 ? subtitleElements[0].firstElementChild?.textContent ?? "" : ""
      );
      const timeline = trimAllWhiteSpaces(
        subtitleElements.length > 1 ? subtitleElements[1].firstElementChild?.textContent ?? "" : ""
      );
      let location = "",
        description = "",
        skills = "";

      if (subtitleElements.length > 2) {
        if (subtitleElements[2].classList.contains(CLASS_NAMES.DATA_SUB_TITLES_MAIN)) {
          location = subtitleElements[2].firstElementChild?.textContent ?? "";
        } else {
          const spanElement = subtitleElements[2].querySelector("span");
          const strongElement = spanElement?.querySelector("strong");
          if (strongElement && strongElement.textContent?.includes("Skills:")) {
            skills = (spanElement?.textContent ?? "").replace("Skills: ", "");
          } else {
            description = spanElement?.textContent ?? "";
          }
        }
      }

      if (subtitleElements.length > 3) {
        const spanElement = subtitleElements[3].querySelector("span");
        const strongElement = spanElement?.querySelector("strong");
        if (strongElement && strongElement.textContent?.includes("Skills:")) {
          skills = (spanElement?.textContent ?? "").replace("Skills: ", "");
        } else {
          description = spanElement?.textContent ?? "";
        }
      }

      if (subtitleElements.length > 4) {
        const spanElement = subtitleElements[4].querySelector("span");
        const strongElement = spanElement?.querySelector("strong");
        if (strongElement && strongElement.textContent?.includes("Skills:")) {
          skills = (spanElement?.textContent ?? "").replace("Skills: ", "");
        }
      }

      // EvyAILogger.log({position, company, timeline, location});
      experiences.push({
        position,
        company,
        timeline,
        location,
        description,
        skills,
      });
    }
  });
  return experiences;
};

export const getExperiencesFromSalesProfilePage = () => {
  const experienceEntries = document.querySelectorAll(CLASS_NAMES.LI_EXPERIENCE_ENTITY);

  const extractedData: any[] = [];

  experienceEntries.forEach((entry) => {
    if (entry !== null) {
      const title = entry?.querySelector(CLASS_NAMES.DATA_EXP_JOB_TITLE)?.textContent?.trim() || "";
      const company = entry?.querySelector(CLASS_NAMES.DATA_EXP_COMPANY_TITLE)?.textContent?.trim() || "";
      const dateRange = entry?.querySelector(CLASS_NAMES.DATA_EXP_TIME_PERIOD)?.textContent?.trim() || "";
      const location = entry?.querySelector(CLASS_NAMES.DATA_EXP_TIME_LOCATION)?.textContent?.trim() || "";
      const description = entry?.querySelector(CLASS_NAMES.DATA_EXP_DESCRIPTION)?.getAttribute("title") || "";

      extractedData.push({
        position: title,
        company,
        timeline: dateRange,
        location,
        description,
        skills: "",
      });
    }
  });

  return extractedData;
};

export const getEducationFromProfilePage = () => {
  const educationDivElement = document.getElementById(ELEMENT_ID.EDUCATION_DIV_ID);
  const educationContainerSectionElement = educationDivElement?.parentElement;
  // const educationsListElement = educationContainerSectionElement?.querySelector(
  //   `.${CLASS_NAMES.PVS_LIST_OUTER_CONTAINER} .${CLASS_NAMES.PVS_LIST}`
  // );
  const educationListItemElements = educationContainerSectionElement?.querySelectorAll(`li`);
  const educations: ProfileEducation[] = [];
  educationListItemElements?.forEach((educationListItem) => {
    const institutionElement = educationListItem.querySelector(CLASS_NAMES.DATA_EXP_LIST_ITEM);
    if (institutionElement) {
      const institution = trimAllWhiteSpaces(institutionElement?.textContent ?? "");

      const subtitleElements = educationListItem.querySelectorAll(CLASS_NAMES.T_14);
      const degreeAndDiscipline = trimAllWhiteSpaces(
        subtitleElements.length > 0 ? subtitleElements[0].firstElementChild?.textContent ?? "" : ""
      );
      let timeline = trimAllWhiteSpaces(
        subtitleElements.length > 1 ? subtitleElements[1].firstElementChild?.textContent ?? "" : ""
      );
      educations.push({ institution, degreeAndDiscipline, timeline });
    }
  });
  return educations;
};

export const getEducationFromSalesProfilePage = () => {
  const educationsListElement = document?.querySelector(CLASS_NAMES.DATA_EXP_EDUCATION_LIST);
  const educationListItemElements = educationsListElement?.querySelectorAll(CLASS_NAMES.LI_EDUCATION_ENTITY);
  const educations: any[] = [];

  educationListItemElements?.forEach((educationListItem) => {
    const institutionElement = educationListItem.querySelector(CLASS_NAMES.DATA_EXP_INSTUATATION_LIST);
    if (institutionElement) {
      const institution = institutionElement?.textContent?.trim() || "";

      const degreeElement = educationListItem.querySelector(CLASS_NAMES.DATA_EXP_DEGREE_LIST);
      const degree = degreeElement?.textContent?.trim() || "";

      const fieldOfStudyElement = educationListItem.querySelector(CLASS_NAMES.DATA_EXP_STUDY_LIST);
      const fieldOfStudy = fieldOfStudyElement?.textContent?.trim() || "";

      const timelineElement = educationListItem.querySelector(CLASS_NAMES.DATA_EXP_TIMELINE_LIST);
      const startDate = timelineElement?.getAttribute("datetime") || "";
      const endDate = timelineElement?.nextSibling?.textContent?.trim() || "";

      const timeline = startDate && endDate ? `${startDate} – ${endDate}` : "";

      educations.push({ institution, degreeAndDiscipline: degree, timeline });
    }
  });

  return educations;
};

export const getLicensesAndCertificationsFromProfilePage = () => {
  const licensesAndCertificationsDivElement = document.getElementById(ELEMENT_ID.LICENSES_AND_CERTIFICATIONS_DIV_ID);
  // EvyAILogger.log("licensesAndCertificationsDivElement", licensesAndCertificationsDivElement);
  const licensesAndCertificationsContainerSectionElement =
    licensesAndCertificationsDivElement?.nextElementSibling?.nextElementSibling;
  // const licensesAndCertificationsListElement =
  //   licensesAndCertificationsContainerSectionElement?.querySelector(
  //     `.${CLASS_NAMES.PVS_LIST_OUTER_CONTAINER} .${CLASS_NAMES.PVS_LIST}`
  //   );
  const licensesAndCertificationsListItemElements = licensesAndCertificationsContainerSectionElement?.querySelectorAll(
    CLASS_NAMES.LI_LIST_ITEM
  );
  const licensesAndCertifications: ProfileLicensesAndCertificatioins[] = [];
  licensesAndCertificationsListItemElements?.forEach((licensesAndCertificationsListItem) => {
    const titleElement = licensesAndCertificationsListItem.querySelector(".mr1.t-bold span");
    if (titleElement) {
      const title = trimAllWhiteSpaces(titleElement?.textContent ?? "");

      const subtitleElements = licensesAndCertificationsListItem.querySelectorAll(CLASS_NAMES.T_14);
      const organization = trimAllWhiteSpaces(
        subtitleElements.length > 0 ? subtitleElements[0].firstElementChild?.textContent ?? "" : ""
      );
      const issuedOnAndExpiredOnText = trimAllWhiteSpaces(
        subtitleElements.length > 1 ? subtitleElements[1].firstElementChild?.textContent ?? "" : ""
      );
      const issuedOnAndExpiredOnTextParts = issuedOnAndExpiredOnText.split(" · ");
      const issuedOn = issuedOnAndExpiredOnTextParts[0].replace("Issued", "").trim() ?? "";
      const expiredOn =
        issuedOnAndExpiredOnTextParts.length > 1 ? issuedOnAndExpiredOnTextParts[1].replace("Expired", "").trim() : "";

      const credentialID = trimAllWhiteSpaces(
        subtitleElements.length > 2 ? subtitleElements[2].firstElementChild?.textContent ?? "" : ""
      )
        .replace("Credential ID", "")
        .trim();

      licensesAndCertifications.push({
        title,
        organization,
        issuedOn,
        expiredOn,
        credentialID,
      });
    }
  });
  return licensesAndCertifications;
};

export const getProfileInfoFromIntroEditForm = () => {
  let firstName = "",
    lastName = "",
    headline = "",
    currentPosition = "";
  const textInputContainers = document.querySelectorAll(`.${CLASS_NAMES.TEXT_INPUT_CONTAINER}`);
  textInputContainers.forEach((textInputContainer) => {
    const labelComponent = textInputContainer.querySelector("label");
    if (labelComponent?.textContent?.includes("First name")) {
      firstName = textInputContainer.querySelector("input")?.value ?? "";
    } else if (labelComponent?.textContent?.includes("Last name")) {
      lastName = textInputContainer.querySelector("input")?.value ?? "";
    } else if (labelComponent?.textContent?.includes("Headline")) {
      headline = textInputContainer.querySelector("input")?.value ?? "";
    }
  });
  const textEntityListFormComponents = document.querySelectorAll(CLASS_NAMES.ENTITY_LIST_FORM);
  textEntityListFormComponents.forEach((textEntityListFormComponent) => {
    const labelComponent = textEntityListFormComponent.querySelector("label");
    if (labelComponent?.textContent?.includes("Position")) {
      currentPosition = textEntityListFormComponent.querySelector("select")?.value ?? "";
    }
  });

  // EvyAILogger.log({firstName, lastName, headline, currentPosition});

  return { firstName, lastName, headline, currentPosition };
};

const getArticleTitle = (articleElement: HTMLElement) => {
  const articleHeaderH1Element = articleElement?.querySelector(".reader-article-header__title");
  const articleTitle = trimAllWhiteSpaces(articleHeaderH1Element?.textContent ?? "");
  return articleTitle;
};

const getArticleAuthor = (articleElement: HTMLElement) => {
  const articleAuthorInfoContainer = articleElement?.querySelector(".reader-author-info__container");
  const articleAuthorInfoElement = articleAuthorInfoContainer?.querySelector(".reader-author-info__inner-container");
  const articleAuthorHeaderElement = articleAuthorInfoElement?.querySelector(
    ".reader-author-info__author-lockup--flex"
  );
  const articleAuthor = trimAllWhiteSpaces(articleAuthorHeaderElement?.textContent ?? "");
  return articleAuthor;
};

const getArticlePostDate = (articleElement: HTMLElement) => {
  const articleAuthorInfoContainer = articleElement?.querySelector(".reader-author-info__container");
  const articlePostDateElement = articleAuthorInfoContainer?.querySelector("time");
  const articlePostDate = trimAllWhiteSpaces(articlePostDateElement?.textContent ?? "");
  return articlePostDate;
};

const getArticleContent = (articleElement: HTMLElement) => {
  const articleContentElement = articleElement?.querySelector(".reader-article-content");
  const articleContentHTML = articleContentElement?.outerHTML ?? "";
  return articleContentHTML;
};

const getArticleRawText = (articleElement: HTMLElement): string => {
  // Ensure articleElement is valid and querySelector returns an HTMLElement
  const articleContentElement = articleElement.querySelector('article[itemtype^="http://"]') as HTMLElement | null;

  // Use innerText to get the text content of the article or default to an empty string
  const articleContentText = articleContentElement?.innerText ?? "";

  return articleContentText;
};

export const getArticleInfo = () => {
  const articleElement = document.querySelector(
    // ".reader__content"
    CLASS_NAMES.MAIN_SCAFFOLD_LAYOUT__MAIN
  ) as HTMLElement;
  console.log(articleElement)
  const articleTitle = getArticleTitle(articleElement);
  const articleAuthor = getArticleAuthor(articleElement);
  const articlePostDate = getArticlePostDate(articleElement);
  const articleContentHTML = getArticleContent(articleElement);
  const articleContentRawText = getArticleRawText(articleElement);

  // EvyAILogger.log("article info : ",{
  //   articleTitle,
  //   articleAuthor,
  //   articlePostDate,
  //   articleContentHTML,
  // });
  return { articleTitle, articleAuthor, articlePostDate, articleContentHTML, articleContentRawText };
};

export const getRecommendationInfo = () => {
  const recommendationDialogElement = document.getElementById("profile-edit-form-page-content");
  const nameElement = recommendationDialogElement?.querySelector(".artdeco-entity-lockup__title");
  const name = trimAllWhiteSpaces(nameElement?.textContent ?? "").split(" • ")[0];
  const relationshipSelectElement = recommendationDialogElement?.querySelector(
    "#text-entity-list-form-component-profileEditFormElement-WRITE-RECOMMENDATION-recommendation-1-relationship"
  );
  const relationship = (relationshipSelectElement as HTMLSelectElement)?.value;
  const positionAtThatMomentSelectElement = recommendationDialogElement?.querySelector(
    "#text-entity-list-form-component-profileEditFormElement-WRITE-RECOMMENDATION-recommendation-1-recommendeeEntity"
  );
  const positionAtTheTime = (positionAtThatMomentSelectElement as HTMLSelectElement)?.value;

  const profile: Profile = { fullName: name };
  const fullName = getNameFromProfilePage();
  if (fullName === name) {
    profile.headline = getTaglineFromProfilePage();
    profile.educations = getEducationFromProfilePage();
    profile.experiences = getExperiencesFromProfilePage();
    profile.licensesAndCertifications = getLicensesAndCertificationsFromProfilePage();
  }

  // EvyAILogger.log({profile, relationship, positionAtTheTime});

  return {
    profile,
    relationship: relationship !== "Please select" ? relationship : "",
    positionAtTheTime: positionAtTheTime !== "Please select" ? positionAtTheTime : "",
  };
};

export const getCurrentUserName = (commentBoxEditorParentElement: HTMLElement) => {
  const profileImageContainer = commentBoxEditorParentElement.querySelector(".feed-shared-avatar-image");
  const profileImageElement = profileImageContainer?.querySelector("img");
  const currentUserName = profileImageElement?.getAttribute("alt") ?? "";
  return currentUserName;
};

export function getProfileUrl() {
  let url: string | null = null;
  const element = document.querySelector(`a.${CLASS_NAMES.PROFILE_URL}`); // Select all <a> tags
  if (element) {
    url = element.getAttribute("href"); // Get URL
    if (url?.startsWith("/in/")) {
      const existingUrlInStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.LINKEDIN_URL);
      if (!existingUrlInStorage) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.LINKEDIN_URL, url);
        return url;
      } else if (existingUrlInStorage === url) {
        return url;
      } else if (existingUrlInStorage !== null && existingUrlInStorage !== url) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.LINKEDIN_URL, url);
        return url;
      }
    }
  }
  return url;
}
export function getProfileUrl_Top() {
  return new Promise((resolve, reject) => {
    const profileUrl = JSON.parse(
      Array.from(document.querySelectorAll("code")).find((c) => c.innerText.includes("publicIdentifier"))?.innerText ??
        "{}"
    )?.included?.[0]?.publicIdentifier;

    if (profileUrl && !profileUrl.startsWith("/in/")) {
      // Ensuring profileUrl is defined and doesn't start with "/in/"
      let profile_url = `https://www.linkedin.com/in/` + profileUrl;
      const existingUrlInStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.EXISTING_LINKEDIN_URL);
      if (!existingUrlInStorage || existingUrlInStorage !== profile_url) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.EXISTING_LINKEDIN_URL, profile_url);
      }
      resolve(profile_url);
    } else {
      resolve("");
    }
  });
}

export const getCurrentUserNameFromMessageList = () => {
  const profileImageContainer = document.querySelector("aside .msg-overlay-bubble-header__details");
  const profileImageElement = profileImageContainer?.querySelector("img");
  let currentUserName = profileImageElement?.getAttribute("alt") ?? "";
  // EvyAILogger.log({profileImageContainer, profileImageElement, currentUserName});
  if(!currentUserName) currentUserName = document.querySelector(CLASS_NAMES.COMMENT_AVATAR_IMAGE)?.getAttribute("alt")?.trim() || ""
  if(!currentUserName) currentUserName = document.querySelector(CLASS_NAMES.PROFILE_AVATAR_BUTTON)?.textContent?.trim() || "" 
  return currentUserName;
};

//sales message functions

export const getOtherUserNameOnSalesMessagePage = () => {
  const elementTags = document.getElementsByTagName("address");
  const userNameTag = document.querySelector('div.artdeco-entity-lockup__title span[data-anonymize="person-name"]');

  let personName = "";
  let otherUser = "";
  for (let i = elementTags.length - 1; i >= 0; i--) {
    const element = elementTags[i];

    const spanElement = element.querySelector('span[data-anonymize="person-name"]');

    if (spanElement && spanElement.textContent !== "You") {
      personName = spanElement.textContent || "";
      break;
    }
  }

  otherUser = userNameTag?.textContent?.trim() || "";
  return personName || otherUser || "";
};

export const getSalesMessageThreadContainer = () => {
  // let parentElement = messageBoxTextEditorContainer.parentElement;
  // while (parentElement) {
  //   const messageThreadContainer = parentElement.querySelector(
  //     `.${CLASS_NAMES.MESSAGE_THREAD_CONTAINER}`
  //   ) as HTMLElement;
  //   if (messageThreadContainer) {
  //     return messageThreadContainer;
  //   }
  //   parentElement = parentElement.parentElement;
  // }
  // return null;
};

export const getPreviousMessageOfSalesPage = (numberOfMessages: number) => {
  const articleElements = document.querySelectorAll(CLASS_NAMES.UL_LIST_STYLE_NONE);

  const messages: any[] = [];
  articleElements.forEach((articleElement) => {
    if (articleElement !== null) {
      const messageElement = articleElement.querySelector('p[data-anonymize="general-blurb"]');
      const senderElement = articleElement.querySelector("address span");

      if (messageElement && senderElement) {
        const message = messageElement.textContent?.trim();
        const sender = senderElement.textContent?.trim();

        const messageObject = {
          message,
          sender,
        };
        messages.push(messageObject);
      }
    }
  });

  return messages.reverse().slice(0, numberOfMessages);
};

export const getCurrentUserNameFromSalesPage = (commentBoxEditorParentElement: HTMLElement) => {
  const profileImageContainer = commentBoxEditorParentElement.querySelector(".feed-shared-avatar-image");
  const profileImageElement = profileImageContainer?.querySelector("img");
  const currentUserName = profileImageElement?.getAttribute("alt") ?? "";
  return currentUserName;
};

const getCurrentUserFromSalesPage = () => {
  let userName = "";

  const element = document.querySelector('button[data-control-name="view_user_menu_from_app_header"] span.a11y-text');

  if (element?.textContent) {
    userName = element.textContent.trim() || "";
  }

  return userName;
};

export const getExtractedProfileUrl = (url: string) => {
  const match = url.match(/https:\/\/www\.linkedin\.com\/in\/[^\/]+/);
  return match ? match[0] : null;
};
