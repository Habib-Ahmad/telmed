import React, { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import logo from '../assets/images/logo.png'

function NavBar() {
    const [scrolled, setScrolled] = useState(false)

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 10 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    
    useEffect(() => {
    window.addEventListener('scroll',handleScroll)
    })

    return (
        <div className={`navbar ${scrolled?"scrolled":""}`} >
            <div className="navbar__logo">
                <img src={logo} alt="" />
                <div>TelMed</div>
            </div>
            <div>
                <Button className="navbar__button">Sign Up</Button>
            </div>
            
        </div>
    )
}

export default NavBar
