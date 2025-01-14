export const GA_TRACKING_ID = 'G-JQ81EYLEHR'

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    source_tracking: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: true
  })
}

// Track LinkedIn specific visits
export const trackLinkedInVisit = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const isFromLinkedIn = urlParams.get('utm_source') === 'linkedin'
  
  if (isFromLinkedIn) {
    window.gtag('event', 'linkedin_visit', {
      event_category: 'Traffic Source',
      event_label: 'LinkedIn Profile',
      value: 1
    })
  }
} 