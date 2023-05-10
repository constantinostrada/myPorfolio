import React from "react";
import BanerAstro from "../assets/header-img.svg";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center  lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="text-[45px] font-bold leading-[0.8] lg:text-[80px] "
            >
              Constantino <span>Strada</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: false,
                amount: 0.7,
              }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary
          font-semibold uppercase leading-[1]
          "
            >
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Front-end",
                  2000,
                  "Back-End",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              ></TypeAnimation>
            </motion.div>
            <motion.p 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            className="mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              lobortis dolor. Nullam pulvinar, lorem sed malesuada blandit,
              risus orci dapibus mi, eu scelerisque quam nisl et felis. Sed
              malesuada mi sit amet justo porttitor consectetur.
            </motion.p>
            <motion.div 
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact Me</button>
            </motion.div>
            <motion.div
            variants={fadeIn('up',0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ">
              <a className="text-[45px]"
               href="https://www.linkedin.com/in/constantino-strada-1339a4225/">
                <FaLinkedin></FaLinkedin>
              </a>
              <a className="text-[45px]"
               href="https://github.com/constantinostrada?tab=repositories">
                <FaGithub></FaGithub>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
          variants={fadeIn('up',0.3)} 
          initial="hidden" 
          whileInView={'show'}
          viewport={{
            once:false,
            amount:0.7
          }}
          className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] ">
            <img src={BanerAstro} alt="BanerAstro"></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
