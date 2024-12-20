import style from './Projects.module.css';
import projects from './DataProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import LastProject from '../lastProject/LastProject';
import ProjectBox from '../projectBox/PorjectBox';

const Projects = () => {
    const { theme } = useContext(ThemeContext);
    const { t, i18n } = useTranslation();

    const isLightMobile = theme === 'light' && isMobile;


    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.container} style={{background: theme === 'light' ? "#eee" : ''}}> 
            <p className={style.titulo} data-aos="fade-up" data-aos-duration="600" id='projects' style={{color: theme === 'dark' ? '#aaa' : '#222', borderBottom: theme === 'dark' ? '' : '1px solid #ff8e00' }}>
                {t('projects.title')}
            </p>
            <LastProject />
            <p className={style.titulo} data-aos="fade-up" data-aos-duration="600" id='projects' style={{color: theme === 'dark' ? '#aaa' : '#222', borderBottom: theme === 'dark' ? '' : '1px solid #ff8e00' }}>
                {t('projects.tit2')}
            </p>
            <div className={style.projectContainer}>
                {projects.map((project, index) => (
                    <ProjectBox project={project} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Projects;

