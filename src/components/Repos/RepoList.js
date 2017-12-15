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
      render: repo => <a href={repo.url} target="_blank" rel="noopener noreferer">{repo.name}</a>,
    },
    {
      title: 'Full Name',
      dataIndex: 'full_name',
      key: 'full_name',
      width: 260,
    },
    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
      width: 100,
    },
    {
      title: 'Stargazers',
      dataIndex: 'stargazers_count',
      key: 'stargazers',
      width: 120,
    },
    {
      title: 'Forks',
      dataIndex: 'forks',
      key: 'forks',
      width: 100,
    },
    {
      title: 'Open Issues',
      dataIndex: 'open_issues_count',
      key: 'open_issues',
      width: 120,
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
