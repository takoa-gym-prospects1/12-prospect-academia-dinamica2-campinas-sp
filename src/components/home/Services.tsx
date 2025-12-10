import React from 'react';
import { FaArrowRight, FaFire } from 'react-icons/fa';
import { GiMuscleUp, GiWeightLiftingUp } from 'react-icons/gi';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Content } from '../../content/Content';

// Styled Components
const Section = styled.section`
    width: 100%;
    padding: 0;
`;

const Helpers = styled.div`
    width: 100%;
`; // Just a wrapper if needed or use Fragment

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;

    @media (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

const ServiceImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1); /* Começa com zoom IN para fazer zoom OUT no hover */
    transition: transform 0.6s ease;
`;

const ServiceOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */
    padding: 40px;
    transition: all 0.4s ease;
`;

const ServiceIcon = styled.div`
    font-size: 50px; /* Tamanho ideal para ícones react-icons */
    color: var(--primary-color);
    margin-bottom: 20px;
    opacity: 0; /* Escondido inicialmente */
    transform: translateY(20px);
    transition: all 0.4s ease 0.1s;
    text-align: center;
    line-height: 1;
`;

const ServiceContent = styled.div`
    text-align: center; /* Centraliza texto */
    
    h3 {
        font-size: 24px;
        font-weight: 800;
        margin-bottom: 10px;
        color: #fff;
        transform: translateY(0);
        transition: all 0.4s ease;
        opacity: 1; /* Título sempre visível */
    }

    p {
        color: #ddd;
        font-size: 14px;
        margin-bottom: 20px;
        opacity: 0; /* Escondido inicialmente */
        transform: translateY(20px);
        transition: all 0.4s ease 0.2s;
        height: 0;
        overflow: hidden;
    }
`;

const ServiceBtn = styled.a`
    color: var(--primary-color);
    font-size: 20px;
    opacity: 0; /* Escondido inicialmente */
    transform: translateX(-20px);
    transition: all 0.4s ease 0.3s;
    
    /* Background ao redor da seta */
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid transparent;
    
    /* Hover effect no background */
    &:hover {
        background: rgba(255, 51, 102, 0.2);
        border-color: var(--primary-color);
        transform: translateX(5px);
    }
`;

const ServiceItem = styled(motion.div)`
    position: relative;
    height: 400px;
    overflow: hidden;
    cursor: pointer;

    /* Zoom OUT no hover (1.1 -> 1) */
    &:hover ${ServiceImg} {
        transform: scale(1);
    }

    /* Mostrar ícone no hover */
    &:hover ${ServiceIcon} {
        opacity: 1;
        transform: translateY(0);
    }

    /* Mostrar descrição no hover */
    &:hover ${ServiceContent} p {
        opacity: 1;
        transform: translateY(0);
        height: auto;
    }

    /* Mostrar botão no hover */
    &:hover ${ServiceBtn} {
        opacity: 1;
        transform: translateX(0);
    }
`;

const Services: React.FC = () => {
    // Mapeamento de iconType para react-icons correspondentes aos emojis
    const getIcon = (type: string) => {
        switch (type) {
            case 'muscle': return <GiMuscleUp />; // Corresponde ao emoji 💪
            case 'fire': return <FaFire />; // Corresponde ao emoji 🔥
            case 'weightlifting': return <GiWeightLiftingUp />; // Corresponde ao emoji 🏋️
            default: return <GiMuscleUp />;
        }
    };

    // Variantes de animação para o container (Grid)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2 // Delay de 0.2s entre cada card
            }
        }
    };

    // Variantes de animação para cada card individual
    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -100 // Começa 100px à esquerda
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <Section id="services">
            <div className="container-fluid p-0" style={{ width: '100%' }}>
                <Grid
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Anima quando 20% da seção está visível, apenas uma vez
                >
                    {Content.services.items.map((service) => (
                        <ServiceItem
                            key={service.id}
                            variants={itemVariants}
                        >
                            <ServiceImg src={service.image} alt={service.title} loading="lazy" />
                            <ServiceOverlay>
                                <ServiceIcon>
                                    {getIcon(service.iconType || '')}
                                </ServiceIcon>
                                <ServiceContent>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <ServiceBtn href="#">
                                        <FaArrowRight />
                                    </ServiceBtn>
                                </ServiceContent>
                            </ServiceOverlay>
                        </ServiceItem>
                    ))}
                </Grid>
            </div>
        </Section>
    );
};

export default Services;
