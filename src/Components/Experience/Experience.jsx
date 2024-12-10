import CardComponent from '../CardComponent/CardComponent'
import Sicoob from '../../assets/Icons/Icon-SicoobUnicentroBr.png'
import PC from '../../assets/Icons/Icon-PoliciaCivil.png'
import './Experience.css'
import Label from '../Label/Label'

function Experience() {
  return (
    <>
      <div className="exp-Container">
        <div className="skills-label">
          <Label>Experiencias</Label>
        </div>
        <div className="skills-description">
          <p>
            Aqui está um rápido resumo das minhas experiências mais recentes
          </p>
        </div>
        <CardComponent className="Card">
          <div className="exp-logo">
            <img src={Sicoob} alt="Sicoob Logo" width={180} height={80} />
          </div>
          <div className="exp-func">
            <h4>ANL DE INTELIGÊNCIA DE CREDITO</h4>
            <br />
            <ul>
              <li>
                Criação de ferramentas internas e scripts para automação e
                eficiência.
              </li>
              <li>Colaboração com equipes para melhorias operacionais.</li>
              <li>Auditorias para garantir a precisão de dados financeiros.</li>
              <li>Análise de dados e geração de relatórios estratégicos.</li>
            </ul>
          </div>
          <div className="exp-periodo">
            <p>Ago 2023 - Nov 2024</p>
          </div>
        </CardComponent>
        <CardComponent className="Card">
          <div className="exp-logo">
            <img src={PC} alt="Sicoob Logo" width={180} height={80} />
          </div>
          <div className="exp-func">
            <h4>Estagio Desenvolvimento Full-Stack</h4>
            <br />
            <ul>
              <li>Criação de ferramentas internas</li>
              <li>Suporte e Correcão de Bugs no sistema</li>
              <li>Criacão de Telas</li>
              <li>JavaScript, Bootstrap, Node.js e Linux</li>
            </ul>
          </div>
          <div className="exp-periodo">
            <p>Ago 2023 - Nov 2024</p>
          </div>
        </CardComponent>
      </div>
    </>
  )
}

export default Experience
