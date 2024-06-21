import React from 'react';
import useAuth from '../hooks/useAuth';
import { BsChatDotsFill } from "react-icons/bs";


const CtaBanner = () => {
    const { auth, setAuth } = useAuth();

    return (
        <div className="bg-blue-500 data-nosnippet py-6 my-5 px-3 rounded-lg">
            <div className="container mx-auto flex items-center justify-between">
                {/* <p className="text-white text-lg">Need help with your ProctorU exam? Chat with us!</p> */}
                <p className="text-light text-lg md:text-xl font-bold basis-10/12">Finding it hard to crack ProctorU exams? Hire Us! </p>

                <button className="bg-red-500 basis-2/12 flex justify-center items-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        setAuth({ liveChat: !auth?.liveChat })

                    }}
                >
                    <p className="flex">
                        Live Chat
                    </p>
                </button>
            </div>
        </div>
    );
};

export default CtaBanner;
