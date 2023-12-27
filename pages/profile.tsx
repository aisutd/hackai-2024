import Head from 'next/head';
import * as React from 'react';
import { useRouter } from 'next/router';
import Appbar from './Appbar'
import Landing from './Landing'
import AboutSection from './AboutSection';
import FooterSection from './Footer';
import Schedule from './Schedule';
import { Typography, Button, Menu, MenuItem } from '@mui/material';
import FAQs from './FAQs';
import Partners from './Partners';
import Footer from './Footer';
import PastEvent from './PastEvent';
import Snowfall from 'react-snowfall';

export default function Profile() {
  {/*for the appbar*/}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

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
    document.getElementById(secName).scrollIntoView()
  };

  const auth = false;

  return (
    <>
      <Head>
        <title>HackAI</title>
        <link rel="icon" type="image/svg+xml" href="/hai-logo.svg" />
        <meta
          name="description"
          content="Welcome to HackAI: the biggest AI hackathon in North Texas!"
        />
      </Head>
      <main className="min-h-screen bg-hai-beige font-oriya text-ais-white subpixel-antialiased overflow-x-hidden">
        <section id="appbar" className="fixed z-50 uppercase text-white font-bold text-xl">
          <Appbar/>
        </section>
        <section id="snow" className="fixed w-[100vw] h-[100vh] z-40 [pointer-events:none]">
          <Snow/>
        </section>
        <section id="profile" className="relative w-[100vw] h-[100vh] pt-[5rem] z-0">
          {auth ? profile() : login()}
        </section>
        <section id="footer" className="relative">
          <Footer/>
        </section>
      </main>
    </>
  );
}

function login()
{
  return (
    <>
      <div className="text-hai-navy">not authorized lol</div>
    </>
  );
}

function profile()
{
  return (
    <>
      <div className="text-hai-navy">authorized : )</div>
    </>
  );
}

function Snow()
{
  return (
    <Snowfall
      color="#FFFFFF"
      radius={[0.5,3.0]}
      snowflakeCount={150}
      speed={[0.5,1.5]}
      wind={[-0.3,0.7]}
      rotationSpeed={[0,0]}
    />
  );
}