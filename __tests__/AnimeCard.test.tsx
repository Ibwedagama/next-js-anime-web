import AnimeCard from '@/app/(homepage)/_components/AnimeCard'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { animeData } from '@/mocks/data'

describe('Header', () => {
  const props = {
    id: animeData.mal_id,
    title: animeData.title,
    thumbnails: animeData.images,
    type: animeData.type,
    status: animeData.status,
    episodes: animeData.episodes,
  }

  beforeEach(() => {
    render(<AnimeCard {...props} />)
  })

  it('renders anime thumbnail', () => {
    const thumbnail = screen.getByTestId('anime-card__thumbnail')
    expect(thumbnail).toBeInTheDocument()
  })

  it('renders anime title', () => {
    const title = screen.getByTestId('anime-card__title')
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(props.title)
  })
})
