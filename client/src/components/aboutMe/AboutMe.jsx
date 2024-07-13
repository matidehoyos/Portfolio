import style from './AboutMe.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFileHtmlLight } from "react-icons/pi";
import { PiFileCssLight } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { MdStorage } from 'react-icons/md';
import { FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaFigma } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";




const AboutMe = () => {
    useEffect(() => {
        AOS.init(); 
      }, []);


    return(
        <div className={style.container}>
             <div className={style.pContainer} id='about' data-aos="fade-up" data-aos-duration="800">
                    <div className={style.imgAbout} data-aos="fade-up" data-aos-duration="800" >
                        <img src="./about.png" alt="imagen mia" />
                    </div>
                    <p className={style.first}>I am a software developer with experience creating innovative technological solutions.</p>
            </div>

                <div className={style.about} data-aos="fade-up" data-aos-duration="800">
                     <p className={style.second}>Self-motivated, proactive and results orientated, with a solid technical background and always looking to push myself to present more creative and challenging projects. Consitantly growing and open to learning new techniques and technologies.</p>
                 </div>
                <div className={style.skills}>
                            <div className={style.tecno}>
                                <p><IoLogoJavascript /></p>
                                <p><BiLogoTypescript /></p>
                                <p><IoLogoNodejs /></p>
                                <p><FaReact /></p>
                                <p><MdStorage /></p>
                                <p><SiPostgresql /></p>
                                <p><SiExpress /></p>
                                <p><FaBootstrap /></p>
                                <p><GrMysql /></p>
                                <p><PiFileHtmlLight /></p>
                                <p><PiFileCssLight /></p>
                                <p><FaFigma /></p>
                                <p><DiIllustrator /></p>
                            </div>
                    </div> 
        </div>
    )
}

export default AboutMe;