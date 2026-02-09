'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
)

// 유효한 테마 값인지 확인하는 타입 가드
const isValidTheme = (value: string | null): value is Theme => {
  return value !== null && ['light', 'dark', 'system'].includes(value)
}

/**
 * 다크모드 Context Provider
 * - localStorage에 사용자 테마 선택 저장
 * - 시스템 테마 자동 감지 (prefers-color-scheme)
 * - html 태그에 'light'/'dark' 클래스 적용
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  // 마운트 시 localStorage에서 테마 읽기
  useEffect(() => {
    const stored = localStorage.getItem(storageKey)
    if (isValidTheme(stored)) {
      setTheme(stored)
    }
  }, [storageKey])

  // 테마 변경 시 html 클래스 업데이트
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

/**
 * 테마 Context 사용 훅
 */
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
