import * as React from 'react';
import { Typography } from '@mui/material';
import RegisterPulse from '../components/register-pulse';


export default function Landing() {
  return (
    <>
      <div className="absolute py-8 w-[100vw]">
      <div className="absolute bg-[url('/landing.svg')] bg-no-repeat bg-contain bg-center h-[100vh] w-[100vw] -z-40"/>
      <RegisterPulse className="absolute mt-[73vh] ml-[calc(50vw-8rem)] w-[16rem] h-[2rem] z-0"/>
      </div>
    </>
  );
}
