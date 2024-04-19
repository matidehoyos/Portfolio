import style from './Contact.module.css'
import { FaEnvelope, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';


const Contact = () => {
   

    return(
        <div className={style.container} id="contact">
            <h5>Hire Me <FaLongArrowAltRight className={style.arrow} /></h5>
            <div className={style.redes}>
                    <nav>
                         <ul>

                              <li><a target="_blank" href='mailto:mati.dehoyosmdp@gmail.com'><FaEnvelope className={style.icon}/>mati.dehoyosmdp@gmail.com</a></li>
                              <li><a href='https://www.linkedin.com/in/matias-de-hoyos-802bb4212/' target='_blank'><FaLinkedin className={style.icon}/>LinkedIn</a></li>
                              <li><a href='https://github.com/matidehoyos' target='_blank'><AiFillGithub className={style.icon}/>matidehoyos</a></li>
                              <li><a target="_blank" href='https://www.instagram.com/matiasdehoyos/'><AiFillInstagram className={style.icon}/>Instagram</a></li>
                        </ul>
                    </nav>
            </div>
        </div>
    )
}

export default Contact;