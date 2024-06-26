"use client";

import React, {useState} from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import Image from 'next/image';

const VisionContainer: React.FC = () => {
    const [showText, setShowText] = useState(false);
    
    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <div className="flex md:flex-row flex-col justify-between">
            <div className='mt-48 w-full'>
            <h1 className="text-2xl mb-4 text-white monument-extended">
                    OUR VISION IS TO <br />
                    SUPPORT THE INNOVATION <br />
                    OF AI BLOCKCHAIN <br />
                    PROJECTS <span className='bg-clip-text text-transparent gradient-text'>WHILE <br />
                        PRIORITIZING COMMUNITIES <br />
                        AND DEMOCRATIZING <br />
                        PROFITS
                </span>
                </h1>
                
                <span className='md:flex hidden'>
                    <Image src='/images/creon-logo-img.png' alt='' width={800} height={800} />
                </span>
            </div>
            <section className='text-white md:mt-48 md:ml-44 w-full'>
                <div
                    className='flex flex-row py-10 border-t border-gray-900 hover:cursor-pointer'
                    onClick={toggleText}
                >
                    <div>
                        <Image src="/images/profitability.png" alt="" width={80} height={80} />
                    </div>
                    <div className='w-full'>
                        <span className='flex flex-row justify-between'>
                            <p className='pl-6 satoshi-bold'>
                                Profitability and <br /> Growth
                            </p>
                       {showText ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </span>
                        {showText && (
                            <p className='text-xs mt-8 pl-7 satoshi-regular'>
                                At Creon, we handpick cutting-edge AI projects and 
                                offer our community and token holders early access 
                                and investment opportunities. Our community 
                                actively contributes to the growth and profitability of 
                                these projects, creating a dynamic ecosystem of 
                                innovation and shared success.
                            </p>
                        )}
                            </div>
                        </div>
                <div className='flex flex-row py-10 border-t border-gray-900'>
                    <div>
                        <Image src="/images/transparency.png" alt="" width={80} height={80} />
                    </div>
                    <div className='w-full'>
                        <span className='flex flex-row justify-between'>
                            <p className='pl-6 satoshi-bold'>
                                Transparent & fair Decentralized <br /> Earnings
                            </p>
                            <MdOutlineKeyboardArrowDown />
                        </span>
                    </div>
                </div>
                <div className='flex flex-row py-10 border-t border-b border-gray-900'>
                    <div>
                        <Image  src="/images/launch.png" alt="Logo" height={80} width={80} />
                    </div>
                    <div className='w-full'>
                        <span className='flex flex-row justify-between'>
                            <p className='pl-6 satoshi-bold'>
                                Launching the <br /> future
                            </p>
                            <MdOutlineKeyboardArrowDown />
                        </span>
                    </div>
                </div>
                <div className='flex flex-row py-10  border-b border-gray-900'>
                    <div>
                        <Image  src="/images/limitless.png" alt="" width={80} height={80} />
                    </div>
                    <div className='w-full'>
                        <span className='flex flex-row justify-between'>
                            <p className='pl-6 satoshi-bold'>
                                Limitless Possibilities of AI <br /> & crypto
                            </p>
                            <MdOutlineKeyboardArrowDown />
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisionContainer;