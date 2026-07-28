const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const configured = typeof measurementId === "string" && /^G-[A-Z0-9]+$/.test(measurementId);

console.log(`Analytics readiness: NEXT_PUBLIC_GA_MEASUREMENT_ID is ${configured ? "configured" : "not configured"}.`);

if (measurementId && !configured) {
  console.error("Analytics readiness: the configured public measurement ID has an invalid format.");
  process.exitCode = 1;
}
