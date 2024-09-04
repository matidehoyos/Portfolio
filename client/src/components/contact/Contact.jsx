import style from './Contact.module.css'
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    useEffect(() => {
        AOS.init(); 
      }, []);



    return(
        <div className={style.container} id="contact">
            <div className={style.box}>
                <div className={style.caja}>
                    <div className={style.imgAbout}>
                                <img src="./about.png" alt="imagen mia" />
                    </div>
                    <p>
                        Please send me an email to schedule a meeting.<br/>I am currently available.<br/>Open to hearing your proposal.
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