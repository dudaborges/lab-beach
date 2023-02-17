import React from 'react'
import './AddBeach.css'

function EditBeach(props) {
  return (props.trigger) ? (
    <div className='container-addbeach'>
        <div className='addbeach'>
            <h3 className='title-popup'>Cadastrar uma nova praia</h3>

            <div className='inputs-add'>
                <label className='input-add name-input'>
                    <span>Nome:</span>
                    <input type="text" className='input-popup' value="Daniela" />
                </label>
                <label className='input-add zone-input'>
                    <span>Bairro:</span>
                    <input type="text" className="input-popup" value="Daniela" />
                </label>
                <div className='status-input'>
                    <span>Status:</span>

                    <div>
                    <input type="radio" id='suitable' name='status' />
                    <label for="suitable">Própria</label>
                    <input type="radio" id="not-suitable" name='status' />
                    <label for="not-suitable">Imprópria</label>
                    </div>
                </div>

                <div className='status-input accessible'>
                    <span>Acessível:</span>

                    <div>
                    <input type="radio" id="yes" name="yer-or-no" value="yes" />
                    <label for="yes">Sim</label>
                    <input type="radio" id="no" name="yer-or-no" value="no" />
                    <label for="no">Não</label>
                    </div>
                </div>
            </div>

            <div className='btn-add'>
                <button className='btn'>Alterar</button>
                <button className='btn delete'>Excluir</button>
                <button className='btn' onClick={() => props.setTrigger(false)}>fechar</button>
            </div>
            {props.children}
        </div>
    </div>
  ) : ""
}

export default EditBeach