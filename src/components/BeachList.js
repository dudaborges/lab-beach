import React, { useState } from "react";
import './BeachList.css'
import info from '../assets/info.png'

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

            <div className="beach-list">
                <h2>Praias de Florianópolis</h2>

                <div className="beach-item">
                    <p>Daniela</p>
                    <div className="learn-more">
                        <span>saber mais</span>
                        <div className="info">
                        <img className="info-img" src={info}></img>
                        </div>
                    </div>
                </div>
                <div className="beach-item">
                    <p>Santinho</p>
                    <div className="learn-more">
                        <span>saber mais</span>
                        <div className="info">
                        <img className="info-img" src={info}></img>
                        </div>
                    </div>
                </div>
                <div className="beach-item">
                    <p>Ingleses</p>
                    <div className="learn-more">
                        <span>saber mais</span>
                        <div className="info">
                        <img className="info-img" src={info}></img>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BeachList