import * as React from 'react';
import { Typography } from '@mui/material';

export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center gap-[15vh] pt-[5rem]">
        <img src="/hackai+people.png" className="
          object-contain mt-[5vh] h-[50vh] w-[80%]
        "/>
        <button onClick={() => window.open("https://coda.io/form/HackAI-2024-Application-Form_dpLYWJ67GbP", "_blank")}
          className="w-[16rem] h-[4rem] bg-white rounded-[0.8rem] text-hai-orange font-roboto text-[1.3rem] font-bold uppercase z-0 border-[3px] border-hai-orange hover:scale-[1.07] shadow-md"
        >
          Register Now
        </button>
      </div>
    </>
  );
}
