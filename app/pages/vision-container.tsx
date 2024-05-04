import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const VisionContainer: React.FC = () => {
    return (
        <div className="flex flex-row justify-between">
            <div className='mt-48'>
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
                <span>
                    <img className='h-28 w-24 top-40 left-56 relative' src='./images/Vector.png' alt='' />
                </span>
            </div>
            <section className='text-white mt-48 ml-44'>
                <div className='flex flex-row py-10 border-t border-gray-900'>
                    <div>
                        <img className="h-16 w-16 bottom-2 relative" src="./images/profitability.png" alt="Logo" />
                    </div>
                    <div>
                        <span className='flex flex-row justify-between'>
                            <p className='pl-6'>
                                Profitability and <br /> Growth
                            </p>
                        <MdOutlineKeyboardArrowDown />
                        </span>
                        <p className='text-xs mt-8 pl-7'>
                            At Creon, we handpick cutting-edge AI projects and <br />
                            offer our community and token holders early access <br />
                            and investment opportunities. Our community <br />
                            actively contributes to the growth and profitability of <br />
                            these projects, creating a dynamic ecosystem of <br />
                            innovation and shared success.
                        </p>
                    </div>
                </div>
                <div className='flex flex-row py-10 border-t border-gray-900'>
                    <div>
                        <img className="h-16 w-16 bottom-2 relative" src="./images/transparency.png" alt="Logo" />
                    </div>
                    <div className='w-full'>
                        <span className='flex flex-row justify-between'>
                            <p className='pl-6'>
                                Transparent & fair Decentralized <br /> Earnings
                            </p>
                            <MdOutlineKeyboardArrowDown />
                        </span>
                    </div>
                </div>
                <div className='flex flex-row py-10 border-t border-b border-gray-900'>
                    <div>
                        <img className="h-16 w-16 bottom-2 relative" src="./images/launch.png" alt="Logo" />
                    </div>
                    <div className='w-full'>
                        <span className='flex flex-row justify-between'>
                            <p className='pl-6'>
                                Launching the <br /> future
                            </p>
                            <MdOutlineKeyboardArrowDown />
                        </span>
                    </div>
                </div>
                <div className='flex flex-row py-10  border-b border-gray-900'>
                    <div>
                        <img className="h-16 w-16 bottom-2 relative" src="./images/limitless.png" alt="Logo" />
                    </div>
                    <div className='w-full'>
                        <span className='flex flex-row justify-between'>
                            <p className='pl-6'>
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