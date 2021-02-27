import { ReactNode } from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengerBox } from '../components/ChallengerBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps): ReactNode {
  // irá aparecer no console do navegador
  console.log(props);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        /> */}
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengerBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

// Com essa função é possível repassar dados da camada back-end (Node.js)
export const getServerSideProps: GetServerSideProps = async (context) => {
  // retorno da chamada api
  // const user = {
  //   level: 1,
  //   currentExperience: 50,
  //   challengesCompleted: 2,
  // };

  // irá aparecer no console do servidor (Node.js)
  // console.log(user);

  // const cookies = context.req.cookies;
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    // props: user,
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

// Camadas Ex.:
// 1 - Next.js (Node.js) - PS.: que também é back-end
// 2 - Front-end (React)
// 3 - Back-end (Ruby)
