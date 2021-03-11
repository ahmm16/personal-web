import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Layout, Affix, Menu } from 'antd';
import { ProfileOutlined, RadarChartOutlined, IdcardOutlined, PlusSquareOutlined } from '@ant-design/icons';
import {
    useScrollSection,
} from 'react-scroll-section';

const { Header } = Layout;
//TODO: IMPROVE THIS MENU NAVIGATION
const AffixMenu = ({ mode }) => {
    const [top] = useState(0);
    const [current, setCurrent] = useState('')

    const experienceSection = useScrollSection('experience');
    const skillsSection = useScrollSection('skills');
    const coursesSection = useScrollSection('courses');
    const collabsSection = useScrollSection('collabs');
    return (
        <Affix offsetTop={top}>
            <Header>
                <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={current} mode="horizontal">
                    <Menu.Item key="experience-menu" icon={<IdcardOutlined />} onClick={experienceSection.onClick} selected={experienceSection.selected}>
                        {mode === 'blog' ? <Link to="/">Experiencia</Link> : "Experiencia"}
                    </Menu.Item>
                    <Menu.Item key="skills-menu" icon={<RadarChartOutlined />} onClick={skillsSection.onClick} selected={skillsSection.selected}>
                        {mode === 'blog' ? <Link to="/">Skills</Link> : "Skills"}
                    </Menu.Item>
                    <Menu.Item key="courses-menu" icon={<ProfileOutlined />} onClick={coursesSection.onClick} selected={coursesSection.selected}>
                        {mode === 'blog' ? <Link to="/">Cursos</Link> : "Cursos"}
                    </Menu.Item>
                    <Menu.Item key="collabs-menu" icon={<PlusSquareOutlined />} onClick={collabsSection.onClick} selected={collabsSection.selected}>
                        {mode === 'blog' ? <Link to="/">Collabs</Link> : "Collabs"}
                    </Menu.Item>
                    <Menu.Item key="blog-menu" icon={<PlusSquareOutlined />} >
                        <Link to="/blog">Blog</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Affix>
    );
};

export default AffixMenu