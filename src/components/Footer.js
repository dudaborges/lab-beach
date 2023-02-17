import React from 'react'

const Footer = (props) => {
  return (
    <div className="add-beach">
    <p>Você conhece mais alguma praia que não está listada acima?</p>
    <button onClick={() => props.show(true)} className="btn-show-popup">Adicionar</button>
    </div>
  )
}

export default Footer