import { useContext } from 'react';
import style from './Footer.module.css'
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { FaArrowAltCircleUp } from 'react-icons/fa';


const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();


    return(
        <div className={style.container} style={{background: theme === 'light' ? '#aaa' : ''}}>
            <p style={{color: theme === 'light' ? '#222' : ''}}>{t('footer.derechos')}</p>
        </div>
    )
}

export default Footer;