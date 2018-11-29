import React from 'react';
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg"
import slide_two from "../../resources/images/slide_two.jpg"
import slide_three from "../../resources/images/slide_three.jpg"

const Carrousel = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500
      };

    return (
        <div className="carrousel_wrapper" style={{
            overflow: 'hidden',
            height: `${window.innerHeight}px`
        }}>

            <Slider {...settings}>
                <div>
                    <div className="carrousel-image" style={{background: `url(${slide_one})`, height: `${window.innerHeight}px`}}>
                    </div>
                </div>
                
                 <div>
                    <div className="carrousel-image" style={{background: `url(${slide_two})`, height: `${window.innerHeight}px`}}>
                    </div>
                </div>
                    
                <div>
                    <div className="carrousel-image" style={{background: `url(${slide_three})`, height: `${window.innerHeight}px`}}>
                    </div>
                </div>


            </Slider>
            
        </div>
    );
};

export default Carrousel;