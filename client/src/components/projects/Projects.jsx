import style from './Projects.module.css'

const Projects = () => {
   

    return(
        <div className={style.container}>
             <div className={style.projects} id='projects'>
                                <h3>Projects</h3>
                                <div className={style.projectContainer}>
                                    <div className={style.project}>
                                    <a href="https://github.com/matidehoyos/Tienda-Electroauto" target='_blank'>
                                        <img src="electroauto.png" alt="electroauto" />
                                        <h4>Electroauto</h4>
                                        <p className={style.desc}>Aplicación web ecommerce. Con varias vistas, incluyendo tienda online, y panel autoadministrable.</p>
                                        <p className={style.tecno}>NodeJs, Express, PostgreSql, Sequelize. <br/>ReactJs, Redux, Css3.<br/>Mercado Pago. Auth0.</p>
                                    </a>
                                    </div>
                                    <div className={style.project}>
                                    <a href="https://github.com/matidehoyos/weatherapp" target='_blank'>
                                        <img src="desk.png" alt="clima app" />
                                        <h4>WeatherApp</h4>
                                        <p className={style.desc}>Aplicación web del clima.</p>
                                        <p className={style.tecno}>NodeJs, Express. <br/>ReactJs, Sass.<br/></p>
                                    </a>
                                    </div>
                                    <div className={style.project}>
                                    <a href="https://github.com/Freetzen/WeDevelop" target='_blank'>
                                        <img src="wedev.png" alt="wedeveloper" />
                                        <h4>WeDevelop</h4>
                                        <p className={style.desc}>Aplicación web autocotizadora. Con varias vistas, incluyendo un cuestionario a traves del cual se autocotiza el producto. Con panel autoadministrable.</p>
                                        <p className={style.tecno}>NodeJs, Express, MongoDB, Mongoose. <br/>ReactJs, Redux, Css3.<br/>Mercado Pago. Auth0.</p>
                                    </a>
                                    </div>
                                    <div className={style.project}>
                                    <a href="https://www.mododigital.tech" target='_blank'>
                                        <img src="md.png" alt="mododigital" />
                                        <h4>Modo digital</h4>
                                        <p className={style.desc}>Landing page. Institucional, reune toda la información relevante de la empresa, y muestra su servicio.</p>
                                        <p className={style.tecno}>Html, Css, Javascript</p>
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