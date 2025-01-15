import { useState, useEffect } from "react";
import { sendMessageToExtensionPages } from "../../Utils/extensionUtils";
import { MESSAGE_ACTION } from "../../Config";
export const useShowOlderVersion = (): boolean => {
  const [showOlderVersion, setShowOlderVersion] = useState<boolean>(false);

  useEffect(() => {
    const checkVersion = async () => {
      const response = await sendMessageToExtensionPages(MESSAGE_ACTION.OLDER_VERSION_CHECK, {});
      setShowOlderVersion(response);
    };

    checkVersion();
  }, []);

  return showOlderVersion;
};
