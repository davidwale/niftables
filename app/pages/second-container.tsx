import React from 'react';

const SecondContainer: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className='mt-60'>
            <h1 className="lg:text-5xl text-3xl mb-4 text-white monument-extended">
                PROFITTING THROUGH
            </h1>
                <p className="bg-clip-text monument-extended text-transparent gradient-text text-2xl lg:ml-96">
                    AI INNOVATION & DECENTRALIZATION
                </p>
            </div>
            <div className='flex flex-col lg:flex-row w-full mt-20'>
                <video autoPlay loop muted className="lg:w-1/2 hidden lg:flex">
                    <source src="./videos/creon-logo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
                <section className='text-white lg:ml-24'>
                <p className='text-sm font-bold satoshi-bold mb-4'>
                    The dynamic community driven <br />
                    business model of the future.
                </p>
                <p className='text-xs satoshi-regular'>
                    At Creon, we blend the power of AI tools with the 
                    dynamic crypto and NFT markets, utilizing an 
                    innovative business model to drive profitability. 
                    This approach empowers our community, as our 
                    NFT and token holders directly benefit from the 
                    growth and prosperity of the Creon network, 
                    creating a win-win scenario for both our 
                    community and for the projects we launch.
                </p>
            </section>
            </div>
            
        </div>
    );
};

export default SecondContainer;