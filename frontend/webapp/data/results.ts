export type CaseResult = {
  id: number;
  practiceArea: "Corporate" | "Litigation" | "Family" | "Real Estate";
  outcome: string;
  amount: string;
  description: string;
  year: number;
};

export const caseResults: CaseResult[] = [
  {
    id: 1,
    practiceArea: "Litigation",
    outcome: "$3.2M Settlement — Commercial Contract Dispute",
    amount: "$3,200,000",
    description:
      "Recovered $3.2M for a mid-market technology firm after a former distribution partner breached an exclusive agreement and solicited clients in violation of restrictive covenants.",
    year: 2023,
  },
  {
    id: 2,
    practiceArea: "Corporate",
    outcome: "$8.7M Business Acquisition — Favorable Terms Secured",
    amount: "$8,700,000",
    description:
      "Negotiated and closed an $8.7M multi-location restaurant group acquisition, securing indemnification provisions that shielded our client from $1.2M in undisclosed liabilities discovered post-LOI.",
    year: 2023,
  },
  {
    id: 3,
    practiceArea: "Family",
    outcome: "50/50 Custody Award — Multinational Asset Division",
    amount: "N/A",
    description:
      "Secured a shared custody arrangement and equitable division of $4.1M in assets including foreign real estate holdings in a high-conflict divorce proceeding across two jurisdictions.",
    year: 2022,
  },
  {
    id: 4,
    practiceArea: "Real Estate",
    outcome: "$1.9M Recovery — Construction Defect Claim",
    amount: "$1,900,000",
    description:
      "Obtained a $1.9M jury verdict against a general contractor for concealed structural defects in a commercial property, covering remediation costs, lost rental income, and consequential damages.",
    year: 2022,
  },
  {
    id: 5,
    practiceArea: "Litigation",
    outcome: "Defense Verdict — $4M Professional Liability Claim Dismissed",
    amount: "$4,000,000",
    description:
      "Successfully defended a Georgia-based accounting firm against a $4M professional negligence claim, defeating the claim on summary judgment and recovering attorney's fees under OCGA § 9-15-14.",
    year: 2023,
  },
  {
    id: 6,
    practiceArea: "Corporate",
    outcome: "Shareholder Dispute Resolved — $2.4M Buyout",
    amount: "$2,400,000",
    description:
      "Resolved a bitter three-way shareholder dispute in a family-owned manufacturing company, negotiating a $2.4M buyout that allowed the business to continue operating without litigation.",
    year: 2022,
  },
  {
    id: 7,
    practiceArea: "Real Estate",
    outcome: "Title Cleared — $5.2M Commercial Property Saved",
    amount: "$5,200,000",
    description:
      "Resolved a multi-party title dispute that threatened to collapse a $5.2M commercial property transaction, negotiating a settlement that cleared title and allowed the deal to close on schedule.",
    year: 2023,
  },
  {
    id: 8,
    practiceArea: "Family",
    outcome: "Prenuptial Agreement Enforced — $3.8M Asset Protection",
    amount: "$3,800,000",
    description:
      "Successfully defended the enforceability of a prenuptial agreement in Georgia Superior Court, protecting $3.8M in separate property from division during a contested divorce proceeding.",
    year: 2021,
  },
  {
    id: 9,
    practiceArea: "Litigation",
    outcome: "$12.5M Settlement — Business Fraud & Misrepresentation",
    amount: "$12,500,000",
    description:
      "Led a two-year complex commercial litigation that resulted in a $12.5M settlement for a group of investors who were victims of fraudulent misrepresentations in a real estate development scheme.",
    year: 2021,
  },
];
