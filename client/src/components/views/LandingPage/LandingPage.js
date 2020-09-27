import React, { useEffect } from 'react';
import axios from 'axios';
import './landing.css'
import { Route, Link } from "react-router-dom"
import { Space, Typography, Button } from 'antd';
import MainLandingPage from './LangingPageMain'
import SecondPage from './LangdingPage2'
const { Title, Paragraph, Text } = Typography;


function LandingPage({ match }) {
  useEffect(() => {
    axios.get('/api').then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <Route exact path={match.path} component={MainLandingPage} />
      <Route exact path={`${match.path}/second`} component={SecondPage} />
    </>
  );
}

export default LandingPage;
