import * as React from 'react';
import { Typography } from '@mui/material';

export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center gap-[16vh]">
        <img src="/hackai+people.png" className="mt-[5vh] h-[50vh] object-contain"/>
        <img src="/big-mountains.png" className="
          absolute mt-[43vh] w-[100vw] object-fill -z-10
          h-[calc(57vh+55rem)] xs:h-[calc(57vh+45rem)] sm:h-[calc(57vh+39rem)] md:h-[calc(57vh+45rem)] med:h-[calc(57vh+39rem)] lg:h-[calc(57vh+33rem)] xl:h-[calc(57vh+27rem)]
        "/>
        <button onClick={() => window.open("https://coda.io/form/HackAI-2024-Application-Form_dpLYWJ67GbP", "_blank")}
          className="w-[16rem] h-[4rem] bg-white rounded-[0.8rem] text-hai-orange font-roboto text-[1.3rem] font-bold uppercase z-0 border-[3px] border-hai-orange hover:[transform:scale(1.07)] shadow-md"
        >
          Register Now
        </button>
      </div>
    </>
  );
}
