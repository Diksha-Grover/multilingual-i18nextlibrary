import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend)
// Backend will fetch the data
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		backend: {
			loadPath: "/i18n/{{ns}}/{{lng}}.json",
		},
		fallbackLng: "en",
		// if any of the langauges are not chosen or if there is some issue then english language will be chosen
		debug: false,
		// debug shows what is happening in the console
		ns: ["common", "home", "profile"],

		interpolation: {
			escapeValue: false,
			formatSeparator: ",",
		},
		react: {
			wait: true,
		},
	});

export default i18n;
