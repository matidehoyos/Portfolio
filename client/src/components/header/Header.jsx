import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import style from './Header.module.css'
import { FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.container} id='header'>
            <div className={style.imgPre} data-aos="fade-up" data-aos-duration="800">
                <img src="nav.png" alt="foto mia" style={{filter: theme === 'light' ? 'drop-shadow(0px -30px 18px #111) grayscale(40%)' : 'drop-shadow(0px 0px 18px #000) grayscale(85%)', opacity: theme === 'light' ? '.8' : '.6'}}/>
            </div>
            <div className={style.texto} data-aos="fade-up" data-aos-duration="800">
                <h1><span className={style.rol}>Full Stack - Frontend</span><br/><span className={style.dev} style={{color: theme === 'light' ? '#333' : 'rgb(200,200,200)'}}>Developer</span></h1>
                <p className={style.des} style={{color: theme === 'light' ? '#111' : 'rgb(180,180,180)', fontWeight: theme === 'light' ? '600' : '400'}}>Web developer with a passion for creating visually stunning and user-friendly websites.</p>
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