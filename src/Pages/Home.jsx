/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

import Header from "../components/Header";
import logo from "../Images/DASS-Logo.png";
import objectivesImage from "../Images/Img1.png";
import payImage from "../Images/Img2.png";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

//Diccionario
import Diccionario from "../Components/Diccionario";
import { useLanguage } from "../Components/LanguageContext";

const Home = () => {
  const { language } = useLanguage(); // Obtenemos el idioma seleccionado
  const t = Diccionario[language]; // Traemos el json del idioma seleccionado
  const [bouncing, setBouncing] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBouncing((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      setShowArrow(scrollHeight > clientHeight);
    };

    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-real-bg w-full">
      <Header />
      <div className="flex-grow p-4 sm:p-8 text-center text-white">
        <div className="container mx-auto py-6">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto mb-2 w-3/4 sm:w-2/4 md:w-2/4 lg:w-1/4 mb-10"
          />
          <h1 className="text-3xl font-bold">{t.title}</h1>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between my-8">
            <div className="lg:w-1/2 flex flex-col justify-start mt-5">
              <h2 className="text-custom-gold text-lg text-center lg:text-center text-xl font-bold">
                {t.objectivesHeading}
              </h2>
              <p className="text-justify mt-2">{t.objectivesText}</p>
            </div>

            <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-8 flex justify-center lg:justify-end">
              <img
                src={objectivesImage}
                alt="Objectives"
                className="w-full sm:w-3/4 lg:w-3/4 mb-4"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-start lg:justify-between my-8">
            <div className="lg:w-1/2 flex flex-col justify-start mt-5">
              <h2 className="text-custom-gold text-lg text-center lg:text-center text-xl font-bold">
                {t.payHeading}
              </h2>
              <p className="text-justify mt-2">{t.payText}</p>
            </div>

            <div className="lg:w-1/2 mt-4 lg:mt-0 lg:mr-8 flex justify-center lg:justify-start">
              <img
                src={payImage}
                alt="Pay As You Need"
                className="w-full sm:w-3/4 lg:w-3/4 mb-4"
              />
            </div>
          </div>
        </div>

        {showArrow && (
          <div className="fixed bottom-0 left-0 right-0 md:hidden">
            {/* Flecha */}
            <div
              className={`flex justify-center items-center transition-transform ${
                bouncing ? "animate-bounce" : ""
              }`}
              style={{ position: "relative", bottom: "-22px" }} // Ajusta la posición de la flecha
            >
              <MdOutlineKeyboardDoubleArrowDown className="h-8 w-8 text-custom-gold" />
            </div>
            {/* Sombra dorada */}
            <div className="h-6 bg-gradient-to-t from-real-gold to-transparent shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
