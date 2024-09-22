import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useLanguage } from "./LanguageContext";
import { MdMenu } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Header = () => {
  const { language, switchLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    e.stopPropagation(); // Evita que el menú se cierre
    switchLanguage(e.target.value);
  };

  return (
    <header className="bg-gradient-to-r from-black to-real-gold text-white flex justify-end md:justify-between items-center p-4">
      <div className="flex gap-4 space-x-5 mx-10 md:flex hidden ">
        <a
          href="/services"
          className="hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-yellow-600 p-2 rounded"
        >
          {language === "en" ? "Services" : "Servicios"}
        </a>
        <a
          href="/about"
          className="hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-yellow-600 p-2 rounded"
        >
          {language === "en" ? "About Us" : "Sobre Nosotros"}
        </a>
      </div>
      <div className="flex items-center gap-4 space-x-5 mx-5 md:flex hidden">
        <h1 className="hidden sm:block hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-black p-2 rounded">
          {language === "en" ? "Contact Us" : "Contáctanos"}
        </h1>
        <a
          href="mailto:email@example.com"
          className="hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-black p-2 rounded"
        >
          <IoIosMail className="h-6 w-8" />
        </a>
        <a
          href="https://facebook.com"
          className="hover:-translate-y-2 transition-all duration-500 ease-out hover:shadow-md hover:shadow-black p-2 rounded"
        >
          <FaFacebook className="h-6 w-6" />
        </a>

        {/* Selector de idioma */}
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-gradient-to-r from-real-gold to-real-gold text-white border rounded p-1 hover:outline-none hover:ring-2 hover:ring-yellow-400 transition duration-200"
          style={{
            backgroundColor: "#1f2937",
            color: "white",
          }}
        >
          <option
            value="en"
            className="bg-gray-800 text-white hover:bg-gray-700 hover:text-yellow-400"
          >
            {language === "en" ? "English" : "Inglés"}
          </option>
          <option
            value="es"
            className="bg-gray-800 text-white hover:bg-gray-700 hover:text-yellow-400"
          >
            {language === "en" ? "Spanish" : "Español"}
          </option>
        </select>
      </div>

      {/* Menú para dispositivos móviles */}
      <Menu as="div" className="relative md:hidden">
        <MenuButton className="focus:outline-none">
          <MdMenu className="h-7 w-7" />
        </MenuButton>
        <MenuItems className="absolute right-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg py-1 z-50">
          <MenuItem>
            {({ active }) => (
              <a
                href="/services"
                className={`${
                  active ? "bg-gray-800" : ""
                } block px-4 py-2 text-sm`}
              >
                {language === "en" ? "Services" : "Servicios"}
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <a
                href="/about"
                className={`${
                  active ? "bg-gray-800" : ""
                } block px-4 py-2 text-sm`}
              >
                {language === "en" ? "About Us" : "Sobre Nosotros"}
              </a>
            )}
          </MenuItem>

          <div className="border-t border-gray-600 my-1"></div>
          <MenuItem disabled>
            <div className="block px-4 py-2 text-sm font-bold text-yellow-400 ml-4">
              {language === "en" ? "Contact Us" : "Contáctanos"}
            </div>
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <div>
                <a
                  href="mailto:email@example.com"
                  className={`${
                    active ? "bg-gray-800" : ""
                  } flex items-center gap-2 px-4 py-2 text-sm`}
                >
                  {language === "en" ? "Email" : "Correo Electrónico"}{" "}
                  <IoIosMail className="h-6 w-8" />
                </a>
              </div>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <div>
                <a
                  href="https://facebook.com"
                  className={`${
                    active ? "bg-gray-800" : ""
                  } flex items-center gap-2 px-4 py-2 text-sm`} // Usamos flex y gap
                >
                  Facebook <FaFacebook className="h-6 w-4" />
                </a>
              </div>
            )}
          </MenuItem>

          <div className="border-t border-gray-600 my-1"></div>
          <MenuItem disabled>
            <div className="block px-4 py-2 text-sm font-bold text-yellow-400 ml-4">
              {language === "en" ? "Language" : "Idioma"}
            </div>
          </MenuItem>
          <MenuItem>
            {({ active, close }) => (
              <div
                className={`${
                  active ? "bg-gray-800" : ""
                } block px-4 py-2 text-sm`}
              >
                <select
                  value={language}
                  onChange={(e) => handleLanguageChange(e, close)}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-transparent border-none text-white w-full"
                  style={{
                    backgroundColor: active ? "#1f2937" : "black",
                  }}
                >
                  <option
                    value="en"
                    className="bg-black text-white hover:bg-gray-700 hover:text-yellow-400"
                  >
                    {language === "en" ? "English" : "Inglés"}
                  </option>
                  <option
                    value="es"
                    className="bg-black text-white hover:bg-gray-700 hover:text-yellow-400"
                  >
                    {language === "en" ? "Spanish" : "Español"}
                  </option>
                </select>
              </div>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </header>
  );
};

export default Header;
