import React, { useEffect } from 'react';
import axios from 'axios';
import { Space, Input, Typography, Button } from 'antd';
const { Title, Paragraph, Text } = Typography;


function ViewPage() {
    useEffect(() => {
        axios.get('/api').then((response) => {
            console.log(response.data);
        });
    }, []);
    return (
        <Typography style={{ marginTop: '18%', textAlign: 'center' }}>

            <Space style={{ width: '100%' }} direction="vertical">
                <Title>Insert password</Title>
                <Input placeholder='비밀번호를 입력하세요' style={{ width: '40%', marginTop: '50px' }} />
                <Button style={{ marginTop: '10px', width: '40%', height: '50px', fontSize: '18pt' }} type="primary">
                    상자까보기 🎁
                </Button>
            </Space>
        </Typography>
    );
}

export default ViewPage;
