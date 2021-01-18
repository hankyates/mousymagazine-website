import React, {useState, useEffect} from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const NUM_EPISODES = 3
const episodes = Array(NUM_EPISODES).fill().map((item, index) => index + 1).reverse()

export default function Player () {
  const [episode, setEpisode] = useState(3)
  useEffect(() => {
    let p = new URLSearchParams(window.location.search)
    if (p.has('episode') && episodes.includes(+p.get('episode'))) {
      setEpisode(p.get('episode'))
    }
  }, [])
  return <div>
    <AudioPlayer
      src={`https://cdn.mousymagazine.org/episode-${episode}.mp3`}
      header={<h3>Currently Playing: Episode #{episode}</h3>}
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
