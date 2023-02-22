import React from "react";
import c from './header.module.css';

const Header = () => {
    return(
        <header className={c.header}>
            <div className="container">
                <div className={c.header_content}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="25" fill="white"/>
                        <path d="M25 10L37.9904 32.5H12.0096L25 10Z" fill="#606060"/>
                    </svg>
                    <div>Такая вот социальная сеть</div>
                </div>
            
            </div>
        </header >
    )
}

export default Header;