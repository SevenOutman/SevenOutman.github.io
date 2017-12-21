import React from 'react'
import styles from './RepoList.css'
import { Table } from 'antd'
import { connect } from 'dva'

function RepoList ({ repos: dataSource, loading }) {
  const columns = [
    {
      title: 'Name',
      key: 'name',
      width: 200,
      render: repo => <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>,
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
      width: 100,
    },
    {
      title: 'Stars',
      dataIndex: 'stargazers_count',
      key: 'stars',
      width: 120,
    },
    {
      title: 'Forks',
      dataIndex: 'forks',
      key: 'forks',
      width: 100,
    },
    {
      title: 'Updated At',
      dataIndex: 'updated_at',
      key: 'updated_at',
      width: 180,
    },
    {
      title: 'Home Page',
      dataIndex: 'homepage',
      key: 'homepage',
      width: 300,
      render: url => <a href={url} target="_blank" rel="noopener noreferer">{url}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 300,
    },
  ]
  return (
    <div className={styles.normal}>
      <Table
        columns={columns}
        scroll={{ x: true }}
        dataSource={dataSource}
        rowKey={record => record.id}
        loading={loading}
      />
    </div>
  )
}

function mapState2Props (state) {
  return {
    loading: state.loading.models.repos,
    repos: state.repos,
  }
}

export default connect(mapState2Props)(RepoList)
