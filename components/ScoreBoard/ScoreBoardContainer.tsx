import React from 'react';
import { Box, Grid, Button } from '@mui/material';

import { GameData } from 'types';
import GameItem from 'components/ScoreBoard/GameItem';
import GameAddedModal from 'components/ScoreBoard/GameAddedModal';
import { useScoreBoardUtils } from 'components/ScoreBoard/ScoreBoardUtils';

const ScoreBoardContainer: React.FC = () => {
  const {
    games,
    startGame,
    updateScore,
    finishGame,
    isModalOpen,
    handleCloseModal,
  } = useScoreBoardUtils();

  return (
    <div>
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
      <GameAddedModal open={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ScoreBoardContainer;
