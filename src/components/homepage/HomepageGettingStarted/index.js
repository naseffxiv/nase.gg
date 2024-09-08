import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import HomepageCard from '../HomepageCard';
export default function HomepageGettingStarted() {
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.contentContainer}>
          <div className={styles.gettingStartedText}>
            <div className={styles.gettingStartedOne}>
              Welcome to NASE.gg
            </div>
            <div className={styles.gettingStartedTwo}>
              Repository of FFXIV High-end Duty resources for NA Party Finder.
            </div>
            <div className={styles.gettingStartedThree}>
              Jump into our repository or get to know more about us.
            </div>
          </div>
          <div className={styles.gridContainer}>
            <HomepageCard
              link={'/docs'}
              title={'FFXIV Resources'}
            ></HomepageCard>
            <HomepageCard
              link={'https://documentation.sailpoint.com/identityiq/help/iiqlandingpage.html'}
              title={'NASE Info'}
            ></HomepageCard>
             <HomepageCard
              link={'https://documentation.sailpoint.com/identityiq/help/iiqlandingpage.html'}
              title={'NASE Info'}
            ></HomepageCard>
                         <HomepageCard
              link={'https://documentation.sailpoint.com/identityiq/help/iiqlandingpage.html'}
              title={'NASE Info'}
            ></HomepageCard>
          </div>
        </div>
      </div>
    </div>
  );
}