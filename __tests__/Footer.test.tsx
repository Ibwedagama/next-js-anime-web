import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Footer from '@/components/common/Footer'

describe('Header', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  it('renders footer container and logo', () => {
    const container = screen.getByTestId('footer__container')
    expect(container).toBeInTheDocument()

    const logo = screen.getByTestId('footer__app-logo')
    expect(logo).toBeInTheDocument()
  })
})
