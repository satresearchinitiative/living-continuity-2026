'use client';

import Link from 'next/link';
import styles from './notFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.black_box}>
          <h1 className={styles.title}>PAGE NOT FOUND</h1>
        </div>
        <Link href="/living-continuity" className={styles.link}>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
