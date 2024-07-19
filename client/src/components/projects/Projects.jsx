import { Link } from 'react-router-dom';
import style from './Projects.module.css'
import projects from './DataProjects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

    
const Projects = () => {
   useEffect(() => {
        AOS.init(); 
      }, []);

    return(
        <div className={style.container}>
                <div className={style.titulo} data-aos="fade-up" data-aos-duration="800" > 
                    <h3>Projects</h3>
                </div>
                <div className={style.projectContainer} data-aos="fade-up" data-aos-duration="800">
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
                <div className={style.menu}  >
                                <nav>
                                    <ul>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                    </ul>
                                </nav>
                          </div>
        </div>
    )
}

export default Projects;