import React, {useRef, useState, useEffect} from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

const NUM_EPISODES = 6
const episodes = Array(NUM_EPISODES).fill().map((item, index) => index + 1).reverse()

export default function Player () {
  const [episode, setEpisode] = useState(NUM_EPISODES)
  const player = useRef(null)

  useEffect(() => {
    let p = new URLSearchParams(window.location.search)
    if (p.has('episode') && episodes.includes(+p.get('episode'))) {
      setEpisode(p.get('episode'))
    }
    if (p.has('t')) {
      player.current.audio.current.currentTime = +p.get('t')
    }
  }, [])
  return <div>
    <AudioPlayer
      onPlay={(e) => {
        trackCustomEvent({
          category: 'podcast-player',
          action: 'play',
          value: episode
        })
      }}
      ref={player}
      src={`https://cdn.mousymagazine.org/episode-${episode}.mp3`}
    header={<h3>Currently Playing: Episode #{episode}. <a download href={`https://cdn.mousymagazine.org/episode-${episode}.mp3`}>Download this episode</a></h3>}
      footer={
        <ul className="alt">
          {episodes.map((episodeNumber) => <li key={`ep-${episodeNumber}`}>
            <button className="button special" onClick={() => setEpisode(episodeNumber)}>Episode {episodeNumber}</button>
          </li>)}
        </ul>
      }
    />
  </div>
}
