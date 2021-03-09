import React, { useState } from 'react';
import parse from 'html-react-parser'
import { Collapse, Typography, Tag, Switch } from 'antd';
import { LinkOutlined, CaretRightOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const Tabs = ({ data }) => {
    const [ellipsis, setEllipsis] = useState(false);
    const ShowMore = () => <Switch
        checked={ellipsis}
        onChange={() => {
            setEllipsis(!ellipsis);
        }} />

    const genExtra = (url) => (
        <LinkOutlined
            onClick={event => {
                window.open(url, '_blank');
            }}
        />
    );
    const callback = () => {
        console.log("click")
    }
    return (
        <Collapse /*defaultActiveKey={['1']}*/ onChange={callback}
            bordered={false}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        >
            {data && data.map((item, index) => {
                return (
                    <Panel header={`${item.companyName}`} key={index} extra={genExtra(item.url)}>
                        <Title level={5}>{item.roll} | {item.dateRange} </Title>
                        <Paragraph>{item.dailyFunctions}</Paragraph>
                        <Paragraph>{item.skills?.title}</Paragraph>
                        <Paragraph>{item.skills?.bullets.map((item, index) => <Tag color="processing" key={index}>{item}</Tag>)}</Paragraph>
                        {item?.projects && <Text>Proyectos: </Text>}
                        <ul>
                            {/*TODO: IMPROVE DOUBLE .MAP */}
                            {item?.projects?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Paragraph ellipsis={!ellipsis ? { rows: 3, expandable: true, symbol: 'mostrar más' } : false}>
                                            {item.name}:  {parse(item.resume)}
                                        </Paragraph>
                                    </li>
                                )
                            })}
                        </ul>
                    </Panel>
                )
            })}
        </Collapse >
    )
}

export default Tabs