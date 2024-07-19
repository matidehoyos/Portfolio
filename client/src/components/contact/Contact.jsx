import style from './Contact.module.css'
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
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
            <div className={style.caja} data-aos="fade-up" data-aos-duration="800">
                <div className={style.imgAbout}>
                            <img src="./about.png" alt="imagen mia" />
                </div>
                <p>
                    Please send me an email to schedule a meeting. I am currently available. Open to hearing your proposal.
                </p>
            </div>
            <div className={style.redes} data-aos="fade-up" data-aos-duration="800" >
                    <nav>
                         <ul>
                              <li><a target="_blank" href='mailto:mati.dehoyosmdp@gmail.com'><FaEnvelope className={style.icon}/>Email</a></li>
                              <li><a href='https://www.linkedin.com/in/matias-de-hoyos-802bb4212/' target='_blank'><FaLinkedin className={style.icon}/>LinkedIn</a></li>
                              <li><a href='https://github.com/matidehoyos' target='_blank'><AiFillGithub className={style.icon}/>GitHub</a></li>
                              <li><a target="_blank" href='https://www.instagram.com/matiasdehoyos/'><AiFillInstagram className={style.icon}/>Instagram</a></li>
                        </ul>
                    </nav>
            </div>
            <div className={style.menu} data-aos="fade-up" data-aos-duration="800"  >
                                <nav>
                                    <ul>
                                        <li><Link to="/projects">Projects</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                    </ul>
                                </nav>
                </div>
        </div>
    )
}

export default Contact;