import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'

import './index.scss'

const { Sider } = Layout

const SiderLement = (props: { collapsed: boolean }) => {
  const { collapsed } = props
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className='logo' />
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='1' icon={<UserOutlined />}>
          <NavLink to='/'>Home</NavLink>
        </Menu.Item>
        <Menu.Item key='2' icon={<VideoCameraOutlined />}>
          <NavLink to='/users'>Users</NavLink>
        </Menu.Item>
        <Menu.Item key='3' icon={<UploadOutlined />}>
          <NavLink to='/contact'>contact</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SiderLement
