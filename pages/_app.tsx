import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import localFont from '@next/font/local';

import Homepage from '.';
import Profile from '.';

/**
 * A wrapper for the root website component.
 */

const lucidity = localFont({
  src: [
    {
      path: "../public/fonts/Lucidity-Condensed.ttf",
    }
  ]
});

const cooper = localFont({
  src: [
    {
      path: "../public/fonts/CooperHewitt-Semibold.otf",
    }
  ]
})

const campground = localFont({
  src: [
    {
      path: "../public/fonts/Campground.otf",
    }
  ]
})

const fredoka = localFont({
  src: [
    {
      path: "../public/fonts/fredoka-one/FredokaOne-Regular.otf",
    }
  ]
})

const primer = localFont({
  src: [
    {
      path: "../public/fonts/primer/primer print bold.otf",
    }
  ]
})

const placard = localFont({
  src: [
    {
      path: "../public/fonts/PlacardNext/PlacardNextRegular.ttf"
    }
  ]
});

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/Roboto/Roboto-Regular.ttf"
    }
  ]
});

export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="/hai-logo.png" />
          {/*<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>*/}
      </Head>
      <style jsx global>{`
        :root {
          /* ... */
          --lucidity: ${lucidity.style.fontFamily};
          --cooper: ${cooper.style.fontFamily};
          --campground: ${campground.style.fontFamily};
          --fredoka: ${fredoka.style.fontFamily};
          --primer: ${primer.style.fontFamily};
          --placard: ${placard.style.fontFamily};
          --roboto: ${roboto.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
    </>
  );
}