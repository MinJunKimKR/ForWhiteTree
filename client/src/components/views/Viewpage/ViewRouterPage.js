import React, { useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Switch } from "react-router-dom"
import { Space, Typography, Button } from 'antd';
import viewPage from './ViewPage'
import viewPage2 from './Viewpage2'
const { Title, Paragraph, Text } = Typography;


function LandingPage({ match }) {
    useEffect(() => {
        console.log('match view page : ', match)
        console.log(`${match.path}/second`)
        axios.get('/api').then((response) => {
            console.log(response.data);
        });
    }, []);
    return (
        <>
            <Route exact path={match.path} component={viewPage} />
            <Route exact path={`${match.path}/second`} component={viewPage2} />
        </>
    );
}

export default LandingPage;
