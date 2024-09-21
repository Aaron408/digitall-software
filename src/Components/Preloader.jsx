import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/DASS-Logo.png";

export default function Preloader() {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true); // Iniciar el fade-out

      // Despues del fade out redirecciono
      setTimeout(() => {
        navigate('/home');
      }, 500);
    }, 2500); // Espero 2.5s

    return () => clearTimeout(timer); // Limpiar el setTimeout
  }, [navigate]);

  return (
    <div
      className={`flex bg-real-bg flex-col items-center justify-center min-h-screen w-full transition-all duration-500 ${
        isFading ? 'opacity-90' : 'opacity-100'
      }`}
      style={{ visibility: isFading ? 'visible' : 'visible' }}
    >
      <img
        src={logo}
        alt="Logo"
        className="mx-auto mb-2 w-1/4 mb-10 transition-all duration-500"
        style={{ opacity: isFading ? 0.8 : 1 }}
      />
      <div className="p-10 m-10">
        <h1 className="font-semibold text-white text-center">{LoadingDots()}</h1>
      </div>
    </div>
  );
}

const LoadingDots = () => {
  return (
    <div className="loading-dots">
      <span>Loading</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  );
};
