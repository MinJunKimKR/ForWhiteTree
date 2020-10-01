import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Space } from 'antd';
import LandingPage from './components/views/LandingPage/LandingPage';
import ViewPage from './components/views/Viewpage/ViewRouterPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import './Layout.css'

const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Layout className="layout">
      <Router>
        <Header>
          <Link to="/">
            <Space align="baseline">
              <img style={{ width: '40px' }} src="https://i.ibb.co/vx9Y1Gm/image.jpg" alt="image" border="0" />
              <h1 style={{ color: '#FFF' }}>Happy birthday</h1>
            </Space>
          </Link>
        </Header>
        <Content>
          <div className="site-layout-content">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/page" component={ViewPage} />
              <Route path="/login" component={LoginPage} />
            </Switch>
          </div>
        </Content>
        <Footer></Footer>
      </Router>
    </Layout>
  );
}

export default App;
