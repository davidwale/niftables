import React from 'react';

const TokenContainer: React.FC = () => {
    return (
        <div className='flex flex-row justify-between py-20'>
            <div className='bg-dark-grey w-[320px] pr-8 py-8 rounded-md'>   
                <div>
                    <span className='bg-white h-4 relative bottom-11 left-48 rounded-md px-2 text-xs font-bold'>
                        COMING SOON
                    </span>
                    <h1 className="text-3xl mb-4 ml-8 text-white monument-extended">TOKEN</h1>
                    <p className=' ml-8 text-sm mb-9 bg-clip-text text-transparent gradient-text satoshi-bold'>
                        The Gateway token to the world of AI
                    </p>
                <img src='./images/token-image.png' alt='' />
                <p className='text-xs text-white ml-8 mt-8 satoshi-regular'>
                    Set to debut in the latter half of 2024, the CREON <br />
                    token serves as the pioneering link between <br />
                    cutting-edge AI initiatives and blockchain <br />
                    technology. This innovative token provides NFT <br />
                    and token holders with unparalleled access to our <br />
                    Launchpad, AI tools, and exclusive pre-launch <br />
                    investment prospects.
                </p>
            </div>
            </div>
            <div className='bg-dark-grey w-[320px] pr-8 py-8 rounded-md'>
                <div>
                    <span className='bg-white h-4 relative bottom-11 left-48 rounded-md px-2 text-xs font-bold'>
                        COMING SOON
                    </span>
                    <h1 className="text-3xl mb-4 ml-8 text-white monument-extended">REVENUE</h1>
                    <p className='text-sm ml-8 mb-4 bg-clip-text text-transparent gradient-text satoshi-bold'>
                        Driving Income and growth through decentralization
                    </p>
                <img src='./images/token-image.png' alt='' />
                <p className='text-xs text-white ml-8 mt-8 satoshi-regular'>
                    CREON NFT and token holders are integral <br />
                    participants in the profit-sharing from our  <br />
                    launched AI-based enterprises. We support the <br />
                        development of AI tools, ensuring a steady <br />
                    revenue stream all while allowing early investors 
                     <br />
                   to enjoy the benefits of their support
                </p>
                </div>
            </div>
            <div className='bg-dark-grey w-[320px] pr-8 py-8 rounded-md'>
                <div>
                    <span className='bg-white h-4 relative bottom-11 left-48 rounded-md px-2 text-xs font-bold'>
                            COMING SOON
                        </span>
                <h1 className="text-3xl mb-4 ml-8 text-white monument-extended">LAUNCHPAD</h1>
                    <p className='text-sm ml-8 mb-9 bg-clip-text text-transparent gradient-text satoshi-bold'>
                        Driving the future of AI innovation
                    </p>
                <img src='./images/token-image.png' alt='' />
                <p className='text-xs text-white ml-8 mt-8 satoshi-regular'>
                    The CREON AI launched an essential <br />
                    component of our initiative, represents a <br />
                    groundbreaking opportunity in the realm of AI  <br />
                    and blockchain it provides the first known <br />
                    platform for acquiring allocations in tokenized AI <br />
                    projects, offering our community of NFT and <br />
                    CREON token holders early access to innovative <br />
                    and promising AI endeavours.
                </p>
                </div>
                </div>
        </div>
    );
};

export default TokenContainer;