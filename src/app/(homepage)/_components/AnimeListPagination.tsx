'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

type Props = {
  currentPage: number
  lastPage: number
}

function AnimeListPagination({ currentPage, lastPage }: Props) {
  const router = useRouter()
  const search = useSearchParams()

  const goToPage = (page: number) => {
    const params = new URLSearchParams(search.toString())
    params.set('page', page.toString())
    router.push(`?${params.toString()}`)
  }

  function handlePrevPage(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    if (currentPage > 1) goToPage(currentPage - 1)
  }

  function handleNextPage(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    if (currentPage < lastPage) goToPage(currentPage + 1)
  }

  return (
    <Pagination data-testid='anime-list__pagination'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href='#'
            onClick={handlePrevPage}
            data-testid='anime-list__pagination__prev-button'
          />
        </PaginationItem>

        {/* Pagination Pages only show 4 pages at a time */}
        {Array.from({ length: 4 }).map((_, index) => {
          const page = currentPage - 1 + index

          // Make sure the page is between 1 and lastPage
          if (page < 1 || page > lastPage) return null

          return (
            <PaginationItem
              key={page}
              data-testid='anime-list__pagination__page-chunk'
            >
              <PaginationLink
                href='#'
                isActive={currentPage === page}
                onClick={(e) => {
                  e.preventDefault()
                  goToPage(page)
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href='#'
            onClick={handleNextPage}
            data-testid='anime-list__pagination__next-button'
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default AnimeListPagination
