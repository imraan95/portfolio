'use client';

import { useEffect } from 'react';
import { trackUTM } from '@/lib/gtag';
import { usePathname } from 'next/navigation';

export default function UTMTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track UTM parameters on initial load and route changes
    trackUTM();
  }, [pathname]); // Re-run when pathname changes

  return null; // This component doesn't render anything
} 