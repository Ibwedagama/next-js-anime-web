type Props = {
  type: string
  episodes: number
  genres: string
  status: string
  season: string
  studios: string
  synopsis: string
}

function AnimeDetailOverview({
  type,
  episodes,
  genres,
  status,
  season,
  studios,
  synopsis,
}: Props) {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-6 bg-muted w-full h-full rounded-2xl p-4'>
      <ul className='flex flex-col gap-y-4'>
        <li>
          <h2 className='text-xl font-bold text-muted-foreground'>
            Detail Overview
          </h2>
        </li>

        <li className='grid grid-cols-[100px_1fr] items-center'>
          <h3 className='text-sm font-bold text-muted-foreground'>TYPE</h3>
          <p className='text-sm text-muted-foreground'>{type}</p>
        </li>

        <li className='grid grid-cols-[100px_1fr] items-center'>
          <h3 className='text-sm font-bold text-muted-foreground'>EPISODES</h3>
          <p className='text-sm text-muted-foreground'>{episodes}</p>
        </li>

        <li className='grid grid-cols-[100px_1fr] items-center'>
          <h3 className='text-sm font-bold text-muted-foreground'>GENRES</h3>
          <p className='text-sm text-muted-foreground'>{genres}</p>
        </li>

        <li className='grid grid-cols-[100px_1fr] items-center'>
          <h3 className='text-sm font-bold text-muted-foreground'>STATUS</h3>
          <p className='text-sm text-muted-foreground'>{status}</p>
        </li>

        <li className='grid grid-cols-[100px_1fr] items-center'>
          <h3 className='text-sm font-bold text-muted-foreground'>SEASON</h3>
          <p className='text-sm text-muted-foreground'>{season}</p>
        </li>

        <li className='grid grid-cols-[100px_1fr] items-center'>
          <h3 className='text-sm font-bold text-muted-foreground'>STUDIOS</h3>
          <p className='text-sm text-muted-foreground'>{studios}</p>
        </li>
      </ul>

      <ul className='flex flex-col gap-y-8'>
        <li>
          <h3 className='text-xl font-bold text-muted-foreground mb-4'>
            Synopsis
          </h3>
          <p className='text-sm text-muted-foreground'>{synopsis}</p>
        </li>
      </ul>
    </section>
  )
}

export default AnimeDetailOverview
