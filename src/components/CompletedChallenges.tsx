import { useContext } from 'react';

import styles from '../styles/components/CompletedChallenges.module.css';

import { ChallengesContext } from '../contexts/ChallengesContext';

export function CompletedChallenges() {
  const { challengesCompeted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesConteiner}>
      <span>Desafios completos</span>
      <span>{challengesCompeted}</span>
    </div>
  );
}
