const GUMROAD_BASE = 'https://methodstackhq.gumroad.com/l';
const CAMPAIGN = 'eawf_funnel_2026q3';

function gumroadLink(slug: string, content: string) {
  const params = new URLSearchParams({
    utm_source: 'eawf',
    utm_medium: 'owned',
    utm_campaign: CAMPAIGN,
    utm_content: content,
  });

  return `${GUMROAD_BASE}/${slug}?${params.toString()}`;
}

export const methodStackLinks = {
  freeReset: gumroadLink('ai-workflow-reset', 'free_reset'),
  workdaySystem: gumroadLink('ai-workday-system', 'workday_system'),
  weeklyPlanningKit: gumroadLink('ai-weekly-planning-kit', 'weekly_planning_kit'),
  researchDecisionKit: gumroadLink('ai-research-decision-kit', 'research_decision_kit'),
  completeSystem: gumroadLink('method-stack-complete-system', 'complete_system'),
} as const;
