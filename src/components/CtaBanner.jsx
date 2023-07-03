import React from 'react';
import useAuth from '../hooks/useAuth';
import { BsChatDotsFill } from "react-icons/bs";


const CtaBanner = () => {
    const { auth, setAuth } = useAuth();

    return (
        <div className="bg-blue-500 py-4 my-5 px-3 rounded-lg">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-white text-lg">Need help? Chat with us!</p>
                <button className="bg-blue-900 flex justify-center items-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        setAuth({ liveChat: !auth?.liveChat })

                    }}
                >
                    <BsChatDotsFill className="inline-block mr-2" />
                    <p className="hidden md:flex">
                        Live Chat
                    </p>
                </button>
            </div>
        </div>
    );
};

export default CtaBanner;
