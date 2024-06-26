import style from './AboutMe.module.css'


const AboutMe = () => {
   

    return(
        <div className={style.container}>
             <div className={style.pContainer} id='about'>
                                <div className={style.primer}>
                                  <p className={style.first}>I am a software developer with experience <br/>creating innovative technological solutions.</p>
                                </div>
                            </div>
                            <div className={style.about}>
                                <div className={style.aboutBox}>
                                    <div className={style.parraf}>
                                          <p className={style.second}>Self-motivated, proactive and results orientated, with a solid technical background and always looking to push myself to present more creative and challenging projects. Consitantly growing and open to learning new techniques and technologies.</p>
                                    </div>
                                    <div className={style.skils}>
                                        <p className={style.front}><span className={style.titu}>Frontend:</span><br/><span className={style.tech}>Javascript</span> <span className={style.tech}>React.js</span> <span className={style.tech}>Redux</span> <span className={style.tech}>Bootstrap</span> <span className={style.tech}>Css3</span> <span className={style.tech}>Html5</span></p> 
                                        <p className={style.back}><span className={style.titu}>Backend:</span><br/><span className={style.backe}>Node.js</span> <span className={style.backe}>Express</span> <span className={style.backe}>PostgreSql</span> <span className={style.backe}>MongoDB</span> <span className={style.backe}>Sequelize</span> <span className={style.backe}>Mongoose</span></p> 
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
        </div>
    )
}

export default AboutMe;