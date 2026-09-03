/**
 * Which CTA labels should open the Inquiry Form modal rather than navigate.
 *
 * Shared by PageHero and CTABanner so the same label can't behave differently
 * in the hero and the banner on one page — which is exactly what happened when
 * each carried its own copy of this rule.
 */
export function opensInquiry(label: string) {
  return /\b(demo|schedule|quote|consultation)\b/i.test(label);
}
