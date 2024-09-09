// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to NASE.gg',
  tagline: 'Website for the NASE Discord and FFXIV NA Savage and Extreme raiders.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'naseffxiv', // Usually your GitHub org/user name.
  projectName: 'nase.gg', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'resources',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/naseffxiv/nase.gg/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/nase-social-card.png',
      navbar: {
        title: 'NASE.gg',
        logo: {
          alt: 'NASE logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'FFXIV Resources',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'savageSidebar',
                label: 'Savage Raids',
              },
              {
                type: 'docSidebar',
                sidebarId: 'extremeSidebar',
                label: 'Extreme Trials',
              },
              {
                type: 'docSidebar',
                sidebarId: 'criterionSidebar',
                label: 'Criterion Dungeons',
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'NASE Info',
            position: 'left',
            items: [
              {
                label: 'About us',
                href: '/about'
              },
              {
                label: 'Learning Oppurtunities',
                href: '/learning'
              },
              {
                label: 'Contact us',
                href: '/contact'
              },
            ]
          },
          {
            position: 'right',
            to: 'https://github.com/naseffxiv/nase.gg',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            position: 'right',
            to: 'https://discord.gg/JyfaBQ9XU5',
            className: 'header-discord-link',
            'aria-label': 'NASE Discord',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'FFXIV Resources',
            items: [
              {
                label: 'Savage Raids',
                to: '/docs/intro',
              },
              {
                label: 'Extreme Trials',
                to: '/docs/intro',
              },
              {
                label: 'Criterion Dungeons',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'NASE Info',
            items: [
              {
                label: 'About NASE',
                to: '/docs/intro',
              },
              {
                label: 'Learning Oppurtunities',
                to: '/docs/intro',
              },
              {
                label: 'Contact Us',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [

              {
                label: 'Discord Server',
                href: 'https://discord.gg/JyfaBQ9XU5',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/naseffxiv/nase.gg',
              },
            ],
          },
        ],
        copyright: `FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
