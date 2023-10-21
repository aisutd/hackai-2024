import Head from 'next/head';
import * as React from 'react';
import Appbar from './Appbar'
import Landing from './Landing'
import AboutSection from './AboutSection';
import FooterSection from './Footer';
import SpeakersSection from './SpeakersSection';
import WorkWithUsSection from './WorkwithUs';
import Tracks from './Tracks';
import Schedule from './Schedule';
import { Typography, Button, Menu, MenuItem } from '@mui/material';
import FAQs from './FAQs';
import Partners from './Partners';
import JoinSection from './JoinSection';

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
          content="Welcome to HackAI: the biggest AI hackathon in North Texas!"
        />
      </Head>
      <main className="min-h-screen bg-[#FFF9F5] font-oriya text-ais-white subpixel-antialiased overflow-x-hidden">
        <section id="appbar" className="fixed z-10 uppercase text-white font-bold text-xl">
          <Appbar/>
        </section>
        <section id="landing" className="relative w-[100vw] h-[100vh] z-0">
          <Landing/>
        </section>
        <section id="about" className="relative z-0">
          <AboutSection/>
        </section>
        <section id="speakers" className="relative">
          <SpeakersSection/>
        </section>
        <section id="tracks" className="relative">
          <Tracks />
        </section>
        <section id="schedule" className="relative">
          <Schedule />
        </section>
        <section id="faqs" className="relative" style={{marginTop: '3rem'}}>
          <FAQs />
        </section>
        <section id="partners" className="relative bg-ais-new-blue">
          <Partners/>
          <img width="100%" src="mountains.png" />
        </section>
        <section id="work with us" className="relative">
          <WorkWithUsSection/>
        </section>
        <section id="join" className="relative">
          <JoinSection/>
        </section>
        <section id="footer" className="relative">
          <FooterSection/>
        </section>
      </main>
    </>
  );
}
