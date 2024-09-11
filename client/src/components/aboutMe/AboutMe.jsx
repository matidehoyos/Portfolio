import style from './AboutMe.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { PiFileHtmlLight } from "react-icons/pi";
import { PiFileCssLight } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { MdStorage } from 'react-icons/md';
import { FaBootstrap } from "react-icons/fa";
import { SiExpress, SiRedux, SiTailwindcss } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import { ThemeContext } from '../../contexts/ThemeContext';




const AboutMe = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    useEffect(() => {
        AOS.init(); 
      }, []);


    return(
        <div className={style.container}>
                <p className={style.aboutMe} data-aos="fade-right" data-aos-duration="800" id='about'>ABOUT ME</p>
                
                <div className={style.texto} data-aos="fade-up" data-aos-duration="800">
                    <div className={style.imgTxt}>
                        <img src="dev.jpeg" alt="Imagen desarrollador" />
                    </div>
                    <div className={style.txt} >
                        <h5 className={style.why} style={{color: theme === 'dark' ? '#fff' : '#111', fontWeight: theme === 'dark' ? '500' : '600'}}>Why Hire Me for Your<br/>Next Project?</h5>
                        <p className={style.first} style={{color: theme === 'dark' ? '#8e8e8e' : '#333', fontWeight: theme === 'dark' ? '500' : '600'}}>I am a software developer with experience creating innovative technological solutions.</p>
                        <p className={style.second} style={{color: theme === 'dark' ? '#ddd' : '#000', fontWeight: theme === 'dark' ? '500' : '600'}}>Self-motivated, proactive and results orientated, always looking to push myself to present more creative and challenging projects. Consistently growing and open to learning new techniques and technologies.</p> 
                    </div>
                </div>

        <div className={style.conocimientos} id='about' data-aos="fade-up" data-aos-duration="800">
            <h6 style={{color: theme === 'dark' ? '#898989' : '#000', fontWeight: theme === 'dark' ? '400' : '600'}}>SKILLS</h6>
            <div className={style.skills}>
                <div className={style.tecno} >
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><IoLogoJavascript /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>JavaScript</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><DiNodejs /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>NodeJs</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><FaReact /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>ReactJs</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiTailwindcss /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>TailwindCss</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiRedux /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Redux</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><MdStorage /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>MongoDB</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiPostgresql /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Postgres</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><SiExpress /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Express</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><FaBootstrap /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Bootstrap</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><GrMysql /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>MySql</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><PiFileHtmlLight /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Html5</span></div>
                    <div className={style.skillItem} style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}><PiFileCssLight /><span style={{color: theme === 'light' ? '#000' : '', fontWeight: theme === 'light' ? '600' : ''}}>Css3</span></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutMe;