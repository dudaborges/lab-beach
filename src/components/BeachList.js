import React, { useEffect, useState } from "react";
import './BeachList.css'
import info from '../assets/info.png'

const BeachList = (props) => {

    // useEffect(() => {
    //     alert('ok')
    // }, [])

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
            </div>




        </div>
    )
}

export default BeachList