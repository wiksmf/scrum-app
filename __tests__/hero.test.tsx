import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/landing/hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('Scrum planning your team will actually enjoy')).toBeInTheDocument()
  })

  it('renders the headline as an h1', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Scrum planning your team will actually enjoy')
  })

  it('renders the get started and see how it works buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Get started free')).toBeInTheDocument()
    expect(screen.getByText('See how it works')).toBeInTheDocument()
  })

  it('renders the AI-powered badge', () => {
    render(<Hero />)
    expect(screen.getByText('AI-powered sprint planning')).toBeInTheDocument()
  })
})
