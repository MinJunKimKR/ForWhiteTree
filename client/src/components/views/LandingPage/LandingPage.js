import React, { useEffect } from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom"
import { Space, Typography, Button } from 'antd';
import MainLandingPage from './LangingPageMain'
const { Title, Paragraph, Text } = Typography;


function LandingPage({ match }) {
  useEffect(() => {
    console.log('match second : ', match)
    axios.get('/api').then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <Route exact path={match.path} component={MainLandingPage} />
    </>
  );
}

export default LandingPage;
