"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { BookButton, CallButton } from "@/components/CTAButtons";
import { TEAM_LEADERS, TEAM_NURSES } from "@/lib/constants";

const ROTATE_MS = 5000;

export default function Providers() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const person = TEAM_LEADERS[active];
  const tabId = useId();

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % TEAM_LEADERS.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [paused]);

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

          <ul className="nm-care-strip mt-8 list-none p-0" aria-label="Registered nurses">
            {TEAM_NURSES.map((nurse) => (
              <li key={nurse.name}>
                <a
                  href={nurse.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nm-care-person"
                >
                  <span className="nm-care-avatar">
                    <Image
                      src={nurse.image}
                      alt={nurse.name}
                      fill
                      quality={90}
                      sizes="192px"
                      className="object-cover object-[center_18%]"
                    />
                  </span>
                  <strong>{nurse.name}</strong>
                  <span>{nurse.role}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <BookButton variant="primary" />
          <CallButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
