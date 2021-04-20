import React from "react";
import { Typography } from "antd";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

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

const Hero = ({ setVisible }) => {
  const { t } = useTranslation();
  return (
    <section
      className="hero"
      style={{ cursor: "pointer" }}
      onClick={() => setVisible(true)}
    >
      <div className="overlay">
        <SquareAnimation />
        <div className="content">
          <Title>{`{${t("hero_section_title")}}`}</Title>
          <Text>{parse(t("hero_section_subtitle"))}</Text>
          <Text type="secondary" className="hero-details">
            {t("hero_section_details")}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Hero;
