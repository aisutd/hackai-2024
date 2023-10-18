import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Button, TextField, Typography, useMediaQuery } from '@mui/material';
import "@fontsource/hind-siliguri";

function JoinSection()
{
    const mobile = useMediaQuery('(max-width:1023px)')     
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="bg-hai-light-blue text-white h-[25rem] w-screen flex justify-center z-0">
            <img
                className="absolute h-[18rem] bottom-0 left-0"
                src="ski-silhouette.png"
            />
            <img
                className="absolute h-[18rem] top-0 right-0"
                src="ski-lift-silhouette.png"
            />
            <div className="flex flex-col items-center justify-center text-center z-10">
                <text className="uppercase font-placard text-[5rem] leading-[1.5] tracking-wide [text-shadow:#FE6B52_0px_4px_10px]">Join HackAI '24!</text>
                <button onClick={() => window.open("/coming-soon", "_blank")}
                className="my-[1rem] w-[12rem] h-[3rem] bg-white rounded-[0.8rem] text-black font-lucidity text-[1.1rem] font-normal uppercase z-0 border-[3px] border-black hover:[transform:scale(1.07)]"
                >
                    Register Now
                </button>
            </div>
        </div>
    )
}

export default JoinSection;
