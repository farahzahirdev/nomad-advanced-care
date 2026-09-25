/** Bump when replacing public/images so caches refresh */
const IMG_V = "20260925e";

const img = (publicPath: string) => `${publicPath}?v=${IMG_V}`;

export const LOGO_URL = img("/images/logo-green.jpeg");
export const LOGO_WHITE_URL = img("/images/logo-white.webp");

export const IMAGES = {
  hero: img("/images/hero-seattle.jpg"),
  howItWorks: img("/images/how-it-works.jpg"),
  whyCare: img("/images/nurse-care.jpg"),
  forest: img("/images/forest-path.jpg"),
  seattle: img("/images/seattle-kayak.jpg"),
  overlook: img("/images/overlook.jpg"),
  faq: img("/images/faq.jpg"),
  finalCta: img("/images/final-cta.jpg"),
} as const;

/** Advertising / tracking number from landing page brief */
export const PHONE_NUMBER = "(425) 675-8754";
export const PHONE_HREF = "tel:+14256758754";

export const ADDRESS = "200 First Ave W, Suite 403, Seattle, WA 98119";
export const HOURS = "Monday-Friday, 9 AM - 5 PM";
export const EMAIL = "info@nomadtherapeutics.org";
export const EMAIL_HREF = "mailto:info@nomadtherapeutics.org";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=200+First+Ave+W+Suite+403,+Seattle,+WA+98119";
export const WEBSITE_URL = "https://www.nomadtherapeutics.org";
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Nomad+Therapeutics+Seattle";

export const SERVICE_AREA =
  "King, Pierce, Kitsap & Thurston counties · Queen Anne clinic + at-home care";

export const FORM_ID = "b8WykJojCfh9YDGKQIa9";
export const FORM_IFRAME_ID = "inline-b8WykJojCfh9YDGKQIa9";
export const FORM_SECTION_ID = "qualify-form";
export const BOOKING_SECTION_ID = "book";
export const CALENDAR_ID = "0i8BscQ5Z3TFl57ySu6l";
export const CALENDAR_SRC = `https://go.4tms.com/widget/booking/${CALENDAR_ID}`;
export const CALENDAR_IFRAME_ID = `${CALENDAR_ID}_1790263686857`;

export const HERO_TRUST_ITEMS = [
  { title: "Most Major Insurance Plans", icon: "shield" as const },
  { title: "Physician Oversight & RN Monitoring", icon: "doctor" as const },
  { title: "Most Patients Start Within a Week", icon: "clock" as const },
  { title: "Greater Seattle & Surrounding Counties", icon: "pin" as const },
] as const;

export const SERVICES = [
  {
    title: "Medication Management",
    description:
      "Physician-led medication plans for depression, anxiety, and PTSD, adjusted carefully so treatment fits your life.",
    badge: "Physician-led",
  },
  {
    title: "Spravato (Esketamine)",
    description:
      "FDA-approved nasal spray for treatment-resistant depression. Accepted by most major insurance plans. In-clinic with registered nurse monitoring.",
    badge: "Accepted by most major plans",
  },
  {
    title: "TMS Therapy",
    description:
      "Non-medication magnetic pulse therapy for depression. Accepted by most major insurance plans. No anesthesia. Drive yourself home.",
    badge: "Accepted by most major plans",
  },
] as const;

export const LOCATIONS = [
  { name: "Seattle & Shoreline", note: "Clinic + regional care" },
  { name: "Bellevue", note: "King County" },
  { name: "Tacoma / Pierce", note: "Pierce County" },
  { name: "Kitsap", note: "Kitsap County" },
  { name: "Olympia / Thurston", note: "Thurston County" },
  { name: "Queen Anne clinic", note: "Seattle clinic" },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Free consultation call",
    description:
      "A short conversation about what you’ve tried and what you want to feel different. No commitment, just clarity.",
  },
  {
    step: "02",
    title: "Clinical evaluation",
    description:
      "A clinician reviews your history, medications, and safety. We’ll recommend a plan or tell you honestly if we’re not the right fit.",
  },
  {
    step: "03",
    title: "Start within days",
    description:
      "Most patients begin within a week. No referral needed. You’ll know the plan, the cost estimate, and the next session date.",
  },
] as const;

export const WHY_NOMAD = [
  {
    title: "Nurse-monitored, every session",
    description:
      "A registered nurse is present for the entire session, with vitals monitored and physician oversight on every plan.",
  },
  {
    title: "Your therapist stays in the loop",
    description:
      "We coordinate with the therapist you already trust, or match you through the Nomad Network.",
  },
  {
    title: "Straight answers on cost",
    description:
      "Transparent pricing with a Good Faith Estimate up front, and Spravato and TMS accepted by most major plans.",
  },
  {
    title: "Local, and reachable",
    description:
      "A Seattle team you can call or text. Care across King, Pierce, Kitsap, and Thurston counties, at home or in Queen Anne.",
  },
] as const;

export const TRUST_ITEMS = [
  { label: "5.0 Google Rating", detail: "Based on 100+ reviews" },
  { label: "LegitScript Certified", detail: "Trusted & Compliant" },
  { label: "ASKP3 Member", detail: "Quality. Accountability. Better Outcomes." },
  { label: "HIPAA-Compliant", detail: "Your information is safe with us." },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Nomad came to our home for my family member’s care, and their nurses treated our whole family with such warmth and compassion. Having care that felt this safe and personal meant the world to us.",
    author: "Ragan H.",
  },
  {
    quote:
      "The team communicated clearly and often, the nurses made me feel safe and comfortable, and I loved that I could do this without rearranging my whole life. It helped me access and process things that had been holding me back.",
    author: "Jen L.",
  },
  {
    quote:
      "Nomad Therapeutics quite literally changed my life. They gave me hope when so many other treatments had fallen short. The professionalism, expertise, and genuine compassion are unmatched.",
    author: "Mia L.",
  },
] as const;

export const TEAM_LEADERS = [
  {
    name: "Alexander Gill, MD",
    role: "Co-founder & Chief Medical Officer",
    focus: "Physician oversight on every plan",
    bio: "Board-certified emergency medicine physician. Oversees every treatment plan and supervises the clinical team with a safety-first, individualized approach.",
    image: img("/images/team/alexander-gill.jpg"),
    objectPosition: "22% 30%",
    href: "https://nomadtherapeutics.org/alexander-gill-md/",
  },
  {
    name: "Theotis Chappell, PMHNP",
    role: "Psychiatric Nurse Practitioner",
    focus: "Clinical evaluation & ongoing care",
    bio: "Guides evaluations and medication decisions so your plan fits what you’ve already tried, and what you want to feel next.",
    image: img("/images/team/theotis-chappell.jpg"),
    objectPosition: "center 18%",
    href: "https://nomadtherapeutics.org/theotis-chappell-pmhnp/",
  },
  {
    name: "Jack Gomer",
    role: "Co-founder & CEO",
    focus: "Access, clarity, and local care",
    bio: "Building Nomad so advanced treatment is reachable across greater Seattle, with clear next steps and a team you can actually reach.",
    image: img("/images/team/jack-gomer.jpg"),
    objectPosition: "50% 22%",
    href: "https://nomadtherapeutics.org/jack-gomer/",
  },
  {
    name: "Jason Parks",
    role: "Co-founder",
    focus: "Patient experience & operations",
    bio: "Focused on making care feel calm and coordinated, from first consult through treatment, at home or in Queen Anne.",
    image: img("/images/team/jason-parks.jpg"),
    objectPosition: "50% 22%",
    href: "https://nomadtherapeutics.org/jason-parks/",
  },
] as const;

export const TEAM_NURSES = [
  {
    name: "Trysten, RN",
    role: "Registered Nurse",
    image: img("/images/team/trysten.jpg"),
    href: "https://nomadtherapeutics.org/trysten-dial/",
  },
  {
    name: "Jessica, RN",
    role: "Registered Nurse",
    image: img("/images/team/jessica.jpg"),
    href: "https://nomadtherapeutics.org/jessica-lancaster/",
  },
  {
    name: "Rebecca, RN",
    role: "Registered Nurse",
    image: img("/images/team/rebecca.jpg"),
    href: "https://nomadtherapeutics.org/rebecca/",
  },
  {
    name: "Sam, RN",
    role: "Registered Nurse",
    image: img("/images/team/sam.jpg"),
    href: "https://nomadtherapeutics.org/sam-rn/",
  },
  {
    name: "Chasa, RN",
    role: "Registered Nurse",
    image: img("/images/team/chasa.webp"),
    href: "https://nomadtherapeutics.org/chasa-rn/",
  },
] as const;

export const TEAM_VIDEOS = [
  {
    id: "b_4H_PjZG94",
    title: "Meet Nomad Therapeutics",
    caption: "Dr. Alexander Gill and Trysten, RN, on who Nomad is for · 0:54",
  },
  {
    id: "b_DTwhWrB7M",
    title: "What a home visit with Nomad Therapeutics looks like",
    caption: "Trysten, RN, walks through a supervised home session · 1:13",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Am I a candidate?",
    answer:
      "Most of our patients have tried antidepressants or long-term therapy without enough relief. We evaluate depression, anxiety, PTSD, and treatment-resistant depression carefully. The free consultation is where we find out together.",
  },
  {
    question: "How fast can I start?",
    answer:
      "Most patients begin within a week of their consultation. No referral is required.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "Yes. Spravato and TMS are accepted by most major plans. We’ll help you understand coverage and provide a Good Faith Estimate before you start.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No. You can book directly. If you have a therapist or psychiatrist, we’ll coordinate with them with your permission.",
  },
  {
    question: "Is it safe?",
    answer:
      "A registered nurse monitors you for the entire session under physician oversight. We’ll walk through side effects and what to expect at your evaluation.",
  },
] as const;

export const DISCLAIMER =
  "Ketamine use for psychiatric conditions is off-label; individual results vary. Spravato (esketamine) is FDA-approved for treatment-resistant depression when used as labeled.";

export const CRISIS_NOTE =
  "If you are in crisis, call or text 988. Help is available 24/7.";

export const HIPAA_NOTE =
  "Secure & HIPAA-compliant handling of all form submissions.";
