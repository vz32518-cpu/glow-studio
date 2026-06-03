import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
    const navigate = useNavigate();

    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({
        vibe: "",
        extra: "",
        color: "",
    });

    const questions = [
        {
            title: "What’s your vibe today?",
            key: "vibe",
            options: ["Soft and cute", "Bold and loud", "Clean and classy"],
        },
        {
            title: "How extra are you?",
            key: "extra",
            options: ["Low", "Medium", "Maximum"],
        },
        {
            title: "Pick your color mood",
            key: "color",
            options: ["Pink glow", "White minimal", "Dark glam"],
        },
    ];

    const current = questions[step];

    const selectAnswer = (value) => {
        setAnswers((prev) => ({
            ...prev,
            [current.key]: value,
        }));
    };

    const nextStep = useCallback(() => {
        if (!answers[current.key]) {
            return;
        }

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setStep(step + 1);
        }
    }, [step, answers, current]);

    const prevStep = () => {
        if (step > 0) setStep(step - 1);
    };

    const result = useMemo(() => {
        const { vibe, extra, color } = answers;

        if (vibe === "Soft and cute" && extra === "Low") {
            return "Strawberry Soft Glow Nails";
        }

        if (vibe === "Bold and loud" && extra === "Maximum") {
            return "Boss Queen Acrylic Set";
        }

        if (color === "Dark glam") {
            return "Midnight Luxury Nails";
        }

        if (vibe || extra || color) {
            return "Signature Glow Nails";
        }

        return "";
    }, [answers]);

    const goBooking = useCallback(() => {
        navigate("/booking");
    }, [navigate]);

    return (
        <div className="min-h-screen pt-24 px-4 flex flex-col items-center bg-gradient-to-br from-pink-100 via-white to-pink-200">

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-pink-500 mb-8">
                Find Your Glow
            </h1>

            {/* QUIZ BOX */}
            {step < questions.length && (
                <div className="w-full max-w-md bg-white rounded-xl shadow p-6 text-center">

                    <h2 className="text-lg font-semibold mb-6">
                        {current.title}
                    </h2>

                    <div className="flex flex-col gap-3">
                        {current.options.map((option) => (
                            <button
                                key={option}
                                onClick={() => selectAnswer(option)}
                                className={`py-2 rounded-lg border transition ${
                                    answers[current.key] === option
                                        ? "bg-pink-500 text-white"
                                        : "bg-white"
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-between mt-6">

                        <button
                            onClick={prevStep}
                            className="text-gray-500"
                        >
                            Back
                        </button>

                        <button
                            onClick={nextStep}
                            className="bg-pink-500 text-white px-4 py-2 rounded-full"
                        >
                            {step === questions.length - 1 ? "See Result" : "Next"}
                        </button>

                    </div>
                </div>
            )}

            {/* RESULT */}
            {step === questions.length && (
                <div className="w-full max-w-md bg-white rounded-xl shadow p-6 text-center">

                    <h2 className="text-2xl font-bold text-pink-500">
                        Your Glow Result
                    </h2>

                    <p className="mt-4 text-lg">
                        You are: {result}
                    </p>

                    <button
                        onClick={goBooking}
                        className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full"
                    >
                        Book This Look
                    </button>

                </div>
            )}

        </div>
    );
}