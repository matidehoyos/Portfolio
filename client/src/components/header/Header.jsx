import style from './Header.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


const Header = () => {
    const { theme } = useContext(ThemeContext);


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.container} id='header'>
            <div className={style.imgPre} data-aos="fade-up" data-aos-duration="800">
                <img src="nav.png" alt="foto mia" style={{filter: theme === 'light' ? 'drop-shadow(0px -10px 40px #fff) grayscale(0%)' : 'drop-shadow(0px 0px 18px #000) grayscale(85%)', opacity: theme === 'light' ? '.85' : '.6'}}/>
            </div>
            <div className={style.texto} data-aos="fade-up" data-aos-duration="800">
                <h1><span className={style.rol}>Full Stack - Frontend</span><br/><span className={style.dev} style={{color: theme === 'light' ? '#222' : 'rgb(200,200,200)'}}>Developer</span></h1>
                <p className={style.des} style={{color: theme === 'light' ? '#333' : 'rgb(180,180,180)', fontWeight: theme === 'light' ? '600' : '400'}}>Web developer with a passion for creating visually stunning and user-friendly websites.</p>
            </div>
        </div>
    )
}

export default Header;