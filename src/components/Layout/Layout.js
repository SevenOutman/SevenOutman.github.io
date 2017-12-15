import React from 'react'
import { Layout as AntLayout } from 'antd'
import Sider from './Sider'
import styles from './Layout.less'

const { Content } = AntLayout

function Layout ({ location, children }) {
  return (
    <AntLayout className={styles.normal}>
      <Sider location={location} />
      <AntLayout>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  )
}

export default Layout
