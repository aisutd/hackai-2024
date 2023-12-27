import * as React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

function Schedule() {
  const [value, setValue] = React.useState('one');
  const handleChange = () => {
    setValue(value === 'one' ? 'two' : 'one');
  };

  const Tab = styled(BaseTab)`
    &.${tabClasses.root} {
    font-family: var(--roboto);
    background-color: #293039; /*hai-black*/
    color: #FAFAFA; /*hai-white*/
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    height: 30px;
    width: 100%;
    line-height: 1.5;
    border-radius: 15px 15px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    :hover {
      height: 40px;
    }

    &.${tabClasses.selected} {
      height: 40px;
      background-color: #FAFAFA; /*hai-white*/
      color: #293039; /*hai-black*/
      z-index: 10;
      ${value === 'one' ? 'margin-right: -20px;' : 'margin-left: -20px;' }
    }
  `;

  const TabPanel = styled(BaseTabPanel)`
    width: 50%;
    font-family: var(--roboto);
    font-size: 14px;
  `;

  const TabsList = styled(BaseTabsList)`
    display: flex;
    align-items: end;
    justify-content: center;
  `;

  return (
    <>
      <div className="pt-[5rem] justify-center bg-hai-dark-blue">
        <Tabs defaultValue="one" onChange={handleChange}>
          <div className="flex flex-col text-center">
            <Typography className="mb-[4px] text-xl md:text-5xl font-bold font-placard tracking-wider">
              SCHEDULE
            </Typography>
            <Typography className="text-lg font-roboto underline tracking-wide">
              <a
                target="_blank"
                href="https://aisutd.notion.site/aisutd/HackAI-Hacker-Guide-1a42a12a713341dd9e9c7200054fee47"
              >
                Click for 2023 Hacker Guide
              </a>
            </Typography>
            <TabsList className="self-center w-[60vw] my-[12px]">
              <Tab value="one">
                Saturday
              </Tab>
              <Tab value="two">
                Sunday
              </Tab>
            </TabsList>
          </div>
          <div className="justify-center flex">
            <img
              className="pl-[10vw] w-[50vw] object-contain hidden md:block"
              src="skis.png"
            />
            <div className="w-[50vw] pr-[5vw]">
              <TabPanel value="one">
                sample text1
              </TabPanel>
              <TabPanel value="two">
                sample text2
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}

export default Schedule;
