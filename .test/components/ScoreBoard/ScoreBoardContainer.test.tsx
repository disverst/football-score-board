import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ScoreBoardContainer from '../../../components/ScoreBoard/ScoreBoardContainer';

jest.mock('../../../components/ScoreBoard/ScoreBoardUtils', () => ({
  useScoreBoardUtils: () => ({
    games: [
      { id: 1, homeScore: 0, awayScore: 0 },
      { id: 2, homeScore: 0, awayScore: 0 },
    ],
    startGame: jest.fn(),
    finishGame: jest.fn(),
    updateScore: jest.fn(),
    isModalOpen: false,
    getGamesSummary: jest.fn(() => []),
    handleCloseModal: jest.fn(),
  }),
}));

jest.mock('../../../components/ScoreBoard/GameItem', () => {
  const GameItem = ({ game }: { game: any }) => (
    <div data-testid={`game-item-${game.id}`}>{game.id}</div>
  );
  return GameItem;
});

describe('ScoreBoardContainer', () => {
  it('renders start game button', () => {
    render(<ScoreBoardContainer />);
    const startGameButton = screen.getByRole('button', { name: /start game/i });
    expect(startGameButton).toBeInTheDocument();
  });

  it('renders game items based on games data', () => {
    render(<ScoreBoardContainer />);
    const gameItem1 = screen.getByTestId('game-item-1');
    const gameItem2 = screen.getByTestId('game-item-2');
    expect(gameItem1).toBeInTheDocument();
    expect(gameItem2).toBeInTheDocument();
  });
});
