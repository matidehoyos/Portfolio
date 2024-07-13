import { useState } from 'react';
import style from './NavBar.module.css'
import { MdDescription } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';


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
           
            <Link to="/" className={style.Link}>
                <img src='../../../public/img.png' />
            </Link>
           
            <div className={style.menu} onClick={ocultarMenu} style={isVisible ? { left: '0px' } : { left: '-800px' }} >
                <nav>
                 <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/projects">Projects</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </nav>
            </div>
            <div className={style.cv}>
            <a href="https://drive.google.com/file/d/1sYzgf98QuJlBUoD-sYAcf2UbSA2C5A3i/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className={style.cv}>Download CV <MdDescription className={style.file}/></button></a>
            </div>
            <div className={style.menuResp}>
              <button className={style.menuButton} onClick={handleShowMenu}><FiMenu /></button>
            </div>
        </div>
    )
}

export default NavBar;