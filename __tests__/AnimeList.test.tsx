import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { animeList } from '@/mocks/data'
import AnimeList from '@/app/(homepage)/_components/AnimeList'

describe('Header', () => {
  beforeEach(() => {
    render(<AnimeList animeList={animeList} />)
  })

  it('renders anime list container', () => {
    const container = screen.getByTestId('anime-list__container')
    expect(container).toBeInTheDocument()
  })

  it('renders anime items', () => {
    const animeItems = screen.getAllByTestId('anime-list__item')

    expect(animeItems.length).toBe(1)

    animeItems.forEach((item) => {
      expect(item).toBeVisible()
    })
  })

  it('renders pagination component', () => {
    const pagination = screen.getAllByTestId('anime-list__pagination')

    pagination.forEach((item) => {
      expect(item).toBeVisible()
    })
  })
})
