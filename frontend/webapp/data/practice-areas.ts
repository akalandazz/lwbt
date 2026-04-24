export type PracticeArea = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  fullDescription: string[];
  caseTypes: string[];
  approach: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  metaDescription: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-law",
    name: "Corporate Law",
    icon: "Building2",
    tagline: "Protecting your business at every stage of growth.",
    description:
      "From startup formation to complex M&A transactions, we safeguard your business interests with precision legal counsel.",
    fullDescription: [
      "Running a successful business requires more than a great product — it demands airtight legal foundations. John Doe has spent over two decades guiding Georgia businesses through formation, contracts, mergers, and disputes, earning a reputation as a trusted counsel to executives and entrepreneurs alike.",
      "We handle the full spectrum of corporate legal needs, whether you're launching a new venture, entering a partnership, navigating regulatory compliance, or defending against shareholder litigation. Every engagement begins with a deep understanding of your business objectives, so our legal strategy always serves your commercial goals.",
      "Our approach combines strategic foresight with meticulous attention to detail. We anticipate problems before they arise, draft agreements that hold under pressure, and respond decisively when disputes threaten your operations. The result is legal protection that works as hard as you do.",
      "From sole proprietorships to multi-entity holding structures, we tailor our counsel to the complexity of your situation — never over-engineering simple matters, never underselling the stakes of complex ones.",
    ],
    caseTypes: [
      "Business Formation & Entity Selection",
      "Mergers & Acquisitions",
      "Contract Drafting & Negotiation",
      "Shareholder Agreements & Disputes",
      "Corporate Governance & Compliance",
      "Commercial Lease Negotiations",
      "Joint Ventures & Partnerships",
      "Business Dissolutions & Restructuring",
      "Intellectual Property Protection",
      "Employment Agreements & Policies",
    ],
    approach: [
      {
        step: "01",
        title: "Initial Consultation",
        description:
          "We review your business structure, goals, and legal exposure to identify risk and opportunity in a confidential 60-minute session.",
      },
      {
        step: "02",
        title: "Tailored Legal Strategy",
        description:
          "Our team drafts a customized action plan addressing your immediate needs and long-term legal objectives.",
      },
      {
        step: "03",
        title: "Execution & Resolution",
        description:
          "We implement the strategy — negotiating, drafting, filing, or litigating as required — keeping you informed at every step.",
      },
    ],
    faqs: [
      {
        question: "When should I consult a corporate attorney?",
        answer:
          "Before signing any significant contract, taking on investors, hiring employees, or entering a partnership. Prevention is always less costly than litigation.",
      },
      {
        question: "What is the difference between an LLC and a corporation in Georgia?",
        answer:
          "LLCs offer flexibility in management and pass-through taxation, while corporations provide a more formal structure suited for outside investment and equity compensation. The best choice depends on your funding plans, tax situation, and growth trajectory.",
      },
      {
        question: "How long does a business acquisition typically take?",
        answer:
          "A straightforward acquisition can close in 60–90 days. Complex deals involving regulatory approvals, due diligence complications, or financing contingencies can take 6–12 months.",
      },
      {
        question: "Can you help if my business partner and I disagree?",
        answer:
          "Yes. Shareholder and partnership disputes are a core area of our practice. We first explore negotiated or mediated resolutions before recommending litigation, which protects your relationships and resources.",
      },
      {
        question: "Do you handle non-compete agreements in Georgia?",
        answer:
          "Georgia has specific statutory requirements for enforceable non-competes under the 2011 Restrictive Covenant Act. We draft, review, and litigate these agreements regularly.",
      },
    ],
    metaDescription:
      "John Doe Law provides comprehensive corporate legal services in Atlanta, GA — business formation, M&A, contracts, governance, and shareholder disputes.",
  },
  {
    slug: "civil-litigation",
    name: "Civil Litigation",
    icon: "Scale",
    tagline: "Fearless representation when the stakes are highest.",
    description:
      "When disputes escalate to the courtroom, you need a litigator who combines meticulous preparation with commanding advocacy.",
    fullDescription: [
      "Civil litigation is where legal skill, courtroom experience, and sheer tenacity converge. John Doe has tried cases before Georgia state courts, federal district courts, and arbitration panels for over two decades, earning a reputation as a litigator who prepares harder and argues sharper than the opposition.",
      "Every case begins long before the courtroom. We invest heavily in discovery, witness preparation, and legal research — building a factual and legal record that supports every argument we advance. This foundation allows us to negotiate effectively when settlement serves your interests and litigate aggressively when it does not.",
      "We represent plaintiffs and defendants in commercial disputes, contract breaches, property conflicts, fraud claims, and professional liability matters. Our client base ranges from individual entrepreneurs to mid-market corporations, all sharing a common need: a lawyer who will fight for the right outcome with skill and integrity.",
      "Litigation is expensive and disruptive. We are transparent about costs and risks from day one, and we pursue early resolution wherever it genuinely serves your interests. But when litigation is unavoidable, you want us in the room.",
    ],
    caseTypes: [
      "Commercial Contract Disputes",
      "Business Fraud & Misrepresentation",
      "Breach of Fiduciary Duty",
      "Professional Liability Defense",
      "Property & Boundary Disputes",
      "Defamation & Tortious Interference",
      "Insurance Coverage Disputes",
      "Injunctive Relief & Emergency Motions",
      "Appellate Litigation",
      "Arbitration & Mediation",
    ],
    approach: [
      {
        step: "01",
        title: "Case Assessment",
        description:
          "We evaluate the merits, risks, and costs of your case with candor — giving you a realistic picture before you commit to litigation.",
      },
      {
        step: "02",
        title: "Strategic Development",
        description:
          "Discovery, motions, expert witnesses, and trial preparation are managed with rigorous attention to detail and strategic intent.",
      },
      {
        step: "03",
        title: "Trial & Resolution",
        description:
          "Whether at trial, in arbitration, or through negotiated settlement, we pursue the best achievable outcome for you.",
      },
    ],
    faqs: [
      {
        question: "How long does civil litigation take in Georgia?",
        answer:
          "Simple disputes may resolve in 12–18 months. Complex commercial litigation, particularly in federal court, can take 2–4 years from filing to verdict. We pursue early resolution strategies wherever appropriate.",
      },
      {
        question: "What are the costs of litigation?",
        answer:
          "Costs vary widely depending on complexity. We provide transparent fee estimates at the outset and update them as the case evolves. Many commercial disputes are handled on hourly rates; select cases may qualify for contingency arrangements.",
      },
      {
        question: "Can I recover my attorney's fees if I win?",
        answer:
          "In Georgia, fee-shifting is available in specific circumstances — when the contract contains an attorney's fees clause, when a claim is frivolous, or under certain statutes. We assess this at the start of your case.",
      },
      {
        question: "Should I try to settle before filing suit?",
        answer:
          "Often, yes. A well-framed demand letter can resolve disputes faster and at lower cost than litigation. We advise on the strategic timing of settlement approaches throughout your case.",
      },
      {
        question: "What is the difference between arbitration and litigation?",
        answer:
          "Arbitration is a private, binding process that can be faster and more confidential than court litigation. Many commercial contracts mandate arbitration. We handle both and advise on which forum is advantageous in your situation.",
      },
    ],
    metaDescription:
      "John Doe Law — experienced civil litigation attorney in Atlanta, GA. Commercial disputes, contract breaches, fraud, and appeals in state and federal court.",
  },
  {
    slug: "family-law",
    name: "Family Law",
    icon: "Users",
    tagline: "Protecting what matters most — your family.",
    description:
      "Family legal matters are deeply personal. We provide steadfast guidance through divorce, custody, and estate planning with compassion and clarity.",
    fullDescription: [
      "Family law disputes are among the most emotionally charged legal matters a person will ever face. Whether you are navigating a contentious divorce, fighting for custody of your children, or planning for the future through a prenuptial agreement, you deserve counsel who combines legal precision with genuine understanding of what is at stake.",
      "John Doe and our family law team have guided hundreds of Georgia families through life's most difficult transitions. We approach every matter with a commitment to protecting your interests and those of your children — exploring negotiated and mediated solutions when possible, and advocating aggressively in court when necessary.",
      "We are transparent about the emotional and financial costs of prolonged family litigation, and we work diligently to achieve resolutions that allow all parties to move forward. When settlement is not possible, our courtroom experience ensures you are powerfully represented.",
      "Our team is versed in complex asset valuation, business interests in divorce, interstate custody matters, and high-conflict co-parenting situations. Whatever your circumstances, we bring the same level of care and competence to every client.",
    ],
    caseTypes: [
      "Divorce (Contested & Uncontested)",
      "Child Custody & Visitation",
      "Child Support Modifications",
      "Spousal Support & Alimony",
      "High-Asset Divorce & Asset Division",
      "Prenuptial & Postnuptial Agreements",
      "Adoption",
      "Domestic Violence & Protective Orders",
      "Paternity Actions",
      "Modifications of Existing Orders",
    ],
    approach: [
      {
        step: "01",
        title: "Confidential Consultation",
        description:
          "We listen to your situation with full confidentiality and map out the legal landscape — explaining your rights, realistic outcomes, and immediate steps.",
      },
      {
        step: "02",
        title: "Resolution Strategy",
        description:
          "We pursue mediation, negotiation, or collaborative divorce where it serves you and your children, preserving resources for what comes next.",
      },
      {
        step: "03",
        title: "Advocacy & Finalization",
        description:
          "When court involvement is necessary, we advocate powerfully for your interests and those of your family, through to final order.",
      },
    ],
    faqs: [
      {
        question: "Is Georgia a no-fault divorce state?",
        answer:
          "Yes. Georgia allows divorce on no-fault grounds (irreconcilable differences) as well as fault grounds including adultery, desertion, and cruelty. Fault can affect alimony awards.",
      },
      {
        question: "How is child custody determined in Georgia?",
        answer:
          "Georgia courts apply a 'best interests of the child' standard, considering factors like each parent's home environment, relationship with the child, work schedule, and the child's own preferences (particularly for children 14 and older).",
      },
      {
        question: "How is marital property divided in Georgia?",
        answer:
          "Georgia follows equitable distribution — property is divided fairly but not necessarily equally. Courts consider the length of marriage, each spouse's contributions, and other factors.",
      },
      {
        question: "Can I modify a custody or support order later?",
        answer:
          "Yes, if there has been a substantial change in circumstances since the original order — such as a job loss, relocation, or change in the child's needs.",
      },
      {
        question: "How long does a divorce take in Georgia?",
        answer:
          "Uncontested divorces can finalize in 31–45 days from filing (after the mandatory waiting period). Contested divorces average 6–12 months; complex high-asset cases can take longer.",
      },
    ],
    metaDescription:
      "John Doe Law — compassionate family law attorney in Atlanta, GA. Divorce, child custody, asset division, adoption, and protective orders.",
  },
  {
    slug: "real-estate",
    name: "Real Estate Law",
    icon: "Home",
    tagline: "Securing your most significant investments.",
    description:
      "Whether buying, selling, leasing, or disputing, our real estate attorneys protect your property interests with expert precision.",
    fullDescription: [
      "Real estate transactions and disputes involve some of the largest financial commitments of your lifetime. A single overlooked clause in a purchase agreement or an unresolved title defect can cost hundreds of thousands of dollars. John Doe's real estate practice exists to ensure that never happens to our clients.",
      "We represent buyers, sellers, landlords, tenants, developers, and investors throughout Georgia in residential and commercial real estate matters. Our involvement begins at the contract stage — reviewing and negotiating terms before you are bound — and extends through closing, lease administration, and dispute resolution.",
      "When real estate disputes arise, we bring the same litigation capabilities that define our broader practice to property boundary conflicts, easement disputes, landlord-tenant matters, and developer liability claims. We know Georgia's real estate laws in depth and apply that knowledge strategically on your behalf.",
      "The Atlanta real estate market moves fast. Our team is responsive, decisive, and available when you need counsel on time-sensitive transactions and disputes.",
    ],
    caseTypes: [
      "Residential & Commercial Purchase/Sale",
      "Title Review & Title Disputes",
      "Commercial Lease Drafting & Negotiation",
      "Landlord-Tenant Disputes & Evictions",
      "Property Boundary & Easement Disputes",
      "Real Estate Contract Breaches",
      "Construction Defect Claims",
      "HOA Disputes",
      "Foreclosure Defense",
      "1031 Exchange Transactions",
    ],
    approach: [
      {
        step: "01",
        title: "Transaction Review",
        description:
          "We review all contracts, title commitments, and inspection reports before you sign — identifying risk and negotiating protective terms.",
      },
      {
        step: "02",
        title: "Closing Oversight",
        description:
          "Our team coordinates with lenders, title companies, and agents to ensure a clean, compliant closing with no surprises.",
      },
      {
        step: "03",
        title: "Post-Closing & Dispute Resolution",
        description:
          "If disputes arise after closing, we move decisively — through demand, mediation, or litigation — to protect your investment.",
      },
    ],
    faqs: [
      {
        question: "Do I need an attorney to buy or sell a home in Georgia?",
        answer:
          "Georgia is one of the states that requires an attorney to be present at residential real estate closings. Having your own attorney — not just the closing attorney — ensures someone is advocating for your interests specifically.",
      },
      {
        question: "What is a title search and why does it matter?",
        answer:
          "A title search examines public records to confirm the seller has clear ownership and identify any liens, easements, or encumbrances on the property. Defects discovered after closing can be extremely costly to resolve.",
      },
      {
        question: "What should I know before signing a commercial lease?",
        answer:
          "Commercial leases heavily favor landlords as drafted. Key issues include base rent escalation clauses, CAM charges, personal guarantees, exclusivity provisions, and exit options. Never sign without legal review.",
      },
      {
        question: "How does landlord-tenant law work in Georgia?",
        answer:
          "Georgia law provides specific procedures for evictions, security deposit disputes, and habitability standards. Landlords who fail to follow proper procedures can face penalties; tenants who understand their rights can prevent unlawful evictions.",
      },
      {
        question: "What is a 1031 exchange?",
        answer:
          "A 1031 exchange allows real estate investors to defer capital gains taxes by reinvesting proceeds from a property sale into a 'like-kind' property within specific time windows. Strict IRS rules apply; legal and tax counsel are essential.",
      },
    ],
    metaDescription:
      "John Doe Law — experienced real estate attorney in Atlanta, GA. Transactions, title disputes, lease negotiations, landlord-tenant, and closings.",
  },
];
