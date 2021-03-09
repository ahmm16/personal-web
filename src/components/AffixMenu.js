import React, { useState } from 'react';
import { Layout, Affix, Menu } from 'antd';
import { ProfileOutlined, RadarChartOutlined, IdcardOutlined, PlusSquareOutlined } from '@ant-design/icons';
import {
    useScrollSection,
} from 'react-scroll-section';

const { Header } = Layout;

const AffixMenu = () => {
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
                        Experiencia
                    </Menu.Item>
                    <Menu.Item key="skills-menu" icon={<RadarChartOutlined />} onClick={skillsSection.onClick} selected={skillsSection.selected}>
                        Skills
                    </Menu.Item>
                    <Menu.Item key="courses-menu" icon={<ProfileOutlined />} onClick={coursesSection.onClick} selected={coursesSection.selected}>
                        Cursos
                     </Menu.Item>
                    <Menu.Item key="collabs-menu" icon={<PlusSquareOutlined />} onClick={collabsSection.onClick} selected={collabsSection.selected}>
                        Collabs
                     </Menu.Item>
                </Menu>
            </Header>
        </Affix>
    );
};

export default AffixMenu