"use client";

import { useEffect } from "react";
import type { AnalyticsEventName } from "../lib/analytics";
import { trackAnalyticsEvent } from "../lib/analytics";

interface FunnelEventProps {
  event: AnalyticsEventName;
  page: string;
  product?: string;
  template?: string;
}

export default function FunnelEvent({ event, page, product, template }: FunnelEventProps) {
  useEffect(() => {
    trackAnalyticsEvent(event, { page, product, template });
  }, [event, page, product, template]);

  return null;
}
