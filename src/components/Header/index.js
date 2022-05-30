import React from 'react'
import "./header.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Header() {
  return (
    <div className="header">
        {/* LOGO */}
        <div className="header__logo">NileExpress</div>
        {/* <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" /> */}
        {/* SEARCH */}
        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchOutlinedIcon className="header__searchIcon" />
        </div>
        {/* NAVIGATION */}
        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">Hello user</span>
                <span className="header__optionLineTwo">Sign in</span>
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orderes</span>
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>
        </div>

    </div>
  )
}