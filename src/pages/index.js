import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>ANY.SURF</title>
      </Helmet>
      <h1>ANY.SURF</h1>
      <h1><a href="https://github.com/ECOSurfDeBot">ECOSurfDeBot</a>-CENTRIC.</h1>
      <h2>
        CURRENTLY WORKING ON BINANCE.COM AND CURRENCY.COM AI NN ML BOT CALLED BOT4 ET GETTING READY TO CREATE ET SELL AI NN ML PROJECTS B2B B2C, 
        ET LATER,
      </h2>
      <h1>THE WORK ON <a href="https://github.com/ANYSECURITIES">ANYSECURITIES</a> ET <a href="https://github.com/ANYSURF">ANYSURF</a> WOULD PROBABLY BEGIN.
      STAY TUNED! ENJOY!</h1>
      
      <p>Meanwhile, you can visit:</p>
      <h1><a href="https://ashvabra.any.surf/">The Temple of The Holy Ashvabra</a></h1>
      <h5>
        Deployed with
        {' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        {' | '}
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>
        {' '}
        have been created from a <a href="https://www.gatsbyjs.org/">GatsbyJS</a> example app with two
        directories, <code>/src</code> for static content and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
        {' | '}
        The date according to Node.js (TypeScript) is: {' '} {date ? date : 'Loading date...'}
      </h5>
      <h5>Source code is on {' '} <a href="https://github.dev/nonlin-lin-chaos-order-etc-etal/anysurf_gatsby_now_sh">Github</a>.</h5>
      <h5>Copyright © 2021.....{date ? date : 'Loading date...'} EUGENE GRIGORIEWITCH FPHILIPPOW et people of ANYSURF et ANYSEC. All Rights Reserved.</h5>
    </main>
  );
}

export default Index;

{ /*bump USSR MK61*/ }
