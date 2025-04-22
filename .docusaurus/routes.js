import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/404',
    component: ComponentCreator('/404', '5c5'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '940'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '8d5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '9fd'),
            routes: [
              {
                path: '/docs/concept/intro',
                component: ComponentCreator('/docs/concept/intro', '7ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/what-is-reconnaissance',
                component: ComponentCreator('/docs/concept/what-is-reconnaissance', '676'),
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
