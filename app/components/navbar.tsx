"use client";

import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-transparent satoshi-bold fixed top-0 left-0 w-full z-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 w-full">
                    <div className="flex justify-between w-full">
                        <div className="flex-shrink-0 flex items-center">
                            <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 mt-4 flex items-baseline space-x-4">
                                <Link href="/">
                                    <p className="text-white px-3 py-2 rounded-md text-sm font-medium">Creon Pass</p>
                                </Link>
                                <Link href="/about">
                                    <p className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Token
                                        <span className='text-ss ml-1 px-2 relative bottom-2 text-purple-500 bg-black rounded-md '>
                                            SOON
                                        </span>
                                    </p>
                                </Link>
                                <Link href="/services">
                                    <p className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                        AI Revenue
                                    <span className='text-ss ml-1 px-2 relative bottom-2 text-purple-500 bg-black rounded-md '>
                                        SOON
                                    </span>
                                    </p>
                                </Link>
                                <Link href="/contact">
                                    <p className="text-white px-3 py-2 rounded-md text-sm font-medium">
                                        AI Launchpad
                                    <span className='text-ss ml-1 px-2 relative bottom-2 text-purple-500 bg-black rounded-md '>
                                        SOON
                                    </span>
                                    </p>
                                </Link>
                                <button className='text-white rounded-md border-2 border-white px-7 py-2 text-sm'>
                                    Connect
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center z-10 justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-8 w-8 mt-4 text-white bg-sky-500 rounded-md`}
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
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden h-screen top-0 right-0 fixed w-1/2 bg-black`} id="mobile-menu">
                <div className="pt-2 pl-3 pb-3 space-y-1 sm:px-3">
                    <button className='text-white rounded-md border-2 border-white mx-2 my-3 px-7 py-2 text-sm'>
                        Connect
                    </button>
                    <Link href="/">
                        <p className="text-white block px-3 py-4 border-t border-gray-900 text-base font-medium">
                            Creon Pass
                        </p>
                    </Link>
                    <Link href="/">
                        <p className="text-white block px-3 py-4 border-t border-gray-900 text-base font-medium">
                            Token
                        <span className='text-ss ml-1 px-2 relative bottom-2 text-purple-500 bg-black rounded-md '>
                            SOON
                        </span>
                        </p>
                    </Link>
                    <Link href="/">
                        <p className="text-white block px-3 py-4 border-t border-b border-gray-900 text-base font-medium">
                            AI Revenue
                        <span className='text-ss ml-1 px-2 relative bottom-2 text-purple-500 bg-black rounded-md '>
                            SOON
                        </span>
                        </p>
                    </Link>
                    <Link href="/">
                        <p className="text-white block px-3 py-4 border-b border-gray-900 text-base font-medium">
                            AI Launchpad
                        <span className='text-ss ml-1 px-2 relative bottom-2 text-purple-500 bg-black rounded-md '>
                            SOON
                        </span>
                        </p>
                    </Link>
                </div>
                <span className='flex flex-row ml-5 mt-60 relative bottom-0 gap-5'>
                    <Image src="/images/telegram.png" alt="telegram" width={40} height={40} />
                    <Image src="/images/discord.png" alt="discord" width={40} height={40} />
                    <Image src="/images/twitter.png" alt="twitter" width={40} height={40} />
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
