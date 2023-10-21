import * as React from 'react';
import { Typography } from '@mui/material';
import RegisterPulse from '../components/register-pulse';


export default function Landing() {
  return (
    <>
      <div className="absolute py-8 w-[100vw]">
      <div className="absolute bg-[url('/landing.svg')] bg-no-repeat bg-contain bg-center h-[100vh] w-[100vw] -z-40"/>
      <button className="z-10 flex w-275 h-66 justify-center items-center gap-10 flex-shrink-0 rounded-17.57 border-3.3 border-var-Red bg-var-Background shadow-md">
      </button>
      <RegisterPulse className="absolute mt-[73vh] ml-[calc(50vw-8rem)] w-[16rem] h-[2rem] z-0"/>
      </div>
    </>
  );
}
