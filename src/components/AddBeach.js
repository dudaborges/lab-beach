import React from 'react'
import './AddBeach.css'
import {v4 as uiidv4} from "uuid"

const AddBeach = ({trigger, setTrigger, name, setName, area, setArea, status, setStatus, suitable, setSuitable, currentBeach, setCurrentBeach}) => {

    const handleAddBeach = e => {
        e.preventDefault()

        setCurrentBeach([...currentBeach, {id: uiidv4(), name: name, area: area, status: status}])

        setName('')
        setArea('')
        setTrigger(false)
    }

    console.log(name, area, status)


  return (trigger) ? (
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
                    <input onClick={(event) => setStatus(event.target.value)
                    } type="radio" id='suitable' name={status} value="propria" onChange={(event) => setStatus(event.target.value)}/>
                    <label htmlFor="suitable">Própria</label>
                    <input onClick={(event) => setStatus(event.target.value)
                    }  type="radio" id="not-suitable" name={status} value="impropria" onChange={(event) => setStatus(event.target.value)} />
                    <label htmlFor="not-suitable" className='not-suitable'>Imprópria</label>
                    </div>
                </div>

                <div className='status-input accessible'>
                    <span>Acessível:</span>

                    <div>
                    <input onClick={(event) => { setSuitable(event.target.value)
                    }} type="radio" id="yes" name={suitable} value="Acessível" onChange={(event) => setStatus(event.target.value)} />
                    <label htmlFor="yes">Sim</label>
                    <input onClick={(event) => { setSuitable(event.target.value)
                    }} type="radio" id="no" name={suitable} value="Não Acessível" onChange={(event) => setStatus(event.target.value)} />
                    <label htmlFor="no">Não</label>
                    </div>
                </div>
            </div>

            <div className='btn-add'>
                <button type='submit' className='btn'>Inserir</button>
                <button type='button' className='btn' onClick={() => setTrigger(false)}>fechar</button>
            </div>
        </form>
    </div>
  ) : ""
}

export default AddBeach