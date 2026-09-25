import { GOOGLE_REVIEWS_URL, TRUST_ITEMS } from "@/lib/constants";

/** White credentials strip directly under the hero */
export default function Credentials() {
  return (
    <section aria-label="Credentials and trust" className="nm-hero-proof">
      <div className="nm-hero-proof-inner">
        <ul className="nm-hero-proof-grid list-none p-0 m-0">
          {TRUST_ITEMS.map((item, index) => {
            const content = (
              <>
                <span className="nm-hero-proof-mark" aria-hidden>
                  {index === 0 ? <GoogleMark /> : null}
                  {index === 1 ? <ShieldCheckMark /> : null}
                  {index === 2 ? <AskpMark /> : null}
                  {index === 3 ? <HipaaMark /> : null}
                </span>
                <span className="nm-hero-proof-copy">
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </span>
              </>
            );

            return (
              <li key={item.label} className="nm-hero-proof-item">
                {item.label.toLowerCase().includes("google") ? (
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nm-hero-proof-link"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function GoogleMark() {
  return (
    <span className="nm-hero-proof-google">
      <svg viewBox="0 0 24 24" className="nm-hero-proof-g" aria-hidden>
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
      <span className="nm-hero-proof-stars" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" className="nm-hero-proof-star">
            <path fill="#F4B400" d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9 5.06 16.7l.94-5.5-4-3.9 5.53-.8L10 1.5z" />
          </svg>
        ))}
      </span>
    </span>
  );
}

function ShieldCheckMark() {
  return (
    <svg viewBox="0 0 40 40" className="nm-hero-proof-shield" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M20 4.5l12 4.2v9.2c0 7.1-4.9 12.7-12 14.6-7.1-1.9-12-7.5-12-14.6V8.7L20 4.5z"
      />
      <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M14.8 20.2l3.4 3.4 7-7" />
    </svg>
  );
}

function AskpMark() {
  return (
    <span className="nm-hero-proof-askp" aria-hidden>
      <span className="nm-hero-proof-askp-dots">
        <i />
        <i />
        <i />
      </span>
      <span className="nm-hero-proof-askp-word">ASKP3</span>
    </span>
  );
}

function HipaaMark() {
  return (
    <svg viewBox="0 0 40 40" className="nm-hero-proof-shield" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        d="M20 4.5l12 4.2v9.2c0 7.1-4.9 12.7-12 14.6-7.1-1.9-12-7.5-12-14.6V8.7L20 4.5z"
      />
      <rect x="15.2" y="17.2" width="9.6" height="8" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M17.4 17.2v-2.2a2.6 2.6 0 015.2 0v2.2" />
    </svg>
  );
}
