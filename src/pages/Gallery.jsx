import { useEffect, useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const galleryData = [
    {
        id: 1,
        name: "Golden Queen Set",
        vibe: "elegant",
        desc: "Luxury gold chrome nails with crystal accents. Perfect for elegant events.",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371",
    },
    {
        id: 2,
        name: "Strawberry Dream Nails",
        vibe: "cute",
        desc: "Soft pink aesthetic nails with strawberry glow style.",
        img: "https://images.unsplash.com/photo-1610992015732-2449b0a0f3b6",
    },
    {
        id: 3,
        name: "Fire Chrome Set",
        vibe: "bold",
        desc: "Strong metallic chrome nails with fiery energy.",
        img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6f15",
    },
    {
        id: 4,
        name: "Soft Fairy Tips",
        vibe: "cute",
        desc: "Minimal soft glow nails with fairy aesthetic.",
        img: "https://images.unsplash.com/photo-1617191519105-d07b98b4f1f5",
    },
    {
        id: 5,
        name: "Neon Party Glow",
        vibe: "crazy",
        desc: "Bright neon nails for bold nightlife energy.",
        img: "https://images.unsplash.com/photo-1610992015880-5c2f2b0d3a5a",
    },
];

export default function Gallery() {
    const navigate = useNavigate();

    const [filter, setFilter] = useState("all");
    const [selected, setSelected] = useState(null);
    const [saved, setSaved] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem("savedGlow");
        if (data) setSaved(JSON.parse(data));
    }, []);

    useEffect(() => {
        localStorage.setItem("savedGlow", JSON.stringify(saved));
    }, [saved]);

    const filtered = useMemo(() => {
        if (filter === "all") return galleryData;
        return galleryData.filter((item) => item.vibe === filter);
    }, [filter]);

    const openModal = useCallback((item) => {
        setSelected(item);
    }, []);

    const closeModal = useCallback(() => {
        setSelected(null);
    }, []);

    const toggleSave = useCallback((item) => {
        setSaved((prev) => {
            const exists = prev.find((p) => p.id === item.id);
            if (exists) return prev.filter((p) => p.id !== item.id);
            return [...prev, item];
        });
    }, []);

    const goBooking = useCallback(() => {
        setSelected(null);
        window.scrollTo(0, 0);
        navigate("/booking");
    }, [navigate]);

    const randomPick = useCallback(() => {
        const random = galleryData[Math.floor(Math.random() * galleryData.length)];
        setSelected(random);
    }, []);

    const matchVibe = useCallback(() => {
        const vibes = ["cute", "bold", "elegant", "crazy"];
        const pick = vibes[Math.floor(Math.random() * vibes.length)];
        setFilter(pick);
    }, []);

    return (
        <div className="min-h-screen px-4 pt-24 bg-gradient-to-br from-pink-100 via-white to-purple-100">

            {/* TITLE */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-pink-500">
                    Glow Wall
                </h1>

                <p className="text-gray-600 mt-2">
                    Find your next nail obsession
                </p>

                <p className="text-gray-400 text-sm mt-1">
                    Tap. Save. Glow. Repeat.
                </p>
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">

                {["all", "cute", "bold", "elegant", "crazy"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full transition ${
                            filter === f
                                ? "bg-pink-500 text-white shadow-lg"
                                : "bg-white text-gray-600"
                        }`}
                    >
                        {f}
                    </button>
                ))}

            </div>

            {/* ACTION BUTTONS */}
            <div className="flex justify-center gap-4 mb-10">

                <button
                    onClick={randomPick}
                    className="px-4 py-2 bg-purple-200 rounded-full hover:scale-105 transition"
                >
                    Random Glow Pick
                </button>

                <button
                    onClick={matchVibe}
                    className="px-4 py-2 bg-pink-200 rounded-full hover:scale-105 transition"
                >
                    Match My Vibe
                </button>

            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {filtered.map((item) => (
                    <div
                        key={item.id}
                        className="relative group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg transition hover:scale-105 hover:shadow-pink-300"
                    >

                        <img
                            src={item.img}
                            alt={item.name}
                            className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                            onClick={() => openModal(item)}
                        />

                        {/* SAVE HEART */}
                        <button
                            onClick={() => toggleSave(item)}
                            className="absolute top-3 right-3 text-xl"
                        >
                            {saved.find((s) => s.id === item.id) ? "♥" : "♡"}
                        </button>

                        {/* HOVER OVERLAY */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">

                            <p className="text-white font-bold">{item.name}</p>

                            <button
                                onClick={() => openModal(item)}
                                className="mt-2 bg-pink-500 text-white px-3 py-1 rounded-full"
                            >
                                View Glow
                            </button>

                        </div>

                    </div>
                ))}

            </div>

            {/* MODAL */}
            {selected && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

                    <div className="bg-white max-w-lg w-full rounded-xl p-6 relative">

                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-xl"
                        >
                            ✕
                        </button>

                        <img
                            src={selected.img}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />

                        <h2 className="text-2xl font-bold">{selected.name}</h2>

                        <p className="text-gray-600 mt-2">{selected.desc}</p>

                        <div className="flex gap-3 mt-5">

                            <button
                                onClick={() => toggleSave(selected)}
                                className="px-4 py-2 bg-pink-200 rounded-full"
                            >
                                Save Design
                            </button>

                            <button
                                onClick={goBooking}
                                className="px-4 py-2 bg-pink-500 text-white rounded-full"
                            >
                                Book This Look
                            </button>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}