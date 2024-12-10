import React from 'react'
import CardComponent from '../CardComponent/CardComponent'
import Port from '../../assets/Photos/Photo-PortifolioGabriel.jpeg'
import GM from '../../assets/Icons/Icom-Gm-White.svg'

import './Project.css'
import Label from '../Label/Label'

function ProjectList() {
  return (
    <div className="container project-container">
      <div className="label" id="projects">
        <Label>Projetos</Label>
      </div>
      <div className="legend" id="projects">
        <p>Alguns dos projetos que construí</p>
      </div>
      <div className="project-list">
        <div className="project-card">
          <img src={Port} alt="Project Thumbnail" className="project-photo" />
          <div className="project-info">
            <h3 className="project-name">Portifolio | Gabriel</h3>
            <p className="project-description">
              Este portfólio foi desenvolvido com o propósito de apresentar meu
              trabalho de forma profissional e prática, permitindo que eu mostre
              todo o meu conhecimento aplicado nas tecnologias que domino.
            </p>
            <div className="project-footer">
              <span className="skills">React, CSS, JavaScript</span>
              <a
                href="https://github.com/Th3Gabriel/Portifolio-Gabriel-ReactJs"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={GM} alt="Project Thumbnail" className="project-photo" />
          <div className="project-info">
            <h3 className="project-name">Projeto 1</h3>
            <p className="project-description">
              Este é um breve resumo do projeto 1.
            </p>
            <div className="project-footer">
              <span className="skills">React, CSS, JavaScript</span>
              <a
                href="https://github.com/seu-usuario/projeto1"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Adicione mais cards conforme necessário */}
      </div>
    </div>
  )
}

export default ProjectList
