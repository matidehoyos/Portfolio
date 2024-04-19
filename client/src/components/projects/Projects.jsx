import style from './Projects.module.css'


const Projects = () => {
   

    return(
        <div className={style.container}>
             <div className={style.projects} id='projects'>
                                <h3>Projects</h3>
                                <div className={style.projectContainer}>
                                    <div className={style.project}>
                                    <a href="https://electroauto.vercel.app" target='_blank'>
                                        <img src="electroauto.png" alt="electroauto" />
                                        <h4>Electroauto</h4>
                                        <p>Responsive aplicación web ecommerce. Con varias vistas, incluyendo tienda online, y panel autoadministrable.</p>
                                    </a>
                                    </div>
                                    <div className={style.project}>
                                    <a href="https://wedevelop.vercel.app" target='_blank'>
                                        <img src="wedev.png" alt="wedeveloper" />
                                        <h4>WeDevelop</h4>
                                        <p>Aplicación web autocotizadora. Con varias vistas, incluyendo un cuestionario a traves del cual se autocotiza el producto. Con panel autoadministrable.</p>
                                    </a>
                                    </div>
                                    <div className={style.project}>
                                    <a href="https://wedevelop.vercel.app" target='_blank'>
                                        <img src="wedev.png" alt="wedeveloper" />
                                        <h4>Portfolio</h4>
                                        <p>Página web que muestra información relevante, preoyectos y contacto de un profesional.</p>
                                    </a>
                                    </div>
                                </div>
                            </div>
        </div>
    )
}

export default Projects;