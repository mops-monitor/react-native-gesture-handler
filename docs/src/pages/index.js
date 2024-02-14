import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Wave from '@site/src/components/Wave';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageStartScreen from '@site/src/components/Hero/StartScreen';
import GesturePlayground from '@site/src/components/GesturePlayground';
import GestureFeatures from '@site/src/components/GestureFeatures';
import GestureTestimonials from '@site/src/components/GestureTestimonials';
import GestureSponsors from '@site/src/components/GestureSponsors';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.container}>
        <HomepageStartScreen />
        <GesturePlayground />
      </div>
      <div className={styles.waveContainer}>
        <Wave />
      </div>
      <div className={styles.container}>
        <GestureFeatures />
        <GestureTestimonials />
        <GestureSponsors />
      </div>
    </Layout>
  );
}

export default Home;
