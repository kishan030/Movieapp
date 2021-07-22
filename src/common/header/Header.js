import React from 'react'
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';

import './Header.css'
import Login from '../Login/Login'




function Header(props) {

    return (
        <div className='header'>

            <div className='header_logo'><ReactLogo> </ReactLogo></div>

            <Login></Login>


        </div>
    )
}



export default Header;