import TreatmentFocus from "@/components/TreatmentFocus";
import { SPRAVATO } from "@/lib/constants";

export default function Spravato() {
  return (
    <TreatmentFocus
      id="spravato"
      label={SPRAVATO.label}
      title={SPRAVATO.title}
      lede={SPRAVATO.lede}
      image={SPRAVATO.image}
      imageAlt={SPRAVATO.imageAlt}
      points={SPRAVATO.points}
      tone="mist"
      reverse
    />
  );
}
