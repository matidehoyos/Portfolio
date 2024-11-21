import style from './Header.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';


const Header = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
    const isLightMobile = theme === 'light' && isMobile;


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.container} id='header' style={{background: theme === 'light' ? "#eee" : ''}}>
            <div className={style.imgPre} style={{backgroundImage: theme === 'light' ? 'url(./bgHeader1.png)' : '',backgroundPosition: 'top center', backgroundSize: 'cover', width: '100vw'}} >
                <div className={style.subCont}>
                    <img src="nav.png" alt="Imagen personal" className={style.imgHeader} data-aos="fade-up" data-aos-duration="800" />
                </div>
            </div>
            <div className={`${style.texto} ${isLightMobile ? style.textoLight : style.texto}`} data-aos="fade-up" data-aos-duration="800">
                <p className={style.pres}>{t('header.me')}</p>
                <h1><span className={`${style.rol} ${isLightMobile ? style.rolLight : style.rol}`}>Full Stack - Frontend</span><br/><span className={`${style.dev} ${isLightMobile ? style.devLight : style.dev}`} style={{color: theme === 'light' ? '#222' : ''}}>Developer</span></h1>
                <p className={`${style.des} ${isLightMobile ? style.desLight : style.des}`} style={{color: theme === 'light' ? '#333' : '', fontWeight: theme === 'light' ? '600' : ''}}>{t('header.description')}</p>
            </div>
        </div>
    )
}

export default Header;