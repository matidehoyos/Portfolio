import style from './Contact.module.css'
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Contact = () => {
    const { theme } = useContext(ThemeContext);


    useEffect(() => {
        AOS.init(); 
      }, []);

    const imagen = theme === 'light' ? './devLight.png' : './dev.png';

    return(
        <div className={style.container} id="contact">
            <p className={style.contactMe} data-aos="fade-right" data-aos-duration="800" id='about' style={{color: theme === 'dark' ? '#aaa' : '#111', fontWeight: theme === 'dark' ? '400' : '600', borderBottom: theme === 'dark' ? '1px solid #aaa' : '2px solid #111' }}>CONTACT ME</p>
            <div className={style.box} data-aos="fade-up" data-aos-duration="800" style={{background: theme === 'light' ? '#6010f2' : '#00000025', border: theme === 'light' ? '1px solid #00000030' : '1px solid #ffffff10'}}>
                <div className={style.imgAbout}>
                        <img src={imagen} alt="imagen mia" style={{opacity: theme === 'dark' ? '.8' : '.9'}}/>
                </div>
                <div className={style.caja}>
                    <p style={{color: theme === 'light' ? '#eee' : '#aeaeae', fontWeight: theme === 'light' ? '300' : '300'}}>
                        Please send me an email to schedule a meeting. I am currently available. Open to hearing your proposal.
                    </p>
                    <div className={style.redes}>
                            <nav>
                                <ul>
                                    <li><a target="_blank" href='mailto:mati.dehoyosmdp@gmail.com' style={{background: theme === 'light' ? '#fff' : '#6010f270', border: theme === 'light' ? '1px solid #ccc' : '', color: theme === 'light' ? '#111' : '', fontWeight: theme === 'light' ? '400' : ''}}><FaEnvelope className={style.icon}/>mati.dehoyosmdp@gmail.com</a></li>
                                    <li><a href='https://www.linkedin.com/in/matias-de-hoyos-802bb4212/' target='_blank' style={{background: theme === 'light' ? '#ffffff80' : '', border: theme === 'light' ? '1px solid #fff' : '', color: theme === 'light' ? '#000' : ''}}><FaLinkedin className={style.icon}/>LinkedIn</a></li>
                                    <li><a href='https://github.com/matidehoyos' target='_blank' style={{background: theme === 'light' ? '#ffffff80' : '', border: theme === 'light' ? '1px solid #fff' : '', color: theme === 'light' ? '#000' : ''}}><AiFillGithub className={style.icon}/>GitHub</a></li>
                                </ul>
                            </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;