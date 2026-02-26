import React from 'react';
import './ServiceTools.css';
import figma from '../../assets/figma.svg';
import photoshop from '../../assets/photoShop.svg';
import afterEffects from '../../assets/afterEffects.svg';
import illustrator from '../../assets/Illustrator.svg';
import premierePro from '../../assets/premierePro.svg';

const ServiceTools = () => {
    return (
        <div className="service-tools-container" data-aos="zoom-in" data-aos-delay="200">
            <div className="service-tools-back"></div>
            <div className="service-tools-pill">
                <div className="tools-row top-row">
                    <div className="tool-icon ps">
                        <img src={photoshop} alt="Photoshop" />
                    </div>
                    <div className="tool-icon pr">
                        <img src={premierePro} alt="Premiere Pro" />
                    </div>
                    <div className="tool-icon figma">
                        <img src={figma} alt="Figma" />
                    </div>
                </div>
                <div className="tools-row bottom-row">
                    <div className="tool-icon ae">
                        <img src={afterEffects} alt="After Effects" />
                    </div>
                    <div className="tool-icon ai">
                        <img src={illustrator} alt="Illustrator" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTools;
