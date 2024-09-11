import { useState, useEffect, useContext } from 'react';
import style from './NavBar.module.css';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { ThemeContext } from '../../contexts/ThemeContext';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

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

    const containerStyles = {
        backgroundColor: isScrolled 
          ? (theme === 'light' ? '#4a0a70' : '#000') 
          : 'transparent',
        transition: 'background-color 0.3s ease'
    };

    return (
        <div className={`${style.container} ${isScrolled ? style.scrolled : ''}`} style={containerStyles}>
            <a href='#header' className={style.link}>
                <img src='./nav.png' alt="Logo" style={{backgroundColor: theme === 'light' ? '#eee' : '#181818', border: theme === 'light' ? '3px solid #eee' : '3px solid rgb(42,0,77)'}}/>
                <div className={style.txt}>
                    <h6>Matias De Hoyos</h6>
                    <p>Web developer</p>
                </div>
            </a>
            <div className={style.menu} onClick={ocultarMenu} style={isVisible ? { left: '0px' } : { left: '-800px' }}>
                <nav>
                    <ul>
                        <li><a href="#about" onClick={handleShowMenu}>About</a></li>
                        <li><a href="#projects" onClick={handleShowMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={handleShowMenu}>Contact</a></li>
                    </ul>
                </nav>
                <button onClick={toggleTheme} className={style.tema} style={{justifyContent: theme === 'light' ? 'flex-end' : 'flex-start'}}>
                    {theme === 'light' ? <FiMoon className={style.temaIcon} /> : <FiSun className={style.temaIcon} />}
                </button>
            </div>
            <div className={style.menuResp}>
                <button className={style.menuButton} onClick={handleShowMenu}>{isVisible ? <MdClose /> : <FiMenu />}</button>
            </div>
        </div>
    );
}

export default NavBar;

