import React from 'react';
import Layout from '@theme/Layout';
import HomepageBasics from '../components/homepage/HomepageBasics';
import HomepageGettingStarted from '../components/homepage/HomepageGettingStarted';
//import './index.css'

export default function Homepage() {
  return (
    <Layout> 
          <HomepageGettingStarted />
    </Layout>
  );
}