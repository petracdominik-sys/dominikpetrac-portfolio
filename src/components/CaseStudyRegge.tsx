"use client";

const stats = [
  { label: "CPL — Varijacija A", value: "€30.96" },
  { label: "CPL — Issa & Bari", value: "€41.72" },
  { label: "Ukupna potrošnja (30d)", value: "€372.85" },
  { label: "Leadovi generirani (30d)", value: "11" },
  { label: "n8n workflowovi (V1–V9)", value: "9" },
  { label: "HubSpot pipeline", value: "aktivan" },
  { label: "CAPI tracking", value: "server-side" },
  { label: "Jedini ručni korak", value: "30s review" },
];

const phases = [
  {
    label: "Akvizicija",
    nodes: [
      { name: "Meta Ads Lead Form", desc: "11 leadova · 30d · CAPI dedup", color: "border-blue-600", text: "text-blue-400", bg: "bg-blue-950/40" },
      { name: "Meta CAPI", desc: "Server-side event deduplication", color: "border-blue-600", text: "text-blue-400", bg: "bg-blue-950/40" },
    ],
  },
  {
    label: "Intake & triage",
    sub: "V1 + V9",
    nodes: [
      { name: "Webhook trigger", desc: "Prima lead podatke real-time", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "Gmail inbox triage", desc: "AI klasifikacija svakog maila", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "HubSpot CRM", desc: "Kontakt + deal pipeline", color: "border-orange-400", text: "text-orange-300", bg: "bg-orange-900/20" },
    ],
  },
  {
    label: "Generacija ponude",
    sub: "V3",
    nodes: [
      { name: "OpenAI GPT-4o", desc: "Personalizirana ponuda po modelu stolice", color: "border-purple-500", text: "text-purple-400", bg: "bg-purple-950/40" },
      { name: "Email draft", desc: "S cijenom / bez cijene, Sheets config", color: "border-teal-500", text: "text-teal-400", bg: "bg-teal-950/40" },
    ],
    touchpoint: true,
  },
  {
    label: "Post-ponuda",
    nodes: [
      { name: "Followup sekvenca", desc: "Automatski timed follow-up", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "Reply triage (V9)", desc: "AI detektira interes, klasificira odgovor", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "Stalled deal detektor", desc: "Alert za stagnirane deale", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
    ],
  },
  {
    label: "Post-close",
    nodes: [
      { name: "Won nurture", desc: "D+7 check-in · D+30 cross-sell", color: "border-green-600", text: "text-green-400", bg: "bg-green-950/40" },
      { name: "Lost win-back", desc: "3–6 mj. sekvenca ponovnog kontakta", color: "border-green-600", text: "text-green-400", bg: "bg-green-950/40" },
    ],
  },
];

export default function CaseStudyRegge() {
  return (
    <section id="case-study-regge" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent mb-28" />

        {/* Label */}
        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Case Study — Regge Interijeri
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
          Od nestrukturiranog upita do automatiziranog prodajnog sustava
        </h2>
        <p className="reveal text-gray-500 text-sm mb-16 max-w-xl leading-relaxed">
          Premium HoReCa namještaj · B2B · HR tržište · aktivno od travnja 2026.
        </p>

        {/* PSR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="reveal card-accent p-7" style={{ transitionDelay: "0ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">Situacija</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Regge Interijeri imali su nestrukturirani digitalni marketing bez mjerljivosti — svaki upit dolazio ručno, bez CRM-a, bez praćenja, bez mogućnosti skaliranja.
            </p>
          </div>
          <div className="reveal card-accent p-7" style={{ transitionDelay: "100ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">Rješenje</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Kompletan ekosustav od nule: Meta Ads kampanje s CAPI trackingom, HubSpot CRM pipeline, 9 automatiziranih n8n workflowova (V1–V9) i AI tjedni intelligence digest.
            </p>
          </div>
          <div className="reveal card-accent p-7" style={{ transitionDelay: "200ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">Rezultat</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Aktivne kampanje s CPL od €30.96 za vodeću varijaciju. Jedini ručni korak u cijelom sustavu: 30 sekundi pregleda AI drafta ponude.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="reveal mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="stat-card p-5 text-center">
                <p
                  className="font-playfair text-2xl sm:text-3xl font-bold mb-1"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-gray-500 text-[11px] leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* System map */}
        <div className="reveal mb-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-600 mb-6">
            Automatizacijski sustav — 9 workflowova (V1–V9)
          </p>
          <div className="space-y-3">
            {phases.map((phase, pi) => (
              <div key={pi}>
                <div className="flex items-start gap-3 flex-wrap">
                  <div className="flex-shrink-0 w-36 pt-2">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider leading-tight">
                      {phase.label}
                    </p>
                    {phase.sub && (
                      <p className="text-[9px] text-gray-700 mt-0.5">{phase.sub}</p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 flex-1">
                    {phase.nodes.map((node, ni) => (
                      <div
                        key={ni}
                        className={`${node.bg} border ${node.color} rounded-lg px-3 py-2 min-w-[120px]`}
                      >
                        <p className={`text-[10px] font-semibold ${node.text} leading-tight`}>
                          {node.name}
                        </p>
                        <p className="text-[9px] text-gray-600 mt-0.5 leading-tight">{node.desc}</p>
                      </div>
                    ))}
                    {phase.touchpoint && (
                      <div className="flex items-center gap-2 ml-1 mt-1">
                        <div className="h-px w-4 bg-yellow-800/60" />
                        <span className="text-[9px] text-yellow-600 font-medium border border-yellow-900/50 bg-yellow-950/30 px-2 py-1 rounded">
                          30s review — jedini touchpoint
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {pi < phases.length - 1 && (
                  <div className="ml-[148px] my-1 text-gray-800 text-xs select-none">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key note */}
        <div className="reveal card-accent p-6 border-l-4 border-purple-600">
          <p className="text-gray-400 text-sm italic leading-relaxed">
            Ovo nije samo Meta Ads upravljanje — svaki segment (kampanje, CRM, automatizacija, AI agenti) dizajniran je kao integrirani sustav, a ne kao zasebni alati koji rade neovisno.
          </p>
        </div>
      </div>
    </section>
  );
}
