// src/HomePage.js
import React from 'react';
import Layout from '@theme/Layout'; // Import Docusaurus Layout component
import './HomePage.css'; // Import custom CSS for styling

const HomePage = () => {
  return (
    <Layout
      title="Welcome to NASE.gg"
      description="FFXIV High-end Duty Repository for NA Party Finder and info hub for the NASE Discord."
    >
      <div className="homepage-container">
        <div className="homepage">
          {/* Page Title and Subtitle */}
          <div className="hero-section">
          <h2>NASE Info</h2>
          <p>Learn about NASE and what our community has to offer .</p>
          </div>

          {/* Banners */}
          <a href="https://nase.gg" className="banner nase-banner">
            <h2>NASE Info</h2>
            <p>Find out why NASE was formed and what our community has to offer .</p>
          </a>

          <a href="https://nase.gg/savage-tier" className="banner savage-banner">
            <h2>Savage Raids</h2>
            <p>Stay up to date with NA Party Finder strats.</p>
          </a>

          <a href="https://nase.gg/dawntrail-trials" className="banner extreme-banner">
            <h2>Extreme Trials</h2>
           <p>Challenge the latest Extreme Trials.</p>
          </a>

          <a href="https://nase.gg/endwalker-dungeons" className="banner criterion-banner">
            <h2>Endwalker Criterion Dungeons</h2>
            <p>Explore the latest Criterion Dungeons.</p>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
