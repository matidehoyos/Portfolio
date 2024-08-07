import style from './InfoProject.module.css';
import { Link, useParams } from 'react-router-dom';
import projects from '../projects/DataProjects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const BASE_URL = '/';

function InfoProject() {
    const { id } = useParams();
    const project = projects.find(
      (element) => Number(element.id) === Number(id)
    );


    return (
        <div className={style.container}>
            <div className={style.subcontainer}>
                <p className={style.date}>{project.date}</p>
                <p className={style.name}>{project.name}</p>
                <p className={style.rol}>{project.rol}</p>
                <a href={project.web} target="_blank"  className={style.imgLink}><img src={`${BASE_URL}${project.imgP}`} className={style.imgPc} alt={project.name} /></a>
                <p className={style.detail}>{project.detail}</p>
                <p className={style.tecno}>{project.technologies}</p>
                <div className={style.butons}>
                    <a href={project.web}  target="_blank" rel="noopener noreferrer" className={style.butonWeb}>
                        <FaExternalLinkAlt /> Visit website
                    </a>         
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className={style.butonWeb}>
                        <FaGithub /> Visit repository
                    </a>  
                </div>
                <div className={style.menu}  >
                                <nav>
                                    <ul>
                                        <li><Link to="/projects">Projects</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                    </ul>
                                </nav>
                </div>
            </div>
        </div>
    );
}

export default InfoProject;




