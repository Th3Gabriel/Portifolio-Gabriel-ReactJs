import './About.css'
import Label from '../Label/Label'
import Perfil from '../../assets/Photos/Photo-Gabriel.jpg'

function About() {
  return (
    <div className="container about-container">
      <div className="about-label" id="about">
        <Label>Sobre Mim</Label>
      </div>
      <div className="about-row">
        <div className="about-column about-image-container">
          <img src={Perfil} alt="" />
        </div>
        <div className="about-column about-text-column">
          <h1 className="about-text-title">
            Curioso sobre mim? Aqui está um pouco sobre mim
          </h1>
          <div className="about-text-description">
            <p>
              Olá, sou Gabriel Martins, desenvolvedor web apaixonado por criar
              experiências digitais que encantam. Com formação em Ciência da
              Computação e expertise em React.js e TypeScript, transformo ideias
              em soluções práticas e impactantes.
            </p>
            <br />
            <p>
              Desde 2023, venho desenvolvendo projetos desafiadores, aprimorando
              habilidades em interfaces amigáveis e códigos eficientes. Meu
              objetivo é tornar o digital mais humano, focando em psicologia do
              usuário, experiências inclusivas e produtos completos.
            </p>
            <br />
            <p>Especialidades:</p>
            <ul>
              <li>Front-End: React.js, TypeScript, HTML, CSS</li>
              <li>Back-End: Node.js, APIs REST</li>
              <li>Interfaces intuitivas e acessíveis</li>
            </ul>
            <br />
            <p>Objetivos de Carreira:</p>
            <ul>
              <li>Engenharia de Software</li>
              <li>Desenvolvimento Mobile</li>
              <li>Especialização em Front-End</li>
            </ul>
            <br />
            <p>
              Atualmente, estou evoluindo em React e TypeScript e disponível
              para projetos freelancers. Vamos transformar sua ideia em
              realidade! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
