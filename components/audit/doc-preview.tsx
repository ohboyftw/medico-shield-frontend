"use client";

export function DocPreview() {
  return (
    <div className="card-instrument h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#e2e5ea]">
        <span className="section-label">Current Documentation</span>
        <span className="mono-readout">Source</span>
      </div>
      <div className="p-4 flex-grow">
        <div className="p-3 bg-[#f8f9fb] border border-[#e2e5ea] rounded-md font-mono text-[11px] text-[#4b5563] h-full overflow-y-auto content-scroll leading-[1.7] min-h-[300px]">
          <span className="text-[#9ca3af]">PATIENT:</span> MALE/45Y
          <br />
          <span className="text-[#9ca3af]">C/O:</span> ABDOMINAL PAIN
          <br />
          <br />
          <span className="text-[#9ca3af]">HISTORY:</span> Pt says pain since
          last night. Vomited twice. Ate outside food.
          <br />
          <br />
          <span className="text-[#9ca3af]">EXAM:</span> Soft, mild tenderness
          in epigastrium. Bowel sounds +.
          <br />
          <br />
          <span className="text-[#9ca3af]">TREATMENT:</span> Inj Pan 40, Inj
          Emset. Oral fluids.
          <br />
          <br />
          <span className="text-[#9ca3af]">DIAGNOSIS:</span> Gastritis.
          <br />
          <br />
          <span className="text-[#9ca3af]">PLAN:</span> Discharge on oral meds.
        </div>
      </div>
    </div>
  );
}
