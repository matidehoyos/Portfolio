import { useState } from 'react';
import style from './NavBar.module.css'
import { FaFile } from "react-icons/fa";
import { FiMenu } from 'react-icons/fi';


const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleShowMenu = () => {
        setIsVisible(!isVisible);
      }
    
      const ocultarMenu = () => {
        const menu = document.querySelector(`.${style.menu}`);
        menu.style.left = "-800px";
      }

    return(
        <div className={style.container}>
            <a href="#"><img src='img.png'/></a>
            <div className={style.menu} onClick={ocultarMenu} style={isVisible ? { left: '0px' } : { left: '-800px' }} >
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
            <div className={style.menuResp}>
              <button className={style.menuButton} onClick={handleShowMenu}><FiMenu /></button>
            </div>
        </div>
    )
}

export default NavBar;