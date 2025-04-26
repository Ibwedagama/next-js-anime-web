'use client'

import { getAnimeList } from '@/lib/api/anime'
import { useQuery } from '@tanstack/react-query'
import { AnimeList } from '@/lib/schema/anime'

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
    <ul>
      {animeList.data.map((anime) => (
        <li className='flex flex-col' key={anime.mal_id}>
          <h2>{anime.title}</h2>
        </li>
      ))}
    </ul>
  )
}

export default HomeAnimeList
