// Check for saved theme preference, otherwise use system preference
const theme = (() => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme')
  }
  return 'system'
})()

// Set initial theme
document.documentElement.setAttribute('data-theme', theme as 'light' | 'dark' | 'system')

// If system preference, apply it immediately
if (theme === 'system') {
  setSystemTheme()
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (document.documentElement.getAttribute('data-theme') === 'system') {
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light')
  }
})

export function setSystemTheme() {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', systemTheme)
}
