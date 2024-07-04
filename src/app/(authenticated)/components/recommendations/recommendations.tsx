import { RecommendationsList } from '../../../data'
import PlaylistHeader from './playlist-header'
import PlaylistItem from './playlist-item'

export default function Recommendations() {
  return (
    <section className="mt-16">
      {RecommendationsList.map((playlist, index) => (
        <div key={index}>
          <PlaylistHeader name={playlist.name} />
          <div className="flex w-full space-x-1">
            {playlist.items.map((item, index) => (
              <PlaylistItem key={index} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
