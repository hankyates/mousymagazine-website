import React, {useState} from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const NUM_EPISODES = 3
const episodes = Array(NUM_EPISODES).fill().map((item, index) => index + 1).reverse()

export default function Player () {
  const [episode, setEpisode] = useState(3)
  return <div>
    <h3>Currently Playing: Episode #{episode}</h3>
    <AudioPlayer src={`https://cdn.mousymagazine.org/episode-${episode}.mp3`} />
    <ul className="alt">
      {episodes.map((episodeNumber) => <li key={`ep-${episodeNumber}`}>
        <button className="button special" onClick={() => setEpisode(episodeNumber)}>Episode {episodeNumber}</button>
      </li>)}
    </ul>
  </div>
}
