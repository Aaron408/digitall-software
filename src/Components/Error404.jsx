import { Link } from "react-router-dom";

//Dicionario
import { useLanguage } from "./LanguageContext";

const Error404 = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">{language === "en" ? "Page Not Found" : "Página no encontrada"}</h2>
      <p className="text-xl mb-8 text-center max-w-md">
        {language === "en" ? "Oops! The page you're looking for doesn't exist or has been moved." : "Vaya! La página que estás buscando no existe o fue removida."}
      </p>
      <Link
        to="/"
        className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded transition duration-300"
      >
        {language === "en" ? "Go to Homepage" : "Ir a la página principal"}
      </Link>
    </div>
  );
};

export default Error404;
