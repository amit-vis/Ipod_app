import React, { Component } from 'react';
import ContainerStyle from './ipod.module.css';

export default class Ipod extends Component {

    render() {
        return (
            <>
                <div className={ContainerStyle.wheelcontainer}>
                    <div className={ContainerStyle.wheel}>
                    <div className={`${ContainerStyle.positioneddiv} ${ContainerStyle.div1}`}>MENU</div>
                    <div className={`${ContainerStyle.positioneddiv} ${ContainerStyle.div2}`}>
                    <i className="fa-solid fa-forward fa-rotate-180"></i>
                    </div>
                    <div className={`${ContainerStyle.positioneddiv} ${ContainerStyle.div3}`}>
                    <i className="fa-solid fa-forward"></i>
                    </div>
                    <div className={`${ContainerStyle.positioneddiv} ${ContainerStyle.div4}`}>
                    <i className="fa-solid fa-play"></i> <i className="fa-solid fa-pause"></i>
                    </div>
                    <div className={`${ContainerStyle.positioneddiv} ${ContainerStyle.div5}`}></div>
                    </div>
                </div>
            </>
        )
    }
}