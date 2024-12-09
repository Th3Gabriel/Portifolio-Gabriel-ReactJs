import React, { useState } from 'react'
import './contact.css'
import Label from '../Label/Label'
import IconCopiar from '../../assets/Icons/Icon-copy.svg'
import IconEmail from '../../assets/Icons/Icon-Email.svg'
import GitHub from '../../assets/Icons/Icon-GitHub.svg'
import Linkedin from '../../assets/Icons/Icon-Linkedin.svg'

function Contact() {
  const [tooltip, setTooltip] = useState('') // Estado para controlar o texto exibido

  const handleMouseOver = () => {
    setTooltip('Copiar email') // Exibe o texto ao passar o mouse
  }

  const handleMouseOut = () => {
    setTooltip('') // Remove o texto ao tirar o mouse
  }

  const handleCopyEmail = () => {
    const email = 'gabrielmartins1955@hotmail.com'
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setTooltip('Email na área de transferência') // Atualiza o texto após copiar
        setTimeout(() => setTooltip(''), 2000) // Remove o texto após 2 segundos
      })
      .catch((err) => {
        console.error('Erro ao copiar o e-mail: ', err)
        alert('Não foi possível copiar o e-mail.')
      })
  }

  return (
    <div className="contact-container">
      <div className="contact-label">
        <Label>Entre em contato</Label>
      </div>
      <div className="contact-coluna">
        <div className="contact-description">
          <p>
            O que vem a seguir? Sinta-se à vontade para entrar em contato comigo
            se estiver procurando um desenvolvedor, tiver alguma dúvida ou
            simplesmente quiser se conectar.
          </p>
        </div>
        <div className="contact-infos">
          <div className="contact">
            <img src={IconEmail} alt="contact-email" />
            <p>gabrielmartins1955@hotmail.com</p>
            <div
              className="icon-wrapper"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={(e) => {
                e.preventDefault()
                handleCopyEmail()
              }}
            >
              <img src={IconCopiar} alt="contact-IconCopiar" />
              {tooltip && <span className="tooltip">{tooltip}</span>}
            </div>
          </div>
        </div>
        <div className="contact-minimal-infos">
          <p>Você também pode me encontrar nessas plataformas!</p>
          <div className="contact-minsocial">
            <div className="hero-social-midia">
              <a href="https://github.com/Th3Gabriel/Th3Gabriel">
                <img src={GitHub} alt="Ícone do GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-martins-paz-317561142">
                <img src={Linkedin} alt="Ícone do LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
