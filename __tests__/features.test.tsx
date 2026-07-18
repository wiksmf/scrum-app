import { render, screen } from '@testing-library/react'
import { Features } from '@/components/landing/features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Everything your team needs')).toBeInTheDocument()
  })

  it('renders all six features cards', () => {
    render(<Features />)
    expect(screen.getByText('Real-time sprint board')).toBeInTheDocument()
    expect(screen.getByText('Planning poker')).toBeInTheDocument()
    expect(screen.getByText('AI story generator')).toBeInTheDocument()
    expect(screen.getByText('Backlog management')).toBeInTheDocument()
    expect(screen.getByText('Sprint review')).toBeInTheDocument()
    expect(screen.getByText('Reports & velocity')).toBeInTheDocument()
  })
})
