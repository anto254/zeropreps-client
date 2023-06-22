import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { FaTelegramPlane } from "react-icons/fa";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Card, Image, Text } from "@mantine/core";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../api/axios";
import heroV from "../assets/graphics/hero3.png";
import { Link as LinkS } from "react-scroll";
import { BiDownArrowAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import Typed from "react-typed";
import { Helmet } from "react-helmet-async";
import StarRating from "../components/StarRating";

function HomePage() {
  // fetch blogs
  const [perPage, setPerPage] = useState(4);
  const [activePage, setPage] = useState(1);

  const fetchBlogs = () => {
    return axios.get(`/blogs?page=${activePage}&perPage=${perPage}`);
  };

  const {
    isLoading: loadingBlogs,
    data: blogsData,
    isRefetching: refetchingBlogs,
  } = useQuery(["blogs", activePage], fetchBlogs, {
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
  // ...........................
  // fetch reviews...............
  const fetchReviews = () => {
    return axios.get(`/reviews?page=${activePage}&perPage=${perPage}`);
  };

  const {
    isLoading: loadingReviews,
    data: reviewsData,
    isRefetching: refetchingReviews,
  } = useQuery(["reviews", activePage], fetchReviews, {
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });
  // ..........................................
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // upload function
  const uploadMessage = (message) => {
    return axios.post("/contacts", message);
  };

  const {
    mutate: messageMutate,
    isLoading: messageLoading,
    error,
  } = useMutation(uploadMessage, {
    onSuccess: (response) => {
      toast.success(response?.data?.message);
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
    messageMutate(data);
  };
  // ........................................

  return (
    <div className="">
      <Helmet>
        <title>ZeroPreps</title>
        <meta name="description" content="cheat proctoru, cheat GRE" />
        <meta name="keywords" content="cheat proctorU, cheat GRE, cheat online proctored exam, cheat TOEFL, flaged by proctoru, " />
        <link rel="canonical" href={`/`} />
      </Helmet>
      <NavBar />
      <div className="min-h-[400px]   ">
        {/* hero section */}
        <div className=" pt-[100px]   bg-heroBg2 bg-cover  bg-blend-overlay bg-[#171929]  h-[600px] gap-5 text-center leading-[1.75]">
          <div className=" md:flex justify-between items-center md:px-[200px] text-center ">
            <div className="flex flex-col text-center px-1 md:text-start basis-1/2  ">
              <h1 className="text-[30px] md:text-[40px]  ">
                Zero<span className="text-light">Preps</span>
              </h1>
              <h1>
                Welcome to ZeroPreps, A Unique Solution for Proctoru Exams
              </h1>
              <p className="text-gray-200">
                As a premier single-service platform, we have a distinctive
                solution to Proctoru exams. We help you ace them without
                requiring any significant effort from your part. Worry no more
                about online proctored exams.
              </p>
              <div className="py-5  flex justify-center md:justify-start items-center gap-6">
                <div className="flex flex-row-reverse  items-center gap-3 cursor-pointer px-4 py-2  ">
                  <a href="https://t.me/zeropreps" target="_blank">
                    <button className="bg-blue-500 flex items-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                      <FaTelegramPlane className="inline-block mr-2" />
                      <p className="hidden md:flex">Telegram</p>
                    </button>
                  </a>
                 
                </div>

                <a target="_blank" href="https://wa.me/+1(304) 996-3137">
                  <button className="bg-green-500 flex items-center hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    <FaWhatsapp className="flex mr-2" />
                    <p className="hidden md:flex">
                   WhatsApp
                    </p>
                  </button>
                </a>
              </div>
              <div className="pt-8 flex justify-center md:justify-end">
                <LinkS
                  activeClass="active"
                  to="blogs"
                  spy={true}
                  smooth={true}
                  offset={-65}
                >
                  <p className="mt-[10px] flex justify-start items-center gap-2 text-light animate__animated animate__bounce animate__infinite animate__slow hover:text-primary">
                    <span className="p-2 bg-primary rounded-full">
                      <BiDownArrowAlt color="#343a40" />
                    </span>{" "}
                    SCROLL DOWN
                  </p>
                </LinkS>
              </div>
            </div>
            <div className="hidden md:inline">
              <img src={heroV} alt="" className="h-[400px] c " />
            </div>
          </div>
        </div>
        {/* end hero */}

        <div className="flex px-6 py-4 md:px-[100px]justify-center items-center">
          <div className="w-full  p-8  rounded-lg shadow-lg">
            <h2 className="text-2xl italic font-bold text-center mb-4">
              Zeropreps
            </h2>
            <p className="text-lg text-center italic font-medium text-gray-400">
              <Typed
                strings={[
                  "Passing  Proctoru exams require no preparation whatsoever!!!",
                ]}
                typeSpeed={80}
                backSpeed={40}
                loop
                loopDelay={9000}
              />
            </p>
          </div>
        </div>

        {/* blogs */}
        <div
          className="bg-[#060818] px-6 py-4 md:px-[100px] mt-[60px]"
          id="blogs"
        >
          <h1 className="text-lg font-bold my-3">Blogs</h1>

          <div className=" flex flex-col md:grid md:grid-cols-4 gap-4 ">
            {loadingBlogs ? (
              <div className="flex justify-center  gap-3 items-center">
                <h1>Loading</h1>
                <p colSpan={10} className="text-center pt-2">
                  {" "}
                  <PulseLoader color="#ffd700" size={10} />
                </p>
              </div>
            ) : blogsData?.data?.message ? (
              <tr>
                <td colSpan={7} className="text-gray-800 text-center py-3">
                  {blogsData?.data?.message}
                </td>
              </tr>
            ) : (
              blogsData?.data?.blogs?.map((blog, index) => {
                return (
                  <Card
                    key={index}
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    className="bg-dark border h-[400px] border-secondary flex flex-col gap-2"
                  >
                    <Card.Section>
                      <img
                        src={`${blog?.img}`}
                        alt="Norway"
                        className="h-[150px] w-full "
                        loading="lazy"
                      />
                    </Card.Section>

                    <Text size="sm" color="#ffd700">
                      {blog?.title}
                    </Text>
                    <Text size="sm" color="dimmed">
                      {blog?.summary.substr(0, 200)} ...
                    </Text>
                    {/* <div className="content" dangerouslySetInnerHTML={{__html:blog.content}} /> */}

                    <Link to={`/blog/${blog?.slug}`}>
                      <div className="flex  items-center gap-2 cursor-pointer  ">
                        <h1 className="text-primary ">Read more </h1>
                        <HiOutlineArrowSmRight color="#ffd700" size={20} />
                      </div>
                    </Link>
                  </Card>
                );
              })
            )}
          </div>
          <div>
            <Link to="/blogs">
              <h1 className="my-6 text-center cursor-pointer hover:underline">
                See all blogs{" "}
              </h1>
            </Link>
          </div>
        </div>

        {/*Reviews  */}
        <div className="px-6 py-4 md:px-[100px] mt-[60px]">
          <h1 className="text-lg font-bold ">Reviews</h1>
          <div className=" flex flex-col md:grid md:grid-cols-4 gap-4 ">
            {loadingReviews ? (
              <div className="flex justify-center  gap-3 items-center">
                <h1>Loading</h1>
                <p colSpan={10} className="text-center pt-2">
                  {" "}
                  <PulseLoader color="#ffd700" size={10} />
                </p>
              </div>
            ) : reviewsData?.data?.message ? (
              <tr>
                <td colSpan={7} className="text-gray-800 text-center py-3">
                  {blogsData?.data?.message}
                </td>
              </tr>
            ) : (
              reviewsData?.data?.reviews.map((review, index) => {
                return (
                  <div key={index} className=" my-3 p-2 bg-secondary ">
                    <div className="flex items-center justify-between text-gray-400 ">
                      <h1 className="font-bold text-lg p-2  ">
                        {review?.name}{" "}
                      </h1>
                      <p>{review?.time}</p>
                    </div>
                    <p className="p-2 text-gray-400 h-[250px] overflow-hidden ">
                      {review?.review} 
                    </p>
                    {/* star icons */}
                    <div className="flex items-center  justify-between">
                      <StarRating rating={review?.star} />

                      <h1>
                        Verified <span className="text-green-500">✔</span>{" "}
                      </h1>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div>
            <Link to="/reviews">
              <h1 className="my-6 text-center cursor-pointer hover:underline">
                See all reviews{" "}
              </h1>
            </Link>
          </div>
        </div>
        {/* contact */}
        <div className="py-5" id="contact ">
          <h1 className="text-center font-bold my-2">Contact us </h1>

          <div className="flex flex-col justify-center items-center   ">
            <a href="https://t.me/zeropreps" target="_blank">
              <button className="bg-blue-500 flex items-center hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                <FaTelegramPlane className="inline-block mr-2" />
                <p className="hidden md:flex">Chat on Telegram</p>
              </button>
            </a>

            <form
              onSubmit={handleSubmit(submitMessage)}
              className="min-h-[250px]  px-4 md:px-4 mt-4 bg-secondary shadow-md shadow-indigo-900 w-full md:w-[50%]"
            >
              <div className="flex flex-col gap-4 py-3 w-full ">
                <div className="flex flex-col gap-3">
                  <h1 htmlFor="">Email </h1>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="p-1 w-full border border-secondary border-b border-b-primary focus:border focus:border-primary bg-secondary  outline-none"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">Email is required</p>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <h1 htmlFor="">Title </h1>
                  <input
                    type="text"
                    placeholder="Proctoru exam..."
                    {...register("title", {
                      required: true,
                    })}
                    className="p-1 w-full border border-b border-b-primary border-secondary focus:border focus:border-primary bg-secondary  outline-none"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-xs">title is required</p>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <h1 htmlFor="">Message </h1>
                  <textarea
                    placeholder="I'd like to ask about..."
                    {...register("message", {
                      required: true,
                    })}
                    className="focus:border border-b border-b-primary focus:border-primary bg-secondary p-1 outline-none"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs">Message is required</p>
                  )}
                </div>

                <div className="flex flex-col justify-center items-center w-full m-2">
                  {messageLoading ? (
                    <div className="flex justify-center pr-6 items-center">
                      <PulseLoader color="#6ba54a" size={10} />
                    </div>
                  ) : (
                    <button className=" bg-primary text-secondary rounded-md py-2 px-5 outline-none">
                      Send
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
