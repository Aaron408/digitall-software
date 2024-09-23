/* eslint-disable react/no-unescaped-entities */
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdEmail } from "react-icons/md";

//Pages
import Header from "../components/Header";

//Diccionario
import Diccionario from "../Components/Diccionario";
import { useLanguage } from "../Components/LanguageContext";

const AboutUs = () => {
  const { language } = useLanguage(); // Obtenemos el idioma seleccionado
  const t = Diccionario[language]; // Traemos el json del idioma seleccionado

  return (
    <div className="min-h-screen flex flex-col bg-real-bg w-full">
      <Header />
      <div className="flex-grow p-4 sm:p-8 text-center text-white">
        <div className="container mx-auto">
          {/* Nuestro Equipo */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold mb-6">{t.ourTeamTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <img
                  src="/images/team-member1.jpg"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">Aaron Reyes Ruiz</h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <MdEmail className="text-yellow-500" />
                  <span>aaron@example.com</span>
                </div>
              </div>
              <div className="text-center">
                <img
                  src="/images/team-member2.jpg"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">
                  Angel Eduardo Anaya Becerril
                </h3>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <MdEmail className="text-yellow-500" />
                  <span>angel@example.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="mt-10">
            <h2 className="text-3xl font-semibold mb-6">{t.contactTitle}</h2>
            <div className="flex flex-col items-center space-y-6">
              {/* Teléfono */}
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-yellow-500 h-6 w-6" />
                <p className="text-lg">+52 4424225776</p>
              </div>

              {/* Correo electrónico */}
              <div className="flex items-center gap-4">
                <IoIosMail className="text-yellow-500 h-7 w-7" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@digitallsoftwaresolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg underline hover:text-yellow-400 transition"
                >
                  sales@digitalsoftwaresolutions.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-yellow-500 h-6 w-6" />
                <p className="text-lg">Querétaro, Qro, México.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
