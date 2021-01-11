import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

export default function HomeIndex ({
  pageContext: {page},
}) {
  const siteTitle = 'Mousy Magazine'
  const siteDescription = 'Ambient Post-Classical Electronic Music Composer and Audio Engineer'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        {page &&
          <>
            <section id="one">
              <header className="major">
                <h2>
                  {page.title}
                </h2>
              </header>
              {page.subtitle && <p>{page.subtitle}</p> }
            </section>
            {page.html && <section id="two"> <div dangerouslySetInnerHTML={{ __html: page.html }} /> </section>}
          </>}
        {!page &&
          <>
            <section id="one">
              <header className="major">
                <h2>Hi. Here are some of the things I do:</h2>
              </header>
              <ul>
                <li><a href="/music-releases">Music Releases</a></li>
                <li><a href="/mixing-mastering">Mixing/Mastering</a></li>
                <li><a href="/composition">Composition</a></li>
                <li><a href="/audio-production">Audio Production</a></li>
                <li><a href="/audio-engineering">Audio Engineering</a></li>
              </ul>
            </section>
          </>}
      </div>
    </Layout>
  )
}
