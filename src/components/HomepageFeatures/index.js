import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Feature list with support for images and improved descriptions
const FeatureList = [
  {
    title: 'FFXIV Resources',
    Img: require('@site/static/img/ffxiv.png').default,
    link: '/aac', // Link for the title
    description: (
      <>
        Stay updated with the latest strats and resources for NA Party Finder. 
        We provide resouces for Savage Raids, Extreme Trials, and more.
      </>
    ),
  },
  {
    title: 'NASE Info',
    Img: require('@site/static/img/logo.png').default,
    link: '/about', // Link for the title
    description: (
      <>
        NASE is more than just a Discord server, we are a community. Learn more about the NASE project and what we have to offer.
      </>
    ),
  },
  {
    title: 'Discord Community',
    Img: require('@site/static/img/discord-mark-blue.png').default,
    link: 'https://discord.gg/JyfaBQ9XU5', // Link for the title
    external: true, // Indicates an external link
    description: (
      <>
        Join our Discord community to connect with other FFXIV raiders, share your thoughts, and
        participate in events. All players are welcome to join our growing community.
      </>
    ),
  },
  {
    title: 'Contributing',
    Img: require('@site/static/img/github-mark-white.png').default,
    link: 'https://github.com/naseffxiv/nase.gg', // Link for the title
    external: true, // Indicates an external link
    description: (
      <>
        NASE.gg is open-source and welcomes contributions from the community.
        We strive to keep this site updated with the latest NA Party Finder strats and resources. 
        If would like to contribute, please visit our GitHub repository.
      </>
    ),
  },
];

function Feature({ Img, title, description, link, external }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} alt={title} className={styles.featureImg} /> {/* Render image directly */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a
            href={link}
            className={styles.featureLink}
            target={external ? "_blank" : "_self"} // Opens in a new tab if it's an external link
            rel={external ? "noopener noreferrer" : undefined} // Adds security attributes for external links
          >
            {title}
          </a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.row)}> {/* Use the updated row style */}
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
