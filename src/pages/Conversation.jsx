import React from "react";
import { format } from "timeago.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Conversation(props) {
    const axios = useAxiosPrivate();
    const scroll = useRef();
    const [sent, setSent] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    // function to generate 
    function generateRandomString(length) {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var result = "";
        for (var i = 0; i < length; i++) {
            var randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
 
    const [clientIdFromStorage, setclientIdFromStorage] = useState('');

    // get chat
    const fetchChat = () => {
        return axios.get(`/chat/${clientIdFromStorage}`)
    }

    const { isLoading: loadingChat, data: chatData,  } = useQuery(
        [`chat-${clientIdFromStorage}`, clientIdFromStorage ],
        fetchChat,
        {
            keepPreviousData: true,
            enabled: !!clientIdFromStorage,
            refetchInterval: 1000,
        },
    )

    useEffect(()=>{
        if(!localStorage.getItem("clientId")){
            localStorage.setItem("clientId", generateRandomString(20));
        }
        
        setclientIdFromStorage(localStorage.getItem("clientId"));
    }, [localStorage.getItem("clientId")])



    // upload function
    const uploadMessage = (message) => {
        return axios.post("/chat", message);
    };

    const {
        mutate: messageMutate,
        isLoading: messageLoading,
        error,
    } = useMutation(uploadMessage, {
        onSuccess: (response) => {
            toast.success(response?.data?.message);
            // queryClient.invalidateQueries([`messages--`]);

            reset();
        },
        onError: (err) => {
            const text = err?.response?.data?.message;
            toast.error(text);

            if (!err.response.data.message) {
                toast.error("something went wrong");
            }
        },
    });

    const submitMessage = (data) => {
        data.clientId = clientIdFromStorage;
        data.senderId = clientIdFromStorage;
        setSent(data.message);
        messageMutate(data);
    };

    // Always scroll to last Message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [sent, chatData?.data?.messages?.length ]);

  

    return (
        <div>
            
            <div className="px-4 py-4 ">
                <div className=" min-h-[300px] bg-chatBg no-scrollbar  max-h-[300px] border-3 border-dotted overflow-y-auto -auto ">
                    {
                        chatData?.data?.message ? 
                        <div className="text-center text-dark ">
                            <h1>Hi there 👋</h1>
                            <p>We're ready to help you</p>

                        </div>
                        :
                    
                    chatData?.data?.messages?.map((message, index) => {
                        return (
                            <div
                                ref={scroll}
                                className={
                                    message.senderId === clientIdFromStorage
                                        ? "m-2 py-1 bg-[#379237] px-2 rounded-md  text-white w-[70%] float-right  "
                                        : "text-white float-left bg-gray-800 w-[70%] m-2  px-2 py-1 rounded-md "
                                }
                                key={index}
                            >
                                <p className="">{message?.message}</p>
                                <h1 className="text-xs text-right">
                                    {format(message?.createdAt)}
                                </h1>
                                <h1 className="text-[15px] text-right"> </h1>
                            </div>
                        );
                    })}
                </div>
                <form
                    onSubmit={handleSubmit(submitMessage)}
                    className="grid grid-cols-1 gap-6 "
                >
                   
                    <div className="flex gap-2 items-center mt-2">
                        <input
                            placeholder="Type message"
                            id="message"
                            name="message"
                            autoFocus
                            rows="1"
                            {...register("message", {
                                required: true,
                            })}
                            className="mt-1 py-2 px-3    block text-dark w-full rounded-md bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        ></input>

                        <button className="bg-primary text-dark py-2 px-4 rounded-md hover:bg-secondary hover:text-light ">
                            Send
                        </button>
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
}

export default Conversation;