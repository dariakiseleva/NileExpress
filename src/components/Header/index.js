import React from 'react'
import "./header.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function Header() {
  return (
    <div className="header">
        {/* LOGO */}
        <div className="header__logo">NileExpress</div>

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

            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
        </div>

    </div>
  )
}