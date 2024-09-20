/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';
import translations from './Diccionario';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Idioma por defecto (inglés)

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => {
    const keys = key.split('.');
    return keys.reduce((o, i) => (o ? o[i] : null), translations[language]);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
