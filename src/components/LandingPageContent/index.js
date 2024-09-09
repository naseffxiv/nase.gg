import React from 'react';
import styles from './styles.module.css';
import CardGenerator from '@site/src/components/CardGenerator';
import arcadion from '@site/static/arcadion/the_arcadion.jpg'
import naseSocialCard from '@site/static/img/nase-social-card.png'
import zoraalJa from '@site/static/extreme/Zoraal_Ja_EX_boss.jpg'
import AAI from '@site/static/criterion/Another_Aloalo_Island.jpg'

export default function LandingPageContent() {
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.contentContainer}>
          <div className={styles.text}>
            <div className={styles.headingOne} style={{marginBottom: 10}}>
              Welcome to NASE.gg
            </div>
            <div className={styles.headingThree} style={{marginBottom: 10}}>
            NASE.gg serves as a repository for High-end Duty resources as well as an info hub for the North America Savage and Extreme (NASE) Discord Community. 
            Our repository holds a collection of guides, resources, and tools for High-end content in FFXIV that are commonly used on NA Data Centers. 
            </div>
            <div className={styles.headingThree} style={{marginBottom: 10}}>
              We currently cover the following types of content: Savage Raids, Extreme Trials, and Criterion Dungeons. Feel free to browse our repository or take a look into the NASE Discord Community below.
            </div>
            <div className={styles.headingThree} style={{marginBottom: 10}}>
              NASE.gg is Open-source and contributions are welcome. If you would like to contribute to the site, please visit our GitHub repository.
            </div>
          </div>
          <div className={styles.gridContainer}>
            <CardGenerator image={arcadion} url="/aac" title='Latest Savage Raids' />
            <CardGenerator image={zoraalJa} url="/extreme_dt" title='Latest Extreme Trials' />
          </div>
          <div className={styles.gridContainer}>
            <CardGenerator image={AAI} url="/criterion_ew" title='Latest Criterion Dungeons' />
            <CardGenerator image={naseSocialCard} url="/about" title='NASE Info' />
          </div>
        </div>
      </div>
    </div>
  );
}