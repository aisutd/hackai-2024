import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, Menu, MenuItem } from '@mui/material';
import { useScroll, animated } from 'react-spring'

export default function Landing() {
  {/*for the appbar*/}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  // const location = useLocation();

  //for hamburger on appbar
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //for closing hamburger on appbar
  const handleClose = () => {
    setAnchorEl(null);
  };

  //for profile/login button on appbar
  const handleProfileClick = (path) => {
    setAnchorEl(null);
    router.push(path);
  };

  //for other appbar buttons
  const handleItemClick = (secName) => {
    setAnchorEl(null);

    if(router.asPath === '/')
    {
      document.getElementById(secName).scrollIntoView();
    }
    else
    {
      router.push('/');
      setTimeout(() => {
        document.getElementById(secName).scrollIntoView();
      }, 100);
    }
  };

  return (
    <>
      <div className="fixed w-[100%] h-[5rem] z-20 backdrop-blur-sm text-hai-orange font-placard text-[1.6rem] font-normal">
        <div className="absolute bg-hai-beige opacity-80 w-[100%] h-[5rem] -z-10"/>
        <nav className="bg-none w-[100%] h-[5rem] grid grid-cols-2 md:grid-cols-6 place-items-center">
          <div onClick={() => {handleItemClick('landing')}} className="[cursor:pointer]">
            <img src="hai-logo.png" className="h-[3.5rem] object-contain"/>
          </div>
          <div className="gap-10 hidden col-span-4 md:flex">
            <button onClick={() => { handleItemClick('about') }} className="[cursor:pointer] tracking-wide hover:underline">About</button>
            <button onClick={() => { handleItemClick('schedule') }} className="[cursor:pointer] tracking-wide hover:underline">Schedule</button>
            <button onClick={() => { handleItemClick('faqs') }} className="[cursor:pointer] tracking-wide hover:underline">Faqs</button>
            <button onClick={() => { handleItemClick('partners') }} className="[cursor:pointer] tracking-wide hover:underline">Partners</button>
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
              <MenuItem onClick={() => {handleProfileClick('/profile')}}>Profile</MenuItem>
              <MenuItem onClick={() => {handleItemClick('schedule')}}>Schedule</MenuItem>
              <MenuItem onClick={() => {handleItemClick('faqs')}}>Faqs</MenuItem>
              <MenuItem onClick={() => {handleItemClick('partners')}}>Partners</MenuItem>
            </Menu>
          </div>
          <div className="hidden md:flex gap-4">
            <ProfileButton
              onClick={() => { handleProfileClick('/profile') }}
              className=""/>
          </div>
        </nav>
      </div>
    </>
  );
}

function ProfileButton(props)
{
  return (
    <div className="
      text-hai-orange hover:text-hai-beige hover:text-hai-beige
    ">
      <button onClick={props.onClick} className="
        [cursor:pointer] py-[3px] px-[8px] rounded-[6px] tracking-wide
        border-[2px] border-[#FFAA99] hover:bg-hai-orange
      ">
        Profile
      </button>
    </div>
  );
}