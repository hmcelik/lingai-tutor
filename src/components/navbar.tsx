"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import app from "@/firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "@/firebase/firebaseApp";


interface NavItem {
    label: string;
    link: string;
    icon: any;
}

interface NavbarProps {
    navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
    app;
    const [user] = useAuthState(auth);  
    let displayName = "Login"
    let profileURL = "/login"
    let email = "Login"
    let photoURL = "https://static.wikia.nocookie.net/140d4cba-eb7b-46a6-b102-6870ad6db725/scale-to-width/755"
    let emailVerified = "Login"

    if (user) {
        displayName = user.displayName?.split(' ')[0] || '';
        profileURL = "/profile"
        email = user.email || "";
        photoURL = user.photoURL || "";
        emailVerified = user.emailVerified.toString() || "";
    }

    return (
        <nav>
            
            <div id="nav-bar">
            <input id="nav-toggle" type="checkbox"/>
            <div id="nav-header"><a id="nav-title" href="/" target="">LingAI Tutor</a>
                <label htmlFor="nav-toggle"><span id="nav-toggle-burger"></span></label>
                <hr/>
            </div>
            <div id="nav-content">
                {navItems.map((item) => (
                    <div className="nav-button" key={item.link}>
                        <FontAwesomeIcon className='icon' icon={item.icon}/>
                        <a href={item.link}>{item.label}</a>
                    </div>
                ))}
                <div id="nav-content-highlight"></div>
            </div>
            <input id="nav-footer-toggle" type="checkbox"/>
            <div id="nav-footer">
                <div id="nav-footer-heading">
                <div id="nav-footer-avatar"><img src={photoURL}/></div>
                <div id="nav-footer-titlebox"><a id="nav-footer-title" href={profileURL} target="">{displayName}</a><span id="nav-footer-subtitle">Admin</span></div>
                <label htmlFor="nav-footer-toggle"><FontAwesomeIcon className='icon-s' icon={faCaretUp}/></label>
                </div>
                <div id="nav-footer-content">
                <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button id='sign-out-button' onClick={() => auth.signOut()}>Sign Out</button>
                </div>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;

            /*<ul>
                {navItems.map((item) => (
                    <li key={item.link}>
                        <a href={item.link}>{item.label}</a>
                    </li>
                ))}
            </ul>*/