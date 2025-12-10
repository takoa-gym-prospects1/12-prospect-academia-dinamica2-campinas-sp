import React from 'react';
import { motion } from 'framer-motion';
import { Content } from '../../content/Content';
import {
    Section, Overlay, ContentWrapper,
    HeroTitle, HeroSubtitle, MicroTextWrapper
} from './Hero.styles';

const Hero: React.FC = () => {
    const { backgroundImage, mobileBackgroundImage, title, buttonText, subtitle, microText } = Content.hero;

    return (
        <Section $bgImage={backgroundImage} $mobileBgImage={mobileBackgroundImage} id="home">
            <Overlay />


            <div className="container" style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ContentWrapper>
                    <HeroTitle
                        initial={{ opacity: 0, y: 30 }} /* Mudado para Y (subir) ja que é centralizado */
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {title.line1} <br />
                        <span>{title.highlight}</span>
                    </HeroTitle>

                    {subtitle && (
                        <HeroSubtitle
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {subtitle}
                        </HeroSubtitle>
                    )}

                    <motion.a
                        href="#pricing"
                        className="btn btn-primary"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            padding: '15px 40px',
                            fontSize: '16px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            textTransform: 'uppercase'
                        }}
                    >
                        {buttonText} { /* Removed Icon strictly, but can add back if needed */}
                    </motion.a>

                    {microText && (
                        <MicroTextWrapper
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            {microText.map((text: string, index: number) => (
                                <span key={index}>{text}</span>
                            ))}
                        </MicroTextWrapper>
                    )}
                </ContentWrapper>
            </div>
        </Section>
    );
};

export default Hero;
