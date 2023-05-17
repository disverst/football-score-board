'use client';

import * as React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';

import Logo from 'components/Navbar/Logo';
import Menu from 'components/Navbar/Menu';
import UserMenu from 'components/Navbar/UserMenu';

const Navbar: React.FC = () => (
  <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    <Container maxWidth={false}>
      <Toolbar disableGutters>
        <Logo />
        <Menu />
        <UserMenu />
      </Toolbar>
    </Container>
  </AppBar>
);
export default Navbar;
