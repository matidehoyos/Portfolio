import NavBar from '../navBar/NavBar';
import AboutMe from '../aboutMe/AboutMe';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Projects from '../projects/Projects';
import style from './Home.module.css'
import '../../configI18n/i18n';



const Home = () => {

    return (
        <div className={style.container}>
            <NavBar />
            <Header />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;