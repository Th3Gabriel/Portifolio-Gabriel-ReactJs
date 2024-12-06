import GM from '../../assets/Icons/gm-white.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="container">
      <img src={GM} alt="" />

      <nav>
        <ul>
          <li>
            {' '}
            <Link></Link>{' '}
          </li>
          <li>
            {' '}
            <Link></Link>{' '}
          </li>
          <li>
            {' '}
            <Link></Link>{' '}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
