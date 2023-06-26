import React from 'react';
import { useState } from 'react';
import chatIcon from '../assets/graphics/chat-icon.png';
import { useLocation } from 'react-router-dom';
import Conversation from './Conversation';
import { IoCloseSharp } from 'react-icons/io5';

function ChatWithUs() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const location = useLocation();
    const { pathname } = location;

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className={`right-3 bottom-4 fixed cursor-pointer z-50 ${pathname.includes('dashboard') && 'hidden'}`}>
            <div>
                {!isChatOpen && (
                    <button
                        className="fixed bottom-8 right-8 w-[65px] h-[65px] bg-blue-500 text-white rounded-full shadow-lg z-10 transition-opacity duration-300 ease-in-out"
                        onClick={toggleChat}
                    >
                        <img src={chatIcon} alt="" />
                    </button>
                )}

                {isChatOpen && (
                    <div className="fixed bottom-8 right-8 w-64 sm:w-[350px] h-[470px] bg-white rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out">
                        <button
                            className="absolute top-6 right-3 w-6 h-6 text-gray-600 hover:text-gray-800"
                            onClick={toggleChat}
                        >
                            <IoCloseSharp color="white" size={23} />
                        </button>
                        <div className="bg-[#4a47a5] py-4 text-light rounded-t-md px-2">
                            <h1 className="font-bold text-lg text-light">Welcome to Zeropreps</h1>
                            <h1>Hi there 👋</h1>
                        </div>

                        {/* Your chat content goes here */}
                        <Conversation />
                    </div>
                )}

                {/* The rest of your app */}
            </div>
        </div>
    );
}

export default ChatWithUs;
