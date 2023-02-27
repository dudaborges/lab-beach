import React, { useState } from 'react'
import './AddBeach.css'

function EditBeach({trigger, setTrigger, currentBeach, setCurrentBeach, setEdit, name, setName, area, setArea, status, setStatus, suitable, setSuitable, editID, setEditID}) {

    const [showEdit, setShowEdit] = useState(true)
    const [isEditing, setEditing] = useState(true)

    const handleDelete = ({id}) => {
        if(window.confirm('Você tem certeza que deseja deletar?') === true) {
            setCurrentBeach(currentBeach.filter((b) => b.id !== id))
            setTrigger(false)
        }

    }

    const handleEdit = () => {

        setCurrentBeach(
            currentBeach.map((b) => {
                if(b.id === editID){
                    return {...b, name: name, area: area, status: status, suitable: suitable}
                }
                return b
            })
        ) 
        setName("")
        setArea("")
        setStatus("")
        setSuitable("") 
        setEditing(false)
        setEditID(null)
        setTrigger(false)

    }

  return (trigger) ? (
    <div className='container-addbeach'>
            {currentBeach.map((b) => {
            return(
                <div className='addbeach' key={b.id}>
                <h3 className='title-popup'>Alterar uma praia já existente</h3>
    
    
                <div className='inputs-add'>
                    <label className='input-add name-input'>
                        <span>Nome:</span>
                        <input type="text" className='input-popup' placeholder={b.name} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <label className='input-add zone-input'>
                        <span>Bairro:</span>
                        <input type="text" className="input-popup" placeholder={b.area} onChange={(event) => setArea(event.target.value)} />
                    </label>
                    <div className='status-input change-column'>
                        <span>Status:</span>
                        <div>
                            <p className='value-radio'>{b.status}</p>
                        </div>
                    </div>
                    {showEdit && 
                    <div className='status-input '>
                        <span>Alterar:</span>    
                        <div>
                        <input type="radio" id="suitable" name={b.status} value="Própria" onChange={(event) => setStatus(event.target.value)} />
                        <label htmlFor="suitable">Própria</label>
                        <input type="radio" id="not-suitable" name={b.status} value="Imprópria" onChange={(event) => setStatus(event.target.value)} />
                        <label htmlFor="not-suitable">Imprópria</label>
                        </div>
                    </div>}

                    <div className='status-input change-column'>
                        <span>Acessível:</span>
                        <div>
                            <p className='value-radio'>{b.suitable}</p>
                        </div>
                    </div>
                    {showEdit &&
                    <div className='status-input accessible'>
                        <span>Alterar:</span>
    
                        <div>
                        <input type="radio" id="yes" name={b.suitable} value="Sim" onChange={(event) => {setSuitable(event.target.value)}} />
                        <label htmlFor="yes">Sim</label>
                        <input type="radio" id="no" name={b.suitable} value="Não" onChange={(event) => {setSuitable(event.target.value)}} />
                        <label htmlFor="no">Não</label>
                        </div>
                    </div>}
                </div>
    
                <div className='btn-add'>
                    <button className='btn' onClick={() => handleEdit(b)}>Alterar</button>
                    <button className='btn delete' onClick={() => handleDelete(b)}>Excluir</button>
                    <button className='btn' onClick={() => setTrigger(false)}>Fechar</button>
                </div>
            </div>
            )
            })}

    </div>
  ) : ""
}

export default EditBeach