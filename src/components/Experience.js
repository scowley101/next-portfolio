import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} {address && `| ${address}`}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
        <Details
              position="Kitchen Consultant"
              company="Orri"
              companyLink="https://www.orri-uk.com/"
              time="02/2023 - Present"
              work="I have been working closely with Orri's team to improve their kitchen
              processes and design. Through identifying opportunities for improvement and implementing tests and feedback, I have been helping to develop a streamlined kitchen setup and menu, which will be in place for the opening of Orri's new location this summer.sss"
            />

            <Details
              position="Front End Developer"
              company="Freelance"
              companyLink="https://fearon.io"
              time="01/2022 - Present"
              work="I have worked on a variety of projects, ranging from small businesses to community groups. This has allowed me to develop my skills in a wide range of techniques and frameworks, including Gatsby, Next.js, GraphQL, REST APIs, Shopify, Sanity CMS, and Netlify, and to hone my problem- solving skills through iterative testing and learning."
            />

            <Details
              position="Co Founder"
              company="Cow + Field"
              companyLink="https://instagram.com/cowandfield"
              time="12/2017 - Present"
              work="As Co-Founder of Cow + Field, I successfully ran and grew a successful event catering business with a focus on large-scale weddings, corporate events, and private catering. My responsibilities included menu design, recruitment and management of kitchen staff, tracking and reporting gross profit, implementing and managing the HACCP plan, ordering, and customer service."
            />

            <Details
              position="Customer Journey Manager"
              company="Bupa"
              companyLink="https://www.bupa.co.uk/"
              time="12/2013 - 05/2015"
              work="I was responsible for managing the websites of Bupa’s Health Assessments and Care Services businesses respectively. During my tenure, I led a number of digital transformation projects that increased traffic and leads to these key areas while improving the user experience. I am highly skilled in web design, user experience and project management."
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
