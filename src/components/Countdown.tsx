// import { useState, useEffect, useContext } from 'react';
import { useContext } from 'react';

import styles from '../styles/components/Countdown.module.css';

// import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

// let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const {
    isActive,
    hasFinished,
    minutes,
    seconds,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  // const { startNewChallenge } = useContext(ChallengesContext);
  // const [time, setTime] = useState(0.1 * 60);
  // const [isActive, setIsActive] = useState(false);
  // const [hasFinished, setHasFinished] = useState(false);

  // const minutes = Math.floor(time / 60);
  // const seconds = time % 60;

  const [minuteLeft, minuteRigh] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRigh] = String(seconds).padStart(2, '0').split('');

  // const startCountdown = () => {
  //   setIsActive(true);
  // };

  // const resetCountdown = () => {
  //   clearTimeout(countdownTimeout);
  //   setIsActive(false);
  //   setTime(0.1 * 60);
  // };

  // useEffect(() => {
  //   if (isActive && time > 0) {
  //     countdownTimeout = setTimeout(() => {
  //       setTime(time - 1);
  //     }, 1000);
  //     console.log('countdownTimeout: ', countdownTimeout);
  //   } else if (isActive && time === 0) {
  //     setHasFinished(true);
  //     setIsActive(false);
  //     startNewChallenge();
  //     console.log('FIM');
  //   }
  //   return () => clearTimeout(countdownTimeout);
  // }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownConteiner}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRigh}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRigh}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          type="button"
          className={styles.countdownButton}
          // onClick={startCountdown}
        >
          Ciclo encerrado
        </button>
      ) : isActive ? (
        <button
          type="button"
          className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          onClick={resetCountdown}
        >
          Abandonar ciclo
        </button>
      ) : (
        <button
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Inicar ciclo
        </button>
      )}
    </div>
  );
}
