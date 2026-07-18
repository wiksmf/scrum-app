import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from '@/components/landing/navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('ScrumAI')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
  })

  it('mobile menu is hidden by default', () => {
    render(<Navbar />)
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByLabelText('Toggle menu'))
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })
})
