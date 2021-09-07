import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Divider,
  Typography,
  List,
  Avatar,
  Tree,
} from "antd";
import parse from "html-react-parser";
import { data } from "../data/data.json";
import Footer from "../components/Footer";
import AffixMenu from "../components/AffixMenu";
import { DownOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const SquareAnimation = () => {
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ul className="bg-bubbles">
      {squares.map((item, index) => {
        return <li key={index}></li>;
      })}
    </ul>
  );
};
const Blog = () => {
  const [ellipsis] = useState(false);
  const [darkMode] = useState(false);
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  return (
    <Layout
      style={{ background: "#23a6d5", overflow: "hidden" }}
      className={`layout ${darkMode ? "dark-mode" : ""}`}
    >
      <SquareAnimation />
      {/* Header */}
      <AffixMenu mode={"blog"} />
      <Divider style={{ backgroundColor: "#f0f2f5" }}>
        <Text>Blog</Text>
      </Divider>
      <Content>
        <Row justify="space-around">
          <Col xs={24} sm={18}>
            <List
              style={{ backgroundColor: "#fff" }}
              bordered
              itemLayout="vertical"
              size="large"
              dataSource={data?.blog}
              renderItem={(item, index) => (
                <List.Item
                  key={index}
                  extra={
                    item?.tree && (
                      <Tree
                        showLine
                        switcherIcon={<DownOutlined />}
                        defaultExpandedKeys={["0-0-1"]}
                        onSelect={onSelect}
                        treeData={data?.blog[0].tree}
                      />
                    )
                  }
                >
                  <Title level={5}>{item.title}</Title>
                  {item.content?.map((text, indexContent) => {
                    return (
                      <Paragraph key={indexContent}>
                        {parse(text.paragraph)}
                      </Paragraph>
                    );
                  })}
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Content>
      <Divider style={{ backgroundColor: "#f0f2f5" }}></Divider>
      {/* Footer */}
      <Footer />
    </Layout>
  );
};

export default Blog;
