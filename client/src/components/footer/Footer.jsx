import style from './Footer.module.css'
import { FaEnvelope, FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';


const Footer = () => {
   

    return(
        <div className={style.container}>
            <p>Todos los derechos reservados. Creado por Matias De Hoyos</p>
        </div>
    )
}

export default Footer;