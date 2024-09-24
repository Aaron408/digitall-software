import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Preloader from "./Components/Preloader";
import Services from "./Pages/Services";

const Navigation = () => {
    return(
        <Routes>
            <Route path="*" element={<h1>Tas perdido?</h1>}/>
            <Route path="/" element={<Preloader/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/services" element={<Services/>} />
        </Routes>
    );
}

export default Navigation;