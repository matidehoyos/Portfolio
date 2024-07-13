import { Link } from 'react-router-dom';
import style from './Projects.module.css'
import projects from './DataProjects';

const Projects = () => {
   

    return(
        <div className={style.container}>
                <div className={style.titulo}>
                    <h3>Projects</h3>
                </div>
                <div className={style.projectContainer}>
                    {
                    projects.map((project, index) => (
                            <div className={style.box}>
                                    <Link key={index} to={`/projects/${project.id}`}> 
                                            <img className={style.imgPc} src={project.img} />
                                            <h5>{project.name}</h5>
                                            <p className={style.rol}>{project.rol}</p>
                                            <p className={style.info}>More info</p>
                                    </Link> 
                            </div>
                    ))}
                </div>
        </div>
    )
}

export default Projects;