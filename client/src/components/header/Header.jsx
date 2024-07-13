import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import style from './Header.module.css'
import { FaArrowDown, FaFile, FaLinkedin } from 'react-icons/fa';


const Header = () => {
   

    return(
        <div className={style.container}>
                        <div className={style.imgPre}>
                                <img src="yo.png" alt="foto mia" />
                        </div>

                        <div className={style.txtPre}>
                                <h4>I'm Matias De Hoyos</h4>
                                <h1><span className={style.im}></span>Full Stack - <br/>FrontEnd Developer</h1>
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