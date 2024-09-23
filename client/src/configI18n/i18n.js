import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../../public/locales/en/translation.json';
import translationES from '../../public/locales/es/traslation.json';

const resources = {
  en: { translation: translationEN },
  es: { translation: translationES }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;

