import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

                <h1 className="font-bold text-pink-500">Glow Salon</h1>

                <div className="flex gap-4 text-sm font-medium">
                    <Link to="/" className="hover:text-pink-500">Home</Link>
                    <Link to="/quiz" className="hover:text-pink-500">Quiz</Link>
                    <Link to="/services" className="hover:text-pink-500">Services</Link>
                    <Link to="/gallery" className="hover:text-pink-500">Gallery</Link>
                    <Link to="/booking" className="hover:text-pink-500">Booking</Link>
                    <Link to="/about" className="hover:text-pink-500">About</Link>
                </div>

            </div>
        </div>
    );
}