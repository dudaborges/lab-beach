import React, { useState } from 'react'
import './AddBeach.css'

function AddBeach(props) {

    const [name, setName] = useState('')
    const [area, setArea] = useState('')
    const [status, setStatus] = useState('')
    const [suitable, setSuitable] = useState('')

    const handleChangeName = (event) => {


        setName(event.target.value)
    }
    const handleChangeArea = (event) => {


        setArea(event.target.value)
    }

    const handleChangeStatus = (event) => {


        setStatus(event.target.value)

    }

    const handleChangeSuitable = (event) => {

        setSuitable(event.target.value)

    }

    const handleAddBeach = () => {

        const beach = [{
            nome: name,
            bairro: area,
            status: status,
            acessibilidade: suitable
        }]

        localStorage.setItem('itens', JSON.stringify(beach))

        

    }

    console.log(name)


  return (props.trigger) ? (
    <div className='container-addbeach'>
        <div className='addbeach'>
            <h3 className='title-popup'>Cadastrar uma nova praia</h3>

            <div className='inputs-add'>
                <label className='input-add name-input'>
                    <span>Nome:</span>
                    <input type="text" className='input-popup' value={name} onChange={handleChangeName} />
                </label>
                <label className='input-add zone-input'>
                    <span>Bairro:</span>
                    <input type="text" className="input-popup" value={area} onChange={handleChangeArea} />
                </label>
                <div className='status-input'>
                    <span>Status:</span>

                    <div>
                    <input onClick={handleChangeSuitable} type="radio" id='suitable' name={status} value="Própria para Banho" />
                    <label for="suitable">Própria</label>
                    <input onClick={handleChangeSuitable}  type="radio" id="not-suitable" name={status} value="Imprópria para Banho" />
                    <label for="not-suitable">Imprópria</label>
                    </div>
                </div>

                <div className='status-input accessible'>
                    <span>Acessível:</span>

                    <div>
                    <input onClick={handleChangeStatus} type="radio" id="yes" name={suitable} value="Acessível" />
                    <label for="yes">Sim</label>
                    <input onClick={handleChangeStatus} type="radio" id="no" name={suitable} value="Não Acessível" />
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