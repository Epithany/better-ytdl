import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-transparent py-10 mt-20">
            <div className="container mx-auto text-center glass-panel py-8">
                <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">YT-DL</h3>
                    <p className="text-gray-500">Download YouTube videos and shorts effortlessly.</p>
                </div>
                <div className="mb-4">
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-500 hover:text-gray-900 transition">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-gray-500">
                    &copy; {new Date().getFullYear()} YT-DL. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
