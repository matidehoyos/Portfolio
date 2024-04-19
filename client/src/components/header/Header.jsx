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
                        <h1><span className={style.im}></span>Full Stack Developer</h1>
                        <p className={style.des}>Junior developer with a passion for creating visually stunning and <br/>user-friendly websites.</p>
                        
                        <div className={style.botones}>
                        <button className={style.hire}>Hire me</button>
                        <a href="https://drive.google.com/file/d/1t2_vNEdiFrSU70cCBypvux1nOaXq32wg/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><button className={style.cv}>Download cv <FaFile className={style.file}/></button></a>
                        </div>
                    
                        <div className={style.redes}>
                            <nav>
                                <ul>
                                    <li><a target="_blank" href='https://www.instagram.com/matiasdehoyos/'><AiFillInstagram /></a></li>
                                    <li><a href='https://github.com/matidehoyos' target='_blank'><AiFillGithub /></a></li>
                                    <li><a href='https://www.linkedin.com/in/matias-de-hoyos-802bb4212/' target='_blank'><FaLinkedin /></a></li>
                                </ul>
                            </nav>
                        </div>

                        <h6 className={style.scroll}>Scroll down <FaArrowDown className={style.arrow}/> </h6>
                </div>
        </div>
    )
}

export default Header;