import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.4552939575406!2d-96.8012743855069!3d32.78018508097108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2sMagnolia+Dallas+Downtown!5e0!3m2!1spt-PT!2sad!4v1543759060724" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen></iframe>

            <div className="location_tag">
                <div className="location">
                    Location
                </div>
            </div>

        </div>
    );
};

export default Location;