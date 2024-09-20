/* eslint-disable react/no-unescaped-entities */
import Header from "../components/Header";
import logo from "../Images/DASS-Logo.png";
import objectivesImage from "../Images/Img1.png";
import payImage from "../Images/Img2.png";

//Diccionario
import Diccionario from "../Components/Diccionario";
import { useLanguage } from "../Components/LanguageContext";

const Home = () => {
  const { language } = useLanguage(); // Obtenemos el idioma seleccionado
  const t = Diccionario[language]; // Traemos el json del idioma seleccionado

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow bg-custom-black p-8 text-center bg-black text-white">
        <div className="py-6">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto mb-2 w-3/4 sm:w-2/4 md:w-2/4 lg:w-1/4 mb-10"
          />
          <h1 className="text-3xl font-bold">{t.title}</h1>
        </div>

        <div className="sm:mx-3 md:mx-5">
          {/* OUR OBJECTIVES Section */}
          <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between my-8">
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-start mt-5">
              <h2 className="text-custom-gold text-lg text-end sm:text-end md:text-center lg:text-center text-xl font-bold">
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

          {/* PAY AS YOU NEED Section */}
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-start lg:justify-between my-8">
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-start mt-5">
              <h2 className="text-custom-gold text-lg text-start sm:text-start md:text-center lg:text-center text-xl font-bold">
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
      </div>
    </div>
  );
};

export default Home;