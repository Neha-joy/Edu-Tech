import React from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    // Check if the current page is 'about'
    const isAboutPage = location.pathname === "/about";

    return (
        <div>
            <nav
                className={`cursor-pointer text-xl p-4 flex justify-between items-center shadow-md 
                    ${isAboutPage ? "bg-blue-600 text-white" : "bg-white text-blue-900"}`}
            >
                <h1 className="text-2xl font-bold">EduTeach</h1>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    {!isAboutPage && (
                        <>
                            <Link
                                to="course"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="hover:underline transition duration-300"
                            >
                                Courses
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="hover:underline transition duration-300"
                            >
                                Contact
                            </Link>
                        </>
                    )}
                    <li><a href="/about" className="hover:underline">About</a></li>

                </ul>
                <button className="md:hidden p-2 bg-white text-blue-600 rounded">☰</button>
            </nav>
        </div>
    );
}
