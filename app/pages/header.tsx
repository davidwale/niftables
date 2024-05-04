import React from 'react';
import Navbar from "../components/navbar";

const Header: React.FC = () => {
    return (
        <div className="relative bg-black h-screen">
            <video autoPlay loop muted className="absolute inset-0 w-full h-screen object-cover bg-gradient-to-t from-blue-600 via-blue-900 to-purple-900">
                    <source src="./videos/main-background-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
             <div className="flex flex-col relative z-10">
                <Navbar />
                <div className="px-10 lg:px-40">
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
                </div>
            
        </div>
        </div>
    );
};

export default Header;