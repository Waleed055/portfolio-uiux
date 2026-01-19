import React from 'react';
import './HeroRight.css';
import photo from '../../assets/cover image 1.svg';

const HeroRight = () => {
    return (
        <div className="hero-right">
            <div className="image-container">
                <div className="image-bg-circle">
                    <img src={photo} alt="Waleed Hassan" className="profile-image" />
                </div>
            </div>
            <div className="stylized-role">
                Graphic Designer
            </div>
        </div>
    );
};

export default HeroRight;
