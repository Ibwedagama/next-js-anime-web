import { slugify } from '@/lib/utils'
import { Star } from 'lucide-react'
import Link from 'next/link'

type Props = {
  animeId: number
  image: string
  title: string
  titleEnglish: string
  score: number
  status: string
}

function SearchResult({
  animeId,
  image,
  title,
  titleEnglish,
  score,
  status,
}: Props) {
  return (
    <li>
      <Link
        href={`/anime/${animeId}/${slugify(titleEnglish)}`}
        className='grid grid-cols-[60px_1fr] gap-x-4'
      >
        <div className='w-[60px] h-[80px] overflow-clip rounded-lg'>
          <img
            src={image}
            alt={`Thumbnail of ${titleEnglish}`}
            width={60}
            height={80}
            className='w-full h-full object-cover'
            loading='lazy'
          />
        </div>

        <div className='flex flex-col gap-y-1 mt-auto'>
          <h2 className='text-sm font-bold text-foreground'>
            {titleEnglish || title}
          </h2>
          <p className='flex text-sm items-center gap-x-2 text-foreground'>
            <Star size={14} />
            <span>{score}</span>
          </p>
          <p className='flex items-center text-sm gap-x-2 text-foreground uppercase'>
            {status}
          </p>
        </div>
      </Link>
    </li>
  )
}

export default SearchResult
