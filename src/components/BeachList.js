import React from "react";
import './BeachList.css'

const BeachList = () => {

    return(
        <div className="container-beachlist">
            <div className="filter-grid">
                <div className="filter">
                    <p>Filtro:</p>

                    <div className="check-list">
                        <div>
                            <input type="checkbox" id="accessible" name="accessible" />
                            <label for="accessible">Acessíveis</label>
                        </div>
                        <div>
                            <input type="checkbox" id="not-accessible" name="not-accessible" />
                            <label for="not-accessible">Não Acessíveis</label>
                        </div>
                        <div>
                            <input type="checkbox" id="suitable" name="suitable" />
                            <label for="suitable">Próprias Para Banho</label>
                        </div>
                        <div>
                            <input type="checkbox" id="not-suitable" name="not-suitable" />
                            <label for="not-suitable">Impróprias Para Banho</label>
                        </div>
                    </div>
                </div>

                <button>Filtrar</button>
            </div>
        </div>
    )
}

export default BeachList