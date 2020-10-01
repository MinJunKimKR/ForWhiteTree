import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Space, Input, Typography, Button } from 'antd';
const { Title, Paragraph, Text } = Typography;


function ViewPage({ history }) {
    const [password, setPassword] = useState("")

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const checkPassword = () => {
        if (password) {
            axios.post('/api/giftbox/main', { 'password': password }).then(response => {
                if (response.data.result) {
                    history.push('/page')
                } else {
                    alert('비밀번호가 틀렸습니다')
                }
            })
        } else {
            alert('비밀번호를 입력해주세요')
        }
    }

    useEffect(() => {
        axios.get('/api').then((response) => {
            console.log(response.data);
        });
    }, []);
    return (
        <Typography style={{ marginTop: '18%', textAlign: 'center' }}>

            <Space style={{ width: '100%' }} direction="vertical">
                <Title>Insert password</Title>
                <Input placeholder='비밀번호를 입력하세요' style={{ width: '40%', marginTop: '50px' }} value={password} onChange={onPasswordHandler} />
                <Button style={{ marginTop: '10px', width: '40%', height: '50px', fontSize: '18pt' }} type="primary" onClick={checkPassword}>
                    상자까보기 🎁
                </Button>
            </Space>
        </Typography>
    );
}

export default ViewPage;
