// Service catalogue mirroring the live site's menu. `slug` matches the live URL path.
export const serviceGroups = [
  {
    id: 'cooling',
    label: 'Air Conditioning',
    hub: 'ac-company-san-antonio',
    icon: 'snow',
    blurb: 'Repair, replacement and tune-ups that keep you ahead of a San Antonio summer.',
    items: [
      { slug: 'ac-repair-san-antonio', label: 'AC Repair' },
      { slug: 'ac-installation-replacement-san-antonio', label: 'AC Installation & Replacement' },
      { slug: 'ac-maintenance-san-antonio-tx', label: 'AC Maintenance' },
      { slug: 'ductless-mini-split-ac-systems', label: 'Ductless Mini Splits' },
    ],
  },
  {
    id: 'heating',
    label: 'Heating',
    hub: 'heating-company-san-antonio',
    icon: 'flame',
    blurb: 'Furnaces and heat pumps diagnosed by experienced technicians, fixed right the first time.',
    items: [
      { slug: 'san-antonio-heating-repair', label: 'Heating Repair' },
      { slug: 'furnace-installation-replacement', label: 'Heating Installation & Replacement' },
      { slug: 'heating-maintenance-san-antonio-tx', label: 'Heating Maintenance' },
      { slug: 'heat-pump', label: 'Heat Pumps' },
      { slug: 'heat-pump-repair-san-antonio', label: 'Heat Pump Repair' },
    ],
  },
  {
    id: 'plumbing',
    label: 'Plumbing',
    hub: 'plumber-san-antonio',
    icon: 'drop',
    blurb: 'From slab leaks to tankless water heaters — licensed plumbers under the same roof.',
    items: [
      { slug: 'camera-inspection-san-antonio', label: 'Camera Inspections' },
      { slug: 'drain-cleaning-san-antonio', label: 'Drain Cleaning' },
      { slug: 'leak-detection-san-antonio', label: 'Leak Detection' },
      { slug: 'faucets-san-antonio', label: 'Faucets' },
      { slug: 'garbage-disposals-san-antonio', label: 'Garbage Disposals' },
      { slug: 'toilets-san-antonio', label: 'Toilets' },
      { slug: 'gas-lines-san-antonio', label: 'Gas Lines' },
      { slug: 'repiping-san-antonio', label: 'Repiping' },
      { slug: 'sewer-repair-san-antonio', label: 'Sewer Repair' },
      { slug: 'slab-leaks-san-antonio', label: 'Slab Leak Repair' },
      { slug: 'sump-pumps-san-antonio', label: 'Sump Pumps' },
      { slug: 'water-heaters-san-antonio', label: 'Water Heaters' },
      { slug: 'tankless-water-heaters-san-antonio', label: 'Tankless Water Heaters' },
      { slug: 'water-treatment-san-antonio', label: 'Water Treatment' },
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial',
    hub: 'commercial-services',
    icon: 'building',
    blurb: 'Rooftop units, maintenance agreements and fast response for San Antonio businesses.',
    items: [
      { slug: 'air-conditioning', label: 'Commercial AC Repair & Installation' },
      { slug: 'heating-system-installation-repair', label: 'Commercial Heating Repair & Installation' },
      { slug: 'commercial-maintenance-agreements', label: 'Commercial Maintenance' },
      { slug: 'commercial-request', label: 'Commercial Service Request' },
      { slug: 'cac', label: 'Commercial Application for Credit' },
    ],
  },
  {
    id: 'air',
    label: 'Indoor Air Quality',
    hub: 'air-quality',
    icon: 'wind',
    blurb: 'Purifiers, dehumidifiers and UV lights for cleaner, drier Central Texas air.',
    items: [
      { slug: 'air-purifiers-san-antonio', label: 'Air Purifiers' },
      { slug: 'dehumidifiers', label: 'Dehumidifiers' },
      { slug: 'uv-air-sanitizers', label: 'UV Lights' },
      { slug: 'air-duct-cleaning-repair', label: 'Air Duct Cleaning & Repair' },
    ],
  },
  {
    id: 'more',
    label: 'More Services',
    hub: 'emergency-service-san-antonio-tx',
    icon: 'bolt',
    blurb: 'Ductwork, insulation and around-the-clock emergency help.',
    items: [
      { slug: 'ductwork-san-antonio-tx', label: 'Ductwork Services' },
      { slug: 'emergency-service-san-antonio-tx', label: 'Emergency Service' },
      { slug: 'insulation-san-antonio', label: 'Insulation' },
      { slug: 'american-standard-products', label: 'American Standard Products' },
    ],
  },
]

// Words in a city-variant slug that identify which service it is about.
export const serviceKeywords = [
  { key: 'ac-repair', label: 'AC Repair', group: 'cooling' },
  { key: 'ac-installation', label: 'AC Installation', group: 'cooling' },
  { key: 'ac-maint', label: 'AC Maintenance', group: 'cooling' },
  { key: 'ac-ducts', label: 'AC Ducts', group: 'cooling' },
  { key: 'ductless', label: 'Ductless Mini Splits', group: 'cooling' },
  { key: 'heating-repair', label: 'Heating Repair', group: 'heating' },
  { key: 'heating-installation', label: 'Heating Installation', group: 'heating' },
  { key: 'furnace-installation', label: 'Furnace Installation', group: 'heating' },
  { key: 'heating-maintenance', label: 'Heating Maintenance', group: 'heating' },
  { key: 'heating-system-maintenance', label: 'Heating Maintenance', group: 'heating' },
  { key: 'heat-pumps', label: 'Heat Pumps', group: 'heating' },
  { key: 'boiler', label: 'Boiler Installation', group: 'heating' },
  { key: 'emergency-hvac', label: 'Emergency HVAC', group: 'more' },
  { key: 'commercial-hvac', label: 'Commercial HVAC', group: 'commercial' },
  { key: 'plumbing-repair', label: 'Plumbing Repair', group: 'plumbing' },
  { key: 'leak-detection', label: 'Leak Detection', group: 'plumbing' },
  { key: 'tankless-water-heaters', label: 'Tankless Water Heaters', group: 'plumbing' },
  { key: 'water-heaters', label: 'Water Heaters', group: 'plumbing' },
  { key: 'water-treatment', label: 'Water Treatment', group: 'plumbing' },
  { key: 'drain-cleaning', label: 'Drain Cleaning', group: 'plumbing' },
  { key: 'faucets', label: 'Faucets', group: 'plumbing' },
  { key: 'toilets', label: 'Toilets', group: 'plumbing' },
  { key: 'garbage-disposals', label: 'Garbage Disposals', group: 'plumbing' },
  { key: 'gas-lines', label: 'Gas Lines', group: 'plumbing' },
  { key: 'sewer-services', label: 'Sewer Services', group: 'plumbing' },
  { key: 'sump-pumps', label: 'Sump Pumps', group: 'plumbing' },
  { key: 'air-quality', label: 'Indoor Air Quality', group: 'air' },
  { key: 'air-purifiers', label: 'Air Purifiers', group: 'air' },
  { key: 'dehumidifiers', label: 'Dehumidifiers', group: 'air' },
]

export const allServiceSlugs = new Set(serviceGroups.flatMap(g => [g.hub, ...g.items.map(i => i.slug)]))

export function groupForSlug(slug) {
  return serviceGroups.find(g => g.hub === slug || g.items.some(i => i.slug === slug))
}

// Symptoms used by the "what's going on?" finder; each routes to a real service page.
export const symptoms = [
  { id: 'warm', label: 'AC is blowing warm air', slug: 'ac-repair-san-antonio', note: 'Often low refrigerant, a failed capacitor or a dirty coil. A repair visit pins it down.' },
  { id: 'running', label: 'AC never stops running', slug: 'ac-maintenance-san-antonio-tx', note: 'Dirty coils, low charge or an undersized unit. A precision tune-up checks all three.' },
  { id: 'cold', label: 'No heat on a cold morning', slug: 'san-antonio-heating-repair', note: 'Ignition, pilot or heat-pump faults. Our heating techs diagnose furnaces and heat pumps daily.' },
  { id: 'old', label: 'System is 12+ years old', slug: 'ac-installation-replacement-san-antonio', note: 'A free replacement estimate with options from trusted brands — plus rebates and financing.' },
  { id: 'rooms', label: 'Some rooms are hot or stuffy', slug: 'ductwork-san-antonio-tx', note: 'Leaky or undersized ducts and thin attic insulation are the usual culprits.' },
  { id: 'allergy', label: 'Dust, allergies or musty smell', slug: 'air-quality', note: 'Purifiers, dehumidifiers and UV lights tackle Central Texas humidity and allergens.' },
  { id: 'drain', label: 'Slow or clogged drain', slug: 'drain-cleaning-san-antonio', note: 'Hard water and roots are common here. Camera inspection finds the real cause.' },
  { id: 'hotwater', label: 'Running out of hot water', slug: 'water-heaters-san-antonio', note: 'Sediment or a failing element — or time to go tankless for endless hot water.' },
  { id: 'leak', label: 'Water bill jumped / warm floor spot', slug: 'slab-leaks-san-antonio', note: 'Classic slab-leak signs. Electronic leak detection finds it without tearing up floors.' },
]
