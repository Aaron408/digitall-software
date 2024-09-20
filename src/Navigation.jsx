import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";

const Navigation = () => {
    return(
        <Routes>
            <Route path="*" element={<h1>Tas perdido?</h1>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
        </Routes>
    );
}

export default Navigation;