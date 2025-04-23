import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <main style={{ textAlign: 'center', padding: '4rem' }}>
        <h1>😕 Oops! Page not found.</h1>
        {/* <p>
          Try one of these sections:
        </p>
        <p>
          <Link to="/docs/concept/intro">Concepts</Link> |{' '}
          <Link to="/docs/how-to/intro">How‑To's</Link> |{' '}
          <Link to="/docs/tutorial/intro">Tutorials</Link> |{' '}
          <Link to="/docs/reference/intro">References</Link>
        </p> */}
      </main>
    </Layout>
  );
}
