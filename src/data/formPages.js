import { site } from './site'

// Simple "intro + form" pages. Each entry maps a live URL to its form config (see forms.js).
export const formPages = {
  'pay-your-bill-online': {
    eyebrow: 'Savings', title: 'Pay your bill', form: 'bill', submit: 'Continue to secure payment',
    intro: 'Enter your invoice details. You’ll finish payment on our secure processor — we never ask for card numbers on this page.',
    success: 'Invoice found', successText: 'In the live site this hands off to our secure payment processor. This preview isn’t connected, so no payment was made.',
    perks: ['Your invoice number is at the top of your statement', `Questions about a bill? Call ${site.phone}`],
  },
  'payment-subscription': {
    eyebrow: 'Comfort Club', title: 'Comfort Club sign-up', form: 'subscription', submit: 'Start membership',
    intro: 'Choose monthly or annual billing. We’ll call to confirm your first tune-up and collect payment securely by phone.',
    success: 'Welcome to the Comfort Club',
    perks: ['Two precision tune-ups a year', 'Priority service & no overtime charges', 'Discounted repairs and reduced service fee'],
  },
  inspectionschedule: {
    eyebrow: 'Scheduling', title: 'Schedule an inspection', form: 'inspection', submit: 'Request this time',
    intro: 'Pick a date and arrival window. We’ll confirm by phone or email within one business day.',
    success: 'Inspection requested',
    perks: ['Real estate HVAC inspections', 'Camera / sewer line inspections', 'Second opinions with a written report'],
  },
  'join-team': {
    eyebrow: 'Careers', title: 'Join our team', form: 'career', submit: 'Submit application', scraped: true,
    intro: 'Great benefits, ongoing training and a relaxed, fun environment — our people tend to stay a long time.',
    success: 'Application received', successText: 'Thanks for your interest! Our hiring team reviews every application and will reach out if it’s a fit.',
    perks: ['$2,000 signing bonus for experienced techs', 'Paid training & certifications', 'Named a Top Workplace in San Antonio'],
  },
  'refer-friend': {
    eyebrow: 'Refer a friend', title: 'Refer a friend, get up to $100 cash.', form: 'refer', submit: 'Send referral', scraped: true,
    intro: 'Know someone who needs heating, cooling or plumbing help? Send them our way — when they become a customer, you get rewarded.',
    success: 'Referral sent', successText: 'Thank you! We’ll reach out to your friend and let you know when your reward is on the way.',
    perks: ['$25 when we service your referral', '$100 when they buy a new system', 'No limit on referrals'],
  },
  'customer-survey': {
    eyebrow: 'Customer survey', title: 'How did we do?', form: 'survey', submit: 'Submit survey',
    intro: 'We’re constantly looking for ways to improve. Your answers go straight to our service manager.',
    success: 'Thank you', successText: 'Your feedback helps us keep earning your trust.',
  },
  reviewus: {
    eyebrow: 'Installation survey', title: 'Thank you for letting us install your new unit!', form: 'install', submit: 'Submit feedback',
    intro: 'We’d appreciate your opinion of our performance. Please fill out the brief questionnaire below.',
    success: 'Thank you', successText: 'Your response is greatly appreciated.',
  },
}
