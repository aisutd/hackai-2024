import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Box, Button, TextField, Typography, useMediaQuery } from '@mui/material';
import "@fontsource/hind-siliguri";

function WorkWithUsSection()
{
    const mobile = useMediaQuery('(max-width:1023px)')     
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="py-14 text-white bg-hai-dark-blue">
            <div className="mb-2 flex flex-row justify-center">
                <Typography fontFamily={"var(--PlacardNext)"} className="font-medium text-5xl">WORK WITH US</Typography>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-evenly'>
                <Box
                    sx={ mobile ? {
                        width: '80vw',
                        height: 300,
                        mt: 6
                    } : {
                        width: 500,
                        height: 300,
                        mt: 6
                    }}
                    border={2}
                    borderRadius={6}
                    borderColor="#FEF9EE"

                >
                    <Box
                        sx={{
                            width: 175,
                            height: 40,
                            mt:-3,
                            backgroundColor: "#FEF9EE",
                            mx: 'auto',
                        }}
                        border={3}
                        borderRadius={10}
                    >
                        <Typography flexGrow={1} textAlign="center" className="font-bold" fontFamily={"var(--PlacardNext)"} fontSize={20} color="#FE6B52">
                            Students
                        </Typography>
                    </Box>
                    <div className='flex flex-col justify-around mt-5 text-center'>
                        <Typography fontFamily={"var(--PlacardNext)"} className='font-bold ml-[5vw] lg:ml-2' fontSize={25} color="white">
                            Interested in helping?
                        </Typography>
                        <div className='w-[80vw] lg:w-[450px] pt-3'>
                            <Typography fontFamily={"var(--PlacardNext)"} className='ml-[5vw] w-[70vw] lg:ml-6 lg:w-full'>
                                If you're interested in becoming a volunteer or mentor, we're constantly on the lookout for individuals
                                to help make HackAI the best AI hackathon! Please fill out the form below.
                            </Typography>
                        </div>
                        <div className='flex mt-2 sm:mt-10 flex-row items-center justify-evenly'>
                            <Button onClick={() => window.open("https://coda.io/form/Volunteer-Mentor-Form_dBCSFvzl4RV", "_blank")} className='p-3 bg-[#FEF9EE] w-[140px] text-[#FE6B52] hover:bg-[#FE6B52] hover:text-[#FEF9EE]' variant="contained">
                                <Typography className="font-bold" fontFamily={"var(--PlacardNext)"} textTransform={"none"}>Volunteer</Typography>
                            </Button>
                            <Button onClick={() => window.open("https://coda.io/form/Volunteer-Mentor-Form_dBCSFvzl4RV", "_blank")} className='p-3 bg-[#FEF9EE] w-[140px] text-[#FE6B52] hover:bg-[#FE6B52] hover:text-[#FEF9EE]' variant="contained">
                                <Typography className="font-bold" fontFamily={"var(--PlacardNext)"} textTransform={"none"}>Mentor</Typography>
                            </Button>
                        </div>
                    </div>
                </Box>
                <Box
                    sx={ mobile ? {
                        width: '80vw',
                        height: 300,
                        mt: 6
                    } : {
                        width: 500,
                        height: 300,
                        mt: 6
                    }}
                    border={2}
                    borderRadius={6}
                    borderColor="#FEF9EE"

                >
                    <Box
                        sx={{
                            width: 175,
                            height: 40,
                            mt:-3,
                            backgroundColor: "#FEF9EE",
                            mx: 'auto',
                        }}
                        border={3}
                        borderRadius={10}
                    >
                        <Typography fontFamily={"var(--PlacardNext)"} className="font-bold" flexGrow={1} textAlign="center" fontSize={20} color="#FE6B52">
                            Companies
                        </Typography>
                    </Box>
                    <div className='flex flex-col justify-around mt-5 text-center'>
                        <Typography fontFamily={"var(--PlacardNext)"} className='font-bold ml-[5vw] lg:ml-6' fontSize={25} color="white">
                            Interested in partnering?
                        </Typography>
                        <div className='w-[80vw] lg:w-[450px] pt-3'>
                            <Typography fontFamily={"var(--PlacardNext)"}  className='ml-[5vw] w-[70vw] lg:ml-6 lg:w-full'>
                                If you or a group you represent are interested in partnering, please click below to view our Partner
                                Packet.
                            </Typography>
                        </div>
                        <div className='flex sm:mt-16 flex-row items-center justify-center'>
                            <Button onClick={() => location.href="mailto:contact@aisociety.io"} className='p-3 bg-[#FEF9EE] w-[170px] text-[#FE6B52] hover:bg-[#FE6B52] hover:text-[#FEF9EE]' variant="contained">
                                <Typography fontFamily={"var(--PlacardNext)"} className="font-bold" textTransform={"none"}>Contact Us</Typography>
                            </Button>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default WorkWithUsSection;
