import { HERO_TRUST_ITEMS } from "@/lib/constants";

const trustIcons = {
  shield: ShieldIcon,
  doctor: DoctorIcon,
  clock: ClockIcon,
  pin: PinIcon,
} as const;

export default function TrustBar() {
  return (
    <div className="hero-trust-wrap" aria-label="Care highlights">
      <ul className="hero-trust-strip">
        {HERO_TRUST_ITEMS.map((item) => {
          const Icon = trustIcons[item.icon];
          return (
            <li key={item.title} className="hero-trust-item">
              <Icon />
              <p className="hero-trust-title">{item.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="hero-trust-icon" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5.5c0 4.2-2.9 7.5-7 8.5-4.1-1-7-4.3-7-8.5V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.2 12.1l1.8 1.8 3.8-3.8" />
    </svg>
  );
}

function DoctorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="hero-trust-icon" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 20.5v-1.2A4.3 4.3 0 019.8 15h4.4a4.3 4.3 0 014.3 4.3v1.2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.2 8.2v3.2M16.6 9.8h3.2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="hero-trust-icon" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4.2l2.8 1.6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="hero-trust-icon" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0012 4.3a6.5 6.5 0 00-6.5 6.5C5.5 15.8 12 21 12 21z" />
      <circle cx="12" cy="10.8" r="2.1" />
    </svg>
  );
}
