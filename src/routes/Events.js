import React from 'react';
import { connect } from 'dva';
import styles from './Events.css';
import Layout from '../components/Layout/Layout';
import EventList from '../components/Events/EventList';

function Events({ location }) {
  return (
    <Layout location={location}>
      <div className={styles.normal}>
        <EventList/>
      </div>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Events);
