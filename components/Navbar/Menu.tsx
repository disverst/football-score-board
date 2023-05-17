'use client';

import Link from 'next/link';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { Box, MenuItem } from '@mui/material';
import { pages } from 'components/Navbar/NavbarConstants';
import isPageSelected from 'components/Navbar/NavbarUtils';
import { menuItemSt } from 'components/Navbar/NavbarStyles';

const Menu: React.FC = () => {
  const pathname = usePathname();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <MenuItem
          key={page.text}
          sx={menuItemSt}
          selected={isPageSelected(pathname, page.path)}
        >
          <Link href={page.url}>{page.text}</Link>
        </MenuItem>
      ))}
    </Box>
  );
};
export default Menu;
