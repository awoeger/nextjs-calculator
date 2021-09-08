import '../util/main.css';
import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            font-family: 'Spartan', sans-serif;
            font-size: 32px;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
