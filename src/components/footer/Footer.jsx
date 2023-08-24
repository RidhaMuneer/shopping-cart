import React from 'react';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 md:w-1/2">
                    <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                    <p className="text-gray-300 mb-2">
                        Email: ridhamuner@gmail.com
                    </p>
                    <p className="text-gray-300">
                        Address: 123 Street, City, Country
                    </p>
                </div>
                <div className="flex justify-center md:justify-end space-x-4">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-yellow-600" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-2xl hover:text-yellow-600" />
                    </a>
                    <a href="https://github.com/ridhamuneer" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl hover:text-yellow-600" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
