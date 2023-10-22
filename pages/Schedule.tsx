import * as React from 'react';
import { Typography, Grid, Tabs, Tab, Box, Link } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import '@fontsource/hind-siliguri';
import { useState } from 'react';

function Schedule() {
  const [value, setValue] = React.useState('one');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="py-[3rem] justify-center items-center bg-hai-dark-blue">
        <div className="flex justify-center items-center h-center">
          <img></img>
          <div className="font-sans-CooperHewitt text-4xl text-center pb-[3rem]">
            <Typography
              fontFamily={'var(--Placard Next)'}
              className="text-xl md:text-4xl font-bold"
            >
              SCHEDULE (From 2023)
            </Typography>
            <Typography
              fontFamily={'var(--lucidity)'}
              className="text-lg md:text-xl font-bold"
            >
              <a
                target="_blank"
                href="https://aisutd.notion.site/aisutd/HackAI-Hacker-Guide-1a42a12a713341dd9e9c7200054fee47"
              >
                Click for 2023 Hacker Guide
              </a>
            </Typography>
          </div>
        </div>
        <div className="justify-center h-center flex gap-[5vw]">
          <img
            className="w-[45vw] pl-60 object-contain justify-center hidden lg:block"
            src="hackai-24-logo.png"
          ></img>
          <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="labels"
                indicatorColor="primary"
              >
                //fix this: every time tab is open, the color should change to black
                <Tab
                  className="text-[#FEF9EE] h-10 w-40 hover:bg-black"
                  value="one"
                  label="Friday"
                />
                <Tab
                  className="text-[#FEF9EE] h-10 w-40 hover:bg-black active:bg-black"
                  value="two"
                  label="Saturday"
                />
                <Tab
                  className="text-[#FEF9EE] h-10 w-40 hover:bg-black active:bg-black"
                  value="three"
                  label="Sunday"
                />
              </Tabs>
              <TabPanel value="one" aria-label="Friday">
                <Typography fontFamily={'var(--hind)'} className="text-md md:text-1xl pb-1">
                  **Note: Limited Space**
                </Typography>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    5:00 pm - 7:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ------
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Networking Event
                  </Typography>
                </Grid>
              </TabPanel>
              <TabPanel value="two" aria-label="Saturday">
                <Grid container alignItems="center" className="">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    9:00 am
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ----_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Check In + Sponsor Fair
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    11:00 am
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Kickoff Ceremony
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    12:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ----
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Hacking Starts
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    12:15 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ----
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Revive Workshop
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    1:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ----_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Lunch - Potbelly
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    2:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    -----
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    AI Panel (ECSW 1.315)
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    3:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Respell x OpenAI Workshop (ECSW 1.355)
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    4:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    CV Workshop (ECSW 1.355)
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    5:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    UTD Chatbot Workshop (ECSW 1.355)
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    6:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    DialogFlow Workshop (ECSW 1.355)
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    7:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Dinner - Genghis Grill
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    7:30 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Stable Diffusion Workshop
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    8:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Factions Minigames
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    9:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Talent Show
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    10:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    --_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Late Night Snack - Insomnia
                  </Typography>
                </Grid>
              </TabPanel>
              <TabPanel value="three" aria-label="Sunday">
                <Grid container alignItems="center" className="">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    12:00 am
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    --_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Quiet Hours Begin
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    9:00 am
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Breakfast
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    11:00 am
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    --_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    How to Pitch Workshop
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    12:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Hacking Ends + Lunch
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    1:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ---_
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Judging Begins
                  </Typography>
                </Grid>
                <Grid container alignItems="center">
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    3:00 pm
                  </Typography>
                  <Typography style={{ color: '#1A2025' }} className="text-xl md:text-1xl pb-2">
                    ----
                  </Typography>
                  <Typography fontFamily={'var(--hind)'} className="text-xl md:text-1xl pb-2">
                    Closing Ceremony
                  </Typography>
                </Grid>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
}

export default Schedule;
