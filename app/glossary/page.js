/**
 * Glossary page route (/glossary) - Next.js App Router
 * 
 * This page displays the glossary content with keywords in multiple languages.
 */
'use client';

import GlossaryList from '../../components/glossary/GlossaryList';

export default function GlossaryPage() {
  return <GlossaryList />;
}

