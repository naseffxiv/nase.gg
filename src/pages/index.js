import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

const backgroundImage = '/img/nase-background.png';

function HomepageHeader() {
  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white', // Ensures text is visible on all backgrounds
      }}
    >
      <div className={clsx('container', styles.heroContainer)}>
        <h1 className="hero__title">Welcome to NASE.gg</h1>
        <p className="hero__subtitle">A FFXIV High-end Duty Repository for NA Party Finder and info hub for the NASE Discord.</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Homepage for NASE.">
      <HomepageHeader />
      <main>
        {
          <HomepageFeatures />
        }
      </main>
    </Layout>
  );
}
