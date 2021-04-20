import React from "react";
import { Typography } from "antd";
import { SmileFilled, MehFilled } from "@ant-design/icons";
import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";
const { Paragraph } = Typography;

const Graph = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <Paragraph style={{ marginLeft: 10 }}>
        <SmileFilled style={{ fontSize: 16, color: "rgba(53,173,216,0.85)" }} />{" "}
        100: {t("skills_section_text_use_daily")} |{" "}
        <MehFilled style={{ fontSize: 16, color: "rgba(155,214,236,0.85)" }} />{" "}
        10: {t("skills_section_text_little_monthly_use")}
      </Paragraph>
      <ReactApexChart
        options={data?.options}
        series={data?.series}
        type="treemap"
        height={380}
      />
    </>
  );
};

export default Graph;
