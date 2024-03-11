import React from 'react';

function PastEvent() {
  return (
    <div className="
      relative py-20 px-[10vw] gap-[10vw] items-center justify-items-center
      flex flex-col sm:grid sm:grid-cols-2
    ">
      <div className="w-full flex flex-col justify-center">
        <h2 className="
          font-bold text-hai-navy text-center font-placard tracking-widest text-5xl sm:text-4xl
        ">
          HACK AI 2023
        </h2>
          <p className="hidden sm:block text-base text-hai-gray text-justify pt-10 font-roboto">
            Last April, HackAI’s fourth iteration featured various guest speakers, workshops, and activities to engage students throughout the weekend.
            <br/><br/>
            Participants had the option of competing in four different tracks: athletes, brainiacs, saints, and creatives, each with their own tailored prompts.
          </p>
          <div className="h-10 hidden sm:block lg:hidden"/>
          <p className="hidden lg:block text-base text-hai-gray text-justify pb-10 font-roboto">
            <br/>
            HackAI ‘23 saw a record 600+ applications from students of various majors and featured sponsorships from Amazon Web Services (AWS), the Dallas Mavericks, Geico, and more!
          </p>
        <div className="relative z-0 hidden sm:flex justify-center">
          <img className="text-center w-full md:w-9/12 z-0" src="/newstats.png" alt="about hackai chips"/>
        </div>
      </div>
      <img src="/hackers-photo.png" alt="Image" className="object-contain"/>
      <div className="relative z-0 flex justify-center sm:hidden">
        <img className="text-center w-full md:w-9/12 z-0" src="/newstats.png" alt="about hackai chips" />
      </div>
    </div>
  );
}

export default PastEvent;