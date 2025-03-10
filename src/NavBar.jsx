import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl font-bold">
                    MyWebsite
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-200">About</Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-white hover:text-gray-200">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-700 py-4">
                    <ul className="space-y-4 text-center">
                        <li>
                            <Link to="/" className="text-white block" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-white block" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-white block" onClick={() => setIsOpen(false)}>Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white block" onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;