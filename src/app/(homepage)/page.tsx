import BaseContainer from '@/components/common/BaseContainer'
import { getAnimeList } from '@/lib/api/anime'

export default async function Home() {
  const { data: animeList, error, status } = await getAnimeList()

  return (
    <main className='min-h-screen'>
      <BaseContainer className='py-8'>
        <h1>Homepage</h1>

        <p>{JSON.stringify(animeList, null, 4)}</p>
      </BaseContainer>
    </main>
  )
}
