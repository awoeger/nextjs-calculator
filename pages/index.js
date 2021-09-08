import { css } from '@emotion/react';
import Head from 'next/head';

const heading = css`
  color: red;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="Tip Calculator" content="Calculate your tips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 css={heading}>Calculator</h1>
        <h2>Theme</h2>
        <div>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <input type="checkbox"></input>
          </div>
        </div>
      </header>

      <main>
        <section>
          <div>
            <span>output</span>
          </div>
        </section>

        <section>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>DEL</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button>/</button>
          <button>x</button>
          <button>RESET</button>
          <button>=</button>
        </section>
      </main>
    </div>
  );
}
