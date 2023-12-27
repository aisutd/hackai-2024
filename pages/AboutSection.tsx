import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import {Typography } from '@mui/material';
import "@fontsource/hind-siliguri";

function AboutSection()
{
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="
      text-hai-dark-blue
      -mt-[5rem] mb-[10rem] translate-y-[5rem]

      h-[calc(106rem-160vw)] xs:h-[calc(82rem-90vw)] sm:h-[calc(84rem-90vw)] md:h-[calc(114rem-125vw)] med:h-[calc(96rem-90vw)] lg:h-[calc(90rem-70vw)] xl:h-[calc(60rem-30vw)]
    ">
      <div className="mx-auto sm:px-8 md:px-32 lg:px-44 font-placard z-0">
        <div className="block md:flex">
          <div className="mb-6 md:mb-2 md:mr-14">
            <Typography className="font-placard text-center md:text-left mb-2 md:mb-4 text-3xl md:text-4xl font-bold">About</Typography>
          </div>
          <div 
            ref={ref}
            className="mx-6 md:mx-0 text-center md:text-left"
          >
            <div 
              className="mb-10 md:mb-6"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.0s"
              }}
            >
              <div className="text-xl md:text-2xl font-bold flex justify-center items-center md:justify-start md:items-start">
                <img src="target.svg" />
                <Typography className="font-placard text-2xl md:text-3xl ml-2 mb-2">Our Mission</Typography>
              </div>
              <div className="text-lg font-roboto">
              We hope to demystify this special niche in computer science and bring it forward to all students through an AI-related hackathon. We aim for our events to provide opportunities for students to learn about the field and connect with experienced professionals who can further guide them in their AI journey.
              </div>
            </div>
            <div 
              className="mb-10 md:mb-6"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              <div className="text-xl md:text-2xl font-bold flex justify-center items-center md:justify-start md:items-start">
                <img src="brain.png" className="h-[35px]"/>
                <Typography className="font-placard text-2xl md:text-3xl ml-2 mb-2">What is HackAI</Typography>
              </div>
              <div className="text-lg font-roboto">
                Student-run hackathon organized by the Artificial Intelligence Society (AIS) at UTD, aiming to empower students with the knowledge and resources needed to build Artificial Intelligence related projects in the span of 24 hours. Our goal is to provide UTD students with a fun-filled, engaging day that will inspire them and ignite their passion for AI.
              </div>
            </div>
            <div 
              className="mb-10 md:mb-6"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
              }}
            >
              <div className="text-xl md:text-2xl font-bold flex justify-center items-center md:justify-start md:items-start">
                <img src="handshake.svg" className="md:pt-[6px]"/>
                <Typography className="font-placard text-2xl md:text-3xl ml-2 mb-2">For Sponsors</Typography>
              </div>
              <div className="text-lg font-roboto">
                Sponsoring HackAI is a win-win opportunity. Your contribution can help enable participants to complete company challenges while giving your company access to top tech talent, direct engagement with students, opportunities for building brand recognition, and even potential business solutions.
              </div>
              <div className="hidden text-lg font-roboto">
                While a one-day hackathon is far from a complete zero-to-master learning experience, it is a great first step for students of all backgrounds. HackAI is our largest event of the year, and it never fails to build communities as students make new friends, share memories with fellow hackers, and enjoy a truly light and welcoming atmosphere.
                <br/><br/>
                We like to market how HackAI is the largest AI hackathon in Texas, but for us, it isn't about the numbers. Our driven officer team at AIS works tirelessly throughout the year to ensure we provide the best quality experience for our hackers so that HackAI will be a day you never forget.
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default AboutSection;
