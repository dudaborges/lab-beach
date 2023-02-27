import React from 'react'

const Filter = () => {
  return (
    <div className='container-filter'>
    <div className="filter-grid">
        <div className="filter">
            <p>Filtro:</p>

            <div className="check-list">
                <div>
                    <input type="checkbox" id="accessible" name="accessible" />
                    <label htmlFor="accessible">Acessíveis</label>
                </div>
                <div>
                    <input type="checkbox" id="not-accessible" name="not-accessible" />
                    <label htmlFor="not-accessible">Não Acessíveis</label>
                </div>
                <div>
                    <input type="checkbox" id="suitable" name="suitable" />
                    <label htmlFor="suitable">Próprias Para Banho</label>
                </div>
                <div>
                    <input type="checkbox" id="not-suitable" name="not-suitable" />
                    <label htmlFor="not-suitable">Impróprias Para Banho</label>
                </div>
            </div>
        </div>
        <button className='filter-btn'>Filtrar</button>
    </div>
    </div>
  )
}

export default Filter
