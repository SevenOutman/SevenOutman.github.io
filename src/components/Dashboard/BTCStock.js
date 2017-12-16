import React from 'react'
import { Card } from 'antd'
import { connect } from 'dva'
import classnames from 'classnames'
import styles from './BTCStock.less'

function BTCStock ({ btc }) {
  return (
    <Card bordered={false} hoverable>
      <div className={styles.normal}>
        <div className={styles.iconWarp}>
          <img src="https://s.zb.com/statics/img/v2/trans/market-btc.png" role="presentation" />
        </div>
        <div className={styles.content}>
          <p className={styles.title}>BTC/USDT</p>
          <p className={classnames([styles.number, styles[btc.change]])}>
            {btc.ticker.last || '--'}
          </p>
        </div>
      </div>
    </Card>
  )
}

function mapState2Props (state) {
  return {
    // loading: state.loading.models.dashboard.btc,
    btc: state.dashboard.btc,
  }
}

export default connect(mapState2Props)(BTCStock)
