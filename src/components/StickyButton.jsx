import { Link } from "react-router-dom";

export default function StickyButton() {
    return (
        <Link
            to="/booking"
            className="fixed bottom-6 right-6 bg-pink-500 text-white px-5 py-3 rounded-full shadow-xl"
        >
            Book Now
        </Link>
    );
}