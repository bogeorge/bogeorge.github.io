import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar bg-base-100">
            <div className="container mx-auto flex justify-between items-cent">
                <div className="text-white text-lg font-bold">BO GEORGE</div>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
                    <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                </div>
            </div>
        </nav>
    );
}