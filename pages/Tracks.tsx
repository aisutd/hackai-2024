import React from 'react'
import { Box, Typography, useMediaQuery, Paper, Container } from "@mui/material";
import {useState } from 'react';
import {Rye} from 'next/font/google';

const rye = Rye({
  weight: '400',  // You can specify different weights if available
  subsets: ['latin'],  // Define the subsets (optional, default is ['latin'])
});

const Tracks = () => {

  const [hover, setHover] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#462E24] to-[#B26845] text-white p-4 flex flex-col items-center min-h-screen">
      {/* Title Container */}
      <Container maxWidth="md" disableGutters className="w-full flex justify-center relative">
        
        <div>
        <img src = "Title background.png" alt="Top part" className="center -mt-40 w-auto scale-125 " />
        

        <Box 
          sx={{
            position: 'absolute',
            width: '310.66px',   // Set width from Figma
            height: '110.19px',  // Set height from Figma
            left: '50%',    // Set position from Figma
            top: '13%',       // Set position from Figma
            background: 'rgba(244, 211, 168, 0.62)', // Figma background color with transparency
            borderTopLeftRadius: '155.33px', // Half of width for an ellipse effect
            borderTopRightRadius: '155.33px', // Half of width for an ellipse effect
            borderBottomLeftRadius: '0px', // Keep bottom flat
            borderBottomRightRadius: '0px', // Keep bottom flat
            transform: 'translate(-50%, -50%)',
            zIndex: 10, // Adjust position correctly
          }}
        ></Box>


        <Box 
          sx = {{
            width: 700,
            height: 155,
            borderRadius: '10%',
            bgcolor: 'rgba(244, 211, 168, 0.62)',
            position: 'absolute',
            top: '31%',    // Position from top (adjust as needed)
            left: '50%',   // Position from left (adjust as needed)
            transform: 'translate(-50%, -50%)'
          }}>
            <div className="flex items-center justify-center space-x-4">
              <img src="Horseshoes.png" alt="horseshoe" className="w-auto scale-60 ml-5" />
              <Typography variant="h1" className={`text-center text-7xl m-0 ${rye.className}`}>
                TRACKS
              </Typography>
              <img src="Horseshoes.png" alt="horseshoe" className="w-auto scale-60 mr-5" />
            </div>
          </Box> 
        </div>
        


         
        
      </Container>

      {/* Box Container */}
      <Container maxWidth="md" disableGutters className="flex justify-center -mt-80">
        <Box
          sx={{
            width: 1200,
            height: 1100,
            borderRadius: '15%' ,
            bgcolor: 'rgba(244, 211, 168, 0.62)',
          }}
        >
          <div className="grid grid-cols-2 gap-4 place-items-center">
            <img src = {hover ? "/open side door 1.png" : "/Main door.png"} alt="main door" className="ml-14 mt-8 w-80 h-auto" />
            {hover && (
              <img
                src="/DoorOpenLeft.png"
                alt="Door Opening Left"
                className="absolute top-0 left-0 w-40 h-auto transition-opacity duration-300"
              />
            )}

            {hover && (
              <img
                src="/DoorOpenRight.png"
                alt="Door Opening Right"
                className="absolute top-0 right-0 w-40 h-auto transition-opacity duration-300"
              />
            )}

            <img src = "/Main door.png" alt="main door" className="ml-14 mt-5 w-80 h-auto" />
            <img src = "/Main door.png" alt="main door" className="ml-3 mt-5 w-80 h-auto" />
            <img src = "/Main door.png" alt="main door" className="ml-3 mt-8 w-80 h-auto" />
          </div>
          
        </Box>
      </Container>
    </div>

    
  )
}

export default Tracks