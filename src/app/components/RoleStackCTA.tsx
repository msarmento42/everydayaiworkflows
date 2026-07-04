type RoleStackCTAProps = {
  role: 'freelancers' | 'agency-owners' | 'remote-workers' | 'small-business-owners' | 'sales-teams' | 'marketing-teams';
  title?: string;
  body?: string;
};

const roleLabels: Record<RoleStackCTAProps['role'], string> = {
  freelancers: 'freelancer AI stack',
  'agency-owners': 'agency owner AI stack',
  'remote-workers': 'remote worker AI stack',
  'small-business-owners': 'small business AI stack',
  'sales-teams': 'sales team AI stack',
  'marketing-teams': 'marketing team AI stack',
};

export default function RoleStackCTA({
  role,
  title = 'Choose the right stack before adding another subscription',
  body = 'Compare the recommended tools, automation workflow, and next step for this role.',
}: RoleStackCTAProps) {
  return (
    <aside
      aria-label="AI tools by role recommendation"
      style={{
        background: 'rgba(0, 212, 255, 0.06)',
        border: '1px solid rgba(0, 212, 255, 0.22)',
        borderRadius: '10px',
        padding: '1rem',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
      }}
    >
      <p style={{ color: '#67e8f9', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', margin: '0 0 0.45rem', textTransform: 'uppercase' }}>
        Tool stack
      </p>
      <p style={{ color: '#fff', fontWeight: 700, margin: '0 0 0.35rem' }}>{title}</p>
      <p style={{ color: '#cbd5e1', margin: 0, lineHeight: 1.6 }}>
        {body}{' '}
        <a href={`/ai-tools-by-role#${role}`} style={{ color: '#00d4ff', fontWeight: 700 }}>
          See the {roleLabels[role]}
        </a>
        .
      </p>
    </aside>
  );
}
