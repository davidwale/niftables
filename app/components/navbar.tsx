"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-black-800 satoshi-bold">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 w-full">
                    <div className="flex justify-between w-full">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-auto" src="./images/logo.png" alt="Logo" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 mt-4 flex items-baseline space-x-4">
                                <Link href="/">
                                    <p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</p>
                                </Link>
                                <Link href="/about">
                                    <p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</p>
                                </Link>
                                <Link href="/services">
                                    <p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</p>
                                </Link>
                                <Link href="/contact">
                                    <p className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</p>
                                </Link>
                                <button className='text-white rounded-md border-2 border-white px-7 py-2 text-sm'>Connect</button>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                            <svg
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/">
                        <p className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</p>
                    </Link>
                    <Link href="/about">
                        <p className="text-white block px-3 py-2 rounded-md text-base font-medium">About</p>
                    </Link>
                    <Link href="/services">
                        <p className="text-white block px-3 py-2 rounded-md text-base font-medium">Services</p>
                    </Link>
                    <Link href="/contact">
                        <p className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
