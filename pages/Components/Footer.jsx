import React from 'react';

export const Footer = () => {
    return (
        <div className='flex flex-col h-auto'>
            <footer className="bg-zinc-800 text-white py-12 w-full mt-auto">
                <div className="max-w-screen-2xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                        <div>
                            <h3 className="text-xl font-semibold mb-4">About Us</h3>
                            <p className="text-sm text-gray-400">
                                We are a creative agency passionate about building digital experiences. We strive to provide high-quality services and solutions to help businesses grow.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                            <ul>
                                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-300">Home</a></li>
                                <li><a href="#about" className="text-sm text-gray-400 hover:text-gray-300">About</a></li>
                                <li><a href="#services" className="text-sm text-gray-400 hover:text-gray-300">Services</a></li>
                                <li><a href="#contact" className="text-sm text-gray-400 hover:text-gray-300">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Resources</h3>
                            <ul>
                                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-300">Blog</a></li>
                                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-300">Help Center</a></li>
                                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-300">Privacy Policy</a></li>
                                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-300">Terms of Service</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                            <ul>
                                <li><a href="mailto:info@yourcompany.com" className="text-sm text-gray-400 hover:text-gray-300">Email Us</a></li>
                                <li><a href="tel:+1234567890" className="text-sm text-gray-400 hover:text-gray-300">Call Us</a></li>
                                <li><a href="#" className="text-sm text-gray-400 hover:text-gray-300">Location</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-12 text-sm">
                        <p>Design and Developed by <span className="font-semibold">Apurv Kolte</span> @2025</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
