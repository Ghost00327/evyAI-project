import * as React from "react";
import browser from "webextension-polyfill";

import "./styles.scss";

function openWebPage(url) {
  return browser.tabs.create({ url });
}

const Popup = () => {
  return (
    <section id="popup">
      <h2>WEB-EXTENSION-STARTER</h2>
      <button
        id="options__button"
        type="button"
        onClick={() => {
          return openWebPage("options.html");
        }}
      >
        Options Page
      </button>
    </section>
  );
};

export default Popup;
