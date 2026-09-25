import Image from "next/image";
import { BookButton, QualifyButton } from "@/components/CTAButtons";
import { IMAGES } from "@/lib/constants";

export default function Problem() {
  return (
    <section id="problem" className="section-padding scroll-mt-28">
      <div className="container-main">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="nm-section-copy order-2 lg:order-1">
            <p className="section-label">You&apos;re not out of options</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
              When medication and talk therapy haven&apos;t been enough
            </h2>
            <p className="text-lead mt-5">
              Many adults with depression, anxiety, or PTSD try antidepressants or years of talk
              therapy and still feel stuck. That doesn&apos;t mean you&apos;ve failed. It means it
              may be time for clinic-grade options designed for treatment-resistant symptoms.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Nomad Therapeutics offers advanced care for greater Seattle, at home or in our Queen
              Anne clinic, with physician oversight and a clear path forward.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <BookButton variant="primary" />
              <QualifyButton variant="outline" />
            </div>
          </div>

          <div className="nm-media order-1 lg:order-2">
            <Image
              src={IMAGES.forest}
              alt="Quiet Pacific Northwest forest path"
              fill
              quality={90}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
