import '../styles/global.css';

// import { ChallengesProvider } from '../contexts/ChallengesContext';
// import { CountdownProvider } from '../contexts/CountdownContext';
import { FunctionComponent, ReactElement, ComponentProps } from 'react';

interface Props {
  Component: FunctionComponent;
  pageProps: ComponentProps<'object'>;
}

function MyApp({ Component, pageProps }: Props): ReactElement {
  return (
    // <ChallengesProvider>
    // <CountdownProvider>
    <Component {...pageProps} />
    // </CountdownProvider>
    // </ChallengesProvider>
  );
}

export default MyApp;
