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
      <h2>
        <h1>https://github.com/ECOSurfDeBot CENTRIC.</h1>
        CURRENTLY WORKING ON BINANCE.COM AND CURRENCY.COM AI NN ML BOT CALLED BOT4 ET GETTING READY TO CREATE ET SELL AI NN ML PROJECTS B2B B2C, 
        ET LATER <h1>THE WORK ON https://github.com/ANYSECURITIES ET https://github.com/ANYSURF</h1> WOULD PROBABLY BEGIN. STAY TUNED! ENJOY! = EUGENE GRIGORIEWITCH FPHILIPPOW
      </h2>
      <h5>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h5>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is created from a <a href="https://www.gatsbyjs.org/">Gatsby</a> example app with two
        directories, <code>/src</code> for static content and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js (TypeScript)</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
        .
      </p>
      <br />
      <h5>The date according to Node.js (TypeScript) is:</h5>
      <p>{date ? date : 'Loading date...'}</p>
      <h5>Copyright © 2021.....{date ? date : 'Loading date...'} EUGENE GRIGORIEWITCH FPHILIPPOW et people of ANYSURF et ANYSEC. All Rights Reserved.</h5>
    </main>
  );
}

export default Index;

{ /*bump USSR MK61*/ }
