import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const defaultLanguage = "en";

const getLanguageFromLocalStorage = () => {
    // Checks if 'window' exists and if we currently are on client side
    if (typeof window !== 'undefined') {
      const language = localStorage.getItem('lng');
      return language || defaultLanguage;
    }
  
    // If we are on server side, returns default value
    return defaultLanguage;
  };

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "title": "Orbiter Azimuth Calculator",
      "description": "Launch azimuth calculator for Orbiter 2016. Simplify your space missions by accurately calculating the azimuth required to reach your targets from any latitude. A practical tool for Orbiter pilots and enthusiasts.",
      "labels": {
        "currentLatitude": "Current latitude",
        "targetInclination": "Target inclination",
        "speedOnPlanet": "Speed on planet",
        "finalOrbitVelocity": "Final orbit velocity",
      },
      "actions": {
        "compute": "Compute",
        "clear": "Clear",
      }
    }
  },
  fr: {
    translation: {
      "title": "Orbiter Azimuth Calculator",
      "description": "Calculateur d'azimuth de lancement pour Orbiter 2016. Simplifiez vos missions spatiales en calculant avec précision l'azimuth nécessaire pour atteindre vos cibles depuis n'importe quelle latitude. Un outil pratique pour les pilotes et les passionnés d'Orbiter.",
      "labels": {
        "currentLatitude": "Latitude actuelle",
        "targetInclination": "Inclinaison de la cible",
        "speedOnPlanet": "Vitesse actuelle",
        "finalOrbitVelocity": "Vitesse orbitale désirée",
      },
      "actions": {
        "compute": "Calculer",
        "clear": "Vider",
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLanguageFromLocalStorage() || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;