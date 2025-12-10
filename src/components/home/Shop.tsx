import React from 'react';
import styled from 'styled-components';
import { Content } from '../../content/Content';

// Styled Components
const Section = styled.section`
    padding: 100px 0;
    background-color: #0b0b0b;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

const HeaderWrapper = styled.div`
    text-align: center;
    margin-bottom: 50px;

    div {
        h2 {
            font-size: 28px;
            font-weight: 700;
            text-transform: uppercase;
            color: #fff;
            margin-bottom: 20px;
        }

        span {
            color: var(--primary-color);
        }

        p {
            color: var(--text-muted);
            font-size: 18px;
        }
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 50px;

    @media (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

const ShopImg = styled.img`
    max-height: 100%;
    transition: transform 0.3s ease;
`;

const ShopBtn = styled.a`
    width: 100%;
    margin-top: 10px;
    background: transparent;
    border: 1px solid #333;
    color: #fff;
    padding: 12px 30px;
    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    display: inline-block;
    font-family: var(--font-barlow);
    transition: all 0.3s ease;
`;

const Item = styled.div`
    background: #141414;
    border: 1px solid #222;
    transition: all 0.3s ease;
    overflow: hidden;

    &:hover {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        border-color: #333;

        ${ShopImg} {
            transform: scale(1.1);
        }

        ${ShopBtn} {
            background: var(--primary-color);
            border-color: var(--primary-color);
        }
    }
`;

const Thumb = styled.div`
    position: relative;
    padding: 20px;
    background: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
`;

const ContentDiv = styled.div`
    padding: 20px;
    text-align: center;
`;

const PriceBadge = styled.div`
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    padding: 2px 10px;
    border-radius: 4px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const Title = styled.h3`
    font-size: 20px;
    color: #fff;
    margin-bottom: 20px;
    transition: color 0.3s ease;

    &:hover {
        color: var(--primary-color);
    }
`;

const Shop: React.FC = () => {
    const { title, subtitle, products } = Content.shop as any;

    return (
        <Section>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <HeaderWrapper style={{ maxWidth: '800px', width: '100%' }}>
                        <div>
                            <h2>{title.line1} <span>{title.highlight}</span></h2>
                            <p>{subtitle}</p>
                        </div>
                    </HeaderWrapper>
                </div>

                <Grid>
                    {products.map((product) => (
                        <Item key={product.id}>
                            <Thumb>
                                <ShopImg src={product.image} alt={product.name} />
                            </Thumb>
                            <ContentDiv>
                                <PriceBadge>R${product.price}</PriceBadge>
                                <Title>{product.name}</Title>
                                <ShopBtn href="#">Comprar Agora</ShopBtn>
                            </ContentDiv>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default Shop;
