import React from 'react';

const VisionContainer: React.FC = () => {
    return (
        <div className="flex flex-row">
            <div className='mt-48 ml-40'>
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
            </div>
            <section className='text-white mt-48 ml-44'>
                <div className='flex flex-row py-10 border-t border-gray-900'>
                    <div>
                        <img className="h-16 w-16 bottom-2 relative" src="./images/profitability.png" alt="Logo" />
                    </div>
                    <div>
                        <span>
                            <p className='pl-6'>
                                Profitability and <br /> Growth
                            </p>

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
                    <div>
                        <span>
                            <p className='pl-6'>
                                Transparent & fair Decentralized <br /> Earnings
                            </p>

                        </span>
                    </div>
                </div>
                <div className='flex flex-row py-10 border-t border-b border-gray-900'>
                    <div>
                        <img className="h-16 w-16 bottom-2 relative" src="./images/launch.png" alt="Logo" />
                    </div>
                    <div>
                        <span>
                            <p className='pl-6'>
                                Launching the <br /> future
                            </p>

                        </span>
                    </div>
                </div>
                <div className='flex flex-row py-10  border-b border-gray-900'>
                    <div>
                        <img className="h-16 w-16 bottom-2 relative" src="./images/limitless.png" alt="Logo" />
                    </div>
                    <div>
                        <span>
                            <p className='pl-6'>
                                Limitless Possibilities of AI <br /> & crypto
                            </p>

                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisionContainer;