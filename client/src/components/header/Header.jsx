import style from './Header.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';


const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.container} id='header'>
            <img src="https://i.pinimg.com/originals/36/00/02/360002e4690d7889f7a3ca2ea406ea15.gif" className={style.newIm} style={{display: theme === 'light' ? 'none' : ''}} />
            <div className={style.imgPre} data-aos="fade-up" data-aos-duration="800" style={{backgroundImage: theme === 'light' ? 'url(./bgHeader1.png)' : '',backgroundPosition: 'top center', backgroundSize: 'cover', width: '100vw'}}>
                <img src="nav.png" alt="foto mia" style={{filter: theme === 'light' ? 'drop-shadow(0px 0px 20px #000) grayscale(60%)' : 'drop-shadow(0px 0px 18px #000) grayscale(85%)', opacity: theme === 'light' ? '.9' : '1'}}/>
            </div>
            <div className={style.texto} data-aos="fade-up" data-aos-duration="800">
                <h1><span className={style.rol}>Full Stack - Frontend</span><br/><span className={style.dev} style={{color: theme === 'light' ? '#222' : 'rgb(200,200,200)'}}>Developer</span></h1>
                <p className={style.des} style={{color: theme === 'light' ? '#333' : 'rgb(180,180,180)', fontWeight: theme === 'light' ? '600' : '400'}}>{t('header.description')}</p>
            </div>
        </div>
    )
}

export default Header;