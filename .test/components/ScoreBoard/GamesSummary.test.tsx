import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import GamesSummary from '../../../components/ScoreBoard/GamesSummary';

describe('GamesSummary', () => {
  it('renders games summary correctly', () => {
    const games = [
      {
        id: 1,
        homeTeam: 'Team A',
        homeScore: 3,
        awayTeam: 'Team B',
        awayScore: 2,
      },
      {
        id: 2,
        homeTeam: 'Team C',
        homeScore: 1,
        awayTeam: 'Team D',
        awayScore: 2,
      },
    ];

    render(<GamesSummary games={games} />);

    const summaryTitle = screen.getByText(/games summary:/i);
    expect(summaryTitle).toBeInTheDocument();

    const gameSummary1 = screen.getByText(/Team A 3 - Team B 2/i);
    expect(gameSummary1).toBeInTheDocument();

    const gameSummary2 = screen.getByText(/Team C 1 - Team D 2/i);
    expect(gameSummary2).toBeInTheDocument();
  });
});
