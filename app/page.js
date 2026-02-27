/**
 * Index page route (/) - Next.js App Router
 * 
 * This is the root index page. Currently redirects to /living-continuity
 * which contains the homepage content.
 */
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IndexPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/living-continuity');
  }, [router]);

  return null;
}
