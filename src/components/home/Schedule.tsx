import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { Content } from '../../content/Content';

const Section = styled.section<{ $bgImage: string }>`
    padding: 100px 0;
    background-image: url(${props => props.$bgImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media (max-width: 768px) {
        background-attachment: scroll;
    }
    position: relative;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    z-index: 1;
`;

const Container = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;

const HeadingWrapper = styled.div`
    text-align: center;
    margin-bottom: 50px;
    
    h2 {
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 28px; /* Standardized size */
    }

    span {
        color: var(--primary-color);
    }

    p {
        color: var(--text-muted);
        font-size: 18px;
    }
`;

const TableResponsive = styled.div`
    overflow-x: auto;
    background: #1a1a1a;
    border-radius: 8px;
    padding: 20px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: #fff;
    min-width: 800px;

    th, td {
        border: 1px solid #333;
        text-align: center;
        padding: 15px;
        vertical-align: middle;
    }

    thead th {
        background-color: #000;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 16px;
        padding: 20px;
    }

    tbody th {
        background-color: #111;
        color: var(--primary-color);
        font-weight: 700;
    }
`;

const ClassInfo = styled.div<{ $borderColor: string }>`
    padding: 10px;
    border-radius: 4px;
    transition: transform 0.3s ease;
    background-color: #1e1e1e;
    border-left: 3px solid ${props => props.$borderColor};

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        font-size: 16px;
        color: #aaa;
        margin-bottom: 5px;
        text-transform: uppercase;
    }

    h4 {
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        margin-bottom: 5px;
    }

    p {
        font-size: 16px;
        color: #888;
        margin-bottom: 5px;
    }

    span {
        font-size: 16px;
        color: var(--primary-color);
        font-weight: 600;
    }
`;

const Schedule: React.FC = () => {
    const { backgroundImage, title, subtitle } = Content.schedule;

    return (
        <Section $bgImage={backgroundImage} id="schedule">
            <Overlay />
            <Container>
                <HeadingWrapper>
                    <h2>{title.line1} <span>{title.highlight}</span></h2>
                    <p>{subtitle}</p>
                </HeadingWrapper>

                <TableResponsive>
                    <Table>
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }}><FaCalendarAlt size={24} /></th>
                                <th>Segunda</th>
                                <th>Terça</th>
                                <th>Quarta</th>
                                <th>Quinta</th>
                                <th>Sexta</th>
                                <th>Sábado</th>
                                <th>Domingo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">10:00</th>
                                <td>
                                    <ClassInfo $borderColor="#ff3366">
                                        <h3>Relax</h3>
                                        <h4>Yoga</h4>
                                        <p>10:00 - 11:00</p>
                                        <span>Jonas Blue</span>
                                    </ClassInfo>
                                </td>
                                <td>
                                    <ClassInfo $borderColor="#3366ff">
                                        <h3>Força</h3>
                                        <h4>Crossfit</h4>
                                        <p>10:00 - 11:00</p>
                                        <span>Mike T.</span>
                                    </ClassInfo>
                                </td>
                                <td></td>
                                <td>
                                    <ClassInfo $borderColor="#33ff66">
                                        <h3>Cardio</h3>
                                        <h4>Zumba</h4>
                                        <p>10:00 - 11:00</p>
                                        <span>Sarah L.</span>
                                    </ClassInfo>
                                </td>
                                <td></td>
                                <td>
                                    <ClassInfo $borderColor="#ff3366">
                                        <h3>Relax</h3>
                                        <h4>Yoga</h4>
                                        <p>10:00 - 11:00</p>
                                        <span>Jonas Blue</span>
                                    </ClassInfo>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">12:00</th>
                                <td></td>
                                <td></td>
                                <td>
                                    <ClassInfo $borderColor="#ff3366">
                                        <h3>Relax</h3>
                                        <h4>Yoga</h4>
                                        <p>12:00 - 13:00</p>
                                        <span>Jonas Blue</span>
                                    </ClassInfo>
                                </td>
                                <td></td>
                                <td>
                                    <ClassInfo $borderColor="#3366ff">
                                        <h3>Força</h3>
                                        <h4>Musculação</h4>
                                        <p>12:00 - 13:00</p>
                                        <span>Arnold S.</span>
                                    </ClassInfo>
                                </td>
                                <td></td>
                                <td>
                                    <ClassInfo $borderColor="#33ff66">
                                        <h3>Cardio</h3>
                                        <h4>Spinning</h4>
                                        <p>12:00 - 13:00</p>
                                        <span>Lance A.</span>
                                    </ClassInfo>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">18:00</th>
                                <td>
                                    <ClassInfo $borderColor="#3366ff">
                                        <h3>Força</h3>
                                        <h4>Boxe</h4>
                                        <p>18:00 - 19:00</p>
                                        <span>Rocky B.</span>
                                    </ClassInfo>
                                </td>
                                <td></td>
                                <td>
                                    <ClassInfo $borderColor="#33ff66">
                                        <h3>Cardio</h3>
                                        <h4>HIIT</h4>
                                        <p>18:00 - 19:00</p>
                                        <span>Usain B.</span>
                                    </ClassInfo>
                                </td>
                                <td></td>
                                <td>
                                    <ClassInfo $borderColor="#ff3366">
                                        <h3>Relax</h3>
                                        <h4>Pilates</h4>
                                        <p>18:00 - 19:00</p>
                                        <span>Clara Z.</span>
                                    </ClassInfo>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </TableResponsive>
            </Container>
        </Section>
    );
};

export default Schedule;
