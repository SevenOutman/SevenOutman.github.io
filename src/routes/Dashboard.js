import React from 'react'
import { connect } from 'dva'
import { Row, Col, Breadcrumb, Icon } from 'antd'
import styles from './Dashboard.css'
import Layout from '../components/Layout/Layout'
import BTCStock from '../components/Dashboard/BTCStock'

function Dashboard () {
  return (
    <Layout location={location}>
      <div className={styles.normal}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Icon type="laptop" /> Dashboard widgets
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row gutter={24}>
          <Col md={6}>
            <BTCStock />
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(Dashboard)
