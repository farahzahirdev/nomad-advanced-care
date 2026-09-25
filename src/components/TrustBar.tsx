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
      <div className="hero-trust-panel">
        <ul className="hero-trust-strip">
          {HERO_TRUST_ITEMS.map((item, index) => {
            const Icon = trustIcons[item.icon];
            return (
              <li key={item.title} className="hero-trust-item">
                {index > 0 ? <span className="hero-trust-divider" aria-hidden /> : null}
                <div className="hero-trust-content">
                  <Icon />
                  <p className="hero-trust-title">{item.title}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hero-trust-icon" aria-hidden="true">
      <path fillRule="evenodd" d="M10 1.5l7 2.5v5.5c0 4.2-2.9 7.3-7 8.5-4.1-1.2-7-4.3-7-8.5V4l7-2.5zm0 2.1L5 5.1v4.5c0 3.1 2.1 5.5 5 6.5 2.9-1 5-3.4 5-6.5V5.1l-5-1.5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M9 11.2l-1.7-1.7 1.1-1.1L9 9l2.6-2.6 1.1 1.1L9 11.2z" clipRule="evenodd" />
    </svg>
  );
}

function DoctorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hero-trust-icon" aria-hidden="true">
      <path d="M10 2a3 3 0 100 6 3 3 0 000-6zM5.5 10.5A2.5 2.5 0 018 8h4a2.5 2.5 0 012.5 2.5V12a1 1 0 01-1 1h-.5v1.25a2.75 2.75 0 11-5.5 0V13H6.5a1 1 0 01-1-1v-1.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hero-trust-icon" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hero-trust-icon" aria-hidden="true">
      <path fillRule="evenodd" d="M9.69 18.44l.05.03.03.02a.64.64 0 00.6 0l.03-.02.05-.03a14.15 14.15 0 001.91-1.49 15.9 15.9 0 002.23-2.4C16.35 12.22 18 9.85 18 7a6 6 0 10-12 0c0 2.85 1.65 5.22 3.41 7.55a15.9 15.9 0 002.23 2.4 14.15 14.15 0 001.05.94zM10 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
    </svg>
  );
}
