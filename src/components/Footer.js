import React from 'react';
import { Layout, BackTop } from 'antd'
import { HeartTwoTone } from '@ant-design/icons';

const { Footer } = Layout;

const OwnFooter = () => {
    return (
        <>
            <BackTop />
            <Footer>Made with <HeartTwoTone /> by Alex</Footer>
        </>
    )
}

export default OwnFooter