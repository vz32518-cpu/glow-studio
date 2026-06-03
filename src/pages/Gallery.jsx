import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const galleryData = [
    {
        id: 1,
        name: "Golden Queen Set",
        vibe: "elegant",
        desc: "Luxury gold chrome nails with crystal accents.",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        name: "Strawberry Dream Nails",
        vibe: "cute",
        desc: "Soft pink aesthetic nails.",
        img: "https://images.unsplash.com/photo-1610992015732-2449b0a0f3b6?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        name: "Fire Chrome Set",
        vibe: "bold",
        desc: "Strong metallic chrome nails.",
        img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6f15?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        name: "Soft Fairy Tips",
        vibe: "cute",
        desc: "Minimal soft glow nails.",
        img: "https://images.unsplash.com/photo-1617191519105-d07b98b4f1f5?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        name: "Neon Party Glow",
        vibe: "crazy",
        desc: "Bright neon nails for bold energy.",
        img: "https://images.unsplash.com/photo-1610992015880-5c2f2b0d3a5a?auto=format&fit=crop&w=800&q=80",
    },
];

export default function Gallery() {
    const navigate = useNavigate();

    const [filter, setFilter] = useState("all");
    const [selected, setSelected] = useState(null);
    const [saved, setSaved] = useState([]);

    // FILTER DATA
    const filtered = useMemo(() => {
        if (filter === "all") return galleryData;
        return galleryData.filter((item) => item.vibe === filter);
    }, [filter]);

    // SAVE / UNSAVE
    const toggleSave = useCallback((item) => {
        setSaved((prev) => {
            const exists = prev.find((p) => p.id === item.id);
            if (exists) return prev.filter((p) => p.id !== item.id);
            return [...prev, item];
        });
    }, []);

    // GO BOOKING
    const goBooking = useCallback(() => {
        setSelected(null);
        navigate("/booking");
    }, [navigate]);

    return (
        <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-pink-100 via-white to-purple-100">

            {/* TITLE */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-pink-500">
                    Glow Wall
                </h1>
                <p className="text-gray-600 mt-2">
                    Find your next nail obsession
                </p>
            </div>

            {/* FILTERS */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">

                {["all", "cute", "bold", "elegant", "crazy"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full transition ${
                            filter === f
                                ? "bg-pink-500 text-white"
                                : "bg-white text-gray-600"
                        }`}
                    >
                        {f}
                    </button>
                ))}

            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {filtered.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-pink-300 transition"
                    >

                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-60 object-cover"
                            loading="lazy"
                        />

                        <div className="p-4">

                            <h2 className="font-bold">{item.name}</h2>
                            <p className="text-sm text-gray-500">{item.desc}</p>

                            <div className="flex justify-between mt-4">

                                <button
                                    onClick={() => toggleSave(item)}
                                    className="text-pink-500"
                                >
                                    {saved.find((s) => s.id === item.id)
                                        ? "Saved"
                                        : "Save"}
                                </button>

                                <button
                                    onClick={() => setSelected(item)}
                                    className="bg-pink-500 text-white px-3 py-1 rounded-full"
                                >
                                    View
                                </button>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

            {/* MODAL */}
            {selected && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

                    <div className="bg-white p-6 rounded-xl max-w-md w-full relative">

                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-3 right-3"
                        >
                            ✕
                        </button>

                        <img
                            src={selected.img}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />

                        <h2 className="text-xl font-bold">{selected.name}</h2>
                        <p className="text-gray-600 mt-2">{selected.desc}</p>

                        <div className="flex gap-3 mt-5">

                            <button
                                onClick={() => toggleSave(selected)}
                                className="bg-pink-200 px-4 py-2 rounded-full"
                            >
                                Save Design
                            </button>

                            <button
                                onClick={goBooking}
                                className="bg-pink-500 text-white px-4 py-2 rounded-full"
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