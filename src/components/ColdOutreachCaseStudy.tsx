"use client";

const systemSteps = [
  {
    phase: "Prospecting",
    sub: "ICP scoring",
    nodes: [
      { name: "ICP scoring", desc: "Industrija, veličina, buying signal", color: "border-blue-600", text: "text-blue-400", bg: "bg-blue-950/40" },
      { name: "Dedup + opt-out", desc: "30d window, frequency cap 1/7d", color: "border-blue-600", text: "text-blue-400", bg: "bg-blue-950/40" },
    ],
  },
  {
    phase: "Research",
    sub: "AI agent",
    nodes: [
      { name: "AI research brief", desc: "Fact / Inference / Question tagovi", color: "border-purple-500", text: "text-purple-400", bg: "bg-purple-950/40" },
      { name: "Signal detekcija", desc: "Job change, funding, content signal", color: "border-purple-500", text: "text-purple-400", bg: "bg-purple-950/40" },
    ],
  },
  {
    phase: "Outreach",
    sub: "n8n + GPT-4o",
    nodes: [
      { name: "Personalizirani email", desc: "Grounded u Fact — nikad generički template", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
      { name: "Deliverability check", desc: "SPF/DKIM/DMARC pred svakim batchom", color: "border-orange-500", text: "text-orange-400", bg: "bg-orange-950/40" },
    ],
  },
  {
    phase: "Follow-up",
    sub: "Automatski",
    nodes: [
      { name: "Timed sekvenca", desc: "D+3, D+7, D+14 — svaki drugačiji kut", color: "border-green-600", text: "text-green-400", bg: "bg-green-950/40" },
      { name: "Reply klasifikacija", desc: "AI detektira interes / nije zainteresiran", color: "border-green-600", text: "text-green-400", bg: "bg-green-950/40" },
    ],
  },
];

export default function ColdOutreachCaseStudy() {
  return (
    <section id="cold-outreach" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent mb-28" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Case Study — Vlastita akvizicija
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-4 max-w-3xl">
          AI-driven cold outreach sustav
        </h2>
        <p className="reveal text-gray-500 text-sm mb-16 max-w-xl leading-relaxed">
          Isti sustav koji gradim za klijente — koristim za vlastitu B2B akviziciju. Dva paralelna toka, jedna infrastruktura, nula ručnih emailova.
        </p>

        {/* Dual track */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          <div className="reveal card-accent p-6 border-l-4 border-blue-600/50" style={{ transitionDelay: "0ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-2">B2B track</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              HoReCa klijenti — hoteli, restorani, maloprodajni lanci. Isti ICP profil kao Regge, ali za vlastitu akviziciju novih projekata.
            </p>
          </div>
          <div className="reveal card-accent p-6 border-l-4 border-purple-600/50" style={{ transitionDelay: "100ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-2">Osobni track</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Freelance i job search — ista infrastruktura, drugačiji messaging i ICP. Dokaz da sustav radi na različitim use-casevima.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-3 gap-4 mb-16">
          {[
            { value: "40+", label: "Prospekata — ICP scored" },
            { value: "2", label: "Paralelna outreach toka" },
            { value: "0", label: "Ručnih emailova" },
          ].map((s, i) => (
            <div key={i} className="stat-card p-5 text-center">
              <p
                className="font-playfair text-3xl font-bold mb-1"
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

        {/* System map */}
        <div className="reveal mb-8">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-gray-600 mb-6">
            Arhitektura — n8n + Claude cloud routine + GPT-4o
          </p>
          <div className="space-y-3">
            {systemSteps.map((phase, pi) => (
              <div key={pi}>
                <div className="flex items-start gap-3 flex-wrap">
                  <div className="flex-shrink-0 w-36 pt-2">
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">{phase.phase}</p>
                    <p className="text-[9px] text-gray-700 mt-0.5">{phase.sub}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 flex-1">
                    {phase.nodes.map((node, ni) => (
                      <div key={ni} className={`${node.bg} border ${node.color} rounded-lg px-3 py-2 min-w-[150px]`}>
                        <p className={`text-[10px] font-semibold ${node.text}`}>{node.name}</p>
                        <p className="text-[9px] text-gray-600 mt-0.5">{node.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {pi < systemSteps.length - 1 && (
                  <div className="ml-[148px] my-1 text-gray-800 text-xs select-none">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="reveal card-accent p-6 border-l-4 border-purple-600">
          <p className="text-gray-400 text-sm italic leading-relaxed">
            Arhitektura: n8n kao plumbing, Claude cloud routine kao mozak. Svaki email grounded u istraživanju specifičnog prospekata — nikad generički template koji svi šalju.
          </p>
        </div>
      </div>
    </section>
  );
}
