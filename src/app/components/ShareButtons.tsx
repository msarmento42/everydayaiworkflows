"use client";

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

const buttonStyle = {
  background: 'rgba(255,255,255,0.1)',
  border: 'none',
  borderRadius: '8px',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '0.85rem',
  padding: '0.5rem 0.85rem',
} as const;

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const openShareWindow = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>Share:</span>
      <button
        type="button"
        onClick={() => openShareWindow(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`)}
        style={buttonStyle}
      >
        Twitter/X
      </button>
      <button
        type="button"
        onClick={() => openShareWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`)}
        style={buttonStyle}
      >
        LinkedIn
      </button>
      <button type="button" onClick={copyLink} style={buttonStyle}>
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}
