"use client";

import type { MouseEventHandler, ReactNode } from "react";
import { trackAnalyticsEvent } from "../lib/analytics";

interface TrackedLinkProps {
  children: ReactNode;
  className?: string;
  download?: string;
  event: "checkout_start" | "template_download";
  href: string;
  page: string;
  product?: string;
  template?: string;
}

export default function TrackedLink({
  children,
  className,
  download,
  event,
  href,
  page,
  product,
  template,
}: TrackedLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = () => {
    trackAnalyticsEvent(event, { page, product, template });
  };

  return (
    <a className={className} download={download} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
