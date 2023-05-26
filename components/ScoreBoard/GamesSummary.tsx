import React from 'react';
import { Box, Typography } from '@mui/material';

import { GameData } from 'types';

interface GamesSummaryProps {
  gamesSummary: GameData[];
}

const GamesSummary: React.FC<GamesSummaryProps> = ({ gamesSummary }) => (
  <Box
    sx={{
      p: 3,
      m: 2,
      display: 'flex',
      borderRadius: 2,
      minWidth: '330px',
      color: '#ffff00',
      alignItems: 'center',
      bgcolor: '#1a38c9de',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
    }}
  >
    <Typography variant="h6" component="h2" sx={{ mr: 1 }}>
      Games Summary:
    </Typography>
    {gamesSummary.map((game: GameData) => (
      <Typography
        variant="body1"
        component="p"
        key={game.id}
        sx={{ mt: 0.5, mr: 2, justifyContent: 'space-between' }}
      >
        {`${game.homeTeam} ${game.homeScore} - ${game.awayTeam} ${game.awayScore}`}
      </Typography>
    ))}
  </Box>
);

export default GamesSummary;
