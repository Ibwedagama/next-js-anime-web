import Link from 'next/link'
import { ImageSizes } from '@/lib/schema/anime'
import { slugify } from '@/lib/utils'

type Props = {
  id: number
  title: string
  thumbnails: ImageSizes
}

function AnimeCard({ id, title, thumbnails }: Props) {
  const slug = slugify(title)

  return (
    <Link href={`anime/${id}/${slug}`}>
      <article className='group' data-testid='anime-card__container'>
        <div className='w-full aspect-[2/3] rounded-2xl overflow-clip'>
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
            className='w-full h-full object-fit group-hover:scale-110 transition-transform ease-out duration-200'
          />
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
