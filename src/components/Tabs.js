import React, { useState } from "react";
import parse from "html-react-parser";
import { Collapse, Typography, Tag } from "antd";
import { LinkOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const Tabs = ({ data }) => {
  const { t } = useTranslation();
  const [ellipsis] = useState(false);
  const genExtra = (url) => (
    <LinkOutlined
      onClick={() => {
        window.open(url, "_blank");
      }}
    />
  );
  return (
    <Collapse
      defaultActiveKey={["0"]}
      bordered={false}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
    >
      {data &&
        data.map((item, index) => {
          return (
            <Panel
              header={`${t(item.companyName)}`}
              key={index}
              extra={item.url ? genExtra(item.url) : false}
            >
              <Title level={5}>
                {t(item.roll)} | {t(item.date)}{" "}
              </Title>
              <Paragraph>{t(item.dailyFunctions)}</Paragraph>
              <Paragraph>{t(item.skills.title)}</Paragraph>
              <Paragraph>
                {item.skills?.bullets.map((item, index) => (
                  <Tag color="processing" key={index}>
                    {t(item)}
                  </Tag>
                ))}
              </Paragraph>
              {item?.projects && (
                <Text>{t("experience_section_text_projects")}: </Text>
              )}
              <ul>
                {/*TODO: IMPROVE DOUBLE .MAP */}
                {item?.projects?.map((item, index) => {
                  return (
                    <li key={index}>
                      <Paragraph
                        ellipsis={
                          !ellipsis
                            ? {
                                rows: 3,
                                expandable: true,
                                symbol: t("experience_section_text_show_more"),
                              }
                            : false
                        }
                      >
                        {t(item.name)}: {parse(t(item.resume))}
                      </Paragraph>
                    </li>
                  );
                })}
              </ul>
            </Panel>
          );
        })}
    </Collapse>
  );
};

export default Tabs;
