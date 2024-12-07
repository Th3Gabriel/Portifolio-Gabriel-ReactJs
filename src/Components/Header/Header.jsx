import './Header.css'
import GM from '../../assets/Icons/Icom-Gm-White.svg'
import { Link } from 'react-router'
import Button from '../Button/Button'
import { useState } from 'react'

function Header() {
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
          <div className="mobile-menu mobile-container">
            <img src={GM} alt="LOGO GM" />

            <Button
              buttonStyle="unstyled"
              className=" close-btn"
              onClick={toggleMenu}
            >
              X
            </Button>
          </div>
          <ul>
            <div className="divisor mobile-menu"></div>
            <li>
              <Link to="/">SOBRE</Link>
            </li>
            <li>
              <Link to="/Projects">PROJETOS</Link>
            </li>
            <li>
              <Link to="/Contact">CONTATO</Link>
            </li>
            <div className="divisor"></div>
            <li>
              <Button buttonStyle="black">DOWNLOAD CV</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
