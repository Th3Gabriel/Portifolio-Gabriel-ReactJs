import './About.css'
import Label from '../Label/Label'
import Perfil from '../../assets/Photos/Photo-Gabriel.jpg'

function About() {
  return (
    <div className="about-container">
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
              Olá, sou Gabriel Martins! Sou um desenvolvedor web apaixonado por
              criar experiências digitais que encantam os usuários. Com formação
              em Ciência da Computação, expertise em React.js e TypeScript, meu
              foco é unir criatividade e tecnologia para transformar ideias em
              soluções práticas e impactantes.
            </p>
            <br />
            <p>
              Minha jornada no desenvolvimento começou em 2023, e desde então,
              venho trabalhando em projetos que desafiam meus limites. Ao longo
              do caminho, tenho aprimorado minhas habilidades em criar
              interfaces amigáveis e escrever códigos limpos e eficientes.
            </p>
            <br />
            <p>
              Meu objetivo é simples: tornar o digital mais humano. Sou
              fascinado por entender a psicologia do usuário, projetar
              experiências inclusivas e desenvolver produtos completos — desde a
              concepção inicial até a entrega final.
            </p>
            <br />
            <p>Minhas especialidades:</p>
            <br />
            <ul>
              <li>
                Desenvolvimento Front-End: React.js, TypeScript, HTML, CSS
              </li>
              <li>Desenvolvimento Back-End: Node.js, APIs REST</li>
              <li>Criação de interfaces intuitivas e acessíveis</li>
            </ul>
            <br />
            <p>Objetivos de Carreira:</p>
            <br />
            <ul>
              <li>Tornar-me um Engenheiro de Software</li>
              <li>Expandir para Desenvolvimento Mobile</li>
              <li>
                Aperfeiçoar minhas habilidades em Desenvolvimento Front-End
              </li>
            </ul>
            <br />
            <p>
              Atualmente, estou evoluindo minhas habilidades em React e
              TypeScript para criar projetos ainda mais robustos e inovadores.
            </p>
            <br />
            <p>
              Disponível para trabalhos freelancers! Se você tem uma ideia
              incrível e precisa de ajuda para torná-la realidade, entre em
              contato. Será um prazer colaborar com você🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
