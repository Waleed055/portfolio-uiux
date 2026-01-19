import React from 'react';
import './Tools.css';
import figma from '../../assets/figma.svg';
import photoshop from '../../assets/photoShop.svg';
import afterEffects from '../../assets/afterEffects.svg';
import illustrator from '../../assets/Illustrator.svg';
import premierePro from '../../assets/premierePro.svg';

const Tools = () => {
    return (
        <div className="tools-section">
            <div className="tools-container">
                <div className="tool-card figma">
                    <img src={figma} alt="Figma" />
                </div>
                <div className="tool-card photoshop">
                    <img src={photoshop} alt="Photoshop" />
                </div>
                <div className="tool-card aftereffects">
                    <img src={afterEffects} alt="After Effects" />
                </div>
                <div className="tool-card illustrator">
                    <img src={illustrator} alt="Illustrator" />
                </div>
                <div className="tool-card premiere">
                    <img src={premierePro} alt="Premiere Pro" />
                </div>
            </div>
        </div>
    );
};

export default Tools;
