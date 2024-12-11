import './Header.css'
import GM from '../../assets/Icons/Icom-Gm-White.svg'
import Menu from '../../assets/Icons/Icon-Menu.svg'
import Button from '../Button/Button'
import { useState } from 'react'

function Header() {
  const Download = () => {
    const url =
      'https://drive.google.com/file/d/1N1v_n4UOaRkM0BZ_uBj4Y1tcRsHhvNLi/view?usp=sharing'
    window.open(url, '_blank')
  }

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="header">
        <img src={GM} alt="LOGO GM" />

        <div className="mobile-menu">
          <Button buttonStyle="secondary" onClick={toggleMenu}>
            <img src={Menu} alt="Menu Icon" />
          </Button>
        </div>

        <nav className={`${isOpen ? 'open' : ''}`}>
          <div className="mobile-container">
            <img src={GM} alt="LOGO GM" />

            <Button
              buttonStyle="unstyled"
              className="close-btn"
              onClick={toggleMenu}
            >
              X
            </Button>
          </div>
          <ul>
            <li>
              <a href="#about">SOBRE</a>
            </li>
            <li>
              <a href="#projects">PROJETOS</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#contact">CONTATO</a>
            </li>
          </ul>
          <Button buttonStyle="black" onClick={Download}>
            DOWNLOAD CV
          </Button>
        </nav>
      </header>
    </>
  )
}

export default Header
