'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import Cookies from 'js-cookie'

type Theme = 'light' | 'dark' | 'system'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const cookie = Cookies.get('theme') as Theme | undefined

    requestAnimationFrame(() => {
      setTheme(cookie ?? 'system')
      setMounted(true)
    })
  }, [])

  function applyTheme(next: Theme) {
    document.documentElement.classList.remove('dark', 'light')

    if (next === 'dark') document.documentElement.classList.add('dark')
    if (next === 'light') document.documentElement.classList.add('light')

    Cookies.set('theme', next, { expires: 365 })
    setTheme(next)
  }

  const options: { value: Theme; icon: React.ReactNode; label: string }[] = [
    { value: 'light', icon: <Sun className="h-4 w-4" />, label: 'Light' },
    { value: 'dark', icon: <Moon className="h-4 w-4" />, label: 'Dark' },
    { value: 'system', icon: <Monitor className="h-4 w-4" />, label: 'System' },
  ]

  return (
    <div
      role="group"
      aria-label="Theme selection"
      className="inline-flex items-center rounded-xl border border-border bg-secondary p-1 gap-1"
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => applyTheme(option.value)}
          disabled={!mounted}
          aria-label={`${option.label} theme`}
          aria-pressed={theme === option.value}
          className={`inline-flex items-center gap-1.5 rounded-lg p-2 text-sm font-medium transition-all disabled:cursor-not-allowed cursor-pointer ${
            mounted && theme === option.value
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {option.icon}
        </button>
      ))}
    </div>
  )
}
