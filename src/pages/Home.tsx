import React from 'react';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to My Personal Brand</h1>
            <p className="mt-4 text-lg text-center text-gray-600">
                I'm [Your Name], a [Your Profession/Title]. This is my personal brand site where I share my work and thoughts.
            </p>
            <div className="mt-8">
                <a href="#projects" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                    View My Projects
                </a>
            </div>
        </div>
    );
}