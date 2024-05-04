import React from 'react';

const TopContainer: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className='lg:mt-60 mt-40 overflow-hidden'>
            <h1 className="lg:text-5xl text-3xl mb-4 text-white monument-extended">
                THE WORLD'S FIRST <br />
                PLATFORM FOR TOKENIZING <br />
                AI BLOCKCHAIN PROJECTS
            </h1>
            <hr className="border-2 gradient-border w-[30.5rem]" />
                <p className="bg-clip-text text-transparent gradient-text satoshi-bold">
                    Hold the Creon Pass NFT and earn passive income from AI Tools
                </p>
            <hr className="border-2 gradient-border w-[30.5rem]" />
            </div>
            <div className='lg:mt-48 mt-40 overflow-hidden'>
                <h1 className="lg:text-5xl text-3xl mb-4 text-white monument-extended">
                    CREON PASS <br />
                    NFT
                </h1>
                <p className='bg-clip-text text-transparent gradient-text my-16 satoshi-bold'>
                    The Creon NFT pass unlocks access to AI projects, the Creon <br />
                    launchpad, and a ticket to generate passive income through AI- <br />
                    driven tools
                </p>
                <div>
                    <span className='block satoshi-bold'>
                    <p className='mb-5 p-2.5 border-2 rounded-md text-white border-zinc-900 inline-block text-sm'>Pre-launch investment opportunities for upcoming AI projects</p> <br />
                    <p className='mb-5 p-2.5 border-2 rounded-md text-white border-zinc-900 inline-block text-sm'>Free and early access to Creon built AI projects</p><br />
                    <p className='mb-5 p-2.5 border-2 rounded-md text-white border-zinc-900 inline-block text-sm'>Higher allocation limits on the Creon AI Launchpad</p><br />
                    <p className='mb-5 p-2.5 border-2 rounded-md text-white border-zinc-900 inline-block text-sm'>Revenue share distribution from Creon built AI projects</p>
                </span>
                <button className='text-white sm:w-96 mt-10 inline-block satoshi-bold px-4 py-2 border border-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50'>
                    Buy Creon Pass
                </button>
                </div>
            </div>
        </div>
    );
};

export default TopContainer;