import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

function Schedule() {
  return (
    <>
      <div className="pt-[5rem] justify-center font-roboto bg-[linear-gradient(#DCE7ED_-50%,#3E69B9_50%)]">
        <div className="flex flex-col text-center">
          <p className="mb-[4px] font-bold font-placard tracking-wider text-5xl">
            SCHEDULE
          </p>
          <p className="text-lg font-roboto underline tracking-wide pb-[1rem]">
            <a
              target="_blank"
              href="https://aisutd.notion.site/aisutd/HackAI-Hacker-Guide-1a42a12a713341dd9e9c7200054fee47"
            >
              Click for Prompts (needs updating)
            </a>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="object-contain pl-[0%] w-[30%] hidden md:block lg:pl-[10%] lg:w-[50%]"
            src="skis.png"
          />
          <div className="text-wrap break-words px-[10%] w-[100%] md:px-[0%] md:w-[70%] md:pr-[5%] lg:w-[50%]">
            <div className="pt-[10px]">8:30am:<pre className="inline">{'\t\t'}</pre>Check In + Sponsor Fair<br /></div>
            <div className="pt-[10px]">9:00am:<pre className="inline">{'\t\t'}</pre>Kickoff Ceremony (SCI 1.220)<br /></div>
            <div className="pt-[10px]">10:00am:<pre className="inline">{'\t'}</pre>Workshop A/Workshop B/Workshop C (SCI 1.210/2.230/2.235)<br /></div>
            <div className="pt-[10px]">11:00am:<pre className="inline">{'\t'}</pre>AI Tech Panel/Speaker (SCI 1.220/2.230)<br /></div>
            <div className="pt-[10px]">12:00pm:<pre className="inline">{'\t'}</pre>Makeathon Prompt Announcement (SCI 1.220)<br /></div>
            <div className="pt-[10px]">12:30pm:<pre className="inline">{'\t'}</pre>Lunch (Blackstone Launchpad)<br /></div>
            <div className="pt-[10px]">1:30pm:<pre className="inline">{'\t\t'}</pre>Makeathon Working Hours/Strategy Workshop/Build and Pitch Workshop (All SCI/SCI 2.230/SCI 2.235)<br /></div>
            <div className="pt-[10px]">3:30pm:<pre className="inline">{'\t\t'}</pre>Sumbit Projects (SCI 1.220)<br /></div>
            <div className="pt-[10px]">3:30pm:<pre className="inline">{'\t\t'}</pre>Networking (Blackstone Launchpad)<br /></div>
            <div className="pt-[10px]">4:15pm:<pre className="inline">{'\t\t'}</pre>Presentations Start (SCI 1.220)<br /></div>
            <div className="pt-[10px]">6:00pm:<pre className="inline">{'\t\t'}</pre>Judging Finalized (SCI 2.210)<br /></div>
            <div className="pt-[10px]">6:30pm:<pre className="inline">{'\t\t'}</pre>Results/Closing (SCI 1.220)<br /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;
