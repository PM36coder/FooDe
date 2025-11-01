import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Icons for social media (requires 'react-icons' package)

const Footer = () => {
    // Determine the current year dynamically for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        // Main footer container with the same dark gradient as the header
        <footer className="bg-linear-to-br from-gray-900 via-black to-gray-800 text-gray-300 shadow-inner mt-10">
            <div className="container mx-auto px-4 py-12">
                
                {/* Main Grid Layout - Responsive: 4 columns on medium screens, 1 column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
                    
                    {/* Column 1: Logo & Company Description */}
                    <div className="md:col-span-1 space-y-4">
                        <a href="/" className="text-3xl font-bold text-orange-400">
                            DineTime
                        </a>
                        <p className="text-sm">
                            Connecting you with the best local flavors, delivered fast and fresh from your favorite Food Partners.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors"><FaFacebook size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors"><FaTwitter size={24} /></a>
                            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors"><FaInstagram size={24} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links (Using links from Header) */}
                    <div className="md:col-span-1 space-y-3">
                        <h3 className="text-xl font-semibold text-white mb-4 border-b border-orange-500 pb-1">Quick Links</h3>
                        <a href="/about" className="block text-md hover:text-orange-400 transition-colors">About Us</a>
                        <a href="/services" className="block text-md hover:text-orange-400 transition-colors">Our Services</a>
                        <a href="/support" className="block text-md hover:text-orange-400 transition-colors">Help Center</a>
                        <a href="/careers" className="block text-md hover:text-orange-400 transition-colors">Careers</a>
                    </div>

                    {/* Column 3: Legal & Policy */}
                    <div className="md:col-span-1 space-y-3">
                        <h3 className="text-xl font-semibold text-white mb-4 border-b border-orange-500 pb-1">Legal</h3>
                        <a href="/privacy" className="block text-md hover:text-orange-400 transition-colors">Privacy Policy</a>
                        <a href="/terms" className="block text-md hover:text-orange-400 transition-colors">Terms of Service</a>
                        <a href="/license" className="block text-md hover:text-orange-400 transition-colors">Software License</a>
                        <a href="/cookie" className="block text-md hover:text-orange-400 transition-colors">Cookie Settings</a>
                    </div>

                    {/* Column 4: Contact Information */}
                    <div className="md:col-span-1 space-y-3">
                        <h3 className="text-xl font-semibold text-white mb-4 border-b border-orange-500 pb-1">Get in Touch</h3>
                        <p className="text-md">Email: support@dinetime.com</p>
                        <p className="text-md">Phone: +91 123 456 7890</p>
                        <p className="text-md">Address: 123 Food Street, New Delhi, India</p>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 text-center text-sm text-gray-500">
                    &copy; {currentYear} DineTime. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;