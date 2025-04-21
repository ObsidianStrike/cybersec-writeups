import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cybersec-writeups/markdown-page',
    component: ComponentCreator('/cybersec-writeups/markdown-page', '09b'),
    exact: true
  },
  {
    path: '/cybersec-writeups/docs',
    component: ComponentCreator('/cybersec-writeups/docs', 'b9f'),
    routes: [
      {
        path: '/cybersec-writeups/docs',
        component: ComponentCreator('/cybersec-writeups/docs', 'b16'),
        routes: [
          {
            path: '/cybersec-writeups/docs',
            component: ComponentCreator('/cybersec-writeups/docs', '1fe'),
            routes: [
              {
                path: '/cybersec-writeups/docs/concept/intro',
                component: ComponentCreator('/cybersec-writeups/docs/concept/intro', 'f81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/how-to/intro',
                component: ComponentCreator('/cybersec-writeups/docs/how-to/intro', '8fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/reference/intro',
                component: ComponentCreator('/cybersec-writeups/docs/reference/intro', '2c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/tutorial/intro',
                component: ComponentCreator('/cybersec-writeups/docs/tutorial/intro', '9d2'),
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
    path: '/cybersec-writeups/',
    component: ComponentCreator('/cybersec-writeups/', 'e0a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
