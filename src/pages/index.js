import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

export default function HomeIndex ({
  pageContext: {page},
}) {
  const siteTitle = 'Mousy Magazine'
  const siteDescription = 'Ambient Post-Classical Electronic Music Composer'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        {page &&
          <div>
            <h2>{page.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </div>}
        {!page &&
          <>
            <section id="one">
              <header className="major">
                <h2>
                  Hi
                </h2>
              </header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <section id="two">
              <h2>Check it out:</h2>
              <a href="/services">Services</a>
            </section>
          </>}
      </div>
    </Layout>
  )
}
