import React, { useEffect } from 'react';
import axios from 'axios';
import { Space, Typography } from 'antd';
const { Title, Paragraph } = Typography;


function ViewPage() {
    useEffect(() => {
        axios.get('/api').then((response) => {
            console.log(response.data);
        });
    }, []);
    return (
        <Typography style={{ marginTop: '5%', textAlign: 'center' }}>

            <Space style={{ width: '100%' }} direction="vertical">
                <Space style={{ margin: 'auto' }} direction="horizontal">
                    <img src="https://i.ibb.co/vx9Y1Gm/image.jpg" alt="image" border="0" />
                    <img src="https://i.ibb.co/vx9Y1Gm/image.jpg" alt="image" border="0" />
                    <img src="https://i.ibb.co/vx9Y1Gm/image.jpg" alt="image" border="0" />

                </Space>
                <Space style={{ margin: 'auto' }} direction="vertical">
                    <Paragraph style={{ textAlign: 'left' }}>
                        <Title>Happy birthday dear my friend</Title>
                    </Paragraph>
                </Space>
            </Space>
        </Typography >
    );
}

export default ViewPage;
