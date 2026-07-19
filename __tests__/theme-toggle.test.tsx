import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ThemeToggle } from '@/components/landing/theme-toggle'

jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
}))

describe('ThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark', 'light')
  })

  it('renders three theme options', () => {
    render(<ThemeToggle />)
    expect(screen.getByLabelText('Light theme')).toBeInTheDocument()
    expect(screen.getByLabelText('System theme')).toBeInTheDocument()
    expect(screen.getByLabelText('Dark theme')).toBeInTheDocument()
  })

  it('buttons are disabled before mounted', () => {
    render(<ThemeToggle />)
    const buttons = screen.getAllByRole('button')
    buttons.forEach((button) => {
      expect(button).toBeDisabled()
    })
  })

  it('applies dark class when dark theme is selected', async () => {
    render(<ThemeToggle />)
    await waitFor(() => expect(screen.getByLabelText('Dark theme')).not.toBeDisabled())
    fireEvent.click(screen.getByLabelText('Dark theme'))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('applies dark class when dark theme is selected', async () => {
    render(<ThemeToggle />)
    await waitFor(() => expect(screen.getByLabelText('Light theme')).not.toBeDisabled())
    fireEvent.click(screen.getByLabelText('Light theme'))
    expect(document.documentElement.classList.contains('light')).toBe(true)
  })

  it('removes all theme classes when system is selected', async () => {
    document.documentElement.classList.add('dark')
    render(<ThemeToggle />)
    await waitFor(() => expect(screen.getByLabelText('System theme')).not.toBeDisabled())
    fireEvent.click(screen.getByLabelText('System theme'))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(document.documentElement.classList.contains('light')).toBe(false)
  })
})
