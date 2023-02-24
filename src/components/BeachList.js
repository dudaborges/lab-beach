import React from "react";
import './BeachList.css'
import info from '../assets/info.png'
import { buildTimeValue } from "@testing-library/user-event/dist/utils";

const BeachList = ({currentBeach, showedit}) => {

    return(
        <div className="container-beachlist">
            {
                currentBeach.map((b) => {
                    return(
                        <div className="beach-list">
                            <div className="beach-item" key={b.id}>
                                <p>{b.name}</p>
                                <div className="learn-more">
                                    <span onClick={() => showedit(true)}>saber mais</span>
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

            /* {currentBeach.map((beach) => {
                return(

                )
            })} */