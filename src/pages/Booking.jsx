import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking() {
    const navigate = useNavigate();

    const [step, setStep] = useState(1);

    const [artist, setArtist] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [done, setDone] = useState(false);

    const progress = useMemo(() => {
        return (step - 1) * 33.3;
    }, [step]);

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const confirmBooking = () => {
        setDone(true);
    };

    // SUCCESS SCREEN
    if (done) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-200 text-center px-4">

                <h1 className="text-4xl font-bold text-pink-500">
                    You are officially glowing soon
                </h1>

                <p className="text-gray-600 mt-3">
                    Booking confirmed. We are ready to transform your nails.
                </p>

                <div className="mt-6 flex gap-3 flex-wrap justify-center">

                    <button
                        onClick={() => navigate("/booking")}
                        className="px-4 py-2 bg-pink-500 text-white rounded-full"
                    >
                        Add to Calendar
                    </button>

                    <button
                        onClick={() => navigate("/about")}
                        className="px-4 py-2 bg-pink-200 rounded-full"
                    >
                        Directions
                    </button>

                    <button
                        onClick={() => navigate("/gallery")}
                        className="px-4 py-2 bg-white border rounded-full"
                    >
                        Back to Gallery
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen px-4 pt-24 bg-gradient-to-br from-pink-100 via-white to-purple-100">

            {/* TITLE */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-pink-500">
                    Become a Glow Client
                </h1>

                <p className="text-gray-600 mt-2">
                    Complete your booking in a few steps
                </p>
            </div>

            {/* PROGRESS */}
            <div className="max-w-xl mx-auto mb-10">
                <div className="w-full h-3 bg-pink-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-pink-400 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="text-center text-sm mt-2 text-gray-500">
                    Step {step} of 3
                </p>
            </div>

            {/* CARD */}
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">

                {/* STEP 1 - ARTIST */}
                {step === 1 && (
                    <div>
                        <h2 className="text-xl font-bold mb-2">
                            Step 1: Choose your Nail Artist
                        </h2>

                        <p className="text-gray-500 mb-6">
                            Select the artist who will work on your nails
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {[
                                {
                                    name: "Mia",
                                    role: "Soft Glam Specialist",
                                    desc: "Natural and clean nail designs",
                                },
                                {
                                    name: "Lana",
                                    role: "Bold Acrylic Expert",
                                    desc: "Strong and long nail styles",
                                },
                                {
                                    name: "Sara",
                                    role: "Luxury Nail Artist",
                                    desc: "Premium detailed designs",
                                },
                                {
                                    name: "Nina",
                                    role: "Cute Style Artist",
                                    desc: "Soft pastel nail looks",
                                },
                            ].map((a) => {
                                const selected = artist === a.name;

                                return (
                                    <button
                                        key={a.name}
                                        onClick={() => setArtist(a.name)}
                                        className={`p-4 rounded-xl border text-left transition ${
                                            selected
                                                ? "bg-pink-100 border-pink-400 scale-[1.02]"
                                                : "hover:scale-[1.02] hover:shadow-md"
                                        }`}
                                    >
                                        {selected && (
                                            <div className="text-pink-500 font-bold mb-1">
                                                Selected
                                            </div>
                                        )}

                                        <div className="font-semibold">{a.name}</div>
                                        <div className="text-pink-500 text-sm">{a.role}</div>
                                        <div className="text-sm text-gray-600 mt-2">
                                            {a.desc}
                                        </div>
                                    </button>
                                );
                            })}

                        </div>
                    </div>
                )}

                {/* STEP 2 - DATE + TIME */}
                {step === 2 && (
                    <div>
                        <h2 className="text-xl font-bold mb-2">
                            Step 2: Choose Date and Time
                        </h2>

                        <p className="text-gray-500 mb-6">
                            Pick your preferred appointment time
                        </p>

                        {/* DATE */}
                        <div className="mb-6">
                            <label className="block mb-2">Date</label>

                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full p-3 border rounded-xl"
                            />
                        </div>

                        {/* HOURS */}
                        <div>
                            <label className="block mb-3">Available Hours</label>

                            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">

                                {[
                                    "09:00",
                                    "10:00",
                                    "11:00",
                                    "12:00",
                                    "13:00",
                                    "14:00",
                                    "15:00",
                                    "16:00",
                                    "17:00",
                                    "18:00",
                                    "19:00",
                                ].map((h, i) => {
                                    const busy = [2, 6].includes(i);

                                    return (
                                        <button
                                            key={h}
                                            disabled={busy}
                                            onClick={() => setTime(h)}
                                            className={`p-3 rounded-xl border text-sm transition ${
                                                busy
                                                    ? "bg-gray-200 text-gray-400"
                                                    : time === h
                                                        ? "bg-pink-100 border-pink-400"
                                                        : "hover:bg-pink-50"
                                            }`}
                                        >
                                            {h}
                                            {busy && <div className="text-xs">Busy</div>}
                                        </button>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 3 - CONFIRM */}
                {step === 3 && (
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            Step 3: Confirm Booking
                        </h2>

                        <div className="bg-pink-50 p-4 rounded-xl space-y-2">
                            <p>Artist: {artist}</p>
                            <p>Date: {date}</p>
                            <p>Time: {time}</p>
                        </div>

                        <button
                            onClick={confirmBooking}
                            className="mt-5 w-full bg-pink-500 text-white py-3 rounded-xl"
                        >
                            Confirm Booking
                        </button>
                    </div>
                )}

                {/* NAVIGATION */}
                {!done && step < 3 && (
                    <div className="flex justify-between mt-6">

                        <button
                            onClick={prevStep}
                            disabled={step === 1}
                            className="px-4 py-2 border rounded-full"
                        >
                            Back
                        </button>

                        <button
                            onClick={nextStep}
                            disabled={
                                (step === 1 && !artist) ||
                                (step === 2 && (!date || !time))
                            }
                            className="px-4 py-2 bg-pink-500 text-white rounded-full"
                        >
                            Next
                        </button>

                    </div>
                )}

            </div>
        </div>
    );
}