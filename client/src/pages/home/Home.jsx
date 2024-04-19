import style from './Home.module.css';
import NavBar from '../../components/navBar/NavBar';
import Header from '../../components/header/Header';
import AboutMe from '../../components/aboutMe/AboutMe';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';


const Home = () => {
   

    return(
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