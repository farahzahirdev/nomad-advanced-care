import Image from "next/image";
import { BookButton, CallButton } from "@/components/CTAButtons";

type TreatmentPoint = {
  title: string;
  description: string;
};

type TreatmentFocusProps = {
  id: string;
  label: string;
  title: string;
  lede: string;
  image: string;
  imageAlt: string;
  points: readonly TreatmentPoint[];
  reverse?: boolean;
  tone?: "default" | "mist";
};

export default function TreatmentFocus({
  id,
  label,
  title,
  lede,
  image,
  imageAlt,
  points,
  reverse = false,
  tone = "default",
}: TreatmentFocusProps) {
  return (
    <section
      id={id}
      className={`section-padding scroll-mt-28${tone === "mist" ? " bg-mist-2/60" : ""}`}
    >
      <div className="container-main">
        <div className={`nm-treatment${reverse ? " is-reverse" : ""}`}>
          <div className="nm-treatment-copy">
            <div className="nm-section-copy">
              <p className="section-label">{label}</p>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">{title}</h2>
              <p className="text-lead mt-4">{lede}</p>
            </div>

            <ul className="nm-treatment-points mt-10 list-none p-0">
              {points.map((point, index) => (
                <li key={point.title} className="nm-treatment-point">
                  <p className="nm-step-num">0{index + 1}</p>
                  <h3 className="text-xl text-forest sm:text-2xl">{point.title}</h3>
                  <p className="mt-2 max-w-md text-muted">{point.description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <BookButton variant="primary" />
              <CallButton variant="outline" />
            </div>
          </div>

          <div className="nm-treatment-media">
            <div className="nm-treatment-media-frame">
              <Image
                src={image}
                alt={imageAlt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
