import React from 'react'
import "./header.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

//For some reason the shorthand did not work?
import firebaseData from "./../../firebase";
const {db, auth} = firebaseData;


export default function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const progressToAuthentication = () => {
        //If a user was logged in, sign out on click
        if (user) {
            auth.signOut()
        }
    }

    return (
    <div className="header">
        {/* LOGO */}
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="header__logo">NileExpress</div>
        </Link>

        {/* SEARCH */}
        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchOutlinedIcon className="header__searchIcon" />
        </div>
        {/* NAVIGATION */}
        <div className="header__nav">

             {/* NOTE: The link only transitions if no user is logged in */}
            <Link to={!user && "/login"} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="header__option" onClick={progressToAuthentication}>
                    <span className="header__optionLineOne">Hello {user ? user.email : 'guest'}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>

            <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to="/checkout" style={{ textDecoration: 'none' }}>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>

    </div>
    )
}