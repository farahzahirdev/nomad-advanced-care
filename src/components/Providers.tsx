"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { BookButton, CallButton } from "@/components/CTAButtons";
import { TEAM_LEADERS, TEAM_NURSES } from "@/lib/constants";

const ROTATE_MS = 5000;

function ChevronLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NurseCard({
  name,
  role,
  image,
  href,
  className = "nm-care-person",
}: {
  name: string;
  role: string;
  image: string;
  href: string;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <span className="nm-care-avatar">
        <Image
          src={image}
          alt={name}
          fill
          quality={90}
          sizes="240px"
          className="object-cover object-[center_18%]"
        />
      </span>
      <strong>{name}</strong>
      <span>{role}</span>
    </a>
  );
}

export default function Providers() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [nurseIndex, setNurseIndex] = useState(0);
  const person = TEAM_LEADERS[active];
  const nurse = TEAM_NURSES[nurseIndex];
  const tabId = useId();

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % TEAM_LEADERS.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  const prevNurse = () => {
    setNurseIndex((prev) => (prev === 0 ? TEAM_NURSES.length - 1 : prev - 1));
  };

  const nextNurse = () => {
    setNurseIndex((prev) => (prev + 1) % TEAM_NURSES.length);
  };

  return (
    <section id="providers" className="nm-providers section-padding scroll-mt-28">
      <div className="container-main">
        <div className="nm-section-copy mx-auto max-w-2xl text-center">
          <p className="section-label section-label-center">Providers</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Clinicians who stay with the plan
          </h2>
          <p className="text-lead mt-4">
            Physician oversight, psychiatric care, and a Seattle team built around safety, clarity,
            and follow-through.
          </p>
        </div>

        <div
          className="nm-spotlight mt-12 lg:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div className="nm-spotlight-copy" key={`${person.name}-copy`}>
            <p className="nm-spotlight-focus">{person.focus}</p>
            <h3 className="nm-spotlight-name">{person.name}</h3>
            <p className="nm-spotlight-role">{person.role}</p>
            <p className="nm-spotlight-bio">{person.bio}</p>
          </div>

          <div className="nm-spotlight-portrait" key={person.name}>
            <Image
              src={person.image}
              alt={person.name}
              fill
              quality={95}
              sizes="(max-width: 899px) 92vw, 520px"
              className="object-cover"
              style={{ objectPosition: person.objectPosition }}
              priority={active === 0}
            />
            <div className="nm-spotlight-portrait-fade" aria-hidden />
          </div>
        </div>

        <div
          className="nm-roster"
          role="tablist"
          aria-label="Select a team member"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {TEAM_LEADERS.map((member, index) => {
            const selected = index === active;
            return (
              <button
                key={member.name}
                type="button"
                role="tab"
                id={`${tabId}-tab-${index}`}
                aria-selected={selected}
                aria-controls={`${tabId}-panel`}
                className={`nm-roster-item${selected ? " is-active" : ""}`}
                onClick={() => setActive(index)}
              >
                <span className="nm-roster-avatar">
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    quality={90}
                    sizes="144px"
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition }}
                  />
                </span>
                <span className="nm-roster-text">
                  <span className="nm-roster-name">{member.name.split(",")[0]}</span>
                  <span className="nm-roster-role">{member.role}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="nm-care-team mt-16 sm:mt-20">
          <div className="nm-care-team-head">
            <p className="section-label">Session care team</p>
            <h3 className="mt-3 text-2xl text-forest sm:text-3xl">
              Registered nurses present the entire session
            </h3>
            <p className="mt-3 max-w-xl text-muted">
              Vitals monitored start to finish, under physician oversight, at home or in clinic.
            </p>
          </div>

          <div className="nm-care-scroll mt-8">
            <div className="nm-care-carousel">
              <NurseCard key={nurse.name} {...nurse} className="nm-care-person nm-care-person-solo" />

              <div className="nm-care-controls">
                <button
                  type="button"
                  className="nm-care-nav"
                  aria-label="Previous nurse"
                  onClick={prevNurse}
                >
                  <ChevronLeft />
                </button>
                <div className="nm-care-dots" role="tablist" aria-label="Nurses">
                  {TEAM_NURSES.map((member, i) => (
                    <button
                      key={member.name}
                      type="button"
                      role="tab"
                      aria-selected={i === nurseIndex}
                      aria-label={`Show ${member.name}`}
                      className={`nm-care-dot${i === nurseIndex ? " is-active" : ""}`}
                      onClick={() => setNurseIndex(i)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="nm-care-nav"
                  aria-label="Next nurse"
                  onClick={nextNurse}
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

            <ul className="nm-care-strip list-none p-0" aria-label="Registered nurses">
              {TEAM_NURSES.map((member) => (
                <li key={member.name}>
                  <NurseCard {...member} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <BookButton variant="primary" />
          <CallButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
