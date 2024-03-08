import * as React from 'react'; 
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from '@mui/material';
import "@fontsource/hind-siliguri";
import CorrectFooter from 'public/CorrectFooter.png';


function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <div style={{ marginTop: '0rem' }}></div>
    <div className="relative">
      <img src={CorrectFooter.src} alt="Footer Background" className="w-full h-auto" style={{ objectFit: 'cover', objectPosition: 'center', width: '100%' }} />
      <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center items-center mb-4">
        <button onClick={() => window.open("https://www.aisutd.org", "_blank")} className="h-[2.5vw] w-[2.5vw] md:h-[3vw] md:w-[3vw] mr-4 sm:mr-8">
          <img src="/Globe.png" alt="Internet Globe" className="object-contain w-full h-full" />
        </button>
        <button onClick={() => window.open("mailto:your@email.com")} className="h-[2.5vw] w-[2.5vw] md:h-[3vw] md:w-[3vw] mr-4 sm:mr-8">
          <img src="/Mail.png" alt="Email" className="object-contain w-full h-full" />
        </button>
        <button onClick={() => window.open("https://www.instagram.com/utdais", "_blank")} className="h-[2.5vw] w-[2.5vw] md:h-[3vw] md:w-[3vw] mr-4 sm:mr-8">
          <img src="/BlackInsta.svg" alt="Instagram" className="object-contain w-full h-full" />
        </button>
        <Button
          variant="contained"
          style={{ backgroundColor: 'white', color: 'black', borderRadius: '2vw', padding: '0.5vw 1vw', margin: '0.5vw' }}
        >
          Register Now!
        </Button>
        <button onClick={() => window.open("https://www.youtube.com/@artificialintelligencesoci9846", "_blank")} className="h-[2.5vw] w-[2.5vw] md:h-[3vw] md:w-[3vw] ml-4 sm:ml-8">
          <img src="/BlackYT.svg" alt="YouTube" className="object-contain w-full h-full" />
        </button>
        <button onClick={() => window.open("https://www.linkedin.com/company/ais-utd", "_blank")} className="h-[2.5vw] w-[2.5vw] md:h-[3vw] md:w-[3vw] ml-4 sm:ml-8">
          <img src="/BlackLI.svg" alt="LinkedIn" className="object-contain w-full h-full" />
        </button>
        <button onClick={() => window.open("https://www.aisutd.org/discord", "_blank")} className="h-[2.5vw] w-[2.5vw] md:h-[3vw] md:w-[3vw] ml-4 sm:ml-8">
          <img src="/BlackDiscord.svg" alt="Discord" className="object-contain w-full h-full" />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
