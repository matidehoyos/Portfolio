import { useState, useEffect } from 'react';
import style from './NavBar.module.css';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleShowMenu = () => {
        setIsVisible(!isVisible);
    }

    const ocultarMenu = () => {
        const menu = document.querySelector(`.${style.menu}`);
        menu.style.left = "-800px";
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${style.container} ${isScrolled ? style.scrolled : ''}`}>
            <a href='#header' className={style.link}>
                <img src='./nav.png' alt="Logo" />
                <div className={style.txt}>
                    <h6>Matias De Hoyos</h6>
                    <p>Web developer</p>
                </div>
            </a>
            <div className={style.menu} onClick={ocultarMenu} style={isVisible ? { left: '0px' } : { left: '-800px' }}>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className={style.menuResp}>
                <button className={style.menuButton} onClick={handleShowMenu}>{isVisible ? <MdClose /> : <FiMenu />}</button>
            </div>
        </div>
    );
}

export default NavBar;
