import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Quiz from "./pages/Quiz";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </>
    );
}