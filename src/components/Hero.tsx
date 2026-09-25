import Image from "next/image";
import TrustBar from "@/components/TrustBar";
import Credentials from "@/components/Credentials";
import {
  BOOKING_SECTION_ID,
  IMAGES,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="nm-hero">
      <div className="nm-hero-media">
        <div className="nm-hero-bg" aria-hidden>
          <Image
            src={IMAGES.hero}
            alt=""
            fill
            priority
            quality={92}
            sizes="100vw"
            className="nm-hero-img"
          />
        </div>
        <div className="nm-hero-wash" aria-hidden />

        <div className="nm-hero-inner">
          <div className="nm-hero-copy">
            <p className="nm-hero-kicker">
              Greater Seattle · At Home or In-Clinic
              <span className="nm-hero-kicker-line" aria-hidden />
            </p>

            <h1 id="hero-heading" className="nm-hero-title">
              <span className="nm-hero-title-line">Advanced Mental</span>
              <span className="nm-hero-title-second">
                <span className="nm-hero-title-accent">Health Treatment</span>
              </span>
            </h1>

            <p className="nm-hero-lede">
              Real relief for depression, anxiety &amp; PTSD. Evidence-based care at home or in-clinic.
              When medication and talk therapy haven&apos;t been enough, we&apos;re here.
            </p>

            <TrustBar />

            <div className="nm-hero-actions">
              <a href={`#${BOOKING_SECTION_ID}`} className="nm-hero-btn-primary">
                <CalendarIcon />
                Book your Free Consultation
                <ArrowIcon />
              </a>
              <a href={PHONE_HREF} className="nm-hero-btn-secondary">
                <PhoneIcon />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="nm-hero-bottom">
        <Credentials />
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 shrink-0" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path strokeLinecap="round" d="M8 3.5V7M16 3.5V7M3.5 10h17" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
