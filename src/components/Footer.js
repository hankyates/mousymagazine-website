import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <OutboundLink href="https://mousymagazine.bandcamp.com/" target="_blank" rel="noreferrer" className="icon fa-bandcamp">
            <span className="label">Bandcamp</span>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.instagram.com/mousymagazine/" target="_blank" rel="noreferrer" className="icon fa-instagram">
            <span className="label">Instagram</span>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.youtube.com/channel/UCBZaj_OerrSEMgRppGebFlw" target="_blank" rel="noreferrer" className="icon fa-youtube">
            <span className="label">YouTube</span>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://twitter.com/mousymagazine" target="_blank" rel="noreferrer" className="icon fa-twitter">
            <span className="label">Twitter</span>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://open.spotify.com/artist/5JfRzpgl0lKCqnIwn8B0yG?si=SLZA6BAXTruCs6OUZq05kA" target="_blank" rel="noreferrer" className="icon fa-spotify">
            <span className="label">Spotify</span>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://soundcloud.com/mousymagazine" target="_blank" rel="noreferrer" className="icon fa-soundcloud">
            <span className="label">Soundcloud</span>
          </OutboundLink>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
