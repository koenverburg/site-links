export type Platform = {
  label: string
  href: string
  status?: 'Live' | 'Coming Soon'
  description?: string
  prek?: string
}

export type Section = {
  label: string
  links: Platform[]
  description?: string
}

