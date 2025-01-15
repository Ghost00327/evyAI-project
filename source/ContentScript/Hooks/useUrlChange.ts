import { useState, useEffect } from "react";

export const useUrlChange = () => {
  const [url, setUrl] = useState(window.location.href);

  useEffect(() => {
    const handlePopState = () => {
      setUrl(window.location.href);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    // MutationObserver to watch for changes in the body element
    const observer = new MutationObserver((mutations) => {
      for (let mutation of mutations) {
        if (mutation.type === "childList") {
          handlePopState();
          break;
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  return url;
};
