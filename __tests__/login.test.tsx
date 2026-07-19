import { render, screen } from '@testing-library/react'
import LoginPage from '@/app/login/page'

jest.mock('@/auth', () => ({
  signIn: jest.fn(),
}))

describe('LoginPage', () => {
  it('renders the logo', () => {
    render(<LoginPage />)
    expect(screen.getByAltText('ScrumAI logo')).toBeInTheDocument()
  })

  it('renders the welcome heading', () => {
    render(<LoginPage />)
    expect(screen.getByRole('heading', { name: /welcome back/i })).toBeInTheDocument()
  })

  it('renders the Google sign in button', () => {
    render(<LoginPage />)
    expect(screen.getByText('Continue with Google')).toBeInTheDocument()
  })

  it('renders the email label', () => {
    render(<LoginPage />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<LoginPage />)
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
  })

  it('renders the magic link button', () => {
    render(<LoginPage />)
    expect(screen.getByText('Send magic link')).toBeInTheDocument()
  })

  it('renders the sign up link', () => {
    render(<LoginPage />)
    expect(screen.getByRole('link', { name: 'Sign up free' })).toBeInTheDocument()
  })

  it('renders the back to home link', () => {
    render(<LoginPage />)
    expect(screen.getByRole('link', { name: /back to home/i })).toBeInTheDocument()
  })
})
