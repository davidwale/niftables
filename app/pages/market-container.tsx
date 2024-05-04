import React from 'react';
import Footer from "../components/footer";

const MarketContainer: React.FC = () => {
    return (
        <div>
            <div className="relative px-40 pt-20">
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-20">
                    <source src="./videos/roadmap-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-10">
                    <div className='w-full flex flex-row bg-dark-grey mb-10'>
                        <div className='m-10'>
                            <h1 className="text-2xl mb-4  text-white monument-extended">
                                AI PROSPECTS, MARKET SIZE,AND DEVELOPMENT RACE
                            </h1>
                            <p className='text-ss text-white mt-8'>
                                The AI market is one of the most dynamically growing areas of technology.
                                According to reports, the global AI
                                market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate)
                                of 36.6%. The key drivers behind this growth include advancements in machine learning,
                                increasing demand for big data analytics, and growing adoption of AI technology across
                                various sectors such as healthcare, finance, and transportation.
                            </p>
                        </div>
                        <img className='w-72' src="./images/ai-image.png" alt="" />
                    </div>
                    <div className='w-full flex flex-row bg-dark-grey mb-10'>
                        <div className='m-10'>
                            <h1 className="text-2xl mb-4  text-white monument-extended">
                                AI TOOLS AND MARKET
                            </h1>
                            <p className='text-ss text-white mt-8'>
                                AI tools refer to the technologies and software that enable computer systems to
                                perform tasks usually requiring human intellect. The market for these tools is dynamic
                                and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning,
                                computer vision, and robotics. With a wide range of applications, AI tools are becoming
                                increasingly indispensable in many sectors, from healthcare to finance, retail,
                                manufacturing, and many others.
                            </p>
                        </div>
                        <img className='w-72' src="./images/hand-image.png" alt="" />
                    </div>
                    <div className='w-full flex flex-row bg-dark-grey mb-10'>
                        <div className='m-10'>
                            <h1 className="text-2xl mb-4  text-white monument-extended">
                                AI, CRYPTO AND NFT MARKET
                            </h1>
                            <p className='text-ss text-white mt-8'>
                                Artificial Intelligence and blockchain technology are two groundbreaking
                                areas leading new technological innovations. The combination of these two
                                technologies creates intriguing possibilities. For instance,
                                Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or
                                to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit
                                from AI by improving security mechanisms, transaction efficiency, and service
                                personalization. Such combination brings substantial benefits for both developers
                                and users, paving the way for unprecedented possibilities.
                            </p>
                        </div>
                        <img className='w-72' src="./images/linear-image.png" alt="" />
                    </div>
                </div>
                <Footer />
            </div>
       </div>
    );
};

export default MarketContainer;
