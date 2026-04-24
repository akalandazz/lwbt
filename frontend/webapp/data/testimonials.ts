export type Testimonial = {
  id: number;
  quote: string;
  initials: string;
  caseType: string;
  rating: number;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "John Doe and his team navigated our acquisition with exceptional skill. When the other party introduced last-minute complications, John moved with precision and closed the deal on our terms. I cannot imagine handling that transaction with anyone else.",
    initials: "M.T.",
    caseType: "Business Acquisition",
    rating: 5,
    location: "Atlanta, GA",
  },
  {
    id: 2,
    quote:
      "Going through a divorce is devastating, but having John's team in my corner gave me genuine peace of mind. They fought hard for my custody arrangement and made sure my children's best interests were front and center throughout. The outcome exceeded what I thought was possible.",
    initials: "R.H.",
    caseType: "Divorce & Child Custody",
    rating: 5,
    location: "Buckhead, GA",
  },
  {
    id: 3,
    quote:
      "Our commercial tenant refused to honor the lease terms we agreed to. John filed, argued, and won — recovering every dollar of damages plus attorney's fees. His courtroom presence is exactly what you want when the stakes are high.",
    initials: "S.P.",
    caseType: "Commercial Litigation",
    rating: 5,
    location: "Midtown Atlanta, GA",
  },
  {
    id: 4,
    quote:
      "The contract review John's office performed before we signed saved us from a $400,000 liability clause buried in the fine print. That single consultation paid for itself a hundred times over. I send every business owner I know to John Doe Law.",
    initials: "K.L.",
    caseType: "Corporate Contract Review",
    rating: 5,
    location: "Sandy Springs, GA",
  },
  {
    id: 5,
    quote:
      "I was facing a complex real estate dispute involving a title defect that threatened to unravel a major investment. John's team resolved the issue in under 60 days, clearing the title and protecting my asset. Professional, responsive, and brilliant.",
    initials: "D.W.",
    caseType: "Real Estate Dispute",
    rating: 5,
    location: "Alpharetta, GA",
  },
];
