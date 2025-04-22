// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CyberSec Writeups',
  tagline: 'ObsidianStrike Cybersecurity Writeups',
  favicon: 'img/favicon.ico',

  // Your production URL
  url: 'https://ObsidianStrike.github.io',
  // This must match your repo name
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'ObsidianStrike', // your GitHub user/org
  projectName: 'cybersec-writeups',   // your repo name
  deploymentBranch: 'gh-pages',       // optional override; default is 'gh-pages'

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Point edit links to your fork
          editUrl:
            'https://github.com/ObsidianStrike/cybersec-writeups/tree/main/',
        },
        blog: false,    // disable blog if unused
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // GitHub pages deploy plugin is enabled by default
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        // logo: {
        //   alt: 'ObsidianStrike Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/ObsidianStrike/cybersec-writeups',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Concepts',
                to: '/docs/concept/intro',
              },
              {
                label: "How-To's",
                to: '/docs/how-to/intro',
              },
              {
                label: 'References',
                to: '/docs/reference/intro',
              },
            ],
          },
          {
            title: 'Repository',
            className: 'footer-right-align',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ObsidianStrike/cybersec-writeups',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ObsidianStrike Infosec`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
