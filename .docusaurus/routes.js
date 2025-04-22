import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cybersec-writeups/__docusaurus/debug',
    component: ComponentCreator('/cybersec-writeups/__docusaurus/debug', '4ee'),
    exact: true
  },
  {
    path: '/cybersec-writeups/__docusaurus/debug/config',
    component: ComponentCreator('/cybersec-writeups/__docusaurus/debug/config', 'e61'),
    exact: true
  },
  {
    path: '/cybersec-writeups/__docusaurus/debug/content',
    component: ComponentCreator('/cybersec-writeups/__docusaurus/debug/content', 'e84'),
    exact: true
  },
  {
    path: '/cybersec-writeups/__docusaurus/debug/globalData',
    component: ComponentCreator('/cybersec-writeups/__docusaurus/debug/globalData', '5dc'),
    exact: true
  },
  {
    path: '/cybersec-writeups/__docusaurus/debug/metadata',
    component: ComponentCreator('/cybersec-writeups/__docusaurus/debug/metadata', '429'),
    exact: true
  },
  {
    path: '/cybersec-writeups/__docusaurus/debug/registry',
    component: ComponentCreator('/cybersec-writeups/__docusaurus/debug/registry', 'e32'),
    exact: true
  },
  {
    path: '/cybersec-writeups/__docusaurus/debug/routes',
    component: ComponentCreator('/cybersec-writeups/__docusaurus/debug/routes', '2b4'),
    exact: true
  },
  {
    path: '/cybersec-writeups/404',
    component: ComponentCreator('/cybersec-writeups/404', '322'),
    exact: true
  },
  {
    path: '/cybersec-writeups/docs',
    component: ComponentCreator('/cybersec-writeups/docs', 'b15'),
    routes: [
      {
        path: '/cybersec-writeups/docs',
        component: ComponentCreator('/cybersec-writeups/docs', '03a'),
        routes: [
          {
            path: '/cybersec-writeups/docs',
            component: ComponentCreator('/cybersec-writeups/docs', 'ada'),
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
                path: '/cybersec-writeups/docs/reference/intro',
                component: ComponentCreator('/cybersec-writeups/docs/reference/intro', '2c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/toc',
                component: ComponentCreator('/cybersec-writeups/docs/toc', 'd44'),
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
