import style from './Contact.module.css'
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
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
                <p className={style.contactMe} data-aos="fade-right" data-aos-duration="800" id='about' style={{color: theme === 'dark' ? '#aaa' : '#222', borderBottom: theme === 'dark' ? '' : '1px solid #ff8e00' }}>
                    {t('contact.title')}
                </p>
                <div className={`${style.box} ${isLightMobile ? style.boxLight : style.box}`} data-aos="fade-up" data-aos-duration="800" style={{background: theme === 'light' ? '#ff8e0070' : '', border: theme === 'light' ? '1px solid #00000030' : ''}}>
                <div className={style.imgPre} >
                    <div className={style.subCont} style={{background: theme === 'dark' ? 'rgb(116, 75, 0)' : '#eee', border: theme === 'dark' ? '' : '1px solid #aaa'}}>
                        <img src="contact.png" alt="Imagen telefono." className={style.imgHeader} data-aos="fade-up" data-aos-duration="800" />
                    </div>
                </div>
                <div className={`${style.caja} ${isLightMobile ? style.cajaLight : style.caja}`}>
                    <p style={{color: theme === 'light' ? '#111' : '#aeaeae', fontWeight: theme === 'light' ? '300' : '300'}}>
                        {t('contact.message')}
                    </p>
                    <div className={`${style.redes} ${isLightMobile ? style.redesLight : style.redes}`}>
                        <nav>
                            <ul>
                                <li><a href='mailto:mati.dehoyosmdp@gmail.com' target="_blank" className={isLightMobile ? style.mail : ''}  style={{background: theme === 'light' ? '#eee' : '', border: theme === 'light' ? '1px solid #888' : '', color: theme === 'light' ? '#222' : '', fontWeight: theme === 'light' ? '400' : ''}}><FaEnvelope className={style.icon}/>mati.dehoyosmdp@gmail.com</a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=542236901801" target="_blank" className={isLightMobile ? style.red : ''} style={{background: theme === 'light' ? '#eee' : '', border: theme === 'light' ? '1px solid #888' : '', color: theme === 'light' ? '#111' : ''}}><FaWhatsapp className={style.icon}/>WhatsApp</a></li>
                                <li><a href='https://www.linkedin.com/in/matias-de-hoyos-802bb4212/' className={isLightMobile ? style.red : ''}  target='_blank' style={{background: theme === 'light' ? '#eee' : '', border: theme === 'light' ? '1px solid #888' : '', color: theme === 'light' ? '#111' : ''}}><FaLinkedin className={style.icon}/>LinkedIn</a></li>
                                <li><a href='https://github.com/matidehoyos' target='_blank' className={isLightMobile ? style.red : ''}  style={{background: theme === 'light' ? '#eee' : '', border: theme === 'light' ? '1px solid #888' : '', color: theme === 'light' ? '#111' : ''}}><AiFillGithub className={style.icon}/>GitHub</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
