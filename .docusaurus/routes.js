import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cybersec-writeups/404',
    component: ComponentCreator('/cybersec-writeups/404', '322'),
    exact: true
  },
  {
    path: '/cybersec-writeups/docs',
    component: ComponentCreator('/cybersec-writeups/docs', '5fb'),
    routes: [
      {
        path: '/cybersec-writeups/docs',
        component: ComponentCreator('/cybersec-writeups/docs', 'd7c'),
        routes: [
          {
            path: '/cybersec-writeups/docs',
            component: ComponentCreator('/cybersec-writeups/docs', 'd33'),
            routes: [
              {
                path: '/cybersec-writeups/docs/concept/intro',
                component: ComponentCreator('/cybersec-writeups/docs/concept/intro', 'f81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/concept/what-is-reconnaissance',
                component: ComponentCreator('/cybersec-writeups/docs/concept/what-is-reconnaissance', '587'),
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
                path: '/cybersec-writeups/docs/intro',
                component: ComponentCreator('/cybersec-writeups/docs/intro', 'e50'),
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
