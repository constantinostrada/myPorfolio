import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/airbnbapp.svg";
import Img2 from '../assets/ecomerce-of-sneakers.svg'
import Img3 from '../assets/gosociallporfolio.svg'
const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 ">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <motion.div
            variants={fadeIn('right',0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            >
              <h2 className="h2 leading-tight ">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                lobortis dolor. Nullam pulvinar, lorem sed malesuada blandit,
                risus orci dapibus mi, eu scelerisque quam nisl et felis.{" "}
              </p>
              <button className="btn btn-sm">View all projects</button>
            </motion.div>
            {/* image */}
            <motion.div
            variants={fadeIn('right',0.3)} 
            initial="hidden" 
            whileInView={'show'}
            viewport={{
              once:false,
              amount:0.7
            }}
            
            className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer  "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img1}
                alt="airbnb"
              ></img>
              {/* pretier */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">UI/UX Desing</span>
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">Airbnb-clone</span>
              </div>
            </motion.div>
          </div>
          <motion.div
           variants={fadeIn('left',0.3)} 
           initial="hidden" 
           whileInView={'show'}
           viewport={{
             once:false,
             amount:0.7
           }}
          className="flex-1 flex flex-col gap-y-10 ">
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer  "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img2}
                alt="ecommerce-snakers"
              ></img>
              {/* pretier */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">UI/UX Desing</span>
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">Ecommerce of Sneakers</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer  "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img3}
                alt="goSociall"
              ></img>
              {/* pretier */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">UI/UX Desing</span>
              </div>
              {/* tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">GoSociall</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
