import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">The Venue</div>
                <div className="footer_copyright">
                    The Venue 2019. All Rights Reserved.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;