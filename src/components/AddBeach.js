import React, { useEffect, useState } from 'react'
import './AddBeach.css'

function AddBeach(props) {

    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [status, setStatus] = useState('')
    const [suitable, setSuitable] = useState('')
    const [currentBeach, setCurrentBeach] = useState('')


    const handleAddBeach = () => {

        const beach = [{
            nome: name,
            bairro: area,
            status: suitable,
            acessibilidade: status
        }]

        localStorage.setItem('itens', JSON.stringify([...currentBeach, ...beach]))

        setName('')
        setArea('')

        props.setTrigger(false)

    }

    useEffect(() =>{
        setCurrentBeach(JSON.parse(localStorage.getItem('itens')))
    }, [])

    console.log(name)


  return (props.trigger) ? (
    <div className='container-addbeach'>
        <div className='addbeach'>
            <h3 className='title-popup'>Cadastrar uma nova praia</h3>

            <div className='inputs-add'>
                <label className='input-add name-input'>
                    <span>Nome:</span>
                    <input type="text" className='input-popup' value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label className='input-add zone-input'>
                    <span>Bairro:</span>
                    <input type="text" className="input-popup" value={area} onChange={(event) => setArea(event.target.value)} />
                </label>
                <div className='status-input'>
                    <span>Status:</span>

                    <div>
                    <input onClick={(event) =>         setSuitable(event.target.value)
                    } type="radio" id='suitable' name={suitable} value="Própria para Banho" />
                    <label for="suitable">Própria</label>
                    <input onClick={(event) =>         setSuitable(event.target.value)
                    }  type="radio" id="not-suitable" name={suitable} value="Imprópria para Banho" />
                    <label for="not-suitable">Imprópria</label>
                    </div>
                </div>

                <div className='status-input accessible'>
                    <span>Acessível:</span>

                    <div>
                    <input onClick={(event) => {        setStatus(event.target.value)
                    }} type="radio" id="yes" name={status} value="Acessível" />
                    <label for="yes">Sim</label>
                    <input onClick={(event) => {        setStatus(event.target.value)
                    }} type="radio" id="no" name={status} value="Não Acessível" />
                    <label for="no">Não</label>
                    </div>
                </div>
            </div>

            <div className='btn-add'>
                <button type='submit' className='btn' onClick={handleAddBeach}>Inserir</button>
                <button className='btn' onClick={() => props.setTrigger(false)}>fechar</button>
            </div>
            {props.children}
        </div>
    </div>
  ) : ""
}

export default AddBeach