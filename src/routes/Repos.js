import React from 'react';
import { connect } from 'dva';
import styles from './Repos.css';
import Layout from '../components/Layout/Layout';
import RepoList from '../components/Repos/RepoList';

function Repos({ location }) {
  return (
    <Layout location={location}>
      <div className={styles.normal}>
        <RepoList/>
      </div>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Repos);
