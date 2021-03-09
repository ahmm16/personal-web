import React from 'react';
import { Typography } from 'antd'

const { Title, Text } = Typography;

const SquareAnimation = () => {
    const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (<ul className="bg-bubbles">
        {squares.map((item, index) => {
            return (<li key={index}></li>)
        })}
    </ul>
    )
}

const Hero = ({ setVisible }) => {
    return (
        <section className="hero" style={{ cursor: 'pointer' }} onClick={() => setVisible(true)}>
            <div className="overlay">
                <SquareAnimation />
                <div className="content">
                    <Title>{'{Hola Mundo}'}</Title>
                    <Text>Soy<span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Alex Hernández</span>. Programador JavaScript por profesión y por pasión!</Text>
                    <Text type="secondary" style={{
                        textAlign: 'right', fontSize: 14, borderRadius: 2, marginTop: 40
                    }}>Pulsa para ver detalles de contacto</Text>
                </div>
            </div>
        </section >
    )
}

export default Hero