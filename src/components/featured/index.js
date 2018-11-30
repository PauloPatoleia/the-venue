import React from 'react';
import Carrousel from './Carrousel'
import TimeUntil from './TimeUntil'


const Featured = () => {

    return (
        <div style={{position: "relative"}}>

        <Carrousel></Carrousel>

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>

            <TimeUntil></TimeUntil>
        </div>
    );
};

export default Featured;