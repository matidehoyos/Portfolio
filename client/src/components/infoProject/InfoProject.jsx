import style from './InfoProject.module.css';
import { useParams } from 'react-router-dom';
import projects from '../projects/DataProjects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const BASE_URL = '/';

function InfoProject() {
    const { id } = useParams();
    const project = projects.find(
      (element) => Number(element.id) === Number(id)
    );

    console.log(project);

    return (
        <div className={style.container}>
            <div className={style.subcontainer}>
                <p className={style.date}>{project.date}</p>
                <p className={style.name}>{project.name}</p>
                <p className={style.rol}>{project.rol}</p>
                <p className={style.detail}>{project.detail}</p>
                <p className={style.tecno}>{project.technologies}</p>
                <div className={style.butons}>
                    <a href={project.web} target="_blank" rel="noopener noreferrer" className={style.butonWeb}>
                        <FaExternalLinkAlt /> Visit website
                    </a>         
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className={style.butonWeb}>
                        <FaGithub /> Visit repository
                    </a>  
                </div>
                <img src={`${BASE_URL}${project.img}`} className={style.imgPc} alt={project.name} />
                <img src={`${BASE_URL}${project.imgMov}`} className={style.imgMov} alt={project.name} />
            </div>
        </div>
    );
}

export default InfoProject;




