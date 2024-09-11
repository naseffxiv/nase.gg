import React from 'react';
import Layout from '@theme/Layout';

const AboutPage = () => (
  <Layout>
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>About NASE</h1>
        <p style={styles.paragraph}>
          North American Savage and Extreme (NASE) is a Discord community for high-end raiders in Final Fantasy XIV on the North American Data Centers.
          This community was founded as a dedicated space for those focused on savage and extreme content.
          <br /><br />
          While a strong community already existed within the ultimate raiding scene, there was a lack of a space for more casual savage and extreme raiders.
          We created NASE to fill that gap and provide a place for people to collaborate, ask questions, and hang out with fellow raiders.
        </p>

        <h2 style={styles.heading}>Why Create This Website?</h2>
        <p style={styles.paragraph}>
          Some may ask, "Why have a website when we already have a Discord?" While Discord is great for discussions, it isn't ideal for storing and collaborating on resources.
          This website allows us to better organize and present what our community is about, even for those who haven't yet joined our Discord.
          <br /><br />
          Another question might be, "Why create a website when there are already several others that do the same thing?"
          We noticed that most existing websites are either outdated or not well-maintained.
          <br /><br />
          Our goal was to create a website that is up-to-date and maintained by the community, not just a single person. 
          NASE.gg is open-source, meaning anyone can contribute to the website and help keep it current. 
          We took a lot of inspiration from Tuufless' <a href="https://github.com/Tuufless/FFXIV-Elemental-raid-macros">FFXIV Elemental Raid Macros</a> website.
        </p>

        <h2 style={styles.heading}>What Do We Offer?</h2>
        <p style={styles.paragraph}>
          In addition to our community and platform for discussing and collaborating on raiding content, we also offer a learning platform for new raiders looking to get into raiding. 
          Visit our <a href="/learning">Learning Parties</a> page to learn more about how you can get started with raiding in FFXIV.
        </p>

      </div>
    </div>
  </Layout>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
  },
  content: {
    maxWidth: '800px',
    textAlign: 'left',
  },
  heading: {
    marginBottom: '16px',
  },
  paragraph: {
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default AboutPage;
