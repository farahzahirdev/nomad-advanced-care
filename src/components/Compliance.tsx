import { CRISIS_NOTE, DISCLAIMER, HIPAA_NOTE } from "@/lib/constants";

export default function Compliance() {
  return (
    <aside className="nm-compliance" aria-label="Medical disclaimer">
      <div className="container-main nm-compliance-row">
        <p>
          <strong className="font-semibold text-ink">Crisis:</strong> {CRISIS_NOTE}
        </p>
        <p>{DISCLAIMER}</p>
        <p>{HIPAA_NOTE}</p>
      </div>
    </aside>
  );
}
