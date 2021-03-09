import React from 'react'
import { Timeline } from 'antd';

const TimeLine = ({ data }) => {
    return (
        <Timeline mode='left' style={{ marginRight: 20 }}>
            {data.map((item, index) => {
                return <Timeline.Item key={index} label={item.show ? item.date : ''}>{item.title}</Timeline.Item>
            })}
        </Timeline>
    )
}


export default TimeLine