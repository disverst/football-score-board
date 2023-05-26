import React from 'react';
import { Box, Grid, Button } from '@mui/material';

import { GameData } from 'types';
import GameItem from 'components/ScoreBoard/GameItem';
import GamesSummary from 'components/ScoreBoard/GamesSummary';
import GameAddedModal from 'components/ScoreBoard/GameAddedModal';
import { useScoreBoardUtils } from 'components/ScoreBoard/ScoreBoardUtils';

const ScoreBoardContainer: React.FC = () => {
  const {
    games,
    startGame,
    finishGame,
    updateScore,
    isModalOpen,
    getGamesSummary,
    handleCloseModal,
  } = useScoreBoardUtils();

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
        <Button variant="contained" size="large" onClick={startGame}>
          Start Game
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {games.map((game: GameData) => (
          <GameItem
            key={game.id}
            game={game}
            updateScore={updateScore}
            finishGame={finishGame}
          />
        ))}
      </Grid>

      <GamesSummary games={getGamesSummary()} />

      <GameAddedModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ScoreBoardContainer;
