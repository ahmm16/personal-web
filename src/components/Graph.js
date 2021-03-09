import React from 'react';
import ReactApexChart from 'react-apexcharts'

const Graph = ({ data }) => {
    return <ReactApexChart options={data?.options} series={data?.series} type="treemap" height={380} />;
}

export default Graph