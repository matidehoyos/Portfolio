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
        <div className={style.container} id='header' style={{background: theme === 'light' ? "#eee" : '', backgroundImage: theme === 'dark' ? '' : 'url(./bgLight.jpeg)' , backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className={style.imgPre} style={{width: '100vw'}} >
                <div className={style.subCont} style={{background: theme === 'light' ? "#eee" : '', backgroundColor: theme === 'dark' ? '' : '#B87700' , border: theme === 'dark' ? '' : '1px solid #222'}}>
                    <img src="nav.png" alt="Imagen personal" className={style.imgHeader} data-aos="fade-up" data-aos-duration="800" />
                </div>
            </div>
            <div className={`${style.texto} ${isLightMobile ? style.textoLight : style.texto}`} data-aos="fade-up" data-aos-duration="800">
                <p className={style.pres} style={{color: theme === 'dark' ? '' : '#333', fontWeight: theme === 'dark' ? '' : '500'}}>{t('header.me')}</p>
                <h1><span className={`${style.rol} ${isLightMobile ? style.rolLight : style.rol}`}>Full Stack - Frontend</span><br/><span className={`${style.dev} ${isLightMobile ? style.devLight : style.dev}`} style={{color: theme === 'dark' ? '' : '#444', fontWeight: theme === 'dark' ? '' : '500'}}>Developer</span></h1>
                <p className={`${style.des} ${isLightMobile ? style.desLight : style.des}`} style={{color: theme === 'dark' ? '' : '#444', fontWeight: theme === 'dark' ? '' : '400'}}>{t('header.description')}</p>
            </div>
        </div>
    )
}

export default Header;