import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import "./Nav.css";


function Nav() {
    const[show, handleShow]= useState(false);
    const history = useHistory();

    const transitionNavBar = () =>{
        if (window.scrollY>100) {
            handleShow(true);
        }
        else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar); 
        return () => 
            window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            
            <div className="nav_contents">
                <img
                    onClick = {() => {history.push('/')}}
                    className="nav_logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                />

                <img
                    onClick = {() => history.push('/profile')}
                    className="nav_avatar"
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
                />
            </div>
        </div>
    )
}

export default Nav
