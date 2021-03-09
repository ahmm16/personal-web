import React from 'react'
import { Card, Typography, Avatar } from 'antd';
import { LinkedinOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import avatar from '../assets/images/alex.png'
import avatar2 from '../assets/images/alex2.png'

const { Meta } = Card;
const { Text } = Typography;
const OwnCard = ({ data }) => {
    return (
        <Card bordered={false} style={{ justifyContent: 'center', textAlign: 'center' }}>
            <Avatar
                size={120}
                src={avatar2}
                style={{ marginBottom: 10 }}
            />
            <br />
            <Text>{data.name}</Text><br />
            <Text type="secondary">{data.roll}</Text><br />
            <Text><MailOutlined /> {data.email}</Text><br />
            <Text><LinkedinOutlined /><a title="linkedin" href={data.socialNetworks.url} target="_blank">{data.socialNetworks.name}</a></Text>
        </Card >
    )
}
export default OwnCard