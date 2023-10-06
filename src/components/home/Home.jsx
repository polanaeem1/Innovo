import React from "react";
import hero from "../../assets/undraw_community_re_cyrm.svg";
import { logos } from "../../../Data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center mb-60">
        <div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> the new way <br /> to Make Your Research online
          </div>
          <p className="text-lg mt-4 leading-7 text-gray max-w-sm">
            The leading global platform for open science by empowering
            communities and accelerating innovation through knowledge sharing.
          </p>
          <div className="login-box sm:flex items-center hidden	mt-8">
            <Link to="/register">
              {" "}
              <button className="py-3 px-6 mr-4	font-bold text-sm border border-solid rounded-lg text-white bg-Teal">
                Sign Up
              </button>
            </Link>
            <Link to="/signIn">
              {" "}
              <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-black">
                Log in
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-[50%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">
            100+ leading universities and companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
