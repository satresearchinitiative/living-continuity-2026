'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.scss';

export default function GlossaryLayout({ children }) {
  const pathname = usePathname();
  const isBaseGlossaryRoute = pathname === '/glossary';

  if (isBaseGlossaryRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Link href="/glossary" className={styles.backButton}>
        Back to Glossary
      </Link>
      {children}
    </>
  );
}
