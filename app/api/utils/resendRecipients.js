const DEFAULT_NOTIFICATION_EMAIL = 'research@sharjaharchitecture.org';

export function resolveInterpretationRecipients() {
  const raw = process.env.RESEND_TO_EMAIL?.trim();
  if (raw) {
    return raw.split(',').map((e) => e.trim()).filter(Boolean);
  }
  return [DEFAULT_NOTIFICATION_EMAIL];
}

export function resolveFloorPlanRecipient() {
  const raw = process.env.RESEND_TO_EMAIL?.trim();
  if (raw) {
    const first = raw.split(',')[0]?.trim();
    if (first) return first;
  }
  return DEFAULT_NOTIFICATION_EMAIL;
}

export function resolveResendFrom() {
  const custom = process.env.RESEND_FROM_EMAIL?.trim();
  if (custom) return custom;
  return 'Living Continuity <onboarding@resend.dev>';
}
