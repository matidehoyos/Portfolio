import style from './AboutMe.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { PiFileHtmlLight } from "react-icons/pi";
import { PiFileCssLight } from "react-icons/pi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { MdStorage } from 'react-icons/md';
import { FaBootstrap } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiRedux, SiSequelize, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';




const AboutMe = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init(); 
      }, []);


    const isLightMobile = theme === 'light' && isMobile;

    return(
        <div className={style.container} style={{background: theme === 'light' ? "#eee" : ''}}>
                <p className={style.aboutMe} data-aos="fade-right" data-aos-duration="800" id='about' style={{color: theme === 'dark' ? '#aaa' : '#111', fontWeight: theme === 'dark' ? '400' : '600', borderBottom: theme === 'dark' ? '' : '2px solid #111' }}>{t('about.titulo')}</p>
                
                <div className={style.box}>
                        <div className={`${style.imgTxt} ${isLightMobile ? style.imgTxtLight : style.imgTxt}`} data-aos="fade-right" data-aos-duration="800">
                            <img src="dev.jpeg" alt="Imagen desarrollador" style={{opacity: theme === 'light' ? '1' : ''}} />
                        </div>
                        <div className={style.contenido}>
                            <div className={style.texto} data-aos="fade-up" data-aos-duration="800">
                                    <h5 className={`${style.why} ${isLightMobile ? style.whyLight : style.why}`} style={{color: theme === 'dark' ? '' : '#000', fontWeight: theme === 'dark' ? '' : '700'}}>{t('about.txt-titulo')}</h5>
                                    <p className={`${style.first} ${isLightMobile ? style.firstLight : style.first}`} style={{color: theme === 'dark' ? '' : '#222', fontWeight: theme === 'dark' ? '' : '500'}}>{t('about.txt-subtitulo')}</p>
                                    <p className={`${style.second} ${isLightMobile ? style.secondLight : style.second}`} style={{color: theme === 'dark' ? '' : '#333', fontWeight: theme === 'dark' ? '' : '500'}}>{t('about.txt-body')}</p> 
                            </div>
                            <div className={`${style.conocimientos} ${isLightMobile ? style.conocimientosLight : style.conocimientos}`} id='about' data-aos="fade-up" data-aos-duration="800">
                                <h6 style={{color: theme === 'dark' ? '' : '#000', fontWeight: theme === 'dark' ? '' : '600'}}>SKILLS</h6>
                                <div className={style.skills}>
                                    <div className={`${style.tecno} ${isLightMobile ? style.tecnoLight : style.tecno}`}>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><IoLogoJavascript /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>JavaScript</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiTypescript /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>TypeScript</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><FaNodeJs /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>NodeJs</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiExpress /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Express</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><FaReact /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>ReactJs</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiNextdotjs /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Next</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiRedux /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Redux</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiTailwindcss /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>TailwindCss</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><FaBootstrap /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Bootstrap</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><PiFileCssLight /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Css3</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><PiFileHtmlLight /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Html5</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiPostgresql /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Postgres</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><MdStorage /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>MongoDB</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><GrMysql /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>MySql</span></div>
                                        <div className={`${style.skillItem} ${isLightMobile ? style.skillItemLight : style.skillItem}`} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiSequelize /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Sequelize</span></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                 </div>
        </div>
    )
}

export default AboutMe;