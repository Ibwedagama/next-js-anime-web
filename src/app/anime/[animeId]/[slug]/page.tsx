import BaseContainer from '@/components/common/BaseContainer'
import { getAnimeById } from '@/lib/api/anime'

import AnimeDetailOverview from '../../_components/AnimeDetailOverview'
import AnimeDetailHero from '../../_components/AnimeDetailHero'

export default async function AnimeDetailPage({
  params,
}: {
  params: Promise<{
    animeId: number
    slug: string
  }>
}) {
  const { animeId } = await params
  const { data: animeDetail, error } = await getAnimeById(animeId)

  if (!animeDetail || error) {
    return <p>Error</p>
  }

  const title = animeDetail.data.title
  const titleEnglish = animeDetail.data.title_english ?? ''
  const images = animeDetail.data.images.webp
  const synopsis = animeDetail.data.synopsis ?? ''
  const score = animeDetail.data.score ?? 0
  const status = animeDetail.data.status ?? ''
  const type = animeDetail.data.type ?? ''
  const episodes = animeDetail.data.episodes ?? 0
  const genres =
    animeDetail.data.genres.length > 0
      ? animeDetail.data.genres.map((genre) => genre.name)
      : []
  const season = animeDetail.data.season ?? ''
  const studios =
    animeDetail.data.studios.length > 0
      ? animeDetail.data.studios.map((studio) => studio.name)
      : []

  return (
    <main className='min-h-screen'>
      <div className='relative'>
        <BaseContainer className='relative z-30 pt-56 pb-8 flex flex-col gap-y-8'>
          <AnimeDetailHero
            title={title}
            titleEnglish={titleEnglish}
            image={images.image_url}
            score={score}
            status={status}
          />

          <AnimeDetailOverview
            type={type}
            episodes={episodes}
            genres={genres.join(', ')}
            season={season}
            status={status}
            studios={studios.join(', ')}
            synopsis={synopsis}
          />
        </BaseContainer>

        {/* Hero Overlay */}
        <div
          className='absolute inset-0 h-[400px] lg:h-1/2 bg-no-repeat bg-cover bg-center'
          style={{ backgroundImage: `url(${images.large_image_url})` }}
        />
        <div className='absolute inset-0 h-[410px] lg:h-1/2 bg-gradient-to-b from-transparent via-background/30 lg:via-background/15 to-background' />
      </div>
    </main>
  )
}
