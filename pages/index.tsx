import Head from 'next/head';
import * as React from 'react';
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

export default function HomePage() {
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
      <Head>
        <title>HackAI</title>
        <link rel="icon" type="image/svg+xml" href="/hai-logo.svg" />
        <meta
          name="description"
          content="Welcome to HackAI: the biggest AI hackathon in Texas!"
        />
      </Head>
      <main className="min-h-screen w-[100%] bg-hai-beige text-ais-white subpixel-antialiased overflow-x-hidden">
        <section id="appbar" className="fixed h-[5rem] w-[100%] z-50 uppercase text-white font-bold text-xl">
          <Appbar/>
        </section>
        <section id="snow" className="fixed w-[100%] h-[100vh] z-40 [pointer-events:none]">
          <Snow/>
        </section>
        <section id="landing" className="relative h-[100vh] z-0">
          <Landing/>
        </section>
        <section id="about" className="relative z-10">
          <AboutSection/>
        </section>
        <section id="past-event">
          <PastEvent/>
        </section>
        <section id="schedule" className="relative">
          <Schedule />
        </section>
        <section id="faqs" className="relative bg-gradient-to-b from-hai-dark-blue to-hai-cloud">
          <FAQs />
        </section>
        <section id="partners" className="relative bg-hai-cloud">
          <Partners/>
        </section>
        <section id="footer" className="relative">
          <Footer/>
        </section>
      </main>
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