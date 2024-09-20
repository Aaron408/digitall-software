/* eslint-disable react/no-unescaped-entities */
import "./index.css"; // Asegúrate de importar el CSS
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { LanguageProvider } from "./Components/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
