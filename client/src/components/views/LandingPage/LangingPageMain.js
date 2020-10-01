import React, { useEffect } from 'react';
import { Route, Link } from "react-router-dom"
import { Space, Typography, Button } from 'antd';
const { Title, Paragraph, Text } = Typography;


function LandingPage({ }) {
    return (
        <Typography style={{ marginTop: '18%', textAlign: 'center' }}>
            <Title>For the my precious friend White Tree</Title>
            <Title level={2}>Happy birthday my man<br></br>This page is made only for you</Title>
            <Link to="/login">
                <Button style={{ marginTop: '50px', width: '70%', height: '70px', fontSize: '20pt' }} type="primary" >
                    로그인 하러가기
                </Button>
            </Link>
        </Typography>
    );
}

export default LandingPage;
