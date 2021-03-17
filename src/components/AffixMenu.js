import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { Layout, Affix, Menu } from 'antd';
import { ProfileOutlined, RadarChartOutlined, IdcardOutlined, PlusSquareOutlined } from '@ant-design/icons';
import {
    useScrollSections,
} from 'react-scroll-section';

const { Header } = Layout;

const iconFilter = (name) => {
    let icon = null
    switch (name) {
        case 'Experiencia':
            icon = <IdcardOutlined />
            break;
        case 'Habilidades':
            icon = <RadarChartOutlined />
            break;
        case 'Cursos':
            icon = <ProfileOutlined />
            break;
        case 'Collaboraciones':
            icon = <PlusSquareOutlined />
            break;
        default:
            icon = null
    }
    return icon
}
const AffixMenu = ({ mode }) => {
    const [top] = useState(0);
    const [current, setCurrent] = useState('')
    const sections = useScrollSections();
    return (
        <Affix offsetTop={top}>
            <Header>

                <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={current} mode="horizontal">
                    {sections.map(({ id, onClick, selected }) => (
                        <Menu.Item key={id} icon={iconFilter(id)} onClick={onClick} selected={selected}>
                            {id}
                        </Menu.Item>
                    ))}
                    {/*
                    //TODO: FINISH BLOGS
                    <Menu.Item key="blog-menu" icon={<PlusSquareOutlined />} >
                        <Link to="/blog">Blog</Link>
                    </Menu.Item> */}
                </Menu>
            </Header>
        </Affix>
    );
};

export default AffixMenu