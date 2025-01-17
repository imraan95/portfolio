export const GA_TRACKING_ID = 'G-JQ81EYLEHR'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    source_tracking: true,
    allow_google_signals: true
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Track UTM parameters
export const trackUTM = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');

  if (utmSource || utmMedium || utmCampaign) {
    // Track the UTM visit
    window.gtag('event', 'utm_visit', {
      event_category: 'Traffic Source',
      event_label: 'UTM Parameters',
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign
    });

    // Track specific resume version if it's from a resume campaign
    if (utmSource === 'resume_pdf') {
      window.gtag('event', 'resume_view', {
        event_category: 'Resume Traffic',
        event_label: utmCampaign || 'Unknown Version'
      });
    }
  }
}

export const trackLinkedInVisit = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get('utm_source');

  if (utmSource === 'linkedin') {
    window.gtag('event', 'linkedin_visit', {
      event_category: 'Traffic Source',
      event_label: 'LinkedIn Profile',
      value: 1
    });
  }
}

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
  }
} 