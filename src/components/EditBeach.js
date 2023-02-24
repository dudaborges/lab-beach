import React from 'react'
import './AddBeach.css'

function EditBeach({trigger, setTrigger, currentBeach, setCurrentBeach, edit, setEdit, setName, setArea}) {

    const handleDelete = ({id}) => {
        if(window.confirm('Você tem certeza que deseja deletar?') === true) {
            setCurrentBeach(currentBeach.filter((b) => b.id !== id))
            setTrigger(false)
            setEdit("")
        }

    }

    const handleEdit = ({id}) => {
        
    }

  return (trigger) ? (
    <div className='container-addbeach'>
            {currentBeach.map((b) => {
            return(
                <div className='addbeach' key={b.id}>
                <h3 className='title-popup'>Cadastrar uma nova praia</h3>
    
    
                <div className='inputs-add'>
                    <label className='input-add name-input'>
                        <span>Nome:</span>
                        <input type="text" className='input-popup' value={b.name} onChange={(e) => e.preventDefault()} />
                    </label>
                    <label className='input-add zone-input'>
                        <span>Bairro:</span>
                        <input type="text" className="input-popup" value={b.area} onChange={(e) => e.preventDefault()} />
                    </label>
                    <div className='status-input'>
                        <span>Status:</span>
    
                        <div>
                        <input type="radio" id='suitable' name='status' value={b.status} />
                        <label htmlFor="suitable">Própria</label>
                        <input type="radio" id="not-suitable" name='status' />
                        <label htmlFor="not-suitable">Imprópria</label>
                        </div>
                    </div>
    
                    <div className='status-input accessible'>
                        <span>Acessível:</span>
    
                        <div>
                        <input type="radio" id="yes" name="yer-or-no" value="yes" />
                        <label htmlFor="yes">Sim</label>
                        <input type="radio" id="no" name="yer-or-no" value="no" />
                        <label htmlFor="no">Não</label>
                        </div>
                    </div>
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