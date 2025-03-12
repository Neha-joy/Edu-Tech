import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        // Footer 
        <div>
            <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
                        <p className="flex items-center gap-2"><FaEnvelope /> support@eduteach.com</p>
                        <p className="flex items-center gap-2"><FaPhoneAlt /> +91 9876543210</p>
                        <p className="flex items-center gap-2"><FaMapMarkerAlt /> 123 Edu Street, Bangalore, India</p>
                    </div>

                    {/* Follow Us */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-white text-xl hover:text-gray-300"><FaInstagram /></a>
                            <a href="#" className="text-white text-xl hover:text-gray-300"><FaLinkedin /></a>
                            <a href="#" className="text-white text-xl hover:text-gray-300"><FaTwitter /></a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-sm">&copy; 2025 EduTeach. All Rights Reserved.</p>
                    </div>
                </div>
            </footer></div>
    )
}
