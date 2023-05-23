'use client';

import React from 'react';
import styles from 'app/score-board/page.module.css';
import ScoreBoardContainer from 'components/ScoreBoard/ScoreBoardContainer';

export default function ScoreBoard() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Live Football World Cup Score Board</h1>
      <ScoreBoardContainer />
    </main>
  );
}
