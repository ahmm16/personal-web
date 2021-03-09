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
                    <Title>Hola!</Title>
                    <Text>Soy<span onClick={() => setVisible(true)} style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Alex Hernández</span>. Programador JavaScript por profesión y por pasión!</Text>
                </div>
            </div>
        </section>
    )
}

export default Hero