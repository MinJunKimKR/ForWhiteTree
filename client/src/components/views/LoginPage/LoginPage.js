import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom"
import { Space, Typography, Button } from 'antd';
const { Title, Paragraph, Text } = Typography;


function LoginPage(history) {
    return (
        <Typography style={{ marginTop: '18%', textAlign: 'center' }}>

            <Space style={{ width: '100%' }} direction="vertical">
                <Link to="/page">
                    <Button style={{ marginTop: '10px', width: '40%', height: '50px', fontSize: '18pt' }} type="primary">
                        상자까보기 🎁
                </Button>
                </Link>
            </Space>
        </Typography>
    );
}

export default LoginPage;
