import React from 'react';

const Footer: React.FC = () => {

    const currentYear = new Date().getFullYear();


    return (
        <footer className="flex justify-between text-white font-light z-10 pb-4 text-sm satoshi-regular">
            <div className='flex flex-row'>
                © Creon {currentYear}. All Rights Reserved.
                <span className='flex flex-row ml-5 relative bottom-2 gap-5'>
                    <img src="./images/telegram.png" alt="telegram" />
                    <img src="./images/discord.png" alt="discord" />
                    <img src="./images/twitter.png" alt="twitter" />
                </span>
            </div>
            <div>
                <p>Powered by <span className='font-bold satoshi-bold'>NIFTABLES</span></p>
            </div>
        </footer>
    );
};

export default Footer;