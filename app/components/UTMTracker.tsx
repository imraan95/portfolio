'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackUTM, trackLinkedInVisit } from '@/lib/gtag';

export default function UTMTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track UTM parameters
    trackUTM();
    // Track LinkedIn visits
    trackLinkedInVisit();
  }, [pathname]);

  return null;
} 