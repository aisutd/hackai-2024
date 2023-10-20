import * as React from 'react';
import { useState } from 'react';
import { Typography, Button, Menu, MenuItem } from '@mui/material';
import { useScroll, animated } from 'react-spring'

export default function Landing() {
  {/*for the appbar*/}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleItemClick = (secName) => {
    setAnchorEl(null);
    document.getElementById(secName).scrollIntoView()
  };

  return (
    <>
      <div className="fixed z-20 backdrop-blur-sm text-hai-orange font-lucidity">
        <AppbarBG transparencyThreshold="0" className=""/>
        <nav className="bg-none w-[100vw] h-[5rem] grid grid-cols-2 md:grid-cols-3 place-items-center">
          <div onClick={() => {handleItemClick('landing')}} className="flex gap-4 items-center [cursor:pointer]">
            <img src="hai-logo.png" className="h-[3rem] object-contain"/>
          </div>
          <div className="gap-10 col-span-2 justify-self-start text-[1.5rem] font-normal hidden md:flex lg:col-span-1 lg:justify-self-center">
            <div onClick={() => {handleItemClick('about')}} className="[cursor:pointer]">About</div>
            <div onClick={() => {handleItemClick('schedule')}} className="[cursor:pointer]">Schedule</div>
            <div onClick={() => {handleItemClick('faqs')}} className="[cursor:pointer]">Faqs</div>
            <div onClick={() => {handleItemClick('partners')}} className="[cursor:pointer]">Partners</div>
          </div>
          <div className="flex md:hidden">
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <img src="hamburger-icon.svg" className="h-[1.5rem] object-contain"/>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => {handleItemClick('about')}}>About</MenuItem>
              <MenuItem onClick={() => {handleItemClick('schedule')}}>Schedule</MenuItem>
              <MenuItem onClick={() => {handleItemClick('faqs')}}>Faqs</MenuItem>
              <MenuItem onClick={() => {handleItemClick('partners')}}>Partners</MenuItem>
            </Menu>
          </div>
          <div className="hidden lg:flex gap-4">
            <button onClick={() => window.open("https://www.aisutd.org", "_blank")}>
              <img src="www-icon.svg" className="h-[1.5rem] object-contain"/>
            </button>
            <button onClick={() => window.open("https://www.instagram.com/utdais", "_blank")}>
              <img src="insta-icon.svg" className="h-[1.5rem] object-contain"/>
            </button>
            <button onClick={() => window.open("https://www.youtube.com/@artificialintelligencesoci9846", "_blank")}>
              <img src="yt-icon.svg" className="h-[1.5rem] object-contain"/>
            </button>
            <button onClick={() => window.open("https://www.linkedin.com/company/ais-utd", "_blank")}>
              <img src="linkedin-icon.svg" className="h-[1.5rem] object-contain"/>
            </button>
            <button onClick={() => window.open("https://www.aisutd.org/discord", "_blank")}>
              <img src="discord-icon.svg" className="h-[1.5rem] object-contain"/>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

function AppbarBG(props)
{
  const [opac, setOpac] = useState(0)

  const { scrollYProgress } = useScroll
  ({
    onChange: ({ value: { scrollYProgress } }) =>
    {
      if ( scrollYProgress < parseFloat(props.transparencyThreshold) )
      {
        setOpac( 1 / parseFloat(props.transparencyThreshold) * scrollYProgress)
      }
      else
      {
        setOpac(1)
      }
    }
  })

  return(
    <>
      {/* <animated.div className="absolute bg-ais-new-beige w-[100vw] h-[5rem] -z-10"
      style={{ opacity: opac }}/> */}
      <div className={`absolute bg-hai-beige opacity-80 -m-[1rem] w-[100vw] h-[6rem] -z-10`}/>
    </>
  )
}