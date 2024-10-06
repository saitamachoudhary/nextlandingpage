'use client';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const categories = [
    { name: 'Music', icon: '🎵', color: 'bg-purple-700', id: 1 },
    { name: 'Nightlife', icon: '🌙', color: 'bg-rose-600', id: 2 },
    { name: 'Performing & Visual Arts', icon: '🎭', color: 'bg-red-700', id: 3 },
    { name: 'Holidays', icon: '🗓️', color: 'bg-teal-700', id: 4 },
    { name: 'Dating', icon: '💘', color: 'bg-gray-700', id: 5 },
    { name: 'Hobbies', icon: '🎨', color: 'bg-pink-500', id: 6 },
    { name: 'Business', icon: '💼', color: 'bg-slate-700', id: 7 },
    { name: 'Food & Drinks', icon: '🍴', color: 'bg-emerald-700', id: 8 },
];

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};
const generateSquares = () => {
    return shuffle(categories).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className={`flex flex-col items-center justify-center p-4 rounded-lg ${sq.color} shadow-lg`}
        >
            <div className="text-3xl md:text-4xl">{sq.icon}</div>
            <div className="mt-2 text-sm md:text-lg font-semibold">
                {sq.name}
            </div>

        </motion.div>
    ));
};

const EventCategories = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());
    useEffect(() => {

        const shuffleSquares = () => {
            setSquares(generateSquares());

            timeoutRef.current = setTimeout(shuffleSquares, 3000);
        };
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);
    return (
        <div className="bg-slate-900 text-white px-8 py-8">
            <h1 className="text-2xl md:text-3xl text-center font-bold mb-6 md:mb-8">
                Events <span className="text-pink-500">Category</span>
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {squares.map((sq) => sq)}
            </div>
        </div>
    );
};

export default EventCategories;
