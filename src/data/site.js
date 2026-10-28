// Company facts used across both concepts. Sourced from rosenberghvac.com.
export const site = {
  name: 'Rosenberg Plumbing & Air',
  shortName: 'Rosenberg',
  founded: 1986,
  phone: '(833) 449-3482',
  phoneHref: 'tel:+18334493482',
  emergencyPhone: '(210) 798-8000',
  emergencyHref: 'tel:+12107988000',
  hours: 'Mon–Fri, 8am–5pm',
  address: '4335 Vance Jackson Road, Suite 505',
  cityLine: 'San Antonio, TX 78230',
  mapHref: 'https://maps.google.com/?q=4335+Vance+Jackson+Road+Suite+505+San+Antonio+TX+78230',
  region: 'San Antonio & surrounding areas',
  award: '2021 ACCA National Residential Contractor of the Year',
  licenses: [
    'HVAC License #TACLA22493C',
    'Plumbing License #RMP40094 · License holder: Felix Garcia',
  ],
  regulator:
    'Regulated by the Texas State Board of Plumbing Examiners · 7915 Cameron Road, Austin, TX 78754 · 512-936-5200 · tsbe.texas.gov',
  promise: 'Upfront pricing — and you’ll always talk to a real person.',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/RosenbergIndoorComfort' },
    { label: 'Google', href: 'https://www.google.com/search?q=Rosenberg+Plumbing+%26+Air' },
    { label: 'Yelp', href: 'https://www.yelp.com/search?find_desc=Rosenberg+Plumbing+%26+Air&find_loc=San+Antonio%2C+TX' },
  ],
}

export const yearsInBusiness = new Date().getFullYear() - site.founded

export const badges = [
  { src: '/images/acca.webp', alt: 'ACCA Residential Contractor of the Year 2021' },
  { src: '/images/lennox.webp', alt: 'Lennox dealer' },
  { src: '/images/nate.png', alt: 'NATE certified technicians' },
  { src: '/images/bbb.png', alt: 'Better Business Bureau accredited' },
]

export const heardAboutOptions = [
  'Internet', 'Yellow Pages', 'Referral', 'Saw our truck', 'Direct mail', 'Existing client', 'BBB',
  'Del Webb', 'Facebook', 'Saw our sticker', 'News publication', 'TV', 'Nextdoor neighbor', 'Yelp', 'Other',
]
