import BaseContainer from '@/components/common/BaseContainer'
import { getAnimeList } from '@/lib/api/anime'
import AnimeList from './_components/AnimeList'
import { AnimeListQueryParams } from '@/lib/schema/anime'

type Props = {
  searchParams: Promise<AnimeListQueryParams>
}

export default async function Home({ searchParams }: Props) {
  const search = await searchParams

  const options: AnimeListQueryParams = {
    q: search.q,
    page: search.page || 1,
    limit: search.limit || 12,
  }

  const { data: animeList } = await getAnimeList(options)

  return (
    <main className='min-h-screen'>
      <BaseContainer className='py-8'>
        <h1 className='text-3xl font-bold text-foreground mb-8'>Anime List</h1>
        <AnimeList animeList={animeList}></AnimeList>
      </BaseContainer>
    </main>
  )
}
