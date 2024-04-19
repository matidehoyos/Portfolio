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
                                        <p className={style.desc}>Aplicación web ecommerce. Con varias vistas, incluyendo tienda online, y panel autoadministrable.</p>
                                        <p className={style.tecno}>NodeJs, Express, PostgreSql, Sequelize. <br/>ReactJs, Redux, Css3.<br/>Mercado Pago. Auth0.</p>
                                    </a>
                                    </div>
                                    <div className={style.project}>
                                    <a href="https://wedevelop.vercel.app" target='_blank'>
                                        <img src="wedev.png" alt="wedeveloper" />
                                        <h4>WeDevelop</h4>
                                        <p className={style.desc}>Aplicación web autocotizadora. Con varias vistas, incluyendo un cuestionario a traves del cual se autocotiza el producto. Con panel autoadministrable.</p>
                                        <p className={style.tecno}>NodeJs, Express, MongoDB, Mongoose. <br/>ReactJs, Redux, Css3.<br/>Mercado Pago. Auth0.</p>
                                    </a>
                                    </div>
                                    <div className={style.project}>
                                    <a href="https://matiasdehoyos.vercel.app" target='_blank'>
                                        <img src="portfolio.png" alt="portfolio" />
                                        <h4>Portfolio</h4>
                                        <p className={style.desc}>One page que muestra información relevante, preoyectos y contacto de un profesional.</p>
                                        <p className={style.tecno}>ReactJs, Html5, Css3.</p>
                                    </a>
                                    </div>
                                </div>
                            </div>
        </div>
    )
}

export default Projects;