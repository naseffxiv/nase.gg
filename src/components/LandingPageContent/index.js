import React from 'react';
import styles from './styles.module.css';
import CardGenerator from '@site/src/components/CardGenerator';
import blackCat from '@site/static/arcadion/light-heavyweight/Black_Cat_from_FFXIV.webp'
import naseSocialCard from '@site/static/img/nase-social-card.png'

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
            Our repository holds a collection of guides, resources, and tools for High-end content in FFXIV that are commonly used on NA Data Centers 
            </div>
            <div className={styles.headingThree} style={{marginBottom: 10}}>
              We currently cover the following types of content: Savage Raids, Extreme Trials, and Criterion Dungeons. Feel free to browse our repository or take a look into the NASE Discord Community below.
            </div>
            <div className={styles.headingThree} style={{marginBottom: 10}}>
              NASE.gg is Open-source and contributions are welcome. If you would like to contribute to the site, please visit our GitHub repository.
            </div>
          </div>
          <div className={styles.gridContainer}>
            <CardGenerator image={blackCat} url="/savage/aac" title='FFXIV Resources' />
            <CardGenerator image={naseSocialCard} url="/about" title='NASE Info' />
          </div>
          {/* 
          <div className={styles.gridContainer}>
            <CardGenerator image={bruteBomber} url="savage/The%20Arcadion/Light-heavyweight/m3s" title='test' />
            <CardGenerator image={wickedThunder} url="savage/The%20Arcadion/Light-heavyweight/m4s" title='test' />
          </div>
          */}
        </div>
      </div>
    </div>
  );
}