import { heardAboutOptions } from './site'
import { serviceGroups } from './services'
import { cities } from '../lib/catalog'

// Field configs for every form on the site, rendered by <SmartForm>.
const contactBasics = [
  { name: 'name', label: 'Full name', required: true, placeholder: 'Jane Rivera' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, placeholder: '(210) 555-0123' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'you@example.com' },
]

const serviceTypes = serviceGroups.map(g => g.label)

export const forms = {
  service: [
    ...contactBasics,
    { name: 'address', label: 'Service address', placeholder: 'Street, city, ZIP' },
    { name: 'service', label: 'What do you need?', type: 'select', options: [...serviceTypes, 'Not sure'], required: true },
    { name: 'newCustomer', label: 'Are you a new customer?', type: 'radio', options: ['Yes', 'No'], required: true },
    { name: 'heard', label: 'How did you hear about us?', type: 'select', options: heardAboutOptions, required: true },
    { name: 'message', label: 'Tell us what’s going on', type: 'textarea', placeholder: 'e.g. Upstairs AC blowing warm since yesterday' },
  ],
  quick: [
    { name: 'name', label: 'Name', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'service', label: 'Service', type: 'select', options: [...serviceTypes, 'Not sure'], required: true },
  ],
  estimate: [
    ...contactBasics,
    { name: 'address', label: 'Home address', required: true },
    { name: 'project', label: 'What would you like estimated?', type: 'select', required: true, options: ['New AC system', 'New furnace / heat pump', 'Ductless mini split', 'Water heater / tankless', 'Repiping', 'Indoor air quality', 'Other'] },
    { name: 'age', label: 'Age of current system', type: 'select', options: ['Under 5 years', '5–10 years', '10–15 years', '15+ years', 'Don’t know'] },
    { name: 'homeSize', label: 'Approx. home size (sq ft)', type: 'number', placeholder: '2,000' },
    { name: 'time', label: 'Best time to visit', type: 'radio', options: ['Morning', 'Afternoon', 'Any'] },
    { name: 'message', label: 'Anything else?', type: 'textarea' },
  ],
  commercial: [
    { name: 'company', label: 'Business name', required: true },
    { name: 'name', label: 'Contact name', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'address', label: 'Property address', required: true, full: true },
    { name: 'type', label: 'Request type', type: 'radio', required: true, options: ['Repair', 'Installation', 'Maintenance agreement', 'Quote'] },
    { name: 'units', label: 'Number of units', type: 'number' },
    { name: 'urgency', label: 'Urgency', type: 'select', options: ['Emergency — system down', 'This week', 'Planning ahead'] },
    { name: 'message', label: 'Describe the issue or project', type: 'textarea' },
  ],
  credit: [
    { name: 'company', label: 'Legal business name', required: true },
    { name: 'dba', label: 'DBA (if different)' },
    { name: 'taxId', label: 'Federal tax ID', required: true },
    { name: 'years', label: 'Years in business', type: 'number', required: true },
    { name: 'name', label: 'Contact name', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'email', label: 'Accounts payable email', type: 'email', required: true },
    { name: 'billing', label: 'Billing address', required: true, full: true },
    { name: 'references', label: 'Trade references (name & phone)', type: 'textarea' },
    { name: 'consent', label: 'I authorize Rosenberg Plumbing & Air to verify the information provided.', type: 'consent', required: true },
  ],
  contact: [
    ...contactBasics,
    { name: 'topic', label: 'Topic', type: 'select', options: ['Schedule service', 'Billing question', 'Comfort Club', 'Feedback', 'Other'] },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ],
  career: [
    { name: 'name', label: 'Full name', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'position', label: 'Position', type: 'select', required: true, options: ['HVAC Service Technician', 'HVAC Installer', 'Licensed Plumber', 'Plumbing Apprentice', 'Customer Service / Dispatch', 'Sales / Comfort Advisor', 'Other'] },
    { name: 'experience', label: 'Years of experience', type: 'select', required: true, options: ['Less than 1', '1–4', '5–9', '10+'] },
    { name: 'license', label: 'Licenses & certifications', placeholder: 'e.g. EPA 608, NATE, TDLR' },
    { name: 'about', label: 'Tell us about yourself', type: 'textarea' },
  ],
  refer: [
    { name: 'name', label: 'Your name', required: true },
    { name: 'phone', label: 'Your phone', type: 'tel', required: true },
    { name: 'email', label: 'Your email', type: 'email', required: true },
    { name: 'friendName', label: 'Friend’s name', required: true },
    { name: 'friendPhone', label: 'Friend’s phone', type: 'tel', required: true },
    { name: 'friendEmail', label: 'Friend’s email', type: 'email' },
    { name: 'note', label: 'What does your friend need?', type: 'textarea' },
  ],
  survey: [
    { name: 'name', label: 'Name', required: true },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'tech', label: 'Technician who visited' },
    { name: 'ontime', label: 'Did our technician arrive on time?', type: 'radio', required: true, options: ['Yes', 'No'] },
    { name: 'courteous', label: 'Was the technician courteous and professional?', type: 'radio', required: true, options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { name: 'explained', label: 'Were your options explained clearly?', type: 'radio', required: true, options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { name: 'clean', label: 'Was the work area left clean?', type: 'radio', options: ['Yes', 'No'] },
    { name: 'recommend', label: 'Would you recommend us?', type: 'radio', required: true, options: ['Definitely', 'Probably', 'Not sure', 'No'] },
    { name: 'comments', label: 'Comments', type: 'textarea' },
  ],
  install: [
    { name: 'name', label: 'Name', required: true },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'date', label: 'Installation date', type: 'date' },
    { name: 'crew', label: 'Install crew members' },
    { name: 'sales', label: 'How was your experience with our comfort advisor?', type: 'radio', required: true, options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { name: 'install', label: 'How was the installation itself?', type: 'radio', required: true, options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { name: 'cleanup', label: 'Was your home left clean?', type: 'radio', options: ['Yes', 'No'] },
    { name: 'comments', label: 'Anything we could do better?', type: 'textarea' },
  ],
  bill: [
    { name: 'invoice', label: 'Invoice number', required: true, placeholder: 'INV-000000' },
    { name: 'name', label: 'Name on account', required: true },
    { name: 'email', label: 'Email for receipt', type: 'email', required: true },
    { name: 'amount', label: 'Amount (USD)', type: 'number', required: true, placeholder: '0.00' },
  ],
  subscription: [
    { name: 'name', label: 'Account holder', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'address', label: 'Service address', required: true, full: true },
    { name: 'plan', label: 'Comfort Club billing', type: 'radio', required: true, options: ['Monthly', 'Annual'] },
    { name: 'systems', label: 'Number of systems', type: 'select', required: true, options: ['1', '2', '3', '4+'] },
    { name: 'consent', label: 'I agree to recurring billing until I cancel.', type: 'consent', required: true },
  ],
  inspection: [
    ...contactBasics,
    { name: 'address', label: 'Property address', required: true, full: true },
    { name: 'kind', label: 'Inspection type', type: 'radio', required: true, options: ['Real estate HVAC inspection', 'Camera / sewer inspection', 'Comfort Club tune-up', 'Second opinion'] },
    { name: 'date', label: 'Preferred date', type: 'date', required: true },
    { name: 'window', label: 'Arrival window', type: 'select', required: true, options: ['8am – 10am', '10am – 12pm', '12pm – 2pm', '2pm – 5pm'] },
  ],
  review: [
    { name: 'name', label: 'Name', required: true },
    { name: 'city', label: 'Community', type: 'select', options: cities.map(c => c.label) },
    { name: 'rating', label: 'Rating', type: 'radio', required: true, options: ['5 ★', '4 ★', '3 ★', '2 ★', '1 ★'] },
    { name: 'review', label: 'Your review', type: 'textarea', required: true },
  ],
}
