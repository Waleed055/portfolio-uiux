import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-inner">
                <HeroLeft />
                <HeroRight />
            </div>
            <div className="hero-bg-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
            </div>
        </section>
    );
};

export default Hero;
