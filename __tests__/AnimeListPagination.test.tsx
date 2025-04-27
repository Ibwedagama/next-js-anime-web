import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AnimeListPagination from '@/app/(homepage)/_components/AnimeListPagination'

describe('Header', () => {
  const props = {
    currentPage: 1,
    lastPage: 100,
  }
  beforeEach(() => {
    render(<AnimeListPagination {...props} />)
  })

  it('renders pagination container', () => {
    const pagination = screen.getByTestId('anime-list__pagination')
    expect(pagination).toBeInTheDocument()
  })

  it('renders prev and next button', () => {
    const prevButton = screen.getByTestId('anime-list__pagination__prev-button')

    const nextButton = screen.getByTestId('anime-list__pagination__next-button')

    expect(prevButton).toBeInTheDocument()
    expect(prevButton).toHaveTextContent('Previous')
    expect(nextButton).toBeInTheDocument()
    expect(nextButton).toHaveTextContent('Next')
  })

  it('renders page chunks', () => {
    const pageChunks = screen.getAllByTestId(
      'anime-list__pagination__page-chunk',
    )

    pageChunks.forEach((item) => {
      expect(item).toBeVisible()
    })
  })
})
