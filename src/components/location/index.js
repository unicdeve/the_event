import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31706.76613828961!2d3.3327518104023905!3d6.603883544349307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja!5e0!3m2!1sen!2sng!4v1550787093475" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;