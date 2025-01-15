import { MESSAGE_ACTION } from "../Config";
import { sentryClient } from "../Sentry/sentryClient";
import { sendMessageToExtensionPages } from "./extensionUtils";
export const saveCommand = async ({
  activityType,
  activityData,
  generatedText,
  id,
}: {
  activityType: any;
  activityData: any;
  generatedText: any;
  id: any;
}) => {
  try {
    const { docId, error } = await sendMessageToExtensionPages(MESSAGE_ACTION.SAVE_COMMAND, {
      activityType: activityType,
      activityData: activityData,
      generatedText: generatedText,
      id: id,
    });
    if (error === null && docId?.length > 0) {
      return [true, docId];
    } else {
      return [false, error];
    }
  } catch (error) {
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "saveCommand-2",
        },
      },
    });
    return [false, "Something Went"];
  }
};
export const unsaveCommand = async ({ documentId }: { documentId: any }) => {
  try {
    const { docId, error } = await sendMessageToExtensionPages(MESSAGE_ACTION.REMOVE_SAVED_COMMAND, {
      documentId: documentId,
    });
    if (error === null && docId?.length > 0) {
      return [true, docId];
    } else {
      return [false, error];
    }
  } catch (error) {
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "unSaveCommand-2",
        },
      },
    });
    return [false, "Something Went"];
  }
};

export const isCommandSaved = async ({ summaryId }: { summaryId: any }) => {
  try {
    const status = await sendMessageToExtensionPages(MESSAGE_ACTION.IS_COMMAND_SAVED, {
      summaryId: summaryId,
    });
    return status;
  } catch (error) {
    sentryClient.captureException(error, {
      captureContext: {
        extra: {
          functionName: "isCommandSaved",
        },
      },
    });
    return false;
  }
};
