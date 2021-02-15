import React from 'react'
import Helmet from 'react-helmet'
import Player from '../components/Player'
import Layout from '../components/layout'
import ogImage from '../assets/images/bg-mobile.jpg'

export default function HomeIndex ({
  pageContext: {page},
}) {
  const siteTitle = 'Mousy Magazine'
  const siteDescription = 'Ambient Post-Classical Electronic Music Composer and Audio Engineer'
  const title = page && page.title ? `${page.title} | ${siteTitle}` : `${siteTitle} | ${siteDescription}`
  const keywords = page && page.keywords ? page.keywords : "ambient music, post classical music, audio production, audio mixing, audio mastering, media composer, film score composer"

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={ogImage} />
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
                <li><a className="icon fa-music" href="/music-releases"><span className="label">Music Releases</span></a></li>
                <li><a className="icon fa-podcast" href="/audio-journal"><span className="label">Audio Journal (Podcast)</span></a></li>
                <li><a className="icon fa-volume-up" href="/audio-production"><span className="label">Audio Production</span></a></li>
              </ul>
            </section>
          </>}
      </div>
    </Layout>
  )
}
