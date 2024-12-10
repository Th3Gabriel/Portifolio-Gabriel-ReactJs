import Label from '../Label/Label'
import './Skills.css'
import Git from '../../assets/DevIcons/Devicon-Github.svg'
import JavaScript from '../../assets/DevIcons/Devicon-Javascript.svg'
import sql from '../../assets/DevIcons/Devicon-mysql.svg'
import React from '../../assets/DevIcons/Devicon-ReactJs.svg'
import TypeScript from '../../assets/DevIcons/Devicon-Typescript.svg'
import css from '../../assets/DevIcons/Devicon-css.svg'
import Docker from '../../assets/DevIcons/Devicon-docker.svg'

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-label">
        <Label>Skills</Label>
      </div>
      <div className="skills-description">
        <p>
          As habilidades, ferramentas e tecnologias nas quais sou realmente bom
        </p>
      </div>
      <div className="skills-devicons">
        <div className="Icons">
          <img src={css} alt="DevIcon CSS" />
          <p>CSS</p>
        </div>
        <div className="Icons">
          <img src={JavaScript} alt="DevIcon JavaScript" />
          <p>JAVASCRIPT</p>
        </div>
        <div className="Icons">
          <img src={React} alt="DevIcon ReactJs" />
          <p>REACTJS</p>
        </div>
        <div className="Icons">
          <img src={TypeScript} alt="DevIcon TypeScript" />
          <p>TYPESCRIPT</p>
        </div>
        <div className="Icons">
          <img src={sql} alt="DevIcon Mysql" />
          <p>MYSQL</p>
        </div>
        <div className="Icons">
          <img src={Git} alt="DevIcon Git" />
          <p>GIT</p>
        </div>
        <div className="Icons">
          <img src={Docker} alt="DevIcon Docker" />
          <p>DOCKER</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
