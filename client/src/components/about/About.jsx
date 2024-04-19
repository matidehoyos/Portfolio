import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedin, FaArrowDown, FaFile  } from 'react-icons/fa';
import NavBar from '../navBar/NavBar';
import style from './About.module.css'
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Header from '../header/Header';


const About = () => {
   

    return(
        <div className={style.container}>
                <div className={style.grancontainer}>
                    <NavBar />
                    <div className={style.subcontainer}>
                        <Header />
                            <div className={style.pContainer} id='about'>
                                <div className={style.primer}>
                                  <p className={style.first}>Soy desarrollador de software con experiencia <br/> en la creación de soluciones tecnológicas innovadoras.</p>
                                </div>
                            </div>
                            <div className={style.about}>
                                <div className={style.aboutBox}>
                                    <div className={style.parraf}>
                                          <p className={style.second}>Autodidacta, proactivo y orientado a resultados, con una solida formación técnica, siempre buscando superar expectativas y encontrar soluciones creativas a los desafíos que se presentan. En constante crecimiento, abierto a aprender nuevas técnicas y tecnológias.</p>
                                    </div>
                                    <div className={style.skils}>
                                        <p className={style.front}><span className={style.titu}>Frontend:</span><br/><span className={style.tech}>Javascript</span><span className={style.tech}>React.js</span><span className={style.tech}>Redux</span><span className={style.tech}>Bootstrap</span><span className={style.tech}>Css3</span><span className={style.tech}>Html5</span></p> 
                                        <p className={style.back}><span className={style.titu}>Backend:</span><br/><span className={style.backe}>Node.js</span><span className={style.backe}>Express</span><span className={style.backe}>PostgreSql</span><span className={style.backe}>MongoDB</span><span className={style.backe}>Sequelize</span><span className={style.backe}>Mongoose</span></p> 
                                    </div>
                                </div>
                                <div className={style.skills}>
                                            <div className={style.tecno}>
                                                <p><img src="js.png" alt="javascript" />JavaScript</p>
                                                <p><img src="ty.png" alt="typescript" />TypeScript</p>
                                                <p><img src="nd.png" alt="node" />NodeJs</p>
                                                <p><img src="react.png" alt="react" />ReactJs</p>
                                                <p><img src="redux.png" alt="redux" />Redux</p>
                                                <p><img src="postgre.png" alt="postgre" />Postgre</p>
                                                <p><img src="mongo.png" alt='mongo' />Mongo</p>
                                                <p><img src="ex.png" alt="express" />Express</p>
                                                <p><img src="boots.png" alt="bootstrap" />Bootstrap</p>
                                                <p><img src="5.png" alt="html" />HTML5</p>
                                                <p><img src="3.png" alt="" />CSS3</p>
                                            </div>
                                    </div> 
                            </div>
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
                            <Contact />
                            <Footer />
                        </div>
                </div>
        </div>
    )
}

export default About;