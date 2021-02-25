import { useContext } from 'react';

import styles from '../styles/components/Profile.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gontranbezerra.png" alt="Gontran Bezerra" />
      <div>
        <strong>Gontran Bezerra</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
