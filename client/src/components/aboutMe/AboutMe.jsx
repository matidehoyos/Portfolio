import style from './AboutMe.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { PiFileHtmlLight, PiNoteDuotone } from "react-icons/pi";
import { PiFileCssLight } from "react-icons/pi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { MdStorage } from 'react-icons/md';
import { FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiNodedotjs, SiNodemon, SiReact, SiRedux, SiTailwindcss } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql, GrNodes } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { DiIllustrator, DiNodejs } from "react-icons/di";
import { Link } from 'react-router-dom';
import { AiOutlineNodeExpand } from 'react-icons/ai';




const AboutMe = () => {
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
                        <h5 className={style.why}>Why Hire Me for Your<br/>Next Project?</h5>
                        <p className={style.first}>I am a software developer with experience creating innovative technological solutions.</p>
                        <p className={style.second}>Self-motivated, proactive and results orientated, always looking to push myself to present more creative and challenging projects. Consistently growing and open to learning new techniques and technologies.</p> 
                    </div>
                </div>

        <div className={style.conocimientos} id='about' data-aos="fade-up" data-aos-duration="800">
            <h6>SKILLS</h6>
            <div className={style.skills}>
                <div className={style.tecno}>
                    <div className={style.skillItem}><IoLogoJavascript /><span>JavaScript</span></div>
                    <div className={style.skillItem}><DiNodejs /><span>NodeJs</span></div>
                    <div className={style.skillItem}><FaReact /><span>ReactJs</span></div>
                    <div className={style.skillItem}><SiTailwindcss /><span>TailwindCss</span></div>
                    <div className={style.skillItem}><SiRedux /><span>Redux</span></div>
                    <div className={style.skillItem}><MdStorage /><span>MongoDB</span></div>
                    <div className={style.skillItem}><SiPostgresql /><span>Postgres</span></div>
                    <div className={style.skillItem}><SiExpress /><span>Express</span></div>
                    <div className={style.skillItem}><FaBootstrap /><span>Bootstrap</span></div>
                    <div className={style.skillItem}><GrMysql /><span>MySql</span></div>
                    <div className={style.skillItem}><PiFileHtmlLight /><span>Html5</span></div>
                    <div className={style.skillItem}><PiFileCssLight /><span>Css3</span></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AboutMe;