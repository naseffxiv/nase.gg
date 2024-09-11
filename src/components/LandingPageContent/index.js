import React from 'react';
import styles from './styles.module.css';
import CardGenerator from '@site/src/components/CardGenerator';
import arcadion from '@site/static/arcadion/the_arcadion.jpg'
import naseSocialCard from '@site/static/img/nase-social-card.png'
import dawntrail from '@site/static/extreme/Zoraal_Ja.png'
import AAI from '@site/static/criterion/AAI.jpg'

// TODO: clean this up
export default function LandingPageContent({style}) {
  return (
    <div className={styles.mainCard} style={{style}}>
      <div className={styles.contentContainer}>
        <div className={styles.gettingStartedText}>
          <div className={styles.gettingStartedOne} style={style}>
            <div className={styles.text}>
              <div className={styles.headingOne} style={style}>
                Welcome to NASE.gg
              </div>
              <div className={styles.headingTwo} style={style}>
                <div>
                  FFXIV High-end Duty Repository for NA Party Finder and info hub for the NASE Discord. 
                </div>
              </div>
            </div>
            <div className={styles.gridContainer}>
              <CardGenerator image={naseSocialCard} url="/about" title='Learn more about NASE' />
              <CardGenerator image={arcadion} url="/aac" title='Latest Savage Tier' />
              <CardGenerator image={dawntrail} url="/dawntrail-trials" title='Latest Extreme Trials' />
              <CardGenerator image={AAI} url="/endwalker-criterion" title='Latest Criterion Dungeons' />            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}