import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { GameData } from 'types';

const ScoreBoardContainer: React.FC = () => {
  const [games, setGames] = useState<GameData[]>([]);
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [isAllGamesAdded, setIsAllGamesAdded] = useState(false);

  const startGame = async () => {
    try {
      const response = await fetch('/api/score-board');
      const data = await response.json();

      if (games.length === data.length) {
        setIsAllGamesAdded(true);
      }

      const newGame = {
        id: games.length + 1,
        homeScore: 0,
        awayScore: 0,
        homeTeam: data[games.length].homeTeam,
        awayTeam: data[games.length].awayTeam,
      };
      setGames((prevGames) => [...prevGames, newGame]);
    } catch (error) {
      console.error('Failed to fetch game data:', error);
    }
  };

  const finishGame = (id: number) => {
    const updatedGames = games.filter((game) => game.id !== id);
    setGames(updatedGames);
  };

  const updateScore = (id: number) => {
    const updatedGames = games.map((game) => {
      if (game.id === id) {
        return {
          ...game,
          homeScore,
          awayScore,
        };
      }
      return game;
    });
    setGames(updatedGames);
    setHomeScore(0);
    setAwayScore(0);
  };

  const handleCloseModal = () => {
    setIsAllGamesAdded(false);
  };

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 2 }}>
        <Button variant="contained" size="large" onClick={startGame}>
          Start Game
        </Button>
      </Box>

      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {games.map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
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
                variant="contained"
                onClick={() => updateScore(game.id)}
                sx={{
                  mr: 2,
                }}
              >
                Update Score
              </Button>
              <Button variant="contained" onClick={() => finishGame(game.id)}>
                Finish Game
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Dialog open={isAllGamesAdded} onClose={handleCloseModal}>
        <DialogTitle sx={{ textAlign: 'center' }}>
          All games have been added
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ textAlign: 'center' }}>
            You have added all available games. No more games are available to
            add.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ScoreBoardContainer;
