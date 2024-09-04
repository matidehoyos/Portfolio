import { Link } from 'react-router-dom';
import style from './Projects.module.css';
import projects from './DataProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={style.container}>
            <p className={style.titulo} data-aos="fade-right" data-aos-duration="800" id='projects'>
                Projects
            </p>
            <div className={style.projectContainer} data-aos="fade-up" data-aos-duration="800">
                {projects.map((project, index) => (
                    <div className={style.box} key={index}>
                        <div className={style.caja}>
                            <p className={style.date}>{project.date}</p>
                            <p className={style.number}>PROJECT {project.id}</p>
                            <p className={style.titu}>{project.titulo}</p>
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
                        <div className={style.imgPc}>
                            <a href={project.web} target="_blank" rel="noopener noreferrer">
                                <img  src={project.img} alt={project.name} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
