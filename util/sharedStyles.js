import { css } from '@emotion/react';

// Theme1 - Dark
// Backgrounds
export const background = '#2b4173';
export const keypadBackground = '#232c43';
export const outputBackground = '#182034';
export const screenBackground = '#637097';

// Keys
export const blueKeyShadow = '#404E72';
export const redToggle = '#D03F2F';
export const redDarkToggle = '#93261A';

export const grayOrangeKeyBackground = '#EAE3DC';
export const orangeKeyShadow = '#B4A597';

// Text
export const grayBlue = '#444B5A';

//Theme 2 - Light
// Backgrounds
export const mainBackgroundLight = '#e6e6e6';
export const keyPadBackgroundLight = '#d1cccc';
export const screenBackgroundLight = '#ededed';

// Keys
export const keyBackgroundBlueLight = '#377f86';
export const keyBackgroundBlueShadowLight = '#1b5f65';
export const keyBackgroundRedLight = '#ca5502';
export const keyBackgroundRedShadowLight = '#893901';
export const keyBackgroundGrayLight = '#e5e4e1';
export const keyBackgroundGrayShadowLight = '#a69d91';

// Text
export const grayLight = '#35352c';

// CSS
export const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1,
  span {
    font-size: 0.8em;
    color: white;
    padding: 0 30px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .sliderRound {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${keypadBackground};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50px;
  }

  .sliderRound:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${redToggle};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .sliderRound {
    background-color: ${keypadBackground};
  }

  input:focus + .sliderRound {
    box-shadow: 0 0 1px ${keypadBackground};
  }

  input:checked + .sliderRound:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

// DarkMode
export const mainContainerDark = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #505d84;
  height: 100vh;
`;

export const outputContainerDark = css`
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

export const calculatorContainerDark = css`
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

// Light Mode
export const mainContainerLight = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${screenBackgroundLight};
  height: 100vh;
`;

export const outputContainerLight = css`
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;

  input {
    background: white;
    color: ${grayLight};
    border: none;
    font-size: 1em;
    text-align: right;
  }
`;

export const calculatorContainerLight = css`
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
  background: ${keyPadBackgroundLight};
  padding: 25px;
  border-radius: 10px;

  .reset {
    grid-area: reset;
    background: ${keyBackgroundBlueLight};
    box-shadow: 0 5px 0 0 ${keyBackgroundBlueShadowLight};
    color: white;
  }

  .equal {
    grid-area: equal;
    background: ${keyBackgroundRedLight};
    box-shadow: 0 5px 0 0 ${keyBackgroundRedShadowLight};
    color: white;
  }

  button {
    font-size: 1em;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    box-shadow: 0 5px 0 0 ${keyBackgroundGrayShadowLight};
    background: ${keyBackgroundGrayLight};
    color: ${grayLight};
    padding: 10px;
  }

  .blueButton {
    background: ${keyBackgroundBlueLight};
    box-shadow: 0 5px 0 0 ${keyBackgroundBlueShadowLight};
    color: white;
  }
`;
