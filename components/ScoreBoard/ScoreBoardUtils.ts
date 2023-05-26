import { useState } from 'react';
import { GameData } from 'types';

export const useScoreBoardUtils = () => {
  const [games, setGames] = useState<GameData[]>([]);
  const [isAllGamesAdded, setIsAllGamesAdded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const startGame = async () => {
    try {
      const response = await fetch('/api/score-board');
      const data = await response.json();

      if (games.length === data.length) {
        setIsAllGamesAdded(true);
        setIsModalOpen(true);
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

  const updateScore = async (id: number) => {
    try {
      const response = await fetch('/api/updated-score-board');
      const data = await response.json();

      const gameToUpdate = data.find((game: GameData) => game.id === id);

      if (gameToUpdate) {
        const updatedGames = games.map((game) => {
          if (game.id === id) {
            return {
              ...game,
              homeScore: gameToUpdate.homeScore,
              awayScore: gameToUpdate.awayScore,
            };
          }
          return game;
        });
        setGames(updatedGames);
      }
    } catch (error) {
      console.error('Failed to fetch updated game data:', error);
    }
  };

  const getGamesSummary = () => {
    const gamesWithTotalScore = games.map((game) => ({
      ...game,
      totalScore: game.homeScore + game.awayScore,
    }));

    const sortedGames = gamesWithTotalScore.sort((a, b) => {
      if (a.totalScore === b.totalScore) {
        return b.id - a.id;
      }
      return b.totalScore - a.totalScore;
    });

    const summary = sortedGames.map((game) => ({
      id: game.id,
      homeTeam: game.homeTeam,
      awayTeam: game.awayTeam,
      homeScore: game.homeScore,
      awayScore: game.awayScore,
    }));

    return summary;
  };

  const finishGame = (id: number) => {
    const updatedGames = games.filter((game) => game.id !== id);
    setGames(updatedGames);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    games,
    startGame,
    finishGame,
    isModalOpen,
    updateScore,
    isAllGamesAdded,
    getGamesSummary,
    handleCloseModal,
  };
};
