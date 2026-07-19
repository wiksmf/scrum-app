import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/landing/footer'

describe('Footer', () => {
  it('renders the logo and brand name', () => {
    render(<Footer />)
    expect(screen.getByAltText('ScrumAI logo')).toBeInTheDocument()
    expect(screen.getByText('ScrumAI')).toBeInTheDocument()
  })

  it('renders product links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })

  it('renders the theme toggle', () => {
    render(<Footer />)
    expect(screen.getByRole('group', { name: 'Theme selection' })).toBeInTheDocument()
  })
})
