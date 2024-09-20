import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { language, switchLanguage } = useLanguage(); // Cambia el idioma con switchLanguage

  const handleLanguageChange = (e) => {
    switchLanguage(e.target.value); // Usa switchLanguage en lugar de setLanguage
  };

  return (
    <header className="bg-header-gradient p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <a href="#services" className="hover:underline">
          {language === "en" ? "Services" : "Servicios"}
        </a>
        <a href="#about" className="hover:underline">
          {language === "en" ? "About Us" : "Sobre Nosotros"}
        </a>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="hidden sm:block">
          {language === "en" ? "Contact Us" : "Contáctanos"}
        </h1>
        <a href="mailto:email@example.com" className="ml-5">
          <IoIosMail className="h-6 w-8" />
        </a>
        <a href="https://facebook.com">
          <FaFacebook className="h-6 w-6" />
        </a>

        {/* Selector de idioma */}
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-transparent border border-white text-white rounded p-1"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
