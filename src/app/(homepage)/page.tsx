import BaseContainer from '@/components/common/BaseContainer'
import { getAnimeList } from '@/lib/api/anime'
import AnimeList from './_components/AnimeList'
import { AnimeListQueryParams } from '@/lib/schema/anime'

export default async function Home() {
  const queryParams: AnimeListQueryParams = {
    page: 1,
    limit: 12,
  }

  const { data: animeList, error, status } = await getAnimeList(queryParams)

  return (
    <main className='min-h-screen'>
      <BaseContainer className='py-8'>
        <h1 className='text-3xl font-bold text-foreground mb-8'>Anime List</h1>
        <AnimeList initialData={animeList}></AnimeList>
      </BaseContainer>
    </main>
  )
}
