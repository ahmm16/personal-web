import React, { useState } from 'react';
import { Layout, Row, Col, Divider, Typography, List, Avatar, Space, Drawer } from 'antd';
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
const { Text } = Typography;

const Home = () => {
    const [visible, setVisible] = useState(false)
    const [placement, setPlacement] = useState('left')

    const onClose = () => {
        setVisible(false)
    };

    return (
        <Layout className="layout">
            <ScrollingProvider>
                {/* Header */}
                <AffixMenu />
                {/* Hero */}
                <Hero setVisible={setVisible} />
                {/* Experience */}
                <Section id="experience">
                    <Divider><Text>Experiencia</Text></Divider>
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
                <Drawer
                    placement={placement}
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    key={placement}
                >
                    <Row justify="space-around">
                        <Col xs={24}>
                            <Card data={data?.personalData} />
                        </Col></Row>
                </Drawer>
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
                                            {parse(item.resume[0])}
                                            {parse(item.resume[1])}
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