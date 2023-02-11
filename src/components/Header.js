import React from "react";
import './Header.css'
import coqueiro from '../assets/coqueiro.png'

const Header = () => {

    return(
        <header>
            <div className="img-coconut-tree">
                <img src={coqueiro}></img>
            </div>
            <div className="title">
            <p>Seja bem-vindo(a) ao:</p>
            <h1>Lab Beach</h1>
            </div>
        </header>
    )
}

export default Header
