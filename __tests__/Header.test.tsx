import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '@/components/common/Header'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('renders header container and logo', () => {
    const container = screen.getByTestId('header__container')
    expect(container).toBeInTheDocument()

    const logo = screen.getByTestId('header__app-logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders search button', () => {
    const searchButton = screen.getByTestId('searchbar__trigger-button')
    expect(searchButton).toBeInTheDocument()
    expect(searchButton).toHaveTextContent('Search')
  })
})
