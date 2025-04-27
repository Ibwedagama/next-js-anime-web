import { Star, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimeTrailerPlayer from './AnimeTrailerPlayer'

type Props = {
  title: string
  titleEnglish: string
  image: string
  score: number
  status: string
  videoUrl: string
}

function AnimeDetailHero({
  title,
  titleEnglish,
  image,
  score,
  status,
  videoUrl,
}: Props) {
  return (
    <section className='grid grid-cols-1 sm:grid-cols-[200px_1fr] items-end gap-x-6'>
      <div className='w-[200px] h-[300px] rounded-lg overflow-clip'>
        <img
          src={image}
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
          <AnimeTrailerPlayer
            title={titleEnglish || title}
            videoUrl={videoUrl}
          />
        </div>
      </div>
    </section>
  )
}

export default AnimeDetailHero
