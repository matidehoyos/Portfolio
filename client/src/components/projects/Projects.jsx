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
            <p className={style.titulo} data-aos="fade-right" data-aos-duration="800" id='projects' style={{color: theme === 'dark' ? '#aaa' : '#111', fontWeight: theme === 'dark' ? '400' : '600', borderBottom: theme === 'dark' ? '1px solid #aaa' : '2px solid #111' }}>
                PROJECTS
            </p>
            <div className={style.projectContainer}>
                {projects.map((project, index) => (
                    <div className={style.boxPc} key={index} data-aos="fade-up" data-aos-duration="800" style={{background: theme === 'light' ? '#00000005' : ''}}>
                            <div className={style.info}>
                                <p className={style.number} style={{color: theme === 'light' ? '#111' : '#eee', fontWeight: theme === 'light' ? '500' : '400'}}>PROJECT {project.id}</p>
                                <p className={style.date} style={{color: theme === 'light' ? '#111' : '#bbb', fontWeight: theme === 'light' ? '500' : '200'}}>{project.date}</p>
                            </div>
                            <div className={style.imgPc} style={{background: theme === 'light' ? '#eee' : ''}}>
                                    <img  src={project.img} alt={project.name} />
                            </div>
                            <p className={style.titu} style={{color: theme === 'light' ? '#000' : '#fff', fontWeight: theme === 'light' ? '600' : '500'}}>{project.titulo}</p>
                            <p className={style.detalle} style={{color: theme === 'light' ? '#444' : '#aaa', fontWeight: theme === 'light' ? '500' : '300'}}>{project.detail}</p>
                            <p className={style.tecno} style={{color: theme === 'light' ? '#6010f2' : '#555', fontWeight: theme === 'light' ? '500' : '300'}}>{project.technologies}</p>
                            <div className={style.butons}>
                                <a href={project.web}  target="_blank" rel="noopener noreferrer" className={style.butonWeb} style={{background: theme === 'light' ? '#6010f2' : '#050505', color: theme === 'light' ? '#fff' : '#fff', border: theme === 'light' ? '1px solid #000' : ' 1px solid #ffffff70'}}>
                                    <FaExternalLinkAlt />Website
                                </a>         
                                <a href={project.repository} target="_blank" rel="noopener noreferrer" className={style.butonWeb} style={{background: theme === 'light' ? '#fff' : '#111', color: theme === 'light' ? '#111' : '#ccc',border: theme === 'light' ? '1px solid #00000030' : '1px solid #ffffff30'}}>
                                    <FaGithub />Repository
                                </a>  
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
