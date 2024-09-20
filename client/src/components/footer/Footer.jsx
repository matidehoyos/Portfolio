import { useContext } from 'react';
import style from './Footer.module.css'
import { ThemeContext } from '../../contexts/ThemeContext';


const Footer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return(
        <div className={style.container} style={{background: theme === 'light' ? '#ddd' : '#000'}}>
            <p style={{color: theme === 'light' ? '#000' : '#ccc'}}>Todos los derechos reservados. Creado por Matias De Hoyos</p>
        </div>
    )
}

export default Footer;