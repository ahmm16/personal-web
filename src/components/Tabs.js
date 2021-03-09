import React from 'react';
import parse from 'html-react-parser'
import { Collapse, Typography, Tag } from 'antd';
import { LinkOutlined, CaretRightOutlined } from '@ant-design/icons'
const { Title, Text } = Typography;
const { Panel } = Collapse;

const Tabs = ({ data }) => {
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
                        <Text></Text>
                        <Text><p>{item.dailyFunctions}</p></Text>
                        <Text><p>{item.skills?.title}</p></Text>
                        <Text><p>{item.skills?.bullets.map((item, index) => <Tag color="processing" key={index}>{item}</Tag>)}</p></Text>
                        {item?.projects && <Text>Proyectos: </Text>}
                        <ul>
                            {/*TODO: IMPROVE DOUBLE .MAP */}
                            {item?.projects?.map((item, index) => {
                                return (<li key={index}>{item.name}: {parse(item.resume)}</li>)
                            })}
                        </ul>
                    </Panel>
                )
            })}
        </Collapse>
    )
}

export default Tabs