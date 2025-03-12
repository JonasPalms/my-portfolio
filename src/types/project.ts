export type ProjectTag =
  | 'astro.js'
  | 'tailwind'
  | 'react'
  | 'vue'
  | 'nuxt'
  | 'typescript'
  | 'javascript'

export interface Project {
  title: string
  description: string
  href: string
  tags: ProjectTag[]
}
