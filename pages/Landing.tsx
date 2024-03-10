import * as React from 'react';
import { Typography } from '@mui/material';

export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center gap-[15vh] pt-[5rem]">
        <img src="/hackai+people.png" className="
          object-contain mt-[5vh] h-[50vh] w-[80%]
        "/>
        <img id="mountain background" src="/big-mountains.png" className="
          absolute -z-10 w-[200%] object-cover med:object-fill
          mt-[33vh] xs:mt-[38vh] sm:mt-[43vh]
          h-[calc(67vh+106rem-160vw)] xs:h-[calc(62vh+82rem-90vw)] sm:h-[calc(57vh+84rem-90vw)] md:h-[calc(57vh+114rem-125vw)] med:h-[calc(57vh+96rem-90vw)] lg:h-[calc(57vh+90rem-70vw)] xl:h-[calc(57vh+60rem-30vw)]
          [mask-image:linear-gradient(rgba(0,0,0,1)95%,rgba(0,0,0,0))]
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
