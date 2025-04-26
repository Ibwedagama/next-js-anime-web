import BaseContainer from '@/components/common/BaseContainer'
import { getAnimeList } from '@/lib/api/anime'
import AnimeList from './_components/AnimeList'

export default async function Home() {
  const { data: animeList, error, status } = await getAnimeList()

  return (
    <main className='min-h-screen'>
      <BaseContainer className='py-8'>
        <h1 className='text-3xl font-bold text-foreground'>Anime List</h1>
        <AnimeList initialData={animeList}></AnimeList>
      </BaseContainer>
    </main>
  )
}
