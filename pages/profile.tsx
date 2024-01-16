import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Appbar from './Appbar'
import Footer from './Footer';
import Snowfall from 'react-snowfall';
import { Coda } from 'coda-js';

export default function Profile() {
  {/*for the appbar*/}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const [inputtedUsername, setUsername] = useState('');
  const [inputtedPassword, setPassword] = useState('');
  const [auth, setAuth] = useState(false);

  const [userID, setUserID] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userYear, setUserYear] = useState('');
  const [userMajor, setUserMajor] = useState('');
  const [userAppAccept, setUserAppAccept] = useState(false);
  const [userAppReject, setUserAppReject] = useState(false);
  const [userQRCode, setUserQRCode] = useState('');
  const [userAppStatus, setUserAppStatus] = useState('');

  //for hamburger on appbar
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //for closing hamburger on appbar
  const handleClose = () => {
    setAnchorEl(null);
  };

  //for profile/login button on appbar
  const handleProfileClick = (path) => {
    setAnchorEl(null);
    router.push(path);
  };

  //for other appbar buttons
  const handleItemClick = (secName) => {
    setAnchorEl(null);
    document.getElementById(secName).scrollIntoView()
  };

  const waitForLogin = async (e) => {
    await handleLogin(e);
  };

  const handleLogin = async (e) => {

    if (inputtedPassword == '' || inputtedUsername == '') {
      alert('Login failed');
    } else {
      try {
        const CodaAPI = new Coda(process.env.NEXT_PUBLIC_CODA_PROFILE_API_KEY); 
        const doc = await CodaAPI.getDoc('jyEelX25ju'); // Grab Event Tracking Doc from Coda API using the Doc ID at https://coda.io/developers/apis/v1
        const table = await doc.getTable('Submissions'); // Grab the actual table from the doc
        const rows = await table.listRows({ useColumnNames: true, valueFormat: 'rich' }); // Grab all the event entries in the doc
        if (rows && rows.length > 0) {
          for (var i = 0; i < rows.length; i++) {
            if (rows[i].values['Net ID'].replace(/```/gi, '') === inputtedUsername) {
              if (rows[i].values['First Name'].replace(/```/gi, '') === inputtedPassword) {
                setAuth(true);
                getUserInfo(i, rows);
              } else {
                alert('Invalid credentials');
              }
            }
          }
        }
      } catch (error) {
        console.error('Login error', error);
        alert('Login failed');
      }
    }
  };
  
  function getUserInfo(index, allRows) {
    setUserID(allRows[index].values['Net ID'].replace(/```/gi, ''));
    setUserFirstName(allRows[index].values['First Name'].replace(/```/gi, ''));
    setUserLastName(allRows[index].values['Last Name'].replace(/```/gi, ''));
    setUserYear(allRows[index].values['Year'].replace(/```/gi, ''));
    //setUserMajor(allRows[index].values['Major'].replace(/```/gi, ''));
    //setUserAppAccept(allRows[index].values['Accept'].replace(/```/gi, ''));
    //setUserAppReject(allRows[index].values['Reject'].replace(/```/gi, ''));
    //setUserQRCode(allRows[index].values['QR Code'].replace(/```/gi, ''));
  
    if (userAppAccept) {
      setUserAppStatus("Accepted");
    } else if (userAppReject) {
      setUserAppStatus("Rejected");
    } else {
      setUserAppStatus("Pending");
    }
  }

  function login()
  {
    return (
      <div className='m-8'>
        <br/>
          <input
            className='text-black'
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br/>
          <br/>
          <input
            className='text-black'
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <br/>
          <br/>

          <button onClick={waitForLogin} className="text-white bg-black rounded-xl px-4 mb-8" type="submit">Login</button>

          <br/>

          <button onClick={() => window.open('https://coda.io/form/HackAI-2024-Application-Form_dpLYWJ67GbP')} className="text-white bg-black rounded-xl px-4">Sign Up</button>

      </div>
    );
  }

  function signout()
  {
    setAuth(false);
    setUsername('');
    setPassword('');
    setAuth(false);
    setUserID('');
    setUserFirstName('');
    setUserLastName('');
    setUserYear('');
    setUserMajor('');
    setUserAppAccept(false);
    setUserAppReject(false);
    setUserQRCode('');
    setUserAppStatus('');
  }

  function profile()
  {
    return (
      <div className='m-8'>
        <div className="text-black mb-2">
          <span className='font-bold'>First Name: </span> {userFirstName}
        </div>
        <div className="text-black mb-2">
          <span className='font-bold'>Last Name: </span> {userLastName}
        </div>
        <div className="text-black mb-2">
         <span className='font-bold'>Net ID: </span> {userID}
        </div>
        <div className="text-black mb-2">
          <span className='font-bold'> Year: </span> {userYear}
        </div>
        <div className="text-black mb-2">
          <span className='font-bold'>Application Status: </span> {userAppStatus}
        </div>
        <div className="text-black mb-2">
          <span className='font-bold'>QR Code: </span> {userQRCode ? userQRCode : 'coming soon'}
        </div>
        <button onClick={() => signout()}  className="text-white bg-black rounded-xl px-4" type="submit">Log Out</button>
      </div>
    );
  }

  function Snow()
  {
    return (
      <Snowfall
        color="#FFFFFF"
        radius={[0.5,3.0]}
        snowflakeCount={150}
        speed={[0.5,1.5]}
        wind={[-0.3,0.7]}
        rotationSpeed={[0,0]}
      />
    );
  }

  return (
    <>
      <Head>
        <title>HackAI</title>
        <link rel="icon" type="image/svg+xml" href="/hai-logo.svg" />
        <meta
          name="description"
          content="Welcome to HackAI: the biggest AI hackathon in North Texas!"
        />
      </Head>
      <main className="min-h-screen bg-hai-beige font-oriya text-ais-white subpixel-antialiased overflow-x-hidden">
        <section id="appbar" className="fixed z-50 uppercase text-white font-bold text-xl">
          <Appbar/>
        </section>
        <section id="snow" className="fixed w-[100vw] h-[100vh] z-40 [pointer-events:none]">
          <Snow/>
        </section>
        <section id="profile" className="relative w-[100vw] h-[100vh] pt-[5rem] z-0">
          {auth ? profile() : login()}
        </section>
        <section id="footer" className="relative">
          <Footer/>
        </section>
      </main>
    </>
  );
}
