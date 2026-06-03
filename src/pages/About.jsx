import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 text-gray-800">

            {/* HERO */}
            <section className="pt-28 pb-16 text-center px-6">
                <h1 className="text-5xl font-bold tracking-wide">
                    Glow Salon
                </h1>

                <p className="text-lg mt-2 text-pink-500 font-medium">
                    Struga’s Beauty Experience
                </p>

                <p className="mt-4 max-w-xl mx-auto text-gray-600">
                    Not just nails — it’s your glow transformation.
                </p>
            </section>

            {/* STORY */}
            <section className="max-w-5xl mx-auto px-6 py-10">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>

                <p className="text-gray-600 leading-relaxed">
                    Glow Salon Struga was created with one simple idea: to turn nail care into a luxury
                    and creative experience. In Struga, we wanted something different — not just nails,
                    but confidence, style, and glow. Every design is fully customized for each client,
                    whether soft, bold, or luxury.
                </p>
            </section>

            {/* VALUES */}
            <section className="max-w-5xl mx-auto px-6 py-10">
                <h2 className="text-2xl font-semibold mb-6">Our Values</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        "Every client deserves a glow moment",
                        "Nails are self-expression",
                        "Your style = your personality",
                        "Care and detail in every set",
                        "Always premium quality"
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-5 rounded-xl bg-white shadow hover:shadow-lg transition"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* TEAM */}
            <section className="max-w-5xl mx-auto px-6 py-10">
                <h2 className="text-2xl font-semibold mb-6">Meet Our Artists</h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="p-5 bg-white rounded-xl shadow">
                        <h3 className="font-bold">Mia — Soft Glam Queen</h3>
                        <p className="text-gray-600 mt-1">Clean and natural nails</p>
                        <p className="text-pink-500 mt-2">Elegant everyday glow</p>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow">
                        <h3 className="font-bold">Lana — Bold Energy Expert</h3>
                        <p className="text-gray-600 mt-1">Acrylic and chrome specialist</p>
                        <p className="text-pink-500 mt-2">Strong statement nails</p>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow">
                        <h3 className="font-bold">Sara — Luxury Nail Artist</h3>
                        <p className="text-gray-600 mt-1">Crystal and premium designs</p>
                        <p className="text-pink-500 mt-2">Instagram luxury sets</p>
                    </div>

                    <div className="p-5 bg-white rounded-xl shadow">
                        <h3 className="font-bold">Nina — Cute Glow Artist</h3>
                        <p className="text-gray-600 mt-1">Soft pastel designs</p>
                        <p className="text-pink-500 mt-2">Cute aesthetic nails</p>
                    </div>

                </div>
            </section>

            {/* WHY US */}
            <section className="max-w-5xl mx-auto px-6 py-10">
                <h2 className="text-2xl font-semibold mb-6">Why Glow Salon Struga</h2>

                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <p>Custom nail designs for every client</p>
                    <p>Friendly and professional artists</p>
                    <p>Trendy and luxury styles</p>
                    <p>Relaxing beauty experience</p>
                    <p>Always fresh designs</p>
                </div>
            </section>

            {/* LOCATION */}
            <section className="max-w-5xl mx-auto px-6 py-10">
                <h2 className="text-2xl font-semibold mb-4">Visit Us — Struga</h2>

                <p className="text-gray-600">
                    Glow Salon, Struga, North Macedonia
                </p>

                <div className="mt-4 text-gray-600 space-y-1">
                    <p>Center of Struga</p>
                    <p>Near main shopping area</p>
                    <p>Modern beauty studio vibe</p>
                </div>

                <p className="mt-4 italic text-pink-500">
                    Walk in normal… walk out glowing
                </p>
            </section>

            {/* CONTACT */}
            <section className="max-w-5xl mx-auto px-6 py-10">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>

                <div className="space-y-2 text-gray-700">
                    <p>Instagram: @glowsalon_struga</p>
                    <p>WhatsApp booking available</p>
                    <p>Online booking 24/7</p>
                </div>

                <Link
                    to="/booking"
                    className="inline-block mt-6 px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition"
                >
                    Book Appointment
                </Link>
            </section>
        </div>
    );
}