import React from 'react';

const TokenContainer: React.FC = () => {
    return (
        <div className='flex flex-row justify-between flex-wrap py-20'>
            <div className='bg-dark-grey sm:w-[320px] pr-8 py-8 rounded-md mb-8 w-full flex flex-col'>   
                <div>
                    <span className='bg-white h-4 relative bottom-11 left-48 rounded-md px-2 text-xs font-bold'>
                        COMING SOON
                    </span>
                    <h1 className="text-3xl mb-4 ml-8 text-white text-center sm:text-left monument-extended">TOKEN</h1>
                    <p className=' ml-8 text-sm mb-9 bg-clip-text  text-center sm:text-left text-transparent gradient-text satoshi-bold'>
                        The Gateway token to the world of AI
                    </p>
                <img src='./images/token-image.png' alt='' />
                <p className='text-xs text-white  text-center sm:text-left ml-8 mt-8 satoshi-regular'>
                    Set to debut in the latter half of 2024, the CREON
                    token serves as the pioneering link between 
                    cutting-edge AI initiatives and blockchain 
                    technology. This innovative token provides NFT 
                    and token holders with unparalleled access to our 
                    Launchpad, AI tools, and exclusive pre-launch 
                    investment prospects.
                </p>
            </div>
            </div>
            <div className='bg-dark-grey sm:w-[320px] pr-8 py-8 rounded-md mb-8 w-full sm:flex sm:flex-col'>
                <div>
                    <span className='bg-white h-4 relative bottom-11 left-48 rounded-md px-2 text-xs font-bold'>
                        COMING SOON
                    </span>
                    <h1 className="text-3xl mb-4 ml-8 text-white text-center sm:text-left monument-extended">REVENUE</h1>
                    <p className='text-sm ml-8 mb-4 bg-clip-text  text-center sm:text-left text-transparent gradient-text satoshi-bold'>
                        Driving Income and growth through decentralization
                    </p>
                <img src='./images/revenue-image.png' alt='' />
                <p className='text-xs text-white text-center sm:text-left ml-8 mt-8 satoshi-regular'>
                    CREON NFT and token holders are integral 
                    participants in the profit-sharing from our  
                    launched AI-based enterprises. We support the 
                        development of AI tools, ensuring a steady 
                    revenue stream all while allowing early investors 
                   to enjoy the benefits of their support
                </p>
                </div>
                </div>
            <div className='bg-dark-grey sm:w-[320px] pr-8 py-8 rounded-md mb-8 w-full sm:flex sm:flex-col'>
                <div>
                    <span className='bg-white h-4 relative bottom-11 left-48 rounded-md px-2 text-xs font-bold'>
                            COMING SOON
                        </span>
                <h1 className="text-3xl mb-4 ml-8 text-white text-center sm:text-center monument-extended">LAUNCHPAD</h1>
                    <p className='text-sm ml-8 mb-9 bg-clip-text text-center sm:text-left text-transparent gradient-text satoshi-bold'>
                        Driving the future of AI innovation
                    </p>
                <img src='./images/launchpad-image.png' alt='' />
                <p className='text-xs text-white ml-8 mt-8 text-center sm:text-left satoshi-regular'>
                    The CREON AI launched an essential 
                    component of our initiative, represents a 
                    groundbreaking opportunity in the realm of AI  
                    and blockchain it provides the first known 
                    platform for acquiring allocations in tokenized AI 
                    projects, offering our community of NFT and 
                    CREON token holders early access to innovative 
                    and promising AI endeavours.
                </p>
                </div>
                </div>
        </div>
    );
};

export default TokenContainer;
