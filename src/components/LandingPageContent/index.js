import React from 'react';
import styles from './styles.module.css';
import CardGenerator from '@site/src/components/CardGenerator';
import blackCat from '@site/static/arcadion/light-heavyweight/Black_Cat_from_FFXIV.webp'
import honeyBee from '@site/static/arcadion/light-heavyweight/Honey_B_Lovely_from_FFXIV.webp'
import bruteBomber from '@site/static/arcadion/light-heavyweight/Brute_Bomber_from_FFXIV.webp'
import wickedThunder from '@site/static/arcadion/light-heavyweight/Wicked_Thunder_from_FFXIV.webp'

export default function LandingPageContent() {
  return (
    <div>
      <div className={styles.mainCard}>
        <div className={styles.contentContainer}>
          <div className={styles.gettingStartedText}>
            <div className={styles.gettingStartedOne} style={{marginBottom: 10}}>
              Welcome to NASE.gg
            </div>
          </div>
          <div className={styles.gridContainer}>
            <CardGenerator image={blackCat} url="savage/The%20Arcadion/Light-heavyweight/m1s" title='FFXIV Resources' />
            <CardGenerator image={honeyBee} url="savage/The%20Arcadion/Light-heavyweight/m2s" title='NASE Info' />
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