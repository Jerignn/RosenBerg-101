import { serviceGroups } from './services'
import { aboutLinks, resourceLinks, savingsLinks } from './company'

// Top-level navigation shared by both concepts (each renders it its own way).
export const menus = [
  { id: 'services', label: 'Services', groups: serviceGroups },
  { id: 'savings', label: 'Savings', links: savingsLinks },
  { id: 'about', label: 'About', links: aboutLinks },
  { id: 'resources', label: 'Resources', links: resourceLinks },
]
