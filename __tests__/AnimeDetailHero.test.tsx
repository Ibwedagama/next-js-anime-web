import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { animeData } from '@/mocks/data'
import AnimeDetailHero from '@/app/anime/_components/AnimeDetailHero'

describe('AnimeDetailHero', () => {
  const props = {
    title: animeData.title,
    titleEnglish: animeData.title_english,
    image: animeData.images.webp.image_url,
    score: animeData.score,
    status: animeData.status,
    videoUrl: animeData.trailer.youtube_id,
  }

  beforeEach(() => {
    render(<AnimeDetailHero {...props} />)
  })

  it('renders anime thumbnail', () => {
    const element = screen.getByTestId('anime-detail__hero__thumbnail')
    expect(element).toBeInTheDocument()
  })

  it('renders anime title', () => {
    const titleEnglish = screen.getByTestId('anime-detail__hero__title-english')

    expect(titleEnglish).toBeInTheDocument()
    expect(titleEnglish).toHaveTextContent(props.titleEnglish)

    if (props.title !== props.titleEnglish) {
      const title = screen.getByTestId('anime-detail__hero__title')

      expect(title).toBeInTheDocument()
      expect(title).toHaveTextContent(props.title)
    }
  })

  it('renders anime score', () => {
    const score = screen.getByTestId('anime-detail__hero__score')

    expect(score).toBeInTheDocument()
    expect(score).toHaveTextContent(props.score.toString())
  })

  it('renders anime status', () => {
    const status = screen.getByTestId('anime-detail__hero__status')

    expect(status).toBeInTheDocument()
    expect(status).toHaveTextContent(props.status)
  })
})
