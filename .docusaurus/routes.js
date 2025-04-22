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
    component: ComponentCreator('/docs', '510'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a84'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '98f'),
            routes: [
              {
                path: '/docs/concept/cyber-killchain',
                component: ComponentCreator('/docs/concept/cyber-killchain', 'e38'),
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
                path: '/docs/concept/ttps-explained',
                component: ComponentCreator('/docs/concept/ttps-explained', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/how-to/intro',
                component: ComponentCreator('/docs/how-to/intro', '1d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reference/intro',
                component: ComponentCreator('/docs/reference/intro', '7cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/toc',
                component: ComponentCreator('/docs/toc', '892'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/intro',
                component: ComponentCreator('/docs/tutorial/intro', '094'),
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
