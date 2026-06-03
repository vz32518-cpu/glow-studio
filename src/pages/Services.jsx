import { useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Services() {
    const navigate = useNavigate();
    const [filter, setFilter] = useState("all");

    const services = [
        {
            title: "Soft Glow Manicure",
            vibe: "soft",
            description: "Natural, clean, elegant look. Perfect everyday glow.",
            duration: "30–45 min",
            price: "€20",
            badge: "Sparkle Most Loved",
        },
        {
            title: "Boss Energy Acrylics",
            vibe: "bold",
            description: "Long, bold, powerful nails. Confidence boost style.",
            duration: "60–90 min",
            price: "€35",
            badge: "Fire Top Choice This Week",
        },
        {
            title: "Glass Shine Nails",
            vibe: "premium",
            description: "Ultra glossy mirror finish with luxury aesthetic.",
            duration: "60 min",
            price: "€30",
            badge: "Diamond Premium Glow",
        },
        {
            title: "Fairy Gel Set",
            vibe: "natural",
            description: "Soft colors, delicate designs, light natural feel.",
            duration: "45–60 min",
            price: "€28",
            badge: "Leaf Soft Girl Favorite",
        },
    ];

    const filtered = useMemo(() => {
        if (filter === "all") return services;
        return services.filter((s) => s.vibe === filter);
    }, [filter]);

    const goBooking = useCallback(() => {
        window.scrollTo(0, 0);
        navigate("/booking");
    }, [navigate]);

    const setAll = useCallback(() => setFilter("all"), []);
    const setSoft = useCallback(() => setFilter("soft"), []);
    const setBold = useCallback(() => setFilter("bold"), []);
    const setPremium = useCallback(() => setFilter("premium"), []);
    const setNatural = useCallback(() => setFilter("natural"), []);

    return (
        <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-pink-100 via-white to-pink-200">

            {/* TITLE */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-pink-500">
                    Pick Your Glow Power
                </h1>

                <p className="text-gray-600 mt-2">
                    Choose your transformation level
                </p>

                <p className="text-gray-500 text-sm mt-1">
                    Every set is a personality upgrade
                </p>
            </div>

            {/* TRENDING BANNER */}
            <div className="max-w-4xl mx-auto mb-8 bg-pink-200 text-pink-700 px-4 py-3 rounded-xl shadow text-center">
                Trending now: Boss Energy Acrylics — most chosen this week
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">

                <button onClick={setAll} className="px-4 py-2 bg-white rounded-full shadow">
                    All
                </button>

                <button onClick={setSoft} className="px-4 py-2 bg-white rounded-full shadow">
                    Soft
                </button>

                <button onClick={setBold} className="px-4 py-2 bg-white rounded-full shadow">
                    Bold
                </button>

                <button onClick={setPremium} className="px-4 py-2 bg-white rounded-full shadow">
                    Premium
                </button>

                <button onClick={setNatural} className="px-4 py-2 bg-white rounded-full shadow">
                    Natural
                </button>

            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

                {filtered.map((service, index) => (
                    <div
                        key={index}
                        className="group relative bg-white rounded-xl shadow p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                    >

                        {/* glow effect background */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-pink-100 to-pink-200 blur-2xl"></div>

                        <div className="relative z-10">

                            {/* badge */}
                            <div className="text-xs text-pink-600 mb-2">
                                {service.badge}
                            </div>

                            {/* title */}
                            <h2 className="text-xl font-bold text-gray-800">
                                {service.title}
                            </h2>

                            {/* description */}
                            <p className="text-gray-600 mt-2">
                                {service.description}
                            </p>

                            {/* meta */}
                            <div className="flex justify-between mt-4 text-sm text-gray-500">
                                <span>{service.duration}</span>
                                <span>{service.price}</span>
                            </div>

                            {/* BOOK BUTTON */}
                            <button
                                onClick={goBooking}
                                className="mt-5 opacity-0 group-hover:opacity-100 transition bg-pink-500 text-white px-4 py-2 rounded-full w-full"
                            >
                                Book This Glow
                            </button>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}