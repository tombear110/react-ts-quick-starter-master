import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'

import './index.scss'

const { Sider } = Layout

const SiderLement = (props: { collapsed: boolean }) => {
  const { collapsed } = props
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className='logo' />
      <Router>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1' icon={<UserOutlined />}>
            <Link to='/home'>Home</Link>
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            <Link to='/users'>Users</Link>
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            <Link to='/contact'>contact</Link>
          </Menu.Item>
        </Menu>
      </Router>
    </Sider>
  )
}

export default SiderLement
