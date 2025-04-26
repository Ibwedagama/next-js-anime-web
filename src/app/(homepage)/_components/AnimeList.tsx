'use client'

import { getAnimeList } from '@/lib/api/anime'
import { useQuery } from '@tanstack/react-query'
import { AnimeList } from '@/lib/schema/anime'
import AnimeCard from './AnimeCard'

type Props = {
  initialData: AnimeList | null
}

function HomeAnimeList({ initialData }: Props) {
  const {
    data: animeList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['anime-list'],
    initialData,
    queryFn: fetchAnimeList,
    enabled: false,
  })

  async function fetchAnimeList() {
    const { data, error } = await getAnimeList()

    if (error) {
      throw new Error(error)
    }

    return data
  }

  if (!animeList || isError) {
    return <p>Error</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ul className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6'>
      {animeList.data.map((anime) => (
        <li key={anime.mal_id}>
          <AnimeCard
            id={anime.mal_id}
            title={anime.title}
            thumbnails={anime.images}
          />
        </li>
      ))}
    </ul>
  )
}

export default HomeAnimeList
