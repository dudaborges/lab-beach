import React, { useEffect, useState } from 'react'
import './AddBeach.css'

function AddBeach(props) {

    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [status, setStatus] = useState('')
    const [suitable, setSuitable] = useState('')


    const handleAddBeach = e => {
        e.preventDefault()
        
        setBeach([...beach])
        localStorage.setItem("beach", JSON.stringify([...currentBeach, ...beach]))
        const event = new Event('localStorageUpdated')
        document.dispatchEvent(event)

        localStorage.setItem('itens', JSON.stringify(beach))

    }

    useEffect(() =>{
        setCurrentBeach(JSON.parse(localStorage.getItem('itens')))
    }, [])


  return (props.trigger) ? (
    <div className='container-addbeach'>
        <form className='addbeach' onSubmit={handleAddBeach}>
            <h3 className='title-popup'>Cadastrar uma nova praia</h3>

            <div className='inputs-add'>
                <label className='input-add name-input'>
                    <span>Nome:</span>
                    <input type="text" name="name" className='input-popup' value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label className='input-add zone-input'>
                    <span>Bairro:</span>
                    <input type="text" name="area" className="input-popup" value={area} onChange={(event) => setArea(event.target.value)} />
                </label>
                <div className='status-input'>
                    <span>Status:</span>

                    <div>
                    <input onClick={(event) =>         setSuitable(event.target.value)
                    } type="radio" id='suitable' name={suitable} value="Própria para Banho" />
                    <label htmlFor="suitable">Própria</label>
                    <input onClick={(event) =>         setSuitable(event.target.value)
                    }  type="radio" id="not-suitable" name={suitable} value="Imprópria para Banho" />
                    <label htmlFor="not-suitable">Imprópria</label>
                    </div>
                </div>

                <div className='status-input accessible'>
                    <span>Acessível:</span>

                    <div>
                    <input onClick={(event) => {        setStatus(event.target.value)
                    }} type="radio" id="yes" name={status} value="Acessível" />
                    <label htmlFor="yes">Sim</label>
                    <input onClick={(event) => {        setStatus(event.target.value)
                    }} type="radio" id="no" name={status} value="Não Acessível" />
                    <label htmlFor="no">Não</label>
                    </div>
                </div>
            </div>

            <div className='btn-add'>
                <button type='submit' className='btn'>Inserir</button>
                <button className='btn' onClick={() => props.setTrigger(false)}>fechar</button>
            </div>
            {props.children}
        </form>
    </div>
  ) : ""
}

export default AddBeach