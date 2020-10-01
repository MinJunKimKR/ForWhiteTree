import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Space, Input, Typography, Button } from 'antd';
const { Title, Paragraph, Text } = Typography;

let imageNum = 0;
const imageObj = {
    '0': 'https://i.ibb.co/4gXyWLr/Kakao-Talk-Photo-2020-10-02-03-09-43.jpg',
    '1': 'https://i.ibb.co/zrNv7Bh/Kakao-Talk-Photo-2020-10-02-03-10-01.jpg',
    '2': 'https://i.ibb.co/Zcp6RjV/Kakao-Talk-Photo-2020-10-02-03-10-11.jpg',
    '3': 'https://i.ibb.co/726YWJ6/Kakao-Talk-Photo-2020-10-02-03-10-21.jpg',
    '4': 'https://i.ibb.co/QbNZ27y/Kakao-Talk-Photo-2020-10-02-03-10-29.jpg'
}

function ViewPage() {
    const [url, setUrl] = useState("")

    const onUrlHandler = () => {
        console.log(imageNum)
        imageNum++;
        if (imageNum > 4) {
            imageNum = 0;
        }
        setUrl(imageObj[imageNum])
    }
    useEffect(() => {
        setUrl(imageObj[imageNum])
        axios.get('/api').then((response) => {
            console.log(response.data);
        });
    }, []);

    return (
        <Typography onClick={onUrlHandler} style={{ marginTop: '5%', textAlign: 'center' }}>
            <Space style={{ width: '100%', marginTop: '25%' }} direction="vertical">
                <Title>10 YEARS</Title>
                <img src={url} style={{ width: '100%' }} alt="2020-09-15-12-53-30" border="0" />
            </Space>
        </Typography >
    );
}

export default ViewPage;
