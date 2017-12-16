import React from 'react'
import styles from './Sider.less'
import { Icon, Menu, Layout as AntLayout, Avatar } from 'antd'
import { Link } from 'dva/router'

const { Sider: AntSider } = AntLayout

function Sider ({ location }) {
  return (
    <AntSider
      className={styles.normal}
      width={224}
    >
      <a
        className={styles.logo}
        href="https://github.com/SevenOutman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar src="https://avatars3.githubusercontent.com/u/8225666?s=460&v=4" size="large" />
        <span className={styles.name}>SevenOutman</span>
      </a>
      <Menu
        theme="dark" mode="inline"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="laptop" />
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="/events">
          <Link to="/events">
            <Icon type="user" />
            Events
          </Link>
        </Menu.Item>
        <Menu.Item key="/repos">
          <Link to="/repos">
            <Icon type="video-camera" />
            Repos
          </Link>
        </Menu.Item>
      </Menu>
    </AntSider>
  )
}

export default Sider
