import { BookButton, CallButton } from "@/components/CTAButtons";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="section-padding scroll-mt-28 bg-mist-2/60">
      <div className="container-main">
        <div className="nm-section-copy mx-auto max-w-2xl text-center">
          <p className="section-label section-label-center">Services</p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.65rem]">
            Advanced treatment options, matched to what you need
          </h2>
          <p className="text-lead mt-4">
            Medication management, Spravato, and TMS, with Spravato and TMS accepted by most major
            plans.
          </p>
        </div>

        <ul className="nm-services-grid mt-12 list-none p-0">
          {SERVICES.map((service) => (
            <li key={service.title} className="nm-service">
              <a href={service.href} className="nm-service-link">
                <span className="nm-service-badge">{service.badge}</span>
                <h3 className="nm-service-title">{service.title}</h3>
                <p className="nm-service-desc">{service.description}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <BookButton variant="primary" />
          <CallButton variant="outline" />
        </div>
      </div>
    </section>
  );
}
