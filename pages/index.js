import { css } from '@emotion/react';
import Head from 'next/head';
import { useState } from 'react';
import {
  calculatorContainerDark,
  calculatorContainerLight,
  header,
  mainContainerDark,
  mainContainerLight,
  outputContainerDark,
  outputContainerLight,
} from '../util/sharedStyles';

export default function Home() {
  const [result, setResult] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeClick = () => {
    if (darkMode === true) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

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
    <div css={darkMode === true ? mainContainerDark : mainContainerLight}>
      <Head>
        <title>Calculator</title>
        <meta name="Calculator" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header css={header}>
        <h1>Calc</h1>
        <span>{darkMode === true ? 'Darkmode' : 'Lightmode'}</span>
        <label className="switch">
          <input onChange={handleDarkModeClick} type="checkbox"></input>
          <span className="sliderRound"></span>
        </label>
      </header>

      <main>
        <section
          css={darkMode === true ? outputContainerDark : outputContainerLight}
        >
          <div>
            <input value={result}></input>
          </div>
        </section>

        <section
          css={
            darkMode === true
              ? calculatorContainerDark
              : calculatorContainerLight
          }
        >
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
