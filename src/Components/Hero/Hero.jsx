import bye from '../../assets/Icons/ola.png'
import GitHub from '../../assets/Icons/Icon-GitHub.svg'
import Linkedin from '../../assets/Icons/Icon-Linkedin.svg'
import Location from '../../assets/Icons/Icon-Location.svg'
import Gabriel from '../../assets/Icons/Icon-Gabriel.png'

import './Hero.css'

function Hero() {
  return (
    <div className="container">
      <div className="hero-row">
        {/* Coluna do texto */}
        <div className="hero-column hero-text-column">
          <h1 className="hero-text">
            OLÁ, ME CHAMO GABRIEL{' '}
            <img
              src={bye}
              alt="BYE BYE GABRIEL"
              style={{ width: 80, marginLeft: 8 }}
            />
          </h1>
          <p className="hero-description">
            Sou Desenvolvedor Front-End especializado em React.js, TypeScript,
            com foco em criar aplicações web dinâmicas, de alto desempenho e
            escaláveis. Minha expertise está em desenvolver interfaces centradas
            no usuário, visualmente atraentes e responsivas, proporcionando
            experiências fluidas em diferentes dispositivos. Com mais de um ano
            de experiência em desenvolvimento front-end, tenho um olhar atento
            aos detalhes, paixão por código limpo e sustentável, e um
            compromisso em entregar soluções que aliam usabilidade à tecnologia
            de ponta.
          </p>
          <div
            className="hero-location"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={Location} alt="Localização" style={{ marginRight: 8 }} />
            Goiânia, GO - Brasil
          </div>

          <div
            className="hero-social-midia"
            style={{
              display: 'flex',
              gap: '5px',
            }}
          >
            <a href="https://github.com/Th3Gabriel/Th3Gabriel">
              <img src={GitHub} alt="Ícone do GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-martins-paz-317561142">
              <img src={Linkedin} alt="Ícone do LinkedIn" />
            </a>
          </div>
        </div>

        {/* Coluna da foto */}
        <div className="hero-column hero-image-container">
          <img src={Gabriel} alt="Foto de Gabriel" />
        </div>
      </div>
    </div>
  )
}

export default Hero
