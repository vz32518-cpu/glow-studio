import { useEffect, useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [glowMood, setGlowMood] = useState("");

    const moods = useMemo(
        () => ["Soft Glam", "Bold Queen", "Minimal Chic"],
        []
    );

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * moods.length);
        setGlowMood(moods[randomIndex]);
    }, [moods]);

    const goQuiz = useCallback(() => {
        navigate("/quiz");
    }, [navigate]);

    const goGallery = useCallback(() => {
        navigate("/gallery");
    }, [navigate]);

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-white to-pink-200">

            {/* background glow elements */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-16 left-10 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-24 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            </div>

            {/* main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

                {/* title */}
                <h1 className="text-5xl md:text-6xl font-bold text-pink-500">
                    Glow Salon
                </h1>

                {/* subtitle */}
                <p className="mt-3 text-lg text-gray-600">
                    Tap into your glow era
                </p>

                {/* mood box */}
                <div className="mt-6 px-5 py-3 bg-white/70 backdrop-blur rounded-xl shadow">
                    Today’s Glow Mood:
                    <span className="font-semibold text-pink-500 ml-2">
            {glowMood}
          </span>
                </div>

                {/* buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">

                    <button
                        onClick={goQuiz}
                        className="px-6 py-3 bg-pink-500 text-white rounded-full shadow hover:scale-105 transition"
                    >
                        Start Glow Journey
                    </button>

                    <button
                        onClick={goGallery}
                        className="px-6 py-3 bg-white text-pink-500 border border-pink-300 rounded-full shadow hover:scale-105 transition"
                    >
                        Pick Your Style
                    </button>

                </div>

                {/* feature tags */}
                <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-gray-600">

          <span className="px-3 py-1 bg-white/60 rounded-full shadow">
            Clean Work
          </span>

                    <span className="px-3 py-1 bg-white/60 rounded-full shadow">
            Modern Designs
          </span>

                    <span className="px-3 py-1 bg-white/60 rounded-full shadow">
            Professional Artists
          </span>

                </div>

            </div>
        </div>
    );
}