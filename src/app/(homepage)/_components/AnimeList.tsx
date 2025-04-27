import { AnimeList } from '@/lib/schema/anime'
import AnimeCard from './AnimeCard'
import AnimeListPagination from './AnimeListPagination'
import { Suspense } from 'react'

type Props = {
  animeList: AnimeList | null
}

function HomeAnimeList({ animeList }: Props) {
  if (!animeList) {
    return <p>No Data</p>
  }

  return (
    <>
      <ul
        data-testid='anime-list__container'
        className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6 mb-6'
      >
        {animeList.data.map((anime) => (
          <li key={anime.mal_id} data-testid='anime-list__item'>
            <AnimeCard
              id={anime.mal_id}
              title={anime.title}
              thumbnails={anime.images}
              status={anime.status ?? ''}
              episodes={anime.episodes ?? 0}
              type={anime.type ?? ''}
            />
          </li>
        ))}
      </ul>

      <Suspense>
        <AnimeListPagination
          currentPage={animeList.pagination.current_page}
          lastPage={animeList.pagination.last_visible_page}
        />
      </Suspense>
    </>
  )
}

export default HomeAnimeList
