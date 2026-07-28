import React from "react";
import NewsletterCapture from "../blog/components/NewsletterCapture";
import type { NewsletterSource } from "../lib/newsletter";

interface LeadMagnetCTAProps {
  title?: string;
  description?: string;
  ctaText?: string;
  source?: NewsletterSource;
}

export default function LeadMagnetCTA({
  title = "Get Free AI Workflow Templates",
  description = "Subscribe to our newsletter and receive a curated collection of AI workflow templates for small businesses.",
  ctaText = "Subscribe Now",
  source = "lead-magnet",
}: LeadMagnetCTAProps) {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-center">
      <NewsletterCapture darkMode source={source} title={title} description={description} ctaText={ctaText} />
    </div>
  );
}
