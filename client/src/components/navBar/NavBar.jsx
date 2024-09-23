import { useState, useEffect, useContext } from 'react';
import style from './NavBar.module.css';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('en');


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
          ? (theme === 'light' ? '#6610f2' : '#17181d') 
          : 'transparent',
        transition: 'background-color 0.3s ease'
    };

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    return (
        <div className={`${style.container} ${isScrolled ? style.scrolled : ''}`} style={containerStyles}>
            <a href='#header' className={style.link}>
                <img src='./img.png' alt="Logo" style={{backgroundColor: theme === 'light' ? '#eee' : '#181818', border: theme === 'light' ? '1px solid #eee' : '1px solid #6610f290'}}/>
                <div className={style.txt}>
                    <h6>{t('navbar.name')}</h6>
                    <p>{t('navbar.developer')}</p>
                </div>
            </a>
            <div className={style.botonera}>
                <div className={style.menu} onClick={ocultarMenu} style={isVisible ? { left: '0px' } : { left: '-800px' }}>
                    <nav>
                        <ul>
                            <li><a href="#about" onClick={handleShowMenu}>{t('navbar.about')}</a></li>
                            <li><a href="#projects" onClick={handleShowMenu}>{t('navbar.projects')}</a></li>
                            <li><a href="#contact" onClick={handleShowMenu}>{t('navbar.contact')}</a></li>
                        </ul>
                    </nav>
                </div>
                <button onClick={toggleTheme} className={style.tema} style={{justifyContent: theme === 'light' ? 'flex-end' : 'flex-start'}}>
                    {theme === 'light' ? <FiMoon className={style.temaIcon} /> : <FiSun className={style.temaIcon} />}
                </button>
                <button onClick={toggleLanguage} className={style.languageButton}>
                    <img src={language === 'en' ? './sp.jpeg' : './uk.jpeg' } alt="Language Flag" className={style.flagIcon} />
                </button>
                <div className={style.menuResp}>
                    <button className={style.menuButton} onClick={handleShowMenu}>{isVisible ? <MdClose /> : <FiMenu />}</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;


