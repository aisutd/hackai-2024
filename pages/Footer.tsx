import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, Button, TextField, Typography } from '@mui/material';
import "@fontsource/hind-siliguri";

function FooterSection()
{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
    
        <div className="bg-hai-navy mx-auto py-20 sm:px-[5vw] md:px-20 text-white">
            <div className='flex flex-col sm:flex-row text-center sm:text-left items-center justify-between'>
                <Box>
                    <Typography fontFamily={"var(--PlacardNext)"} fontWeight={600} fontSize={48} color="white">
                        HACKAI
                    </Typography>
                    <div className='w-[380px]'>
                        <Typography fontFamily={"hind siliguri"} fontSize={17}>
                            Be the change you want to see in the world!
                        </Typography>
                    </div>
                </Box>
                <div className='flex flex-col mt-10 sm:mt-0'>
                    <button onClick={() => window.open("https://www.aisutd.org/", "_blank")}>
                        <Typography fontFamily={"hind siliguri"} fontWeight={600} className='text-center sm:text-right ml-6 mb-2' fontSize={18} color="white">
                        AIS Website
                        </Typography>
                    </button>
                    <div className='flex flex-row items-center justify-between'>
                        <button onClick={() => window.open("https://www.instagram.com/utdais/", "_blank")}><img src='/instagram.svg'/></button>
                        <button onClick={() => window.open("https://discord.gg/nKdr4jvK", "_blank")}><img src='/discord.svg'/></button>
                        <button onClick={() => window.open("https://www.linkedin.com/company/ais-utd/", "_blank")}><img src='/linkedin.svg'/></button>
                        <button onClick={() => window.open("https://www.youtube.com/@artificialintelligencesoci9846", "_blank")}><img src='/youtube.svg'/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection;
