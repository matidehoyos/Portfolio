import style from './LastProject.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const LastProject = () => {
    const { theme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();

    const isLightMobile = theme === 'light' && isMobile;


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.container} style={{background: theme === 'light' ? "#eee" : ''}}> 
            <p className={style.titulo} data-aos="fade-left" data-aos-duration="600" style={{color: theme === 'dark' ? '#aaa' : '#111', fontWeight: theme === 'dark' ? '400' : '600', borderBottom: theme === 'dark' ? '' : '2px solid #111' }}>
                {t('lastProject.title')}
            </p>
            <div className={style.projectContainer}>
                <h3 className={style.nombre}>{t("lastProject.project")} <span>- Nov 2024</span></h3>
                <div className={style.first}>
                    <div className={style.videoContainer}>
                        <video className={style.video} autoPlay muted playsInline controls loop src="./medVid.mp4" alt="" />
                    </div>
                    <div className={style.txt}>
                        <p className={style.desc}>{t("lastProject.desc")}</p>
                        <p className={style.tecTit}>{t("lastProject.tecTit")}</p>
                        <p className={style.tec}>Backend: <span>NodeJs, Express, PostgreSql, Sequelize, NodeMailer</span></p>
                        <p className={style.tec}>Frontend: <span>Next 14, TailwindCss</span></p>
                        <p className={style.tec}>{t("lastProject.auth")} <span>Auth0 2.0</span></p>
                        <p className={style.tec}>{t("lastProject.pay")} <span>Check out pro Mercado Pago</span></p>
                        <p className={style.tec}>{t("lastProject.othersTit")} <span>{t("lastProject.others")}</span></p>
                        <div className={style.butons}>
                            <a href="https://medibooks.vercel.app"  target="_blank" rel="noopener noreferrer" className={`${style.butonWeb} ${isLightMobile ? style.butonWebLight : style.butonWeb}`} style={{background: theme === 'light' ? '#6010f2' : '#111', color: theme === 'light' ? '#fff' : '#fff', border: theme === 'light' ? '1px solid #000' : ' 1px solid #ffffff60'}}>
                                <FaExternalLinkAlt />{t('lastProject.website')}
                            </a>         
                            <a href="https://github.com/matidehoyos/medibooks-client" target="_blank" rel="noopener noreferrer" className={`${style.butonWeb} ${isLightMobile ? style.butonRepLight : style.butonWeb}`} style={{background: theme === 'light' ? '#fff' : '#111', color: theme === 'light' ? '#111' : '#ccc',border: theme === 'light' ? '1px solid #00000030' : '1px solid #ffffff30'}}>
                                <FaGithub />{t('lastProject.repository')}
                            </a>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LastProject;