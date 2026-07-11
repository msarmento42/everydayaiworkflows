import React from "react";

export default function LeadMagnetCTA() {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Get Free AI Workflow Templates</h2>
      <p className="mb-4">Subscribe to our newsletter and receive a curated collection of AI workflow templates for small businesses.</p>
      <a
        href="https://beehiiv.com/subscribe/your-list-id"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-100 transition"
      >
        Subscribe Now
      </a>
    </div>
  );
}
