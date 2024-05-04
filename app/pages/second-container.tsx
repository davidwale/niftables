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
            <section className='text-white self-end max-w-96 lg:mt-48 mt-24'>
                <p className='text-sm font-bold satoshi-bold mb-4'>
                    The dynamic community driven <br />
                    business model of the future.
                </p>
                <p className='text-xs satoshi-regular'>
                    At Creon, we blend the power of AI tools with the <br />
                    dynamic crypto and NFT markets, utilizing an <br />
                    innovative business model to drive profitability. <br />
                    This approach empowers our community, as our <br />
                    NFT and token holders directly benefit from the <br />
                    growth and prosperity of the Creon network, <br />
                    creating a win-win scenario for both our <br />
                    community and for the projects we launch.
                </p>
            </section>
        </div>
    );
};

export default SecondContainer;