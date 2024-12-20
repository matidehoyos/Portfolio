import { useState, useEffect, useContext } from 'react';
import style from './NavBar.module.css';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState('en');
    const isLightMobile = theme === 'light' && isMobile;

    const handleShowMenu = () => {
        setIsVisible(!isVisible);
    }

    const ocultarMenu = () => {
        const menu = document.querySelector(`.${style.menu}`);
        menu.style.left = "0px";
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 360) {
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


    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
        setLanguage(newLanguage);
    };

    return (
        <div className={`${style.container} ${isScrolled ? style.scrolled : ''} }`} style={{ backgroundColor: theme === 'light' ? '#eee' : '#18171d', borderBottom: theme === 'dark' ? '' : '0.3px solid #999'}}>
            <a href='#header' className={style.link}>
                <img src='./nav.png' className={style.logoImg} style={{backgroundColor: theme === 'dark' ? '' : '#ff8e0080', border: theme === 'dark' ? '' : '1px solid #888', opacity: theme === 'dark' ? '' : '1'}} alt="Logo"/>
                <div className={style.txt}>
                    <h6 style={{color: theme === 'dark' ? '' : '#222'}}>{t('navbar.name')}</h6>
                    <p style={{color: theme === 'dark' ? '' : '#333', fontWeight: theme === 'dark' ? '' : '500'}}>{t('navbar.developer')}</p>
                </div>
            </a>
                <div className={`${style.menu} ${isLightMobile ? style.menuLight : style.menu}`} onClick={ocultarMenu} style={isVisible ? { left: '0px' } : { left: '1200px' }}>
                    <nav>
                        <ul>
                            <li><a href="#about" onClick={handleShowMenu} style={{color: theme === 'dark' ? '' : '#222'}}>{t('navbar.about')}</a></li>
                            <li><a href="#projects" onClick={handleShowMenu} style={{color: theme === 'dark' ? '' : '#222'}}>{t('navbar.projects')}</a></li>
                            <li><a href="#contact" onClick={handleShowMenu} style={{color: theme === 'dark' ? '' : '#222'}}>{t('navbar.contact')}</a></li>
                        </ul>
                    </nav>
                    <button onClick={toggleTheme} className={style.tema} style={{justifyContent: theme === 'light' ? 'flex-end' : 'flex-start', border: theme === 'dark' ? '' : '1px solid #222' }}>
                        {theme === 'light' ? <FiSun className={style.temaIcon} style={{backgroundColor: theme === 'dark' ? '' : '#333'}} /> : <FiMoon className={style.temaIcon}  style={{backgroundColor: theme === 'dark' ? '' : '#fff'}}/> }
                    </button>
                    <button onClick={toggleLanguage} className={style.languageButton}>
                        <img src={language === 'en' ? './sp.jpeg' : './uk.jpeg' } alt="Language Flag" className={style.flagIcon} style={{border: theme === 'dark' ? '' : '1px solid #222' }}/>
                    </button>
                </div>
                <div className={style.botonera}>
                    <button onClick={toggleTheme} className={style.temaMov} style={{justifyContent: theme === 'light' ? 'flex-end' : 'flex-start'}}>
                        {theme === 'dark' ? <FiSun className={style.temaIcon} /> : <FiMoon className={style.temaIcon} /> }
                    </button>
                    <button onClick={toggleLanguage} className={style.languageButtonMov}>
                        <img src={language === 'en' ? './sp.jpeg' : './uk.jpeg' } alt="Language Flag" className={style.flagIcon} />
                    </button>
                    <div className={style.menuResp}>
                        <button className={style.menuButton} onClick={handleShowMenu} style={{color: theme === 'light' ? '#222' : ''}}>{isVisible ? <MdClose /> : <FiMenu />}</button>
                    </div>
                </div>
        </div>
    );
}

export default NavBar;


