import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { connect } from 'dva'
import styles from './EventList.css'

function EventList ({ events: dataSource, loading }) {
  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 200,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 120,
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 260,
    },
    {
      title: 'Actor',
      dataIndex: 'actor.login',
      key: 'actor',
      width: 200,
    },
    {
      title: 'Repo',
      dataIndex: 'repo.name',
      key: 'repo',
      width: 300,
    },
    {
      title: 'Commits',
      key: 'commits',
      width: 300,
      render: (event) => {
        const commits = event.payload && event.payload.commits || []
        if (commits.length > 0) {
          return <a href={commits[0].url} rel="noopener noreferrer" target="_blank">{commits[0].message}</a>
        }
        return '--'
      },
    },
  ]
  return (
    <div className={styles.normal}>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={record => record.id}
        loading={loading}
      />
    </div>
  )
}

EventList.propTypes = {
  events: PropTypes.array,
  loading: PropTypes.bool,
}

function mapState2Props (state) {
  return {
    loading: state.loading.models.events,
    events: state.events,
  }
}

export default connect(mapState2Props)(EventList)
