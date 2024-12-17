import React from 'react'
import Port from '../../assets/Photos/Photo-PortifolioGabriel.jpeg'
import GM from '../../assets/Icons/Icom-Gm-White.svg'
import Pokedex from '../../assets/Photos/Photo-Pokex.svg'
import Button from '../Button/Button'
import './Project.css'
import Label from '../Label/Label'

const projects = [
  {
    id: 1,
    name: 'Portifolio | Gabriel',
    description:
      'Este portfólio foi desenvolvido com o propósito de apresentar meu trabalho de forma profissional e prática, permitindo que eu mostre todo o meu conhecimento aplicado nas tecnologias que domino.',
    image: Port,
    skills: 'React, CSS, JavaScript',
    link: 'https://github.com/Th3Gabriel/Portifolio-Gabriel-ReactJs',
    hidden: false,
  },
  {
    id: 2,
    name: 'Pokedex',
    description:
      'O projeto tem como principal objetivo explorar a Pokémon RESTful API (PokeAPI) para criar uma aplicação interativa que permita aos usuários consultar informações detalhadas sobre os Pokémon.',
    image: Pokedex,
    skills: 'React, CSS, JavaScript, API REST',
    link: 'https://github.com/Th3Gabriel/Pokedex',
    hidden: false,
  },
]

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
        {projects.map(
          ({ id, name, description, image, skills, link, hidden }) =>
            !hidden && (
              <div key={id} className="project-card">
                <img
                  src={image}
                  alt="Project Thumbnail"
                  className="project-photo"
                />
                <div className="project-info">
                  <h3 className="project-name">{name}</h3>
                  <p className="project-description">{description}</p>
                  <div className="project-footer">
                    <span className="skills">{skills}</span>
                    <Button buttonStyle="black">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        Ver no GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default ProjectList
