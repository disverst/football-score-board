export enum TabRoutes {
  mainUrl = '/',
  homeUrl = '/home',
  scoreBoardUrl = '/score-board',
}

export const pages = [
  {
    text: 'Home',
    path: TabRoutes.homeUrl,
    url: TabRoutes.homeUrl,
  },
  {
    text: 'Football score board',
    path: TabRoutes.scoreBoardUrl,
    url: TabRoutes.scoreBoardUrl,
  },
];

export const userMenuSt = {
  vertical: 'top' as const,
  horizontal: 'right' as const,
};

export const settings = [
  {
    text: 'Profile',
    path: '/',
  },
  {
    text: 'Logout',
    path: '/',
  },
];
