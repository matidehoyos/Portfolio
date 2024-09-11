import style from './Projects.module.css';
import projects from './DataProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';

const Projects = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.container}>
            <p className={style.titulo} data-aos="fade-right" data-aos-duration="800" id='projects'>
                PROJECTS
            </p>
            <div className={style.projectContainer}>
                {projects.map((project, index) => (
                    <div className={style.boxPc} key={index} data-aos="fade-up" data-aos-duration="800" style={{background: theme === 'light' ? '#eee' : 'rgba(59, 0, 107, 0.21)', border: theme === 'light' ? '1px solid #333' : '1px solid #282828'}}>
                            <div className={style.info}>
                                <p className={style.number} style={{color: theme === 'light' ? '#111' : '#eee', fontWeight: theme === 'light' ? '500' : '400'}}>PROJECT {project.id}</p>
                                <p className={style.date} style={{color: theme === 'light' ? '#111' : '#eee', fontWeight: theme === 'light' ? '500' : '400'}}>{project.date}</p>
                            </div>
                            <div className={style.imgPc}>
                                <a href={project.web} target="_blank" rel="noopener noreferrer">
                                    <img  src={project.img} alt={project.name} />
                                </a>
                            </div>
                            <p className={style.titu} style={{color: theme === 'light' ? '#000' : '#fff', fontWeight: theme === 'light' ? '700' : '600'}}>{project.titulo}</p>
                            <p className={style.detalle} style={{color: theme === 'light' ? '#333' : '#868686', fontWeight: theme === 'light' ? '500' : '400'}}>{project.detail}</p>
                            <p className={style.tecno} style={{color: theme === 'light' ? 'rgb(42,0 77)' : 'rgb(140, 0, 255)', fontWeight: theme === 'light' ? '500' : '400'}}>{project.technologies}</p>
                            <div className={style.butons}>
                                <a href={project.web}  target="_blank" rel="noopener noreferrer" className={style.butonWeb} style={{background: theme === 'light' ? '#111' : '#222', color: theme === 'light' ? '#fff' : 'rgb(140, 0, 255)'}}>
                                    <FaExternalLinkAlt />Website
                                </a>         
                                <a href={project.repository} target="_blank" rel="noopener noreferrer" className={style.butonWeb} style={{background: theme === 'light' ? '#111' : '#222', color: theme === 'light' ? '#fff' : 'rgb(140, 0, 255)'}}>
                                    <FaGithub />Repository
                                </a>  
                            </div>
                    </div>
                ))}
                {projects.map((project, index) => (
                    <div className={style.boxMov} key={index} data-aos="fade-up" data-aos-duration="800">
                        <div className={style.caja}>
                            <div className={style.data}>
                                <p className={style.number}>PROJECT {project.id}</p>
                                <p className={style.date}>{project.date}</p>
                            </div>
                            <p className={style.titu}>{project.titulo}</p>
                            <div className={style.imgPc}>
                                <a href={project.web} target="_blank" rel="noopener noreferrer">
                                    <img  src={project.img} alt={project.name} />
                                </a>
                            </div>
                            <p className={style.detalle}>{project.detail}</p>
                            <p className={style.tecno}>{project.technologies}</p>
                            <div className={style.butons}>
                                <a href={project.web}  target="_blank" rel="noopener noreferrer" className={style.butonWeb}>
                                    <FaExternalLinkAlt />Website
                                </a>         
                                <a href={project.repository} target="_blank" rel="noopener noreferrer" className={style.butonWeb}>
                                    <FaGithub />Repository
                                </a>  
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
