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
    component: ComponentCreator('/cybersec-writeups/docs', '149'),
    routes: [
      {
        path: '/cybersec-writeups/docs',
        component: ComponentCreator('/cybersec-writeups/docs', '7b4'),
        routes: [
          {
            path: '/cybersec-writeups/docs',
            component: ComponentCreator('/cybersec-writeups/docs', '14d'),
            routes: [
              {
                path: '/cybersec-writeups/docs/Concepts/intro',
                component: ComponentCreator('/cybersec-writeups/docs/Concepts/intro', 'f4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/Concepts/what-is-reconnaissance',
                component: ComponentCreator('/cybersec-writeups/docs/Concepts/what-is-reconnaissance', '24d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/How-To\'s/intro',
                component: ComponentCreator('/cybersec-writeups/docs/How-To\'s/intro', 'a55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/References/intro',
                component: ComponentCreator('/cybersec-writeups/docs/References/intro', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/toc',
                component: ComponentCreator('/cybersec-writeups/docs/toc', '493'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cybersec-writeups/docs/Tutorials/intro',
                component: ComponentCreator('/cybersec-writeups/docs/Tutorials/intro', 'b12'),
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
