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
    component: ComponentCreator('/docs', 'deb'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '175'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/actions-on-objective',
            component: ComponentCreator('/docs/tags/actions-on-objective', '4b0'),
            exact: true
          },
          {
            path: '/docs/tags/attacker-intent',
            component: ComponentCreator('/docs/tags/attacker-intent', '5e2'),
            exact: true
          },
          {
            path: '/docs/tags/attacker-objectives',
            component: ComponentCreator('/docs/tags/attacker-objectives', '7df'),
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
            path: '/docs/tags/credential-access',
            component: ComponentCreator('/docs/tags/credential-access', '47a'),
            exact: true
          },
          {
            path: '/docs/tags/data-collection',
            component: ComponentCreator('/docs/tags/data-collection', '48c'),
            exact: true
          },
          {
            path: '/docs/tags/data-exfiltration',
            component: ComponentCreator('/docs/tags/data-exfiltration', 'e8a'),
            exact: true
          },
          {
            path: '/docs/tags/diataxis-explanation',
            component: ComponentCreator('/docs/tags/diataxis-explanation', '4e7'),
            exact: true
          },
          {
            path: '/docs/tags/escalation',
            component: ComponentCreator('/docs/tags/escalation', '2d7'),
            exact: true
          },
          {
            path: '/docs/tags/goals',
            component: ComponentCreator('/docs/tags/goals', 'a1f'),
            exact: true
          },
          {
            path: '/docs/tags/internal-recon',
            component: ComponentCreator('/docs/tags/internal-recon', 'd93'),
            exact: true
          },
          {
            path: '/docs/tags/lateral',
            component: ComponentCreator('/docs/tags/lateral', '50a'),
            exact: true
          },
          {
            path: '/docs/tags/lateral-movement',
            component: ComponentCreator('/docs/tags/lateral-movement', '4fd'),
            exact: true
          },
          {
            path: '/docs/tags/linux',
            component: ComponentCreator('/docs/tags/linux', '845'),
            exact: true
          },
          {
            path: '/docs/tags/movement',
            component: ComponentCreator('/docs/tags/movement', '5fc'),
            exact: true
          },
          {
            path: '/docs/tags/password-dumping',
            component: ComponentCreator('/docs/tags/password-dumping', 'e89'),
            exact: true
          },
          {
            path: '/docs/tags/persistence',
            component: ComponentCreator('/docs/tags/persistence', 'f87'),
            exact: true
          },
          {
            path: '/docs/tags/pivoting',
            component: ComponentCreator('/docs/tags/pivoting', '6d4'),
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
            path: '/docs/tags/t-1005',
            component: ComponentCreator('/docs/tags/t-1005', '505'),
            exact: true
          },
          {
            path: '/docs/tags/t-1041',
            component: ComponentCreator('/docs/tags/t-1041', '9b7'),
            exact: true
          },
          {
            path: '/docs/tags/t-1048',
            component: ComponentCreator('/docs/tags/t-1048', 'a14'),
            exact: true
          },
          {
            path: '/docs/tags/t-1552',
            component: ComponentCreator('/docs/tags/t-1552', '88b'),
            exact: true
          },
          {
            path: '/docs/tags/t-1567',
            component: ComponentCreator('/docs/tags/t-1567', '37e'),
            exact: true
          },
          {
            path: '/docs/tags/token-theft',
            component: ComponentCreator('/docs/tags/token-theft', 'c30'),
            exact: true
          },
          {
            path: '/docs/tags/windows',
            component: ComponentCreator('/docs/tags/windows', '439'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c06'),
            routes: [
              {
                path: '/docs/concept/actions-on-objective',
                component: ComponentCreator('/docs/concept/actions-on-objective', '911'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/active-recon',
                component: ComponentCreator('/docs/concept/active-recon', '7eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/credential-access',
                component: ComponentCreator('/docs/concept/credential-access', '06b'),
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
                path: '/docs/concept/data-collection',
                component: ComponentCreator('/docs/concept/data-collection', '4ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concept/data-exfiltration',
                component: ComponentCreator('/docs/concept/data-exfiltration', 'c74'),
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
                path: '/docs/concept/lateral-movement',
                component: ComponentCreator('/docs/concept/lateral-movement', '4ed'),
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
                path: '/docs/concept/persistence',
                component: ComponentCreator('/docs/concept/persistence', '670'),
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
                path: '/docs/concept/post-exploitation-recon',
                component: ComponentCreator('/docs/concept/post-exploitation-recon', '509'),
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
                path: '/docs/concept/privilege-escalation',
                component: ComponentCreator('/docs/concept/privilege-escalation', 'f5e'),
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
