import React from 'react'
import { Layout as AntLayout } from 'antd'
import Sider from './Sider'
import styles from './Layout.less'

const { Content, Footer } = AntLayout

function Layout ({ location, children }) {
  return (
    <AntLayout className={styles.normal}>
      <Sider location={location} />
      <AntLayout>
        <Content className={styles.content}>
          {children}
        </Content>
        <Footer>
          Inspired by <a href="http://antd-admin.zuiidea.com/" target="_blank" rel="noopener noreferrer">Ant Design
          Admin</a>
        </Footer>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
