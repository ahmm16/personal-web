import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Layout, Affix, Menu } from "antd";
import {
  ProfileOutlined,
  RadarChartOutlined,
  IdcardOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { useScrollSections } from "react-scroll-section";
import { useTranslation } from "react-i18next";

const { Header } = Layout;

const iconFilter = (name) => {
  let icon = null;
  switch (name) {
    case "menu_section_experience":
      icon = <IdcardOutlined />;
      break;
    case "menu_section_skills":
      icon = <RadarChartOutlined />;
      break;
    case "menu_section_courses":
      icon = <ProfileOutlined />;
      break;
    case "menu_section_collaborations":
      icon = <PlusSquareOutlined />;
      break;
    default:
      icon = null;
  }
  return icon;
};
const AffixMenu = ({ mode }) => {
  const { t, i18n } = useTranslation();
  const [top] = useState(0);
  const [current, setCurrent] = useState("");
  const sections = useScrollSections();
  return (
    <Affix offsetTop={top}>
      <Header>
        <Menu
          onClick={(e) => setCurrent(e.key)}
          selectedKeys={current}
          mode="horizontal"
        >
          {sections.map(({ id, onClick, selected }) => (
            <Menu.Item
              key={id}
              icon={iconFilter(id)}
              onClick={onClick}
              selected={selected}
            >
              {t(id)}
            </Menu.Item>
          ))}
          {/*
                    //TODO: FINISH BLOGS
                    <Menu.Item key="blog-menu" icon={<PlusSquareOutlined />} >
                        <Link to="/blog">Blog</Link>
                    </Menu.Item> */}
          {i18n.language === "es" && (
            <Menu.Item>
              <img
                src="https://www.countryflags.io/gb/flat/24.png"
                alt=""
                value="United Kingdom"
                onClick={() => i18n.changeLanguage("en")}
              />
            </Menu.Item>
          )}
          {i18n.language === "en" && (
            <Menu.Item>
              <img
                src="https://www.countryflags.io/es/flat/24.png"
                alt=""
                value="Spain"
                onClick={() => i18n.changeLanguage("es")}
              />
            </Menu.Item>
          )}
        </Menu>
      </Header>
    </Affix>
  );
};

export default AffixMenu;
