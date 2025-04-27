import Link from 'next/link'
import { ImageSizes } from '@/lib/schema/anime'
import { slugify } from '@/lib/utils'

type Props = {
  id: number
  title: string
  thumbnails: ImageSizes
  type: string
  status: string
  episodes: number
}

function AnimeCard({ id, title, thumbnails, type, status, episodes }: Props) {
  const slug = slugify(title)

  return (
    <Link href={`anime/${id}/${slug}`}>
      <article className='group' data-testid='anime-card__container'>
        <div className='relative w-full aspect-[2/3] rounded-2xl overflow-clip bg-muted'>
          <img
            data-testid='anime-card__thumbnail'
            src={thumbnails.webp.image_url}
            srcSet={`
            ${thumbnails.webp.image_url} 480w,
            ${thumbnails.webp.large_image_url} 1200w
          `}
            sizes='(max-width: 480px) 178px, (max-width: 768px) 224px, 304px'
            alt={`Thumbnail anime ${title}`}
            width={304}
            height={541}
            loading='lazy'
            className='z-30 w-full h-full object-fit group-hover:scale-110 transition-transform ease-out duration-200'
          />

          <div
            className='z-40 absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent 
            to-background flex items-end justify-center p-4 transition-all ease-out duration-200'
          >
            <p className='text-center text-sm flex gap-x-2 mb-2'>
              <span>{type}</span>
              &#8226;
              <span className='text-green-500'>{status}</span>
              &#8226;
              <span>Ep {episodes}</span>
            </p>
          </div>
        </div>
        <h2
          data-testid='anime-card__title'
          className='text-lg text-center text-foreground font-bold line-clamp-2 mt-4'
        >
          {title}
        </h2>
      </article>
    </Link>
  )
}

export default AnimeCard
