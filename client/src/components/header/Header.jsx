import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import style from './Header.module.css'
import { FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { MdDescription } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Header = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.container} id='header'>
            <div className={style.imgPre} data-aos="fade-up" data-aos-duration="800">
                <img src="nav.png" alt="foto mia" />
            </div>
            <div className={style.texto} data-aos="fade-up" data-aos-duration="800">
                <h1><span className={style.rol}>Full Stack - Frontend</span><br/><span className={style.dev}>Developer</span></h1>
                <p className={style.des}>Web developer with a passion for creating visually stunning and user-friendly websites.</p>
                <div className={style.redes}>
                    <nav>
                        <ul>
                            <li><a href='https://www.linkedin.com/in/matias-de-hoyos-802bb4212/' target='_blank'><FaLinkedin /></a></li>
                            <li><a href='https://github.com/matidehoyos' target='_blank'><AiFillGithub /></a></li>
                            <li><a target="_blank" href='https://www.instagram.com/matiasdehoyos/'><AiFillInstagram /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;