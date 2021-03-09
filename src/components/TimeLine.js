import React from 'react'
import { Timeline } from 'antd';

const TimeLine = ({ data }) => {
    return (
        <Timeline mode='left' style={{ backgroundColor: '#fff', padding: '20px 0px' }}>
            {data.map((item, index) => {
                return <Timeline.Item key={index} label={item.show ? item.date : ''}>{item.title}</Timeline.Item>
            })}
        </Timeline>
    )
}


export default TimeLine