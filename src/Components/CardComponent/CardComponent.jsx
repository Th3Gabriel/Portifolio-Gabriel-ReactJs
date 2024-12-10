import React from 'react'

const CardComponent = ({ children }) => {
  const styles = {
    backgroundColor: '#1F2937',
    border: '1px solid #1F2937',
    borderRadius: '0.5rem', // 8px
    boxSizing: 'border-box',
    padding: '2rem', // 32px
    width: '90%', // Responsivo, usando porcentagem
    maxWidth: '56rem', // 896px, limite máximo
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsivo
    gap: '1rem', // Espaço entre os itens
    textAlign: 'center',
    boxShadow:
      'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    margin: '0 auto', // Centralizar
  }

  return <div style={styles}>{children}</div>
}

export default CardComponent
