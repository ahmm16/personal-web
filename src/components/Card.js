import React from 'react'
import { Card, Typography, Avatar, Switch } from 'antd';
import { LinkedinOutlined, MailOutlined } from '@ant-design/icons';
//import avatar from '../assets/images/alex.png'
import avatar2 from '../assets/images/alex2.png'

const { Text } = Typography;

const OwnCard = ({ data, darkMode, setDarkMode }) => {
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
            <Text><MailOutlined /> <a title="linkedin" href={'mailto:' + data.socialNetworks.email} rel="noreferrer">{data.email}</a></Text><br />
            <Text><LinkedinOutlined /> <a title="linkedin" href={data.socialNetworks.url} target="_blank" rel="noreferrer">{data.socialNetworks.name}</a></Text><br /><br />
            <Text><Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> Dark mode</Text>
        </Card >
    )
}
export default OwnCard