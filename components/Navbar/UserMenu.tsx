'use client';

import {
  Box,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  IconButton,
} from '@mui/material';
import React, { useState } from 'react';

import Link from 'src/Link';
import { usePathname } from 'next/navigation';
import { menuItemLinkSt } from './NavbarStyles';
import { settings, userMenuSt } from './NavbarConstants';

const UserMenu: React.FC = () => {
  const pathname = usePathname();
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const settingsItemText = (event.target as HTMLElement).innerText;

    if (settingsItemText === 'Logout') {
      // await signOut({ callbackUrl: '/' });
    }
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="User photo" src={undefined} />
        </IconButton>
      </Tooltip>
      <Menu
        keepMounted
        id="menu-app-bar"
        sx={{ mt: '45px' }}
        anchorEl={anchorElUser}
        anchorOrigin={userMenuSt}
        transformOrigin={userMenuSt}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.text}
            onClick={handleClick}
            data-name={setting.text}
            selected={pathname === setting.path}
          >
            <Link
              color="inherit"
              underline="none"
              textAlign="center"
              href={setting.path}
              sx={menuItemLinkSt}
            >
              {setting.text}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default UserMenu;
