import About from '../about/About';
import NavBar from '../navBar/NavBar';
import style from './Home.module.css'


const Home = () => {
   

    return(
        <div className={style.container}>
            <About />
        </div>
    )
}

export default Home;