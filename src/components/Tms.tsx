import TreatmentFocus from "@/components/TreatmentFocus";
import { TMS } from "@/lib/constants";

export default function Tms() {
  return (
    <TreatmentFocus
      id="tms"
      label={TMS.label}
      title={TMS.title}
      lede={TMS.lede}
      image={TMS.image}
      imageAlt={TMS.imageAlt}
      points={TMS.points}
    />
  );
}
