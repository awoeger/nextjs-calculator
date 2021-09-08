import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import {
  blueKeyShadow,
  grayBlue,
  grayOrangeKeyBackground,
  keypadBackground,
  orangeKeyShadow,
  outputBackground,
  redDarkToggle,
  redToggle,
} from '../util/sharedStyles';

const mainContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const outputContainer = css`
  background: ${outputBackground};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;

  input {
    background: ${outputBackground};
    color: white;
    border: none;
    font-size: 1em;
    text-align: right;
  }
`;

const calculatorContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 25px 25px;
  grid-template-areas:
    '. . . .'
    '. . . .'
    '. . . .'
    '. . . .'
    'reset reset equal equal';
  justify-items: stretch;
  width: 100%;
  height: 100%;
  background: ${keypadBackground};
  padding: 25px;
  border-radius: 10px;

  .reset {
    grid-area: reset;
    background: hsl(225, 21%, 49%);
    box-shadow: 0 5px 0 0 ${blueKeyShadow};
    color: white;
  }

  .equal {
    grid-area: equal;
    background: ${redToggle};
    box-shadow: 0 5px 0 0 ${redDarkToggle};
    color: white;
  }

  button {
    font-size: 1em;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    box-shadow: 0 5px 0 0 ${orangeKeyShadow};
    background: ${grayOrangeKeyBackground};
    color: ${grayBlue};
    padding: 10px;
  }

  .blueButton {
    background: hsl(225, 21%, 49%);
    box-shadow: 0 5px 0 0 ${blueKeyShadow};
    color: white;
  }
`;

export default function Home() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const reset = () => {
    setResult('');
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <div css={mainContainer}>
      <Head>
        <title>Calculator</title>
        <meta name="Calculator" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header></header>

      <main>
        <section css={outputContainer}>
          <div>
            <input value={result}></input>
          </div>
        </section>

        <section css={calculatorContainer}>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button id="backspace" onClick={backspace} className="blueButton">
            DEL
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
          <button
            id="reset"
            onClick={reset}
            className="blueButton"
            className="reset"
          >
            RESET
          </button>
          <button onClick={calculate} className="redButton" className="equal">
            =
          </button>
        </section>
      </main>
    </div>
  );
}
