import React, { useEffect, useState } from 'react'

const Filter = ({currentBeach}) => {

    const [filterAccesible, setFilterAccesible] = useState(false)
    const [filterNotAc, setFilterNotAc] = useState(false)
    const [filterSuitable, setFilterSuitable] = useState(false)
    const [filterNotSuitable, setFilterNotSui] = useState(false)


    const handleFilter = () => {
        if(filterAccesible){
            const yesSui = currentBeach.filter((b) => b.suitable === "Sim")
            console.log(yesSui)
        }

        if(filterNotAc){
            const notSui = currentBeach.filter((b) => b.suitable === "Não")
            console.log(notSui)
        }

        if(filterSuitable){
            const yesAc = currentBeach.filter((b) => b.status === "Própria para banho")
            console.log(yesAc)
        }

        if(filterNotSuitable){
            const notAc = currentBeach.filter((b) => b.status === "Imprópria para banho")
            console.log(notAc)
        }
    }


  return (
    <div className='container-filter'>
    <div className="filter-grid">
        <div className="filter">
            <p>Filtro:</p>

            <div className="check-list">
                <div>
                    <input type="checkbox" id="accessible" name="acessivel" value={filterAccesible} onClick={() => setFilterAccesible(!filterAccesible)} />
                    <label htmlFor="acessivel">Acessíveis</label>
                </div>
                <div>
                    <input type="checkbox" id="not-accessible" name="not-accessible" value={filterNotAc} onClick={() => setFilterNotAc(!filterNotAc)} />
                    <label htmlFor="not-accessible">Não Acessíveis</label>
                </div>
                <div>
                    <input type="checkbox" id="suitable" name="suitable" value={filterSuitable} onClick={() => setFilterSuitable(!filterSuitable)} />
                    <label htmlFor="suitable">Próprias Para Banho</label>
                </div>
                <div>
                    <input type="checkbox" id="not-suitable" name="not-suitable" value={!filterNotSuitable} onClick={() => setFilterNotSui(!filterNotSuitable)} />
                    <label htmlFor="not-suitable">Impróprias Para Banho</label>
                </div>
            </div>
        </div>
        <button className='filter-btn' onClick={handleFilter}>Filtrar</button>
    </div>
    </div>
  )
}

export default Filter
