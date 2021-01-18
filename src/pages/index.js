import React from 'react'
import Helmet from 'react-helmet'
import Player from '../components/Player'
import Layout from '../components/layout'

export default function HomeIndex ({
  pageContext: {page},
}) {
  const siteTitle = 'Mousy Magazine'
  const siteDescription = 'Ambient Post-Classical Electronic Music Composer and Audio Engineer'

  return (
    <Layout>
      <Helmet>
        {page && page.title ? <title>{siteTitle} | {page.title}</title> : <title>{siteTitle}</title>}
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        {page && <>
          <section id="one">
            <header className="major">
              <h2>{page.title}</h2>
            </header>
            {page.subtitle && <p>{page.subtitle}</p> }
          </section>
          {page.path === '/audio-journal' && <Player />}
          {page.html && <section id="two"> <div dangerouslySetInnerHTML={{ __html: page.html }} /> </section>}
        </>}
        {!page &&
          <>
            <section id="one">
              <header className="major">
                <h2>Hi. Here are some of the things I do:</h2>
              </header>
              <ul className="home icons">
                <li><a className="icon fa-volume-up" href="/music-releases"><span className="label">Music Releases</span></a></li>
                <li><a className="icon fa-headphones" href="/mixing-mastering"><span className="label">Mixing/Mastering</span></a></li>
                <li><a className="icon fa-music" href="/composition"><span className="label">Composition</span></a></li>
                <li><a className="icon fa-podcast" href="/audio-journal"><span className="label">Audio Journal (Podcast)</span></a></li>
                <li><a className="icon fa-cogs" href="/audio-production"><span className="label">Audio Production</span></a></li>
              </ul>
            </section>
          </>}
      </div>
    </Layout>
  )
}
