import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { PEXELS_API, PEXELS_KEY } from "../api/glowApi";

export default function Gallery() {
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("all");
    const [selected, setSelected] = useState(null);
    const [saved, setSaved] = useState([]);
    const [error, setError] = useState(null);

    // FETCH
    useEffect(() => {
        fetch(PEXELS_API, {
            headers: { Authorization: PEXELS_KEY },
        })
            .then((res) => res.json())
            .then((res) => {
                const photos = res.photos.slice(0, 20).map((p, i) => ({
                    id: p.id,
                    name: `Nail ${i + 1}`,
                    desc: p.alt || "Nail inspiration",
                    img: p.src.large,
                    vibe: ["cute", "bold", "elegant", "crazy"][i % 4],
                }));
                setData(photos);
            })
            .catch(() => setError("Failed to load gallery"));
    }, []);

    // FILTER
    const filtered = useMemo(
        () => (filter === "all" ? data : data.filter((x) => x.vibe === filter)),
        [data, filter]
    );

    // SAVE
    const toggleSave = useCallback((item) => {
        setSaved((prev) =>
            prev.find((x) => x.id === item.id)
                ? prev.filter((x) => x.id !== item.id)
                : [...prev, item]
        );
    }, []);

    const goBooking = useCallback(() => {
        setSelected(null);
        navigate("/booking");
    }, []);

    if (error)
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                {error}
            </div>
        );

    return (
        <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-pink-100 via-white to-purple-100">

            {/* TITLE */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-pink-500">Glow Wall</h1>
                <p className="text-gray-600 mt-2">Find your next nail obsession</p>
            </div>

            {/* FILTERS */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
                {["all", "cute", "bold", "elegant", "crazy"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full ${
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
                    <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">

                        <img src={item.img} className="w-full h-60 object-cover" />

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
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
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
                                Save
                            </button>

                            <button
                                onClick={goBooking}
                                className="bg-pink-500 text-white px-4 py-2 rounded-full"
                            >
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}