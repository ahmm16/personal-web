import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./components/Routes";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en_translations } from "./locales/en";
import { es_translations } from "./locales/es";
// I18N
// if code increments move to a helper
const resources = {
  en: {
    translation: en_translations,
  },
  es: {
    translation: es_translations,
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",
  });
const browserHistory = createBrowserHistory();

function App() {
  return (
    <BrowserRouter history={browserHistory} basename="/personal-web/">
      <Routes />
    </BrowserRouter>
  );
}

export default App;
