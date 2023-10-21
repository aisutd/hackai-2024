import { useState } from 'react'
import { useSpring, easings, animated } from 'react-spring'
import { Typography, Button } from '@mui/material';

export default RegisterPulse;

function RegisterPulse(props)
{
  const pulse = useSpring
  ({
      from:{ opacity:1.2, scalex:0.9, scaley:0.6 },
      to:{ opacity:0, scalex:1.25 , scaley:2 },
      loop:true,
      delay:0,
      config:{ mass:10, tension:30, friction:25, clamp:true }
  })

  return(
    <div className={props.className}>
      <button className="w-[16rem] h-[4rem] bg-white rounded-[1.3rem] border-[3px] border-[#FE6B52] hover:[transform:scale(1.07)] uppercase z-0">
        <Typography variant="h6" fontFamily={"var(--PlacardNext)"} className="text-[#FE6B52] font-bold text-2xl">Register Now!</Typography>
      </button>
    </div>
  )
}