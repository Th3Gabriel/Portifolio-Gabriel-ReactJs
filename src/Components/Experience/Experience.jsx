import CardComponent from '../CardComponent/CardComponent'
import Sicoob from '../../assets/Icons/Icon-SicoobUnicentroBr.png'
import PC from '../../assets/Icons/Icon-PoliciaCivil.png'
import Savoy from '../../assets/Icons/Icon-Savoy.png'
import './Experience.css'
import Label from '../Label/Label'

const experiences = [
  {
    id: 1,
    logo: Sicoob,
    alt: 'Sicoob Logo',
    title: 'ANL DE INTELIGÊNCIA DE CREDITO',
    responsibilities: [
      'Criação de ferramentas internas e scripts para automação e eficiência.',
      'Colaboração com equipes para melhorias operacionais.',
      'Auditorias para garantir a precisão de dados financeiros.',
      'Análise de dados e geração de relatórios estratégicos.',
    ],
    period: 'Ago 2023 - Nov 2024',
  },
  {
    id: 3,
    logo: Savoy,
    alt: 'Savoy Industria de Comesticos',
    title: 'Estágio Excelencia Operacional',
    responsibilities: [
      'Mapiava os Processos',
      'Criava Soluções e Dashboards para Processos',
      'Implementava ideias para o melhoria do Processo',
    ],
    period: 'Jan 2023 - Ago 2023',
  },
  {
    id: 4,
    logo: PC,
    alt: 'Polícia Civil Logo',
    title: 'Estágio Desenvolvimento Full-Stack',
    responsibilities: [
      'Criação de ferramentas internas',
      'Suporte e correção de bugs no sistema',
      'Criação de telas',
      'JavaScript, Bootstrap, Node.js e Linux',
    ],
    period: 'Jan 2022 - Jan 2023',
  },
]

function Experience() {
  return (
    <div className="exp-Container">
      <div className="label">
        <Label>Experiências</Label>
      </div>
      <div className="legend">
        <p>Aqui está um rápido resumo das minhas experiências mais recentes</p>
      </div>
      {experiences.map(({ id, logo, alt, title, responsibilities, period }) => (
        <CardComponent key={id} className="Card">
          <div className="exp-logo">
            <img src={logo} alt={alt} width={180} height={80} />
          </div>
          <div className="exp-func">
            <h4>{title}</h4>
            <br />
            <ul>
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="exp-periodo">
            <p>{period}</p>
          </div>
        </CardComponent>
      ))}
    </div>
  )
}

export default Experience
