"use client"
import { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Navbar = () => {
    const links = [
        { name: 'Home', link: '/' },
        { name: 'Download', link: '/download' },
        { name: 'Features', link: '#features' },
    ];
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        setOpen(false);
    }, []);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-black/6">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="text-2xl font-bold text-red-600">▶</div>
                        <span className="text-xl font-semibold text-slate-900">YT-DL</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {links.map((item, index) => (
                            <li key={index}>
                                {item.link.startsWith('http') ? (
                                    <a
                                        href={item.link}
                                        className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-medium"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        href={item.link}
                                        className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {open ? (
                            <XMarkIcon className="w-6 h-6 text-slate-900" />
                        ) : (
                            <Bars3BottomRightIcon className="w-6 h-6 text-slate-900" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {open && (
                    <div className="md:hidden border-t border-black/6 py-4 animate-in slide-in-from-top-2">
                        <ul className="flex flex-col gap-4">
                            {links.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.link}
                                        className="text-slate-600 hover:text-slate-900 transition-colors duration-300 font-medium block py-2"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
