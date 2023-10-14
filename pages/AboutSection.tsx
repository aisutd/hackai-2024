import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { Handshake } from '@mui/icons-material';
import {Typography } from '@mui/material';
import "@fontsource/hind-siliguri";

function AboutSection()
{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
        <div className="mx-auto py-24 sm:px-8 md:px-32 lg:px-44 text-white font-lucidity z-0 bg-[#3E69B9]">
            <div className="block md:flex">
                <div className="mb-6 md:mb-2 md:mr-14">
                    <Typography fontFamily={"var(--PlacardNext)"} className="text-center md:text-left mb-2 md:mb-4 text-3xl md:text-4xl font-bold">About</Typography>
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
                            <img src="goal.svg" />
                            <Typography fontFamily={"var(--PlacardNext)"} className="text-2xl md:text-3xl ml-2 mb-2">Our Mission</Typography>
                        </div>
                        <div className="text-lg font-hind">
                        We hope to demystify this specialized niche in computer science and bring it forward to students through an AI-related hackathon. We aim for our in-person event to provide both learning and competition opportunities and connect them to professionals who can further guide them in their AI journey.
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
                            <img src="brain.png" />
                            <Typography fontFamily={"var(--PlacardNext)"} className="text-2xl md:text-3xl ml-2 mb-2">What is HackAI</Typography>

                        </div>
                        <div className="text-lg font-hind">
                            Student-run hackathon organized by the Artificial Intelligence Society at UTD, aiming to connect today's students with the knowledge and resources needed to build Artificial Intelligence related projects in the span of 24 hours.
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
                            <Handshake className="handhshake.svg" fontSize="large"/>
                            <Typography fontFamily={"var(--PlacardNext)"} className="text-2xl md:text-3xl ml-2 mb-2">Why HackAI </Typography>
                        </div>
                        <div className="text-lg font-hind">
                        Sponsoring HackAI is a win-win opportunity. Your contribution can help participants complete company challenges while giving your company access to top tech talent, advertising opportunities, branding recognition, tech talk presentation time, product showcase, and even potential business challenge solutions.
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        
        </>
    )
}

export default AboutSection;
