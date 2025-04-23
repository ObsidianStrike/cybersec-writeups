import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/404',
    component: ComponentCreator('/404', '5c5'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c07'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '926'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/beacon',
            component: ComponentCreator('/docs/tags/beacon', 'c66'),
            exact: true
          },
          {
            path: '/docs/tags/cobalt-strike',
            component: ComponentCreator('/docs/tags/cobalt-strike', 'd0e'),
            exact: true
          },
          {
            path: '/docs/tags/command-reference',
            component: ComponentCreator('/docs/tags/command-reference', 'b14'),
            exact: true
          },
          {
            path: '/docs/tags/post-exploitation',
            component: ComponentCreator('/docs/tags/post-exploitation', '8b0'),
            exact: true
          },
          {
            path: '/docs/tags/red-team',
            component: ComponentCreator('/docs/tags/red-team', 'ec4'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3f6'),
            routes: [
              {
                path: '/docs/concept/active-recon',
                component: ComponentCreator('/docs/concept/active-recon', '7eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/cyber-killchain',
                component: ComponentCreator('/docs/concept/cyber-killchain', 'e38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/exploitation',
                component: ComponentCreator('/docs/concept/exploitation', '2b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/intro',
                component: ComponentCreator('/docs/concept/intro', '7ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/opsec',
                component: ComponentCreator('/docs/concept/opsec', '7de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/passive-recon',
                component: ComponentCreator('/docs/concept/passive-recon', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/post-exploitation',
                component: ComponentCreator('/docs/concept/post-exploitation', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/post-exploitation-ttps',
                component: ComponentCreator('/docs/concept/post-exploitation-ttps', '6d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/pre-engagement',
                component: ComponentCreator('/docs/concept/pre-engagement', 'fce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/ttps-explained',
                component: ComponentCreator('/docs/concept/ttps-explained', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/vuln-validation',
                component: ComponentCreator('/docs/concept/vuln-validation', '8f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/OpSec/c2',
                component: ComponentCreator('/docs/how-to/OpSec/c2', 'f2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/OpSec/payload-obfuscation',
                component: ComponentCreator('/docs/how-to/OpSec/payload-obfuscation', '000'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/Pre-Engagement/client-questionnaire',
                component: ComponentCreator('/docs/how-to/Pre-Engagement/client-questionnaire', 'b3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/Pre-Engagement/internal-planning-docs',
                component: ComponentCreator('/docs/how-to/Pre-Engagement/internal-planning-docs', '953'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/Pre-Engagement/roe',
                component: ComponentCreator('/docs/how-to/Pre-Engagement/roe', 'de4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/Pre-Engagement/sow',
                component: ComponentCreator('/docs/how-to/Pre-Engagement/sow', '6a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/Pre-Engagement/threat-model',
                component: ComponentCreator('/docs/how-to/Pre-Engagement/threat-model', 'b55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/cobalt-strike',
                component: ComponentCreator('/docs/reference/cobalt-strike', 'f78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/toc',
                component: ComponentCreator('/docs/toc', '892'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
