import React, { useState, Suspense } from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import SiderElement from './sider'

import './index.scss'

const { Header, Content } = Layout

const RouteElement = () => {
  const Home = React.lazy(() => import('Src/pages/home'))
  const Users = React.lazy(() => import('Src/pages/users'))
  const Contact = React.lazy(() => import('Src/pages/contact'))
  const Notfound = React.lazy(() => import('Src/pages/not-found'))
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={Users} />
      <Route path='/contact' component={Contact} />
      <Route component={Notfound} />
    </Switch>
  )
}

const LayoutElement = () => {
  const [collapsed, setCollapsed] = useState(false)

  const changeMenu = (type: boolean) => {
    setCollapsed(!type)
  }

  const HeaderElement = (
    <Header className='site-layout-background' style={{ padding: 0 }}>
      <span className='trigger'>
        {collapsed ? (
          <MenuUnfoldOutlined onClick={() => changeMenu(true)} />
        ) : (
          <MenuFoldOutlined onClick={() => changeMenu(false)} />
        )}
      </span>
    </Header>
  )

  const siderProps = {
    collapsed,
  }

  const suspenseProps = {
    fallback: <Spin />,
    maxDuration: 500,
  }

  return (
    <Suspense {...suspenseProps}>
      <Router>
        <Layout className='layout'>
          <SiderElement {...siderProps} />
          <Layout className='site-layout'>
            {HeaderElement}
            <Content
              className='site-layout-background'
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <RouteElement />
            </Content>
          </Layout>
        </Layout>
      </Router>
    </Suspense>
  )
}

export default LayoutElement
