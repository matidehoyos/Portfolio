import style from './Contact.module.css'
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Contact = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    useEffect(() => {
        AOS.init(); 
      }, []);



    return(
        <div className={style.container} id="contact">
            <p className={style.contactMe} data-aos="fade-right" data-aos-duration="800" id='about'>CONTACT ME</p>
            <div className={style.box} data-aos="fade-up" data-aos-duration="800" style={{background: theme === 'light' ? '#eee' : '', border: theme === 'light' ? '1px solid #333' : ''}}>
                <div className={style.caja}>
                    <div className={style.imgAbout}>
                                <img src="./about.png" alt="imagen mia" style={{background: theme === 'light' ? 'rgb(42,0,77)' : 'rgb(25, 3, 45)', border: theme === 'light' ? '1px solid #fff' : '1px solid #ffffff30'}}/>
                    </div>
                    <p style={{color: theme === 'light' ? '#111' : '#aeaeae', fontWeight: theme === 'light' ? '500' : '400'}}>
                        Please send me an email to schedule a meeting. I am currently available. Open to hearing your proposal.
                    </p>
                </div>
                <div className={style.redes}>
                        <nav>
                            <ul>
                                <li><a target="_blank" href='mailto:mati.dehoyosmdp@gmail.com'><FaEnvelope className={style.icon}/>mati.dehoyosmdp@gmail.com</a></li>
                                <li><a href='https://www.linkedin.com/in/matias-de-hoyos-802bb4212/' target='_blank'><FaLinkedin className={style.icon}/>LinkedIn</a></li>
                                <li><a href='https://github.com/matidehoyos' target='_blank'><AiFillGithub className={style.icon}/>GitHub</a></li>
                                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=542236351363"><FaWhatsapp className={style.icon}/>WhatsApp</a></li>
                            </ul>
                        </nav>
                </div>
            </div>
        </div>
    )
}

export default Contact;