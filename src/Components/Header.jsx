import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    switchLanguage(e.target.value);
  };

  return (
    <header className="bg-gradient-to-r from-black to-real-gold text-white flex justify-end md:justify-between items-center p-4">
      <div className="flex gap-4 space-x-5 mx-10 md:flex hidden ">
        <a href="/services" className="hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-yellow-600 p-2 rounded">
          {language === "en" ? "Services" : "Servicios"}
        </a>
        <a href="/about" className="hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-yellow-600 p-2 rounded">
          {language === "en" ? "About Us" : "Sobre Nosotros"}
        </a>
      </div>
      <div className="flex items-center gap-4 space-x-5 mx-5 md:flex hidden">
        <h1 className="hidden sm:block hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-black p-2 rounded">
          {language === "en" ? "Contact Us" : "Contáctanos"}
        </h1>
        <a href="mailto:email@example.com" className="hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-black p-2 rounded">
          <IoIosMail className="h-6 w-8" />
        </a>
        <a href="https://facebook.com" className="hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-black p-2 rounded">
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
      <button className="md:hidden">
        {/* The new display menu for mobile devices */}
        Menu
      </button>
    </header>
  );
};

export default Header;
