import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Red Team Ready',
    Emoji: () => <span style={{ fontSize: '3rem' }}>💣</span>,
    description: (
      <>
        Each write-up is designed to help you simulate real-world attacks,
        from initial reconnaissance to post-exploitation. No filler—just ops.
      </>
    ),
  },
  {
    title: 'TTP-Focused',
    Emoji: () => <span style={{ fontSize: '3rem' }}>📑</span>,
    description: (
      <>
        Every guide maps to practical tactics, techniques, and procedures (TTPs),
        aligned with frameworks like MITRE ATT&CK and real adversary emulation.
      </>
    ),
  },
  {
    title: 'Built by Practitioners',
    Emoji: () => <span style={{ fontSize: '3rem' }}>🧑‍💻</span>,
    description: (
      <>
        These writeups aren't theory—they're forged in hands-on engagements
        and threat simulations. Learn from real operators, not textbook clones.
      </>
    ),
  },
];

function Feature({ Emoji, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Emoji && <Emoji />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
