import React, { useState } from 'react';
import { Layout, Row, Col, Divider, Typography, List, Avatar, Drawer, Tag } from 'antd';
import parse from 'html-react-parser'
import { data } from '../helpers/data.json'
import {
    ScrollingProvider,
    Section,
} from 'react-scroll-section';
import AffixMenu from '../components/AffixMenu';
import Hero from '../components/Hero';
import Tabs from '../components/Tabs';
import Graph from '../components/Graph';
import TimeLine from '../components/TimeLine';
import Card from '../components/Card';
import Footer from '../components/Footer';

const { Content } = Layout;
const { Text, Paragraph } = Typography;

const Home = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [visible, setVisible] = useState(false)
    const [placement] = useState('left')

    const onClose = () => {
        setVisible(false)
    };

    return (
        <Layout className={`layout ${darkMode ? 'dark-mode' : ''}`}>
            <ScrollingProvider>
                {/* UserCard */}
                <Drawer
                    className={`${darkMode ? 'dark-mode' : ''}`}
                    placement={placement}
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    key={placement}
                >
                    <Row justify="space-around">
                        <Col xs={24}>
                            <Card data={data?.personalData} darkMode={darkMode} setDarkMode={setDarkMode} />
                        </Col>
                    </Row>
                </Drawer>
                {/* Header */}
                <AffixMenu />
                {/* Hero */}
                <Hero setVisible={setVisible} />
                {/* Experience */}
                <Section id="experience">
                    <Divider><Text>Experiencia en empresas</Text></Divider>
                    <Content>
                        <Row justify="space-around">
                            <Col xs={24} sm={18}>
                                <Tabs data={data.experience} />
                            </Col>
                        </Row>
                    </Content>
                </Section>
                {/* Skill Graph */}
                <Section id="skills">
                    <Divider><Text>Tecnologías usadas mensualmente</Text></Divider>
                    <Content>
                        <Row justify="space-around">
                            <Col xs={24} sm={18}>
                                <Graph data={data?.skills} />
                            </Col>
                        </Row>
                    </Content>
                </Section>
                {/* Courses */}
                <Section id="courses">
                    <Divider><Text>Cursos realizados</Text></Divider>
                    <Content>
                        <Row justify="space-around">
                            <Col xs={24} sm={18}>
                                <List
                                    style={{ backgroundColor: '#fff' }}
                                    bordered>
                                    <TimeLine data={data?.courses} />
                                </List>
                            </Col>
                        </Row>
                    </Content>
                </Section>

                <Section id="collabs">
                    <Divider><Text>Colaboraciones</Text></Divider>
                    <Content>
                        <Row justify="space-around">
                            <Col xs={24} sm={18}>
                                <List
                                    style={{ backgroundColor: '#fff' }}
                                    bordered
                                    itemLayout="vertical"
                                    size="large"
                                    dataSource={data?.collaboration}
                                    renderItem={item => (
                                        <List.Item
                                            key={item.name}
                                            extra={
                                                <img
                                                    width={272}
                                                    alt="logo"
                                                    src="https://remittven.co.uk/images/logo3.png"
                                                />
                                            }
                                        >
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar} />}
                                                title={<a href={item.href}>{item.title}</a>}
                                                description={parse(item.description)}
                                            />
                                            <Paragraph>Objetivos: </Paragraph>
                                            <ul>
                                                {item.resume.map((resume, index) => {
                                                    return <li key={index}>{parse(resume)}</li>
                                                })}
                                            </ul>
                                            <br />
                                            <Paragraph>Tecnologías utilizadas: </Paragraph>
                                            <Paragraph>{item.skills?.map((item, index) => <Tag color="processing" key={index}>{item}</Tag>)}</Paragraph>
                                        </List.Item>
                                    )}
                                />
                            </Col>
                        </Row>
                    </Content>
                </Section>
                <Divider></Divider>
                {/* Footer */}
                <Footer />
            </ScrollingProvider>
        </Layout >
    )
}

export default Home