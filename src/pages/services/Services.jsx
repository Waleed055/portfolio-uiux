import React from 'react';
import ServiceHeader from '../../components/services/ServiceHeader';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServicesList from '../../components/services/ServicesList';
import ServiceTools from '../../components/services/ServiceTools';
import Email from '../../components/services/Email';
import './Services.css';

const Services = () => {
    return (
        <section className="services-section">
            <div className="container services-inner">
                <ServiceHeader />

                <div className="services-grid">
                    <div className="process-column">
                        <ServiceProcess />
                    </div>
                    <div className="list-tools-column">
                        <ServicesList />
                        <ServiceTools />
                    </div>
                </div>

                <div className="email-section">
                    <Email />
                </div>
            </div>
        </section>
    );
};

export default Services;
