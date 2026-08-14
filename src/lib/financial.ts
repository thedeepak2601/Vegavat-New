// Financial services (Income Tax, GST, Accounting). These sit apart from
// SERVICES in content.ts — different practice, different contact number.
//
// Three levels: category (/financial-services/gst) → sub-service
// (/financial-services/gst/gst-filing). Both are generated from this file.

export const FINANCE_PHONE = "+91 88729 76232";
export const FINANCE_PHONE_HREF = "tel:+918872976232";
export const FINANCE_WHATSAPP_HREF = "https://wa.me/918872976232";

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type FinanceSub = {
  slug: string;
  label: string;
  /** One-liner used on cards and in the mega menu. */
  desc: string;
  icon: string;
  image: string;
  /** Three quick bullets for the category-page card. */
  points: string[];
  /** Everything below powers the sub-service page. */
  intro: string;
  includes: { t: string; d: string }[];
  documents: string[];
  who: string[];
  timeline: string;
  /** What the client actually receives at the end. */
  deliverables: string[];
  /** Pitfalls this service exists to prevent. */
  mistakes: { t: string; d: string }[];
  /** Statutory deadlines, where the service has them. */
  dueDates?: { label: string; when: string }[];
  faqs: { q: string; a: string }[];
};

export type FinanceCategory = {
  slug: string;
  index: string;
  title: string;
  menuDesc: string;
  short: string;
  intro: string;
  icon: string;
  image: string;
  sideImage: string;
  turnaround: string;
  stats: { value: string; label: string }[];
  subs: FinanceSub[];
  documents: string[];
  who: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

/** Shared engagement flow — the same four steps across all three practices. */
export const FINANCE_PROCESS = [
  {
    icon: "chat",
    t: "Talk to us",
    d: "A short call to understand your situation, what is pending and what it will cost. No charge, no obligation.",
  },
  {
    icon: "audit",
    t: "Share documents",
    d: "We send a checklist tailored to your case. Share what you have over WhatsApp, email or a secure link.",
  },
  {
    icon: "sync",
    t: "We prepare & review",
    d: "Your file is prepared by a professional and independently reviewed before anything is submitted.",
  },
  {
    icon: "shield",
    t: "File & follow up",
    d: "We file, send you the acknowledgement, and stay available for any notice or query that follows.",
  },
];

export const FINANCE_CATEGORIES: FinanceCategory[] = [
  // ─────────────────────────────── INCOME TAX ───────────────────────────────
  {
    slug: "income-tax",
    index: "01",
    title: "Income Tax",
    menuDesc: "Registration · ITR filing · Tax planning · Consultancy",
    short:
      "Registration, return filing, planning and year-round advisory, handled accurately and on time.",
    intro:
      "From your first PAN registration to complex capital gains and notice replies, we handle the full income tax lifecycle. Returns are prepared by experienced professionals, reviewed before submission and filed well ahead of deadlines, so you claim every deduction you are entitled to without inviting scrutiny.",
    icon: "finance",
    image: U("photo-1633158829585-23ba8f7c8caf"),
    sideImage: U("photo-1593642532973-d31b6557fa68"),
    turnaround: "Most returns filed within 3–5 working days of receiving documents",
    stats: [
      { value: "3–5", label: "Days to file" },
      { value: "100%", label: "Reviewed before filing" },
      { value: "All", label: "ITR forms covered" },
      { value: "Free", label: "First consultation" },
    ],
    subs: [
      {
        slug: "registration",
        label: "Registration",
        desc: "PAN and TAN registration, e-filing account setup and first-time taxpayer onboarding, completed with correct documentation from day one.",
        icon: "flag",
        image: U("photo-1554224154-26032ffc0d07", 800),
        points: ["New PAN & TAN applications", "E-filing portal registration", "Correction of existing records"],
        intro:
          "Before anything can be filed, your tax identity has to be set up correctly — PAN for you or your business, TAN if you deduct tax at source, and an e-filing account linked to the right mobile number and email. Errors at this stage quietly cause problems for years, from blocked refunds to failed e-verification, so we get every detail right the first time.",
        includes: [
          { t: "New PAN application", d: "For individuals, proprietors, partnership firms, LLPs and companies — including NRIs and foreign nationals where Indian income arises." },
          { t: "TAN registration", d: "Required the moment you deduct TDS on salary, rent, contractor payments or professional fees. We apply, track and hand over the allotment letter." },
          { t: "E-filing portal account", d: "Registration on the income tax portal with Aadhaar linking, contact verification and e-verification method configured so filing never stalls." },
          { t: "Correction of existing records", d: "Name, date of birth, address or Aadhaar–PAN mismatch corrections — the usual culprits behind rejected returns and stuck refunds." },
          { t: "Digital signature (DSC)", d: "Procurement and portal registration of a Class 3 DSC for companies, LLPs and audit cases where signing is mandatory." },
          { t: "Written handover", d: "Credentials, acknowledgements and a plain-language note recording exactly what was registered, so nothing depends on memory." },
        ],
        documents: [
          "Identity proof (Aadhaar, passport or voter ID)",
          "Date of birth proof",
          "Address proof",
          "Passport-size photograph",
          "Incorporation certificate and deed, for firms and companies",
          "Bank account details",
        ],
        who: ["First-time taxpayers", "Newly formed businesses", "Employers deducting TDS", "NRIs with Indian income", "Firms and companies"],
        timeline: "PAN and TAN are typically allotted in 7–10 working days. Portal registration is completed the same day once PAN is active.",
        deliverables: [
          "PAN card and allotment letter",
          "TAN allotment letter",
          "E-filing portal login credentials",
          "Class 3 DSC, where procured",
          "Written summary of everything registered",
        ],
        mistakes: [
          { t: "Name mismatch across documents", d: "A single character of difference between PAN, Aadhaar and bank records is enough to block e-verification and stall refunds for months." },
          { t: "Wrong applicant category", d: "Selecting individual instead of firm, or the wrong company type, means a fresh application rather than an edit." },
          { t: "A personal email on a business PAN", d: "Department notices then arrive in an inbox nobody monitors. We set contact details someone will actually see." },
        ],
        dueDates: [
          { label: "TAN application", when: "Before the first TDS deduction is made" },
          { label: "PAN–Aadhaar linking", when: "As notified — an unlinked PAN can become inoperative" },
        ],
        faqs: [
          { q: "Do I need a TAN if I already have a PAN?", a: "They serve different purposes. PAN identifies you as a taxpayer; TAN is required specifically to deduct and deposit TDS. If you pay salaries, rent above the threshold, or contractor and professional fees, you need both." },
          { q: "My PAN and Aadhaar details do not match. Is that a problem?", a: "Yes — a mismatch blocks e-verification and can make your PAN inoperative, which stops refunds. We handle the correction on whichever side is wrong." },
          { q: "Can you register a PAN for an NRI?", a: "Yes. The document set differs slightly, and we will tell you exactly what is required based on your country of residence." },
        ],
      },
      {
        slug: "itr-filing",
        label: "ITR Filing",
        desc: "Accurate return filing for salaried individuals, professionals, businesses, firms and companies across all ITR forms, filed before the due date.",
        icon: "audit",
        image: U("photo-1450101499163-c8848c66ca85", 800),
        points: ["ITR-1 through ITR-7", "Capital gains & house property", "Revised and belated returns"],
        intro:
          "Filing is not just data entry into a form. The right ITR form has to be chosen, income classified correctly under each head, deductions supported by evidence, and the whole thing reconciled against your Form 26AS and AIS before submission — because that is exactly what the department compares it to.",
        includes: [
          { t: "Correct form selection", d: "ITR-1 to ITR-7 depending on your income heads, residential status and entity type. Filing on the wrong form makes a return defective." },
          { t: "Income computation across heads", d: "Salary, house property, business or profession, capital gains and other sources, each computed under the right head with the right rate." },
          { t: "26AS and AIS reconciliation", d: "We match your return against the department's own records first, so mismatches are resolved before filing rather than answered in a notice later." },
          { t: "Deductions and exemptions", d: "80C, 80D, 80G, HRA, LTA, home loan interest and the rest — claimed where supported, with the proof recorded against each claim." },
          { t: "Capital gains treatment", d: "Shares, mutual funds, property and other assets, with indexation, exemption claims and set-off of losses handled properly." },
          { t: "E-verification and follow-up", d: "The return is only complete once verified. We confirm verification, share the acknowledgement, and track the refund to credit." },
          { t: "Revised and belated returns", d: "Correcting an earlier filing or catching up on a missed year, where the law still permits it." },
        ],
        documents: [
          "PAN and Aadhaar",
          "Form 16 or salary statements",
          "Bank interest certificates and statements",
          "Investment and deduction proofs",
          "Capital gains statements from broker or registrar",
          "Rent receipts and home loan certificate, if applicable",
        ],
        who: ["Salaried professionals", "Freelancers and consultants", "Proprietors and firms", "Investors and traders", "NRIs with Indian income"],
        timeline: "Most returns are prepared and filed within 3–5 working days of receiving complete documents.",
        deliverables: [
          "Filed return with ITR-V acknowledgement",
          "Computation of income statement",
          "Tax payment challan copies, where payable",
          "All supporting workings, in a single file",
          "Refund tracked until it reaches your bank",
        ],
        mistakes: [
          { t: "Filing before Form 26AS settles", d: "Deductors revise their returns through the year. Filing early against incomplete data is a leading cause of mismatch notices." },
          { t: "Leaving out AIS entries", d: "Interest, dividends and high-value transactions are already reported to the department. Omitting them guarantees a query." },
          { t: "Forgetting to e-verify", d: "An unverified return is treated as never filed at all — the most common self-inflicted error we see." },
        ],
        dueDates: [
          { label: "ITR — non-audit cases", when: "31 July following the financial year, unless extended" },
          { label: "ITR — audit cases", when: "31 October following the financial year, unless extended" },
          { label: "Belated or revised return", when: "31 December following the financial year, unless extended" },
        ],
        faqs: [
          { q: "What if my Form 26AS does not match my Form 16?", a: "It usually means a deductor has not filed or has reported against the wrong PAN. We identify the gap and either get it corrected at source or file with a documented explanation." },
          { q: "Is filing worth it if my income is below the exemption limit?", a: "Often yes. A filed return is standard proof of income for loans and visas, and it is the only way to claim a refund of TDS already deducted." },
          { q: "What happens if I miss the due date?", a: "A belated return is usually still possible with a late fee, though some benefits such as carrying forward certain losses are lost. Call us and we will tell you exactly where you stand." },
        ],
      },
      {
        slug: "tax-planning",
        label: "Tax Planning",
        desc: "Legitimate, structured planning across salary, business income, investments and capital gains so your liability is minimised before the year ends, not after.",
        icon: "projects",
        image: U("photo-1543286386-713bdd548da4", 800),
        points: ["Old vs new regime comparison", "Deduction & exemption planning", "Advance tax estimates"],
        intro:
          "By the time you sit down to file, most of your tax outcome is already fixed. Planning is what happens during the year — choosing the right regime, timing investments and asset sales, structuring salary components and keeping advance tax on schedule so there is no interest sting at the end.",
        includes: [
          { t: "Old vs new regime comparison", d: "Your liability computed under both, side by side, with the actual rupee difference — rather than an assumption that one is generally better." },
          { t: "Salary structuring", d: "Guidance on HRA, LTA, and reimbursement components so the package you negotiate is efficient rather than merely large." },
          { t: "Deduction and investment planning", d: "Mapping 80C, 80D, NPS and other sections against what you already hold, so you top up where it counts instead of over-investing to no benefit." },
          { t: "Capital gains timing", d: "When to book gains or losses, how to set off losses, and which exemptions are worth restructuring a sale around." },
          { t: "Advance tax schedule", d: "Quarterly estimates and reminders, so you avoid 234B and 234C interest instead of discovering it at filing." },
          { t: "Business and firm planning", d: "Depreciation choices, presumptive taxation suitability, and partner or director remuneration structured within the limits the law allows." },
        ],
        documents: [
          "Last filed return and computation",
          "Current year salary or income projection",
          "Existing investment portfolio",
          "Loan statements",
          "Details of planned asset sales or purchases",
        ],
        who: ["Salaried professionals", "High earners with multiple income sources", "Business owners and partners", "Investors booking capital gains"],
        timeline: "A planning review takes about a week. Most useful before the financial year ends — earlier means more options.",
        deliverables: [
          "Side-by-side old versus new regime computation",
          "Written planning note with recommended actions",
          "Advance tax schedule with quarterly amounts",
          "Deduction gap analysis against what you already hold",
          "A follow-up review before the year closes",
        ],
        mistakes: [
          { t: "Investing in March without a plan", d: "Last-minute purchases lock money into products that may not suit you, often for a deduction limit you had already filled." },
          { t: "Assuming the new regime is cheaper", d: "With a home loan, HRA and 80C in play the old regime frequently wins. It has to be computed, not assumed." },
          { t: "Ignoring advance tax", d: "Interest under sections 234B and 234C accrues quietly and is entirely avoidable with quarterly estimates." },
        ],
        dueDates: [
          { label: "Advance tax — 1st instalment", when: "15 June — 15% of estimated liability" },
          { label: "2nd instalment", when: "15 September — 45% cumulative" },
          { label: "3rd instalment", when: "15 December — 75% cumulative" },
          { label: "4th instalment", when: "15 March — 100% cumulative" },
        ],
        faqs: [
          { q: "When is the right time for tax planning?", a: "Early in the financial year gives the most room. Planning in March limits you to whatever last-minute investments are still available, which is rarely the best outcome." },
          { q: "Is this the same as tax saving?", a: "Tax saving is one part of it. Planning also covers timing, structuring and cash flow — including making sure you are not paying interest for underestimating advance tax." },
          { q: "Do you recommend specific investment products?", a: "We explain the tax treatment of each option and what it does to your liability. We are not distributors and earn no commission on any product." },
        ],
      },
      {
        slug: "tax-consultancy",
        label: "Tax Consultancy",
        desc: "Ongoing advisory on notices, assessments, TDS compliance, advance tax and rectifications, with a professional who knows your file.",
        icon: "users",
        image: U("photo-1521737604893-d14cc237f11d", 800),
        points: ["Notice & assessment handling", "TDS returns and corrections", "Rectification and refund follow-up"],
        intro:
          "Most tax problems are not filing problems — they are the letters, mismatches and deadlines that arrive afterwards. This is ongoing access to someone who already knows your file, so a notice becomes a task with a plan rather than a week of worry.",
        includes: [
          { t: "Notice review and reply", d: "Every notice quotes a section that tells you what it actually is. We identify what triggered it, what it demands, and draft a supported reply within the deadline." },
          { t: "Assessment and scrutiny support", d: "Preparing submissions, collating evidence and representing your position through faceless assessment proceedings." },
          { t: "TDS compliance", d: "Quarterly TDS return preparation, challan corrections, Form 16 and 16A generation, and resolving short-deduction or late-payment defaults." },
          { t: "Rectification and refund follow-up", d: "Filing rectification requests where the department's computation is wrong, and chasing refunds that have been processed but not credited." },
          { t: "Advance tax monitoring", d: "Quarterly liability estimates and reminders so you pay the right amount at the right time." },
          { t: "Transaction advice", d: "A quick, honest answer on the tax consequence before you sell a property, close a deal or restructure — while it can still change the outcome." },
        ],
        documents: [
          "The notice or order received",
          "Return and computation for the relevant year",
          "Form 26AS and AIS for that year",
          "Supporting evidence for the items questioned",
          "Any earlier correspondence with the department",
        ],
        who: ["Anyone who has received a notice", "Businesses deducting TDS", "Taxpayers under scrutiny", "Clients wanting a year-round adviser"],
        timeline: "Notices are acknowledged the same day and a response plan shared within 48 hours, well inside the reply window.",
        deliverables: [
          "Drafted reply with annexures and evidence",
          "Portal submission acknowledgement",
          "Plain-language case summary and next steps",
          "Quarterly TDS returns with Form 16 and 16A",
          "Rectification filings and refund follow-up",
        ],
        mistakes: [
          { t: "Ignoring a notice and hoping", d: "Reply windows are short. Missing one turns a routine query into an ex-parte order that is far harder to undo." },
          { t: "Replying without reading the section", d: "The section quoted defines exactly what is being asked. A generic reply to a specific query simply invites a second notice." },
          { t: "Paying a demand that is wrong", d: "Many demands arise from unmatched TDS credit. Rectification is often the correct answer, not payment." },
        ],
        dueDates: [
          { label: "TDS return — Q1", when: "31 July" },
          { label: "TDS return — Q2", when: "31 October" },
          { label: "TDS return — Q3", when: "31 January" },
          { label: "TDS return — Q4", when: "31 May" },
        ],
        faqs: [
          { q: "I have received a notice. How serious is it?", a: "It depends entirely on the section quoted — many are routine, automated mismatches resolved with a simple response, while others need a full submission. Send us the notice and we will tell you honestly which it is." },
          { q: "Can you handle a case filed by someone else?", a: "Yes. We review what was filed, identify what created the issue, and take it forward from there. You do not need to have been our client originally." },
          { q: "Do you represent clients in faceless assessments?", a: "Yes. Faceless proceedings are handled through written submissions on the portal, which is exactly how we prepare and respond." },
        ],
      },
    ],
    documents: [
      "PAN and Aadhaar",
      "Form 16 or salary statements",
      "Bank interest certificates",
      "Investment and deduction proofs",
      "Capital gains statements, if any",
      "Business books, for proprietors and firms",
    ],
    who: [
      "Salaried professionals",
      "Freelancers & consultants",
      "Proprietors",
      "Partnership firms",
      "Private limited companies",
      "NRIs with Indian income",
    ],
    benefits: [
      "Filed before deadlines, never in the last-minute rush",
      "Every eligible deduction identified and documented",
      "Notices and assessments handled end to end",
      "Clear, itemised fees agreed upfront",
    ],
    faqs: [
      { q: "Which ITR form applies to me?", a: "It depends on your income sources — salary, business or profession, capital gains, house property or foreign income. Share your details on a call and we will confirm the correct form before anything is filed." },
      { q: "What documents do you need to file my return?", a: "Typically PAN, Aadhaar, Form 16 or income statements, bank interest certificates, investment proofs and capital gains statements. We send a tailored checklist once we understand your sources of income." },
      { q: "Can you help if I have already received a notice?", a: "Yes. We review the notice, identify what triggered it, prepare the response with supporting documents and represent your position through to closure." },
      { q: "Should I choose the old or the new tax regime?", a: "It depends on your deductions and income mix. We compute your liability under both and show you the comparison before filing, rather than assuming one is better." },
      { q: "I have not filed for a couple of years. Can that be fixed?", a: "In most cases yes, through belated or updated returns depending on how far back it goes. We will tell you honestly what can still be filed and what the cost of doing so is." },
    ],
  },

  // ─────────────────────────────────── GST ──────────────────────────────────
  {
    slug: "gst",
    index: "02",
    title: "GST",
    menuDesc: "Registration · GST filing · Reconciliation · Consultancy",
    short:
      "Registration, monthly and annual returns, reconciliation and advisory, kept fully compliant.",
    intro:
      "GST compliance is relentless — monthly returns, input tax credit reconciliation, annual filings and constant rule changes. We take the entire cycle off your desk, match your books against the portal every period, and flag mismatches before they become notices or blocked credit.",
    icon: "erp",
    image: U("photo-1591696205602-2f950c417cb9"),
    sideImage: U("photo-1542744173-8e7e53415bb0"),
    turnaround: "Monthly returns filed on a fixed schedule, every period",
    stats: [
      { value: "Monthly", label: "Filing cadence" },
      { value: "2B", label: "Credit reconciled" },
      { value: "0", label: "Missed deadlines" },
      { value: "Free", label: "First consultation" },
    ],
    subs: [
      {
        slug: "registration",
        label: "Registration",
        desc: "New GSTIN registration, amendments, additional place of business and composition scheme opt-in, with documentation prepared correctly the first time.",
        icon: "flag",
        image: U("photo-1556742049-0cfed4f6a45d", 800),
        points: ["New GSTIN applications", "Amendments & additional premises", "Composition scheme opt-in"],
        intro:
          "GST registration looks like a form, but most rejections come down to document quality — an address proof that does not match, an unclear rent agreement, or the wrong business constitution selected. We prepare the application properly and handle any clarification the officer raises.",
        includes: [
          { t: "Applicability assessment", d: "Whether you actually need to register, based on turnover, state, inter-state supply, e-commerce sales and reverse charge exposure." },
          { t: "New GSTIN application", d: "Full ARN filing with correctly prepared documents, business constitution and authorised signatory details." },
          { t: "Clarification handling", d: "If the officer raises a query, we respond within the window with the right evidence rather than letting the application lapse." },
          { t: "Amendments", d: "Changes to address, business name, authorised signatory, bank details or the addition of a place of business." },
          { t: "Composition scheme", d: "Assessment of whether it suits your margins and customers, and the opt-in filing if it does." },
          { t: "Multi-state registration", d: "Separate GSTINs where you operate across states, with a consistent structure so filings stay manageable." },
        ],
        documents: [
          "PAN of the business and of proprietor or directors",
          "Aadhaar of the authorised signatory",
          "Proof of business address (electricity bill, rent agreement or NOC)",
          "Bank account details with a cancelled cheque",
          "Photographs of proprietor, partners or directors",
          "Incorporation certificate or partnership deed",
        ],
        who: ["New businesses crossing the threshold", "E-commerce sellers", "Inter-state suppliers", "Businesses adding a new state or premises"],
        timeline: "Applications are filed within 1–2 working days of receiving documents. GSTIN is usually allotted in about 7 working days if no clarification is raised.",
        deliverables: [
          "GST registration certificate (REG-06)",
          "GSTIN and portal credentials",
          "ARN and application acknowledgements",
          "Copy of every document submitted",
          "A note on your filing obligations from day one",
        ],
        mistakes: [
          { t: "Weak address proof", d: "An unclear electricity bill, or a rent agreement without an NOC, is the single most common cause of rejection." },
          { t: "Wrong business constitution", d: "Selecting proprietorship for a partnership, or the wrong entity type, means refiling rather than editing." },
          { t: "Missing the clarification window", d: "Officers raise queries with a short reply period. Miss it and the application is rejected outright." },
        ],
        dueDates: [
          { label: "Registration application", when: "Within 30 days of becoming liable to register" },
          { label: "First return", when: "For the period in which registration is granted" },
        ],
        faqs: [
          { q: "What is the turnover threshold for registration?", a: "It varies by state and by whether you supply goods or services, and it does not apply at all in some categories — e-commerce sellers and inter-state suppliers often must register regardless. We will confirm your position on a call." },
          { q: "Why do GST registrations get rejected?", a: "Most often the address proof is unclear, does not match the applicant, or the rent agreement and NOC are incomplete. We check the document set before filing to avoid this." },
          { q: "Can I have more than one GSTIN?", a: "Yes — one per state you operate in, and in some cases separate registrations for distinct business verticals." },
        ],
      },
      {
        slug: "gst-filing",
        label: "GST Filing",
        desc: "GSTR-1, GSTR-3B and annual GSTR-9 prepared and filed on schedule, with input tax credit reconciled against GSTR-2B every period.",
        icon: "sync",
        image: U("photo-1460925895917-afdab827c52f", 800),
        points: ["GSTR-1 and GSTR-3B", "Annual GSTR-9 and 9C", "Nil and composition returns"],
        intro:
          "Every month brings the same cycle: outward supplies reported, credit claimed, tax paid, deadline met. We run that cycle for you on a fixed schedule, and we reconcile credit against GSTR-2B before filing rather than claiming first and fixing later.",
        includes: [
          { t: "GSTR-1 — outward supplies", d: "Invoice-wise reporting of sales, credit and debit notes, exports and amendments, prepared from your sales register." },
          { t: "GSTR-3B — summary and payment", d: "Tax liability computed, eligible credit set off, and the balance paid, with challans and acknowledgements shared each period." },
          { t: "Input tax credit check", d: "Credit matched against GSTR-2B before it is claimed, so ineligible or unsupported credit does not become a demand later." },
          { t: "Annual returns", d: "GSTR-9 and, where applicable, the GSTR-9C reconciliation statement, prepared from the full year's filings and books." },
          { t: "Nil and composition returns", d: "CMP-08 and quarterly filings for composition dealers, and nil returns where there was no activity — still mandatory." },
          { t: "Backlog filing", d: "Pending returns filed in the correct sequence, with late fees and interest computed accurately so there are no surprises." },
        ],
        documents: [
          "Sales register or invoice list for the period",
          "Purchase register with supplier GSTINs",
          "Credit and debit notes issued",
          "Export documents, if applicable",
          "GST portal credentials",
          "Previous period returns, when taking over mid-year",
        ],
        who: ["Regular taxpayers", "Composition dealers", "Exporters", "E-commerce sellers", "Businesses with a filing backlog"],
        timeline: "Returns are prepared for your review ahead of each due date and filed on a fixed monthly schedule.",
        deliverables: [
          "Filed GSTR-1 and GSTR-3B with acknowledgements",
          "Tax payment challans for each period",
          "Input tax credit summary",
          "Mismatch report naming suppliers where credit is missing",
          "Annual GSTR-9 and 9C, where applicable",
        ],
        mistakes: [
          { t: "Claiming credit before checking 2B", d: "Credit not reflected in GSTR-2B is liable to be reversed with interest. Checking first costs nothing." },
          { t: "Skipping nil returns", d: "No activity does not mean no filing. Late fees accrue on a nil return exactly the same way." },
          { t: "GSTR-1 and 3B not agreeing", d: "A difference between the two is a standard trigger for scrutiny at annual return stage." },
        ],
        dueDates: [
          { label: "GSTR-1 (monthly filers)", when: "11th of the following month" },
          { label: "GSTR-3B (monthly filers)", when: "20th of the following month" },
          { label: "CMP-08 (composition)", when: "18th of the month following each quarter" },
          { label: "GSTR-9 annual return", when: "31 December following the financial year" },
        ],
        faqs: [
          { q: "Do I need to file if I had no sales this month?", a: "Yes. A nil return is still required, and late fees accrue for not filing it even with zero activity." },
          { q: "What if a supplier has not filed and my credit is missing?", a: "We identify the specific invoices and suppliers behind the gap each period, so you can follow up with them while the amounts are still small and recent." },
          { q: "Can you take over filings mid-year?", a: "Yes. We review what has been filed so far, flag anything worth correcting, and take over from the current period onward." },
        ],
      },
      {
        slug: "gst-consultancy",
        label: "GST Consultancy",
        desc: "Advisory on rates, classification, place of supply, e-invoicing, e-way bills and departmental notices, from people who track the circulars.",
        icon: "users",
        image: U("photo-1600880292203-757bb62b4baf", 800),
        points: ["Rate & classification advice", "E-invoicing and e-way bills", "Notice and demand replies"],
        intro:
          "GST questions are rarely about the return — they are about whether a supply is taxable, at what rate, in which state, and whether the credit is claimable. Getting those wrong quietly compounds every month until a notice arrives.",
        includes: [
          { t: "Rate and HSN classification", d: "Determining the correct rate and HSN or SAC code for your products and services, with the reasoning documented in case it is questioned." },
          { t: "Place of supply", d: "Whether a transaction is intra-state or inter-state — the most common source of wrongly charged tax, and an expensive one to unwind." },
          { t: "Input tax credit eligibility", d: "What can and cannot be claimed, including blocked credits, and how to treat exempt or mixed supplies." },
          { t: "E-invoicing setup", d: "Applicability assessment, portal configuration and integration with your billing or ERP system so IRNs generate automatically." },
          { t: "E-way bill compliance", d: "When one is required, how to generate it correctly, and how to handle expiry, cancellation and vehicle changes in transit." },
          { t: "Notice and demand replies", d: "Drafting responses to ASMT, DRC and scrutiny notices, with the supporting reconciliation attached." },
        ],
        documents: [
          "Product or service list with current rates applied",
          "Sample invoices",
          "The notice or query received, if any",
          "Existing billing or ERP system details",
          "Recent GST returns",
        ],
        who: ["Businesses unsure of their rates", "Companies crossing the e-invoicing threshold", "Anyone who has received a GST notice", "Multi-state operators"],
        timeline: "Advisory queries are answered within 24–48 hours. Notices are acknowledged the same day.",
        deliverables: [
          "Written opinion with the reasoning set out",
          "HSN and SAC classification note for your catalogue",
          "Drafted reply to any notice, with annexures",
          "E-invoicing configuration and handover notes",
          "Alerts on rule changes that affect your business",
        ],
        mistakes: [
          { t: "One rate across a mixed catalogue", d: "Different products attract different rates. A single blanket rate creates exposure in both directions — short payment and over-collection." },
          { t: "Getting place of supply wrong", d: "Charging CGST and SGST where IGST applied, or the reverse, means the tax paid does not count and has to be paid again." },
          { t: "Assuming e-invoicing does not apply", d: "The turnover threshold has been reduced several times. Businesses cross it without noticing." },
        ],
        faqs: [
          { q: "Am I required to issue e-invoices?", a: "It depends on your aggregate turnover, and the threshold has been lowered several times. We will check your position against the current rule rather than an outdated one." },
          { q: "I think I have been charging the wrong rate. What now?", a: "We assess the exposure for the periods affected, then advise on correction through credit notes and amended returns, along with the realistic cost of putting it right." },
          { q: "How do you keep up with rule changes?", a: "Circulars and notifications are tracked as part of the practice, and we flag changes that affect your specific business rather than sending generic updates." },
        ],
      },
      {
        slug: "reconciliation",
        label: "Reconciliation & Audit Support",
        desc: "Books-to-portal reconciliation, credit mismatch resolution and complete support during GST audits and departmental enquiries.",
        icon: "audit",
        image: U("photo-1552664730-d307ca884978", 800),
        points: ["GSTR-2B vs books matching", "Supplier follow-up on mismatches", "Audit and enquiry support"],
        intro:
          "Reconciliation is where blocked credit and future demands are found. Matching what your books say against what the portal shows, every period, is the difference between a clean annual return and an expensive reconstruction exercise twelve months later.",
        includes: [
          { t: "GSTR-2B versus purchase register", d: "Invoice-level matching each period, with a clear list of what matched, what is missing and what differs in value." },
          { t: "Supplier follow-up list", d: "A named list of suppliers who have not filed or have reported incorrectly, so you can chase the specific ones costing you credit." },
          { t: "GSTR-1 versus books", d: "Confirming that everything invoiced was reported, and that nothing was reported twice — both create problems at annual return stage." },
          { t: "GSTR-3B versus 2B versus books", d: "The three-way check that annual filings depend on, run through the year rather than in a year-end scramble." },
          { t: "Annual reconciliation", d: "Preparing the working papers behind GSTR-9 and 9C so the annual return is supported, not estimated." },
          { t: "Audit and enquiry support", d: "Document collation, reply drafting and representation during departmental audits, ASMT scrutiny and DRC proceedings." },
        ],
        documents: [
          "Purchase register for the period",
          "Sales register for the period",
          "GST portal credentials for 2B download",
          "Filed returns for the period under review",
          "Audit notice or enquiry letter, if any",
        ],
        who: ["Businesses with high purchase volume", "Companies facing a GST audit", "Anyone with blocked or mismatched credit", "Businesses preparing GSTR-9C"],
        timeline: "Periodic reconciliation is delivered with each month's filing. A full-year clean-up typically takes 2–3 weeks depending on volume.",
        deliverables: [
          "Invoice-level 2B versus books match report",
          "Named list of suppliers to follow up",
          "Three-way 3B, 2B and books summary",
          "Annual reconciliation working papers",
          "Drafted audit replies with annexures",
        ],
        mistakes: [
          { t: "Reconciling once a year", d: "By the time an annual reconciliation runs, the window to claim missing credit for the early months may already have closed." },
          { t: "Chasing suppliers too late", d: "A supplier is far more responsive about last month's invoice than one from fourteen months ago." },
          { t: "Treating 2A and 2B as the same", d: "2B is the static statement that determines credit. Reconciling against the wrong one produces the wrong answer." },
        ],
        dueDates: [
          { label: "Credit claim cut-off", when: "Time-barred after the deadline for that financial year — which is why monthly reconciliation matters" },
        ],
        faqs: [
          { q: "Why does my credit never match my books?", a: "Usually because a supplier filed late, filed against the wrong GSTIN, or reported a different value. Reconciliation identifies which of the three it is, invoice by invoice." },
          { q: "How far back can mismatches be fixed?", a: "There are time limits on claiming credit for a financial year, which is precisely why monthly reconciliation matters more than an annual one. We will tell you what is still recoverable." },
          { q: "What happens in a GST audit?", a: "The department requests records and explanations for selected periods. We collate the documents, prepare the reconciliations and draft the replies, so you are responding from evidence rather than memory." },
        ],
      },
    ],
    documents: [
      "PAN of business and proprietor or directors",
      "Aadhaar of the authorised signatory",
      "Proof of business address",
      "Bank account details and cancelled cheque",
      "Sales and purchase registers",
      "Existing GST credentials, if registered",
    ],
    who: [
      "Traders & distributors",
      "Manufacturers",
      "E-commerce sellers",
      "Service providers",
      "Exporters",
      "Multi-state businesses",
    ],
    benefits: [
      "Returns filed every period without chasing",
      "Input tax credit reconciled, not left on the table",
      "Mismatches caught before the department does",
      "E-invoicing and e-way bill compliance covered",
    ],
    faqs: [
      { q: "Is GST registration mandatory for my business?", a: "It depends on your turnover, state, and whether you supply inter-state, sell online or fall under a reverse charge category. A short call is usually enough to determine this definitively." },
      { q: "What happens if I have missed several returns?", a: "We assess the backlog, calculate late fees and interest accurately, file the pending returns in the correct sequence and bring the GSTIN back to good standing." },
      { q: "Do you handle e-invoicing setup?", a: "Yes — applicability assessment, portal configuration, and integration with your existing billing or ERP system so invoices generate IRNs automatically." },
      { q: "Why is my input tax credit not matching?", a: "Usually because a supplier has not filed, has filed under the wrong GSTIN, or has reported a different value. We reconcile against GSTR-2B each period and chase the specific suppliers responsible." },
      { q: "Can you take over filings mid-year?", a: "Yes. We review what has been filed so far, identify any gaps or errors worth correcting, and take over from the current period onward." },
    ],
  },

  // ─────────────────────────── ACCOUNTING SERVICES ──────────────────────────
  {
    slug: "accounting-services",
    index: "03",
    title: "Accounting Services",
    menuDesc: "Financial recording · Data recording · Accounts management",
    short:
      "Books maintained properly, records kept clean and accounts managed so you always know where you stand.",
    intro:
      "Most compliance problems start with disorganised books. We maintain your day-to-day accounting, keep records reconciled and audit-ready, and give you monthly statements you can actually make decisions from — instead of a shoebox of invoices at year end.",
    icon: "projects",
    image: U("photo-1554224155-6726b3ff858f"),
    sideImage: U("photo-1454165804606-c3d57bc86b40"),
    turnaround: "Monthly books closed within 7 working days of period end",
    stats: [
      { value: "7 days", label: "Monthly closing" },
      { value: "Tally+", label: "Software supported" },
      { value: "Audit", label: "Ready records" },
      { value: "Free", label: "First consultation" },
    ],
    subs: [
      {
        slug: "financial-recording",
        label: "Financial Recording",
        desc: "Day-to-day bookkeeping — sales, purchases, expenses, journals and bank entries recorded accurately in Tally, Zoho or your existing system.",
        icon: "finance",
        image: U("photo-1450101499163-c8848c66ca85", 800),
        points: ["Sales & purchase entries", "Expense and journal vouchers", "Bank and cash books"],
        intro:
          "This is the foundation everything else sits on. Every invoice, payment and expense recorded in the right ledger, under the right head, in the right period — so that when a return is filed or an auditor asks a question, the answer is already in the books.",
        includes: [
          { t: "Sales and purchase entries", d: "Invoice-wise recording against the correct party ledgers, with GST treatment applied at entry rather than corrected later." },
          { t: "Expense vouchers", d: "Expenses booked under a consistent chart of accounts, so month-on-month comparisons actually mean something." },
          { t: "Bank and cash books", d: "All bank and cash movements recorded and tied back to statements, with no unexplained balances carried forward." },
          { t: "Journal entries", d: "Provisions, prepayments, depreciation, accruals and adjustment entries passed with a documented basis." },
          { t: "Party ledgers", d: "Customer and supplier accounts maintained so outstanding balances are accurate and disputes are traceable to an invoice." },
          { t: "Chart of accounts setup", d: "If you are starting fresh, a structure suited to your business rather than a generic default you outgrow in a year." },
        ],
        documents: [
          "Sales and purchase invoices",
          "Bank statements for the period",
          "Expense bills and receipts",
          "Existing books or Tally backup, if any",
          "Loan and asset details",
        ],
        who: ["Startups without an accountant", "Small businesses", "Professional practices", "Businesses with a bookkeeping backlog"],
        timeline: "Ongoing entry through the month, with the period closed within 7 working days of month end.",
        deliverables: [
          "Updated books in your own Tally or Zoho file",
          "Monthly trial balance",
          "Ledger-wise summaries",
          "A backup of the accounting file each month",
          "A short list of entries needing your confirmation",
        ],
        mistakes: [
          { t: "A catch-all expense ledger", d: "'Miscellaneous expenses' destroys month-on-month comparability and is precisely what an assessing officer asks about." },
          { t: "Mixing personal and business spending", d: "It inflates expenses, weakens the books at audit, and makes the owner's drawings impossible to track." },
          { t: "Entering without the GST treatment", d: "Recording an invoice without its tax treatment means the books and the return disagree from the very start." },
        ],
        dueDates: [
          { label: "Monthly document cut-off", when: "Shared by the 5th, books closed by the 7th" },
        ],
        faqs: [
          { q: "Do you work in our existing Tally file?", a: "Yes. We work in your file and your system, so you keep ownership of the data and can hand it to anyone else at any point." },
          { q: "How do we get documents to you each month?", a: "Whatever suits you — WhatsApp, email or a shared drive folder. We will set up a simple routine so nothing gets missed." },
          { q: "Our books are two years behind. Is that a problem?", a: "It is common and it is fixable. We quote the clean-up separately from ongoing work so you can see exactly what the catch-up costs." },
        ],
      },
      {
        slug: "data-recording",
        label: "Data Recording",
        desc: "Structured capture and digitisation of vouchers, invoices and receipts, organised so any transaction can be traced in seconds.",
        icon: "inventory",
        image: U("photo-1551288049-bebda4e38f71", 800),
        points: ["Invoice & receipt digitisation", "Structured document filing", "Backlog data entry"],
        intro:
          "An entry in the books is only as good as the document behind it. We digitise and index your source documents so that when a notice, audit or dispute asks for the invoice from eighteen months ago, it takes seconds to produce rather than an afternoon.",
        includes: [
          { t: "Invoice and receipt digitisation", d: "Physical documents scanned, named to a consistent convention and stored where they can actually be found." },
          { t: "Structured filing", d: "Organised by period, party and document type, so retrieval does not depend on remembering where something was put." },
          { t: "Backlog data entry", d: "Historic vouchers and invoices captured and entered, bringing incomplete periods up to a usable state." },
          { t: "Document-to-entry linking", d: "Each accounting entry tied to its supporting document, which is exactly what an auditor or officer asks to see." },
          { t: "Master data cleanup", d: "Duplicate parties merged, GSTINs corrected and item masters standardised, so reports stop double-counting." },
          { t: "Secure handling", d: "Access limited to the people working your file, with your data kept in a location you control." },
        ],
        documents: [
          "Physical or scanned invoices and vouchers",
          "Receipt books",
          "Existing digital records in any format",
          "Bank statements",
          "Access to your current storage or drive",
        ],
        who: ["Businesses with paper-heavy records", "Companies preparing for audit", "Firms with incomplete historic data", "Anyone facing a document request"],
        timeline: "Ongoing capture runs alongside monthly bookkeeping. Backlog digitisation is quoted on volume after a sample review.",
        deliverables: [
          "Indexed digital archive of all vouchers",
          "Consistent file naming and folder structure",
          "Document-to-entry reference sheet",
          "Cleaned party and item master lists",
          "A backup in a location you control",
        ],
        mistakes: [
          { t: "Keeping only physical copies", d: "Thermal paper fades and files get lost — which becomes a real problem when a notice arrives three years later." },
          { t: "Inconsistent naming", d: "A folder of files called 'scan_001' is technically stored and practically lost." },
          { t: "Duplicate party masters", d: "The same supplier entered three different ways splits balances and makes reconciliation impossible." },
        ],
        faqs: [
          { q: "Do we have to send you original documents?", a: "No. Clear scans or photographs are sufficient for almost everything, and originals stay with you." },
          { q: "Where is our data stored?", a: "In a location you own and control — your drive, your Tally file. We do not hold your records hostage in a system you cannot access." },
          { q: "Can you organise records for a period you did not handle?", a: "Yes, and it is often the first thing worth doing before an audit or a notice reply." },
        ],
      },
      {
        slug: "accounts-management",
        label: "Accounts Management",
        desc: "Ledger scrutiny, bank and party reconciliation, receivables and payables tracking, and monthly closing you can rely on.",
        icon: "crm",
        image: U("photo-1517245386807-bb43f82c33c4", 800),
        points: ["Bank & party reconciliation", "Receivables and payables", "Monthly closing"],
        intro:
          "Recording transactions is one thing; making sure the resulting balances are actually correct is another. This is the review layer — reconciling, scrutinising and closing each month so the numbers you rely on have been checked rather than merely entered.",
        includes: [
          { t: "Bank reconciliation", d: "Every account reconciled to the statement each month, with reconciling items explained rather than carried forward indefinitely." },
          { t: "Party reconciliation", d: "Customer and supplier balances agreed against their statements, so disputes surface early instead of at year end." },
          { t: "Ledger scrutiny", d: "A review of each significant ledger for misposted, duplicated or misclassified entries before the period is closed." },
          { t: "Receivables tracking", d: "Ageing analysis showing who owes what and for how long, so collection follow-up is based on facts." },
          { t: "Payables tracking", d: "Due dates and outstanding balances tracked, so nothing is missed and cash outflow is planned." },
          { t: "Monthly closing", d: "A defined close each period — adjustments passed, balances agreed, books locked — instead of numbers that keep shifting." },
        ],
        documents: [
          "Bank statements for all accounts",
          "Customer and supplier statements",
          "Current trial balance or Tally backup",
          "Loan and interest schedules",
          "Details of any known disputes",
        ],
        who: ["Growing SMEs", "Businesses with multiple bank accounts", "Firms with large receivables", "Companies with an in-house junior accountant"],
        timeline: "Closing completed within 7 working days of month end, with reconciliations shared alongside.",
        deliverables: [
          "Bank reconciliation statements for every account",
          "Party balance confirmations",
          "Receivables and payables ageing analysis",
          "Ledger scrutiny notes",
          "A signed-off monthly closing summary",
        ],
        mistakes: [
          { t: "Carrying unexplained reconciling items", d: "An entry that has sat unreconciled for months is almost always an error, not a timing difference." },
          { t: "Never agreeing party balances", d: "A dispute found at year end is far harder to resolve than one caught in the month it arose." },
          { t: "Reopening closed periods", d: "Editing a closed month changes numbers already reported and acted on. It is a standard audit finding." },
        ],
        dueDates: [
          { label: "Monthly close", when: "Within 7 working days of month end" },
        ],
        faqs: [
          { q: "We already have an accountant. Does this still help?", a: "Often yes. Many clients keep a junior accountant for daily entry and use us for the review, reconciliation and closing layer, which is where errors are usually caught." },
          { q: "What is the benefit of a formal monthly close?", a: "Your numbers stop moving after the fact. It means the figure you saw in April is still the figure in the annual accounts, which matters for decisions and for audit." },
          { q: "Can you help recover long-outstanding receivables?", a: "We produce the ageing analysis and the invoice-level evidence behind each balance. Collection is your call, but you will be chasing from accurate records." },
        ],
      },
      {
        slug: "mis-reporting",
        label: "MIS & Financial Reporting",
        desc: "Monthly P&L, balance sheet and cash-flow reporting, plus the schedules your auditor asks for, prepared without a year-end scramble.",
        icon: "web",
        image: U("photo-1460925895917-afdab827c52f", 800),
        points: ["P&L and balance sheet", "Cash-flow statements", "Audit schedules"],
        intro:
          "Compliance tells you what you owe. Reporting tells you how the business is actually doing. We turn the books into monthly statements you can read in a few minutes and act on — and into the schedules your auditor will ask for anyway.",
        includes: [
          { t: "Monthly profit and loss", d: "Revenue and costs by head, with the previous period alongside so movements are visible rather than buried." },
          { t: "Balance sheet", d: "A monthly position showing what the business owns and owes, not just an annual statement produced for filing." },
          { t: "Cash-flow statement", d: "Where cash actually came from and went, which frequently tells a different story from the profit figure." },
          { t: "Ratio and trend analysis", d: "Margins, expense ratios and growth trends tracked month on month, with anything moving unusually flagged." },
          { t: "Audit schedules", d: "Fixed assets, debtors, creditors and other supporting schedules prepared in the format auditors request." },
          { t: "Custom reports", d: "Segment, branch or project-wise reporting where your business needs to see performance split that way." },
        ],
        documents: [
          "Completed books for the period",
          "Fixed asset register",
          "Loan schedules",
          "Budget or targets, if you track against them",
          "Previous year financials",
        ],
        who: ["Business owners wanting monthly visibility", "Companies reporting to investors or lenders", "Firms preparing for audit", "Multi-branch businesses"],
        timeline: "Monthly reporting pack delivered within 7–10 working days of period end.",
        deliverables: [
          "Monthly P&L with prior-period comparatives",
          "Balance sheet",
          "Cash-flow statement",
          "Ratio and trend summary with anything unusual flagged",
          "Audit schedules on request",
        ],
        mistakes: [
          { t: "Reading profit as cash", d: "A profitable month with every sale on credit can still leave you unable to pay salaries." },
          { t: "Reporting without comparatives", d: "A number on its own carries very little meaning. The comparison is where the information actually is." },
          { t: "Waiting for the annual audit", d: "Discovering a margin problem eleven months late removes every option you had to fix it." },
        ],
        faqs: [
          { q: "How is this different from what my accountant already gives me?", a: "Many accountants produce statements once a year for filing. This is a monthly pack designed to be read and used, with comparatives and commentary on what moved." },
          { q: "Can reports be tailored to what we care about?", a: "Yes. Tell us which numbers drive your decisions and we will build the pack around those rather than a standard template." },
          { q: "Will this help at audit time?", a: "Considerably. The schedules auditors request are prepared through the year, so the audit becomes a review rather than a reconstruction." },
        ],
      },
    ],
    documents: [
      "Sales and purchase invoices",
      "Bank statements for the period",
      "Expense bills and receipts",
      "Existing books or backups, if any",
      "Loan and asset details",
      "Payroll registers, if applicable",
    ],
    who: [
      "Startups & small businesses",
      "Growing SMEs",
      "Professional practices",
      "Retail & wholesale traders",
      "Businesses without an in-house accountant",
      "Firms preparing for audit",
    ],
    benefits: [
      "Books stay current, not reconstructed at year end",
      "Audit-ready records with a clear document trail",
      "Monthly numbers you can act on",
      "Works with Tally, Zoho, ERPNext or your own stack",
    ],
    faqs: [
      { q: "Can you take over books that are already behind?", a: "Yes. We start with a clean-up — reconstructing entries, reconciling bank and party balances, and bringing the ledgers current — then move you onto a monthly cycle." },
      { q: "Which accounting software do you work with?", a: "Tally, Zoho Books, ERPNext and most common packages. If you have no system yet, we will recommend one that suits your size and volume rather than overselling you." },
      { q: "Do you work with businesses outside Lucknow?", a: "Yes — the work is handled remotely with secure document sharing, and we serve clients across India." },
      { q: "Will I still need my own accountant?", a: "Many clients use us instead of an in-house hire; others use us alongside a junior accountant who handles day-to-day entry while we review and close. Both work." },
      { q: "How do I send you documents each month?", a: "Whatever suits you — WhatsApp, email or a shared drive folder. We will set up a simple routine so nothing gets missed." },
    ],
  },
];

export function getFinanceCategory(slug: string) {
  return FINANCE_CATEGORIES.find((c) => c.slug === slug);
}

export function getFinanceSub(categorySlug: string, subSlug: string) {
  const category = getFinanceCategory(categorySlug);
  if (!category) return null;
  const sub = category.subs.find((s) => s.slug === subSlug);
  return sub ? { category, sub } : null;
}

/** Every category/sub pair — used for static params and sitemap-style listings. */
export const FINANCE_SUB_PATHS = FINANCE_CATEGORIES.flatMap((c) =>
  c.subs.map((s) => ({ slug: c.slug, sub: s.slug }))
);
