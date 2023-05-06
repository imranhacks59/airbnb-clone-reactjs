import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='profile-menu-flux'
      >
        <MenuIcon />
        <AccountCircleIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} className='menu-items'>Log in</MenuItem>
        <MenuItem onClick={handleClose} className='menu-items'>Sign up</MenuItem>
        <div 
          style={{
            height:'1px',
            backgroundColor:'var(--grey)',
            width:'100%'
          }}
        />
        <MenuItem onClick={handleClose} className='menu-items'>Airbnb my home</MenuItem>
        <MenuItem onClick={handleClose} className='menu-items'>Help</MenuItem>
      </Menu>
    </div>
  );
}
