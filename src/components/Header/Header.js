import React from 'react'
import mainLogo from '../../assets/logo/main-logo.png'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ProfileMenu from './ProfileMenu';
import BottomNav from './BottomNav';
const Header = () => {
  return (
    <div className='header-container'>
           
        <img src={mainLogo} className='navbar-logo' />
        

        <div className='navbar-search'>
            <div className='navbar-search-text'>Anywhere</div>
            <div className='navbar-search-text'>Any Week</div>
            <div className='navbar-search-text-2'>Add guest</div>
            <div className='search-icon-div'>
                <SearchIcon className='search-icon'  />
            </div>
        </div>

        <div className='navbar-profile'>
            <div className='airbnb-your-home'>Airbnb your home</div>
            <div className='language-icon'>
              <LanguageIcon />
            </div>
            <div className='navbar-profile-menu'>
                <ProfileMenu />
            </div>
        </div>
        <BottomNav />
    </div>
  )
}

export default Header