import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Desing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. snns",
    link: "Learn more",
  },
  {
    name: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. snns",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. snns",
    link: "Learn more",
  },
  {
    name: "Product Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. snns",
    link: "Learn more",
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
          variants={fadeIn('right',0.3)} 
          initial="hidden" 
          whileInView={'show'}
          viewport={{
            once:false,
            amount:0.7
          }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 ">
            {/* text */}
            <h2 className="h2  mb-6">What I Do </h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a freelancer Full Stack web, I have experience using
              technologies such as html, css, react, javascript, java, sql, figma
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* Services */}
          <motion.div
          variants={fadeIn('left',0.3)} 
          initial="hidden" 
          whileInView={'show'}
          viewport={{
            once:false,
            amount:0.7
          }}
          className="flex-1">
            {/* Services list */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20
                  h-[147px] mb-[38px] flex
                  "
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary  font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end ">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight></BsArrowUpRight>
                      </a>
                      <a className="text-gradient text-sm " href="#">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
