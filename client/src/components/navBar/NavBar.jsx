import style from './NavBar.module.css'
import { FaFile } from "react-icons/fa";


const NavBar = () => {
   

    return(
        <div className={style.container}>
            <a href="#"><img src='img.png'/></a>
            <div className={style.menu}>
                <nav>
                 <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className={style.cv}>
            <a href="https://drive.google.com/file/d/1t2_vNEdiFrSU70cCBypvux1nOaXq32wg/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><button className={style.cv}>Download cv <FaFile className={style.file}/></button></a>
            </div>
        </div>
    )
}

export default NavBar;