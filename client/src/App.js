import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Typography, Layout } from 'antd';
import LandingPage from './components/views/LandingPage/LandingPage';
import ViewPage from './components/views/Viewpage/ViewPage'
import './Layout.css'

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header>

          <h1 style={{ color: '#FFF' }}>Happy birthday</h1>
        </Header>
        <Content>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/page" component={ViewPage} />
            </Switch>
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Router>
    </Layout>
  );
}

export default App;
