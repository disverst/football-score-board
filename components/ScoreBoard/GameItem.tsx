import React from 'react';
import { GameData } from 'types';
import { Box, Grid, Button, Typography } from '@mui/material';

const GameItem: React.FC<{
  game: GameData;
  updateScore: (id: number) => void;
  finishGame: (id: number) => void;
}> = ({ game, updateScore, finishGame }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box
      sx={{
        p: 3,
        m: 2,
        borderRadius: 2,
        minWidth: '330px',
        textAlign: 'center',
        bgcolor: '#ffffffde',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography variant="body1" component="p" sx={{ mb: 1 }}>
        Score: {game.homeScore} – {game.awayScore}
      </Typography>
      <Typography variant="body1" component="p" sx={{ mb: 1 }}>
        Home team: {game.homeTeam}
      </Typography>
      <Typography variant="body1" component="p" sx={{ mb: 3 }}>
        Away team: {game.awayTeam}
      </Typography>
      <Button
        sx={{ mr: 2 }}
        variant="contained"
        onClick={() => updateScore(game.id)}
      >
        Update Score
      </Button>
      <Button variant="contained" onClick={() => finishGame(game.id)}>
        Finish Game
      </Button>
    </Box>
  </Grid>
);

export default GameItem;
