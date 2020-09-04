import React, { useState } from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import RouteElement from './route'
import SiderElement from './sider'

import './index.scss'

const { Header, Content } = Layout

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

  return (
    <Layout className='main'>
      <SiderElement {...siderProps} />
      {HeaderElement}
      <Layout className='site-layout'>
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
  )
}

export default LayoutElement
