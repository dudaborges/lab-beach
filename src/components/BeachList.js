import React, { useState } from "react";
import './BeachList.css'
import info from '../assets/info.png'

const BeachList = (props, beach) => {

    return(
        <div className="container-beachlist">
            <div className="beach-list">
                { beach.map((b, index) => (
                <div className="beach-item" key={index}>
                    <p>{b.name}</p>
                    <div className="learn-more">
                        <span onClick={() => props.showedit(true)}>saber mais</span>
                        <div className="info">
                        <img className="info-img" src={info}></img>
                        </div>
                    </div>
                </div>
                ))
                }



            </div>
        </div>
    )
}

export default BeachList