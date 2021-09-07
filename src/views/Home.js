import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Divider,
  Typography,
  List,
  Avatar,
  Drawer,
  Tag,
} from "antd";
import parse from "html-react-parser";
import { data } from "../data/data.json";
import { ScrollingProvider, Section } from "react-scroll-section";
import AffixMenu from "../components/AffixMenu";
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";
import Graph from "../components/Graph";
import TimeLine from "../components/TimeLine";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const { Content } = Layout;
const { Text, Paragraph } = Typography;

const Home = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [visible, setVisible] = useState(false);
  const [placement] = useState("left");

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout className={`layout ${darkMode ? "dark-mode" : ""}`}>
      <ScrollingProvider>
        {/* UserCard */}
        <Drawer
          className={`${darkMode ? "dark-mode" : ""}`}
          placement={placement}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={placement}
        >
          <Row justify="space-around">
            <Col xs={24}>
              <Card
                data={data?.personalData}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            </Col>
          </Row>
        </Drawer>
        {/* Header */}
        <AffixMenu />
        {/* Hero */}
        <Hero setVisible={setVisible} />
        {/* Experience */}
        <Section id="menu_section_experience">
          <Divider>
            <Text>{t("experience_section_text_title")}</Text>
          </Divider>
          <Content>
            <Row justify="space-around">
              <Col xs={24} sm={18}>
                <Tabs data={data.experience} />
              </Col>
            </Row>
          </Content>
        </Section>
        {/* Skill Graph */}
        <Section id="menu_section_skills">
          <Divider>
            <Text>{t("skills_section_text_title")}</Text>
          </Divider>
          <Content>
            <Row justify="space-around">
              <Col xs={24} sm={18}>
                <Graph data={data?.skills} />
              </Col>
            </Row>
          </Content>
        </Section>
        {/* Courses */}
        <Section id="menu_section_courses">
          <Divider>
            <Text>{t("courses_section_text_title")}</Text>
          </Divider>
          <Content>
            <Row justify="space-around">
              <Col xs={24} sm={18}>
                <List style={{ backgroundColor: "#fff" }} bordered>
                  <TimeLine data={data?.courses} />
                </List>
              </Col>
            </Row>
          </Content>
        </Section>
        {/* Collab */}
        <Section id="menu_section_collaborations">
          <Divider>
            <Text>{t("collabs_section_text_title")}</Text>
          </Divider>
          <Content>
            <Row justify="space-around">
              <Col xs={24} sm={18}>
                <List
                  style={{ backgroundColor: "#fff" }}
                  bordered
                  itemLayout="vertical"
                  size="large"
                  dataSource={data?.collaboration}
                  renderItem={(item) => (
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
                        description={parse(t(item.description))}
                      />
                      <Paragraph>{t("collabs_section_text_goals")}: </Paragraph>
                      <ul>
                        {item.resume.map((resume, index) => {
                          return <li key={index}>{parse(t(resume))}</li>;
                        })}
                      </ul>
                      <br />
                      <Paragraph>
                        {t("collabs_section_text_tecnologies")}
                        {": "}
                      </Paragraph>
                      <Paragraph>
                        {item.skills?.map((item, index) => (
                          <Tag color="processing" key={index}>
                            {t(item)}
                          </Tag>
                        ))}
                      </Paragraph>
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
    </Layout>
  );
};

export default Home;
