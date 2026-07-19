import { render, screen } from '@testing-library/react'
import SignupPage from '@/app/signup/page'

jest.mock('@/auth', () => ({
  signIn: jest.fn(),
}))

describe('SignUp', () => {
  it('renders the logo', () => {
    render(<SignupPage />)
    expect(screen.getByAltText('ScrumAI logo')).toBeInTheDocument()
  })

  it('renders the welcome heading', () => {
    render(<SignupPage />)
    expect(screen.getByRole('heading', { name: /Create your account/i })).toBeInTheDocument()
  })

  it('renders the Google sign in button', () => {
    render(<SignupPage />)
    expect(screen.getByText('Continue with Google')).toBeInTheDocument()
  })

  it('renders the email label', () => {
    render(<SignupPage />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<SignupPage />)
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument()
  })

  it('renders the get started for free button', () => {
    render(<SignupPage />)
    expect(screen.getByText('Get started free')).toBeInTheDocument()
  })

  it('renders the login link', () => {
    render(<SignupPage />)
    expect(screen.getByRole('link', { name: 'Log in' })).toBeInTheDocument()
  })

  it('renders the back to home link', () => {
    render(<SignupPage />)
    expect(screen.getByRole('link', { name: /back to home/i })).toBeInTheDocument()
  })
})
