import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import MyButton from '../utils/MyButton'

class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, est. Est cum ab quas a.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, est. Est cum ab quas a.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, est. Est cum ab quas a.'
        ],
        link: ['https://google.com', 'https://google.com', 'https://google.com'],
        delay: [500, 0, 500]
    }


    showBoxes = () => (
        
        this.state.prices.map((box, i)=> (
            <Zoom clear delay={this.state.delay[i]} key={[i]}>
           <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>${this.state.positions[i]}</span>
                    </div>

                    <div className="pricing_description">
                    ${this.state.desc[i]}
                    </div>

                    <div className="pricing_buttons">
                        <MyButton
                        text="Purchase"
                        bck="#ffa800"
                        color="white"
                        link={this.state.link[i]}
                        >
                        </MyButton>
                    </div>
                </div>
           </div>
           </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;