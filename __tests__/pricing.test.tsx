import { render, screen } from '@testing-library/react'
import { Pricing } from '@/components/landing/pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(screen.getByText('Simple, transparent pricing')).toBeInTheDocument()
  })

  it('renders section title as h2', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Simple, transparent pricing')
  })

  it('renders both plans', () => {
    render(<Pricing />)
    expect(screen.getByTestId('plan-free')).toBeInTheDocument()
    expect(screen.getByTestId('plan-pro')).toBeInTheDocument()
  })

  it('renders the correct prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$9')).toBeInTheDocument()
  })

  it('highlights the pro plan as most popular', () => {
    render(<Pricing />)
    expect(screen.getByText('Most popular')).toBeInTheDocument()
  })
})
