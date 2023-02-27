import React from "react";
import './BeachList.css'
import info from '../assets/info.png'

const BeachList = ({currentBeach, showedit, editItem}) => {

    return(
        <div className="container-beachlist">
            {
                currentBeach.map((b) => {
                    
                    return(
                        <div className="beach-list">
                            <div className="beach-item" key={b.id}>
                                <p>{b.name}</p>
                                <div className="learn-more">
                                    <span onClick={() => {
                                        showedit(true)
                                        editItem(b.id)
                                    }}>saber mais</span>
                                    <div className="info">
                                    <img className="info-img" src={info}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default BeachList