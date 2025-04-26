import BaseContainer from '@/components/common/BaseContainer'
import { Button } from '@/components/ui/button'
import { getAnimeById } from '@/lib/api/anime'
import { Star, Play, Heart } from 'lucide-react'

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
  const titleEnglish = animeDetail.data.title_english
  const images = animeDetail.data.images.webp
  const synopsis = animeDetail.data.synopsis
  const score = animeDetail.data.score
  const status = animeDetail.data.status

  return (
    <main className='min-h-screen'>
      <div className='relative'>
        <BaseContainer className='relative z-30 pt-56 pb-8 flex flex-col gap-y-8'>
          <section className='grid grid-cols-1 sm:grid-cols-[200px_1fr] items-end gap-x-6'>
            <div className='w-[200px] h-[300px] rounded-lg overflow-clip'>
              <img
                src={images.image_url}
                alt={`Thumbnail anime ${title}`}
                width={200}
                height={300}
                loading='lazy'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='flex flex-col gap-y-4'>
              <h1 className='text-3xl font-bold text-foreground'>
                {titleEnglish || title}
              </h1>

              {title && titleEnglish !== title ? (
                <h2 className='text-2xl font-bold text-foreground'>{title}</h2>
              ) : null}

              <div className='flex gap-x-2'>
                <p className='flex items-center gap-x-2 font-bold text-foreground'>
                  <Star size={18} />
                  <span>{score}</span>
                </p>
                <p className='text-foreground'>|</p>
                <p className='text-foreground uppercase'>{status}</p>
              </div>

              <div className='flex gap-x-4'>
                <Button className='w-fit' variant={'outline'}>
                  <Play /> Watch Trailer
                </Button>

                <Button className='w-fit' variant={'outline'}>
                  <Heart /> Add to Favorites
                </Button>
              </div>
            </div>
          </section>

          <section className='grid grid-cols-1 sm:grid-cols-2 bg-accent w-full h-full rounded-2xl p-4'>
            <ul className='flex flex-col gap-y-4'>
              <li>
                <h2 className='text-xl font-bold text-accent-foreground mb-4'>
                  Overview
                </h2>

                {/* TODO: Add Overview Section */}
              </li>
            </ul>

            <ul className='flex flex-col gap-y-8'>
              <li>
                <h3 className='text-xl font-bold text-accent-foreground mb-4'>
                  Synopsis
                </h3>
                <p className='text-sm text-accent-foreground'>{synopsis}</p>
              </li>
            </ul>
          </section>
        </BaseContainer>

        <div
          className='absolute inset-0 h-[400px] lg:h-1/2 bg-no-repeat bg-cover bg-center'
          style={{ backgroundImage: `url(${images.large_image_url})` }}
        />
        <div className='absolute inset-0 h-[410px] lg:h-1/2 bg-gradient-to-b from-transparent via-background/30 lg:via-background/15 to-background' />
      </div>
    </main>
  )
}
