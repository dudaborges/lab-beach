import React, { useEffect, useState } from "react";
import './BeachList.css'
import info from '../assets/info.png'

const BeachList = (props) => {

    return(
        <div className="container-beachlist">
            <div className="beach-list">

                <div className="beach-item">
                    <p>Daniela</p>
                    <div className="learn-more">
                        <span onClick={() => props.showedit(true)}>saber mais</span>
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