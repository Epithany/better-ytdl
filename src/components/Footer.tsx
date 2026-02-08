import React from 'react';

const Footer = () => {
    const footerLinks = [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    return (
        <footer className="mt-32 border-t border-black/6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="text-2xl font-bold text-red-600">▶</div>
                            <span className="text-lg font-semibold text-slate-900">YT-DL</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Download YouTube videos and shorts effortlessly with crystal-clear quality.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:flex justify-center">
                        <div>
                            <h3 className="text-sm font-semibold text-slate-900 mb-4">Resources</h3>
                            <ul className="space-y-3">
                                {footerLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-slate-600 hover:text-slate-900 transition-colors duration-300 text-sm"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="md:flex justify-end">
                        <div className="text-center md:text-right">
                            <p className="text-2xl font-bold text-slate-900 mb-1">Fast & Secure</p>
                            <p className="text-slate-600 text-sm">No ads, no tracking, no hassle</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black/6 mt-12 pt-8">
                    <p className="text-slate-500 text-sm text-center">
                        &copy; {new Date().getFullYear()} YT-DL. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
