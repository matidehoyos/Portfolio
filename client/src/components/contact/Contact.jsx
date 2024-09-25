import style from './Contact.module.css'
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';

const Contact = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
    const isLightMobile = theme === 'light' && isMobile;

    useEffect(() => {
        AOS.init(); 
    }, []);

    return(
        <div className={style.container} id="contact" style={{background: theme === 'light' ? "#eee" : ''}}>
            <p className={style.contactMe} data-aos="fade-right" data-aos-duration="800" id='about' style={{color: theme === 'dark' ? '#aaa' : '#111', fontWeight: theme === 'dark' ? '400' : '600', borderBottom: theme === 'dark' ? '1px solid #aaa' : '2px solid #111' }}>
                {t('contact.title')}
            </p>
            <div className={`${style.box} ${isLightMobile ? style.boxLight : style.box}`} data-aos="fade-up" data-aos-duration="800" style={{background: theme === 'light' ? '#444' : '#00000025', border: theme === 'light' ? '1px solid #00000030' : '1px solid #ffffff10'}}>
                <div className={`${style.imgAbout} ${isLightMobile ? style.imgAboutLight : style.imgAbout}`}>
                    <img src='./devLight.png' alt="imagen mia" style={{opacity: theme === 'dark' ? '.8' : '.9'}}/>
                </div>
                <div className={`${style.caja} ${isLightMobile ? style.cajaLight : style.caja}`}>
                    <p style={{color: theme === 'light' ? '#eee' : '#aeaeae', fontWeight: theme === 'light' ? '300' : '300'}}>
                        {t('contact.message')}
                    </p>
                    <div className={`${style.redes} ${isLightMobile ? style.redesLight : style.redes}`}>
                        <nav>
                            <ul>
                                <li><a target="_blank" href='mailto:mati.dehoyosmdp@gmail.com' className={isLightMobile ? style.mail : ''}  style={{background: theme === 'light' ? '#fff' : '#aaa', border: theme === 'light' ? '1px solid #ccc' : '1px solid #fff', color: theme === 'light' ? '#111' : '#111', fontWeight: theme === 'light' ? '400' : '400'}}><FaEnvelope className={style.icon}/>mati.dehoyosmdp@gmail.com</a></li>
                                <li><a href='https://www.linkedin.com/in/matias-de-hoyos-802bb4212/' className={isLightMobile ? style.red : ''}  target='_blank' style={{background: theme === 'light' ? '#ffffff80' : '', border: theme === 'light' ? '1px solid #fff' : '', color: theme === 'light' ? '#000' : ''}}><FaLinkedin className={style.icon}/>LinkedIn</a></li>
                                <li><a href='https://github.com/matidehoyos' target='_blank' className={isLightMobile ? style.red : ''}  style={{background: theme === 'light' ? '#ffffff80' : '', border: theme === 'light' ? '1px solid #fff' : '', color: theme === 'light' ? '#000' : ''}}><AiFillGithub className={style.icon}/>GitHub</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
