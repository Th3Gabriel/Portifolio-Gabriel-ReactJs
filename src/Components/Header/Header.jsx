import './Header.css'
import GM from '../../assets/Icons/Icom-Gm-White.svg'
import { Link } from 'react-router'
import Button from '../Button/Button'
import { useState } from 'react'

function Header() {
  const Download = () => {
    const url = 'https://www.google.com.br'
    window.open(url, '_blank')
  }

  const [isOpen, SetisOpen] = useState(false)
  const toggleMenu = () => {
    SetisOpen(!isOpen)
  }

  return (
    <>
      <header className="header">
        <img src={GM} alt="LOGO GM" />

        <div className="mobile-menu">
          <Button buttonStyle="secondary" onClick={toggleMenu}>
            ☰
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
              <Link to="/#about">SOBRE</Link>
            </li>
            <li>
              <Link to="/About">PROJETOS</Link>
            </li>
            <li>
              <Link to="/Contact">CONTATO</Link>
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
