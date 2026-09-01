"use client";

const stats = [
  { label: "Leadovi generirani", value: "185" },
  { label: "Cijena po leadu (CPL)", value: "5,47 €" },
  { label: "Ukupna potrošnja", value: "1.013 €" },
  { label: "CTR", value: "1,31 %" },
  { label: "CPC", value: "0,36 €" },
  { label: "CPM", value: "4,77 €" },
  { label: "Trajanje kampanje", value: "5 mj." },
  { label: "Doseg", value: "35.802" },
];

const phases = [
  {
    label: "Akvizicija",
    nodes: [
      { name: "Meta Ads Lead Form", desc: "185 leadova · CPL 5,47 €", color: "border-blue-600", text: "text-blue-400", bg: "bg-blue-950/40" },
      { name: "Meta CAPI", desc: "Server-side event dedup", color: "border-blue-600", text: "text-blue-400", bg: "bg-blue-950/40" },
    ],
  },
  {
    label: "Intake & kvalifikacija",
    sub: "V1 · 57 čvorova",
    nodes: [
      { name: "Webhook trigger", desc: "Prima lead podatke", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "Sheets lookup", desc: "Model stolice (Grace/Bari/Issa)", color: "border-green-600", text: "text-green-400", bg: "bg-green-950/40" },
      { name: "HubSpot CRM", desc: "Kontakt + deal pipeline", color: "border-orange-400", text: "text-orange-300", bg: "bg-orange-900/20" },
      { name: "Hot-lead routing", desc: "Alert za VIP leadove", color: "border-red-500", text: "text-red-400", bg: "bg-red-950/40", badge: "hot alert" },
    ],
  },
  {
    label: "Generacija ponude",
    sub: "V3 · 52 čvora",
    nodes: [
      { name: "OpenAI", desc: "Personalizirana ponuda", color: "border-purple-500", text: "text-purple-400", bg: "bg-purple-950/40" },
      { name: "Email draft", desc: "S cijenom / bez cijene", color: "border-teal-500", text: "text-teal-400", bg: "bg-teal-950/40" },
    ],
    touchpoint: true,
  },
  {
    label: "Post-ponuda",
    nodes: [
      { name: "Followup sekvenca", desc: "Automatski follow-up", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "Inbox reply trigger", desc: "Detektira odgovor", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "Stalled deal detektor", desc: "Prati stagnantne deale", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "Reengagement tiered", desc: "3 razine ponovnog kontakta", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
    ],
  },
  {
    label: "Post-close nurture",
    nodes: [
      { name: "Won nurture", desc: "D+7 check-in · D+30 cross-sell", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "Lost win-back", desc: "3–6 mj. win-back sekvenca", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
    ],
  },
  {
    label: "Izvještavanje",
    nodes: [
      { name: "Analytics aggregation", desc: "Sve metrike u Master Sheet", color: "border-yellow-500", text: "text-yellow-400", bg: "bg-yellow-950/40" },
      { name: "Weekly report", desc: "Tjedni performance izvještaj", color: "border-yellow-500", text: "text-yellow-400", bg: "bg-yellow-950/40" },
    ],
  },
];

export default function CaseStudyRegge() {
  return (
    <section id="case-study-regge" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Case Study 01
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-16 max-w-3xl">
          Od nestrukturiranog upita do automatiziranog prodajnog sustava
        </h2>

        {/* PSR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="reveal card-accent p-7" style={{ transitionDelay: "0ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">Problem</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Regge Interijeri (premium HoReCa namještaj) imali su nestrukturirani digitalni
              marketing bez mjerljivosti — svaki upit dolazio ručno, bez CRM-a, bez praćenja,
              bez mogućnosti skaliranja.
            </p>
          </div>
          <div className="reveal card-accent p-7" style={{ transitionDelay: "100ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">Rješenje</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Kompletan ekosustav od nule: Meta Ads kampanje, HubSpot CRM pipeline,
              16 automatiziranih n8n workflowova (webhook → AI analiza → personalizirana
              ponuda → nurture), server-side tracking i tjedni AI intelligence digest.
            </p>
          </div>
          <div className="reveal card-accent p-7" style={{ transitionDelay: "200ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">Rezultat</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              185 kvalificiranih leadova za 5 mjeseci, CPL 5,47 €, kampanja aktivna i danas.
              Jedini ručni korak: 30-sekundni pregled AI drafta prije slanja.
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
            Automatizacijski sustav — 16 workflowova
          </p>
          <div className="space-y-3">
            {phases.map((phase, pi) => (
              <div key={pi}>
                {/* Phase row */}
                <div className="flex items-start gap-3 flex-wrap">
                  {/* Phase label */}
                  <div className="flex-shrink-0 w-36 pt-2">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider leading-tight">
                      {phase.label}
                    </p>
                    {phase.sub && (
                      <p className="text-[9px] text-gray-700 mt-0.5">{phase.sub}</p>
                    )}
                  </div>
                  {/* Nodes */}
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
                        {"badge" in node && node.badge && (
                          <span className="inline-block mt-1 text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-950/60 text-red-400 border border-red-800/40">
                            {node.badge}
                          </span>
                        )}
                      </div>
                    ))}
                    {/* Touchpoint callout */}
                    {phase.touchpoint && (
                      <div className="flex items-center gap-2 ml-1 mt-1">
                        <div className="h-px w-4 bg-yellow-800/60" />
                        <span className="text-[9px] text-yellow-600 font-medium border border-yellow-900/50 bg-yellow-950/30 px-2 py-1 rounded">
                          👁 30s review → jedini touchpoint
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {/* Arrow between phases */}
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
            Ovo nije samo Meta Ads upravljanje — svaki segment (kampanje, CRM, automatizacija,
            AI agenti) dizajniran je kao integrirani sustav, ne kao zasebni alati.
          </p>
        </div>
      </div>
    </section>
  );
}
