import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Preloader from "./Components/Preloader";
import Services from "./Pages/Services";
import Error404 from "./Components/Error404";

const Navigation = () => {
    return(
        <Routes>
            <Route path="*" element={<Error404/>}/>
            <Route path="/" element={<Preloader/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/services" element={<Services/>} />
        </Routes>
    );
}

export default Navigation;