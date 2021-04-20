import React from "react";
import { Timeline } from "antd";
import { useTranslation } from "react-i18next";

const TimeLine = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Timeline mode="left" style={{ padding: "20px 40px 0px 0px" }}>
      {data.map((item, index) => {
        return (
          <Timeline.Item key={index} label={item.show ? item.date : ""}>
            {t(item.title)}
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};

export default TimeLine;
