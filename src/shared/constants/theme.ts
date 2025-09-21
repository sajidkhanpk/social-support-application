import type { Theme } from "../types/theme.types"

export const themeConfig = {
  storageKey: 'theme',
  defaultTheme: 'system' as Theme,
}

export const themes = [
  { value: 'light' as Theme, label: 'Light', icon: '☀️' },
  { value: 'dark' as Theme, label: 'Dark', icon: '🌙' },
  { value: 'system' as Theme, label: 'System', icon: '💻' },
]