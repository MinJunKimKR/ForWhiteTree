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
                    <img src="https://jmagazine.joins.com/_data/photo/2019/05/3717398825_HQJ3squO_1.jpg" style={{ width: "300px" }} alt="image" border="0" />
                    <img src="https://thumbnail7.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2019/08/22/15/4/25c4b079-4f9f-40e7-a6d6-1e24b53db752.jpg" style={{ width: "300px" }} alt="image" border="0" />
                    <img src="https://www.thevoiceofus.co.kr/data/photos/20191144/art_15725746724215_9f4b03.jpg" style={{ width: "300px" }} alt="image" border="0" />

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
