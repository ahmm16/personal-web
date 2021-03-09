import React from 'react';
import { Layout, Row, Col, Divider, Typography, List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
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
import Footer from '../components/Footer';

const { Content } = Layout;
const { Text } = Typography;

const Home = () => {
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <Layout className="layout">
            <ScrollingProvider>
                {/* Header */}
                <AffixMenu />
                {/* Hero */}
                <Hero />
                {/* Experience */}
                <Divider><Text>Experiencia</Text></Divider>
                <Section id="experience">
                    <Content>
                        <Row justify="space-around">
                            <Col xs={24} sm={18}>
                                <Tabs data={data.experience} />
                            </Col>
                        </Row>
                    </Content>
                </Section>
                {/* Skill Graph */}
                <Divider><Text>Tecnologías usadas mensualmente</Text></Divider>
                <Section id="skills">
                    <Content>
                        <Row justify="space-around">
                            <Col xs={24} sm={18}>
                                <Graph data={data?.skills} />
                            </Col>
                        </Row>
                    </Content>
                </Section>
                {/* Courses */}
                <Divider><Text>Cursos realizados</Text></Divider>
                <Section id="courses">
                    <Content>
                        <Row justify="space-around">
                            <Col xs={24} sm={18}>
                                <TimeLine data={data?.courses} />
                            </Col>
                        </Row>
                    </Content>
                </Section>
                <Divider><Text>Colaboraciones</Text></Divider>
                <Section id="collabs">
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