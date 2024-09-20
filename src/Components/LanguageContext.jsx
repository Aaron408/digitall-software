/* eslint-disable react/prop-types */
// LanguageContext.js
import { createContext, useState, useContext } from 'react';
import translations from './Diccionario';

// Crear el contexto del idioma
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

// Proveedor del idioma
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
