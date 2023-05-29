This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Football World Cup Score Board

The Football World Cup Score Board is a simple library that allows you to track and manage live football matches and scores. It provides the following functionalities:

- Start a Game: You can start a new game by providing the names of the home team and away team. The initial score is set to 0 - 0.

- Finish a Game: Once a game is finished, you can remove it from the scoreboard.

- Update Score: You can update the score of a game by specifying the home team score and away team score. This allows you to keep track of the ongoing match.

- Get Games Summary: The program provides a summary of games based on their total score. The summary includes the names of the teams and their corresponding scores, ordered by the most recently added games with the same total score.

## Live Demo

Check out the live demo of the Football World Cup Score Board: https://football-score-board.vercel.app/

## How to Use

- Start a Game:

  - Click on the "Start Game" button to start a new game.
  - Enter the names of the home team and away team in the provided input fields.
  - The game will be added to the scoreboard with an initial score of 0 - 0.

- Update Score:

  - For an ongoing game, enter the new score for the home team and away team.
  - The score will be updated accordingly.

- Finish a Game:

  - To remove a game from the scoreboard, click on the "Finish Game" button for the corresponding game.

- Games Summary:
  - The games summary section displays the games ordered by total score.
  - The team names and scores are listed, showing the most recently added games with the same total score at the top.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Material-UI: A popular UI component library for React applications.
- Vercel: A cloud platform for static site deployment.

## Development Setup

- Clone the repository.
- Install the dependencies using yarn install.
- Run the development server using yarn dev.
- Open the application in your web browser at http://localhost:3000.

## Production Deployment

The Football World Cup Score Board has been deployed on Vercel. You can access the live version of the application at https://football-score-board.vercel.app/.
