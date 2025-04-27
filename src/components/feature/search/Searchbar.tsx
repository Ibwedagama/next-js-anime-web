'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '../../ui/button'
import { getAnimeList } from '@/lib/api/anime'
import { useDebounce } from '@/hooks/useDebounceQuery'
import { useQuery } from '@tanstack/react-query'
import { AnimeListQueryParams } from '@/lib/schema/anime'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import SearchInput from './SearchInput'
import { usePathname, useSearchParams } from 'next/navigation'
import SearchResult from './SearchResult'

export function Searchbar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const debouncedSearchQuery = useDebounce(searchQuery, 500)

  const { data: animeResults, isLoading } = useQuery({
    queryKey: ['search', debouncedSearchQuery],
    enabled: !!debouncedSearchQuery,
    queryFn: () => searchAnime({ q: debouncedSearchQuery, limit: 10 }),
    select: (data) => data?.data,
  })

  async function searchAnime(options: AnimeListQueryParams) {
    const { data: animeResults, error } = await getAnimeList(options)

    if (error) {
      throw new Error(error)
    }

    return animeResults
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  // Close the dialog when the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname, searchParams])

  function handleSearchChange(value: string) {
    setSearchQuery(value)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)}>
            Search
            <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
              <span className='text-xs'>⌘</span>K
            </kbd>
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:min-w-[600px] lg:min-w-[720px]'>
          <DialogTitle className='text-lg'>
            For quick access:{' '}
            <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono font-medium text-muted-foreground text-sm opacity-100'>
              <span className='text-xs'>⌘</span>
            </kbd>{' '}
            +
            <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono font-medium text-muted-foreground opacity-100'>
              <span className='text-xs'>K</span>
            </kbd>{' '}
          </DialogTitle>
          <SearchInput onSearchChange={handleSearchChange} />

          <section className='w-full sm:max-w-[600px] lg:max-w-[720px] max-h-[350px] overflow-y-auto'>
            {/* Loading State */}
            {isLoading ? <p>Loading...</p> : null}

            {!isLoading && animeResults && animeResults.length > 0 ? (
              <ul className='flex flex-col gap-y-4'>
                {animeResults.map((result) => (
                  <SearchResult
                    key={result.mal_id}
                    animeId={result.mal_id}
                    image={result.images.webp.image_url}
                    title={result.title}
                    titleEnglish={result.title_english ?? ''}
                    score={result.score ?? 0}
                    status={result.status ?? ''}
                  />
                ))}
              </ul>
            ) : null}

            {!isLoading && !animeResults ? <p>Not found</p> : null}
          </section>
        </DialogContent>
      </Dialog>
    </>
  )
}
