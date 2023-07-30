export type Platform = {
  label: string
  href: string
  status?: 'Live' | 'Coming Soon'
  description?: string
  perk?: string
}

export type Section = {
  label: string
  links: Platform[]
  description?: string
}

