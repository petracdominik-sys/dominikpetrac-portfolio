"use client";

import Image from "next/image";

const stats = [
  { label: "Leadovi generirani", value: "185" },
  { label: "Cijena po leadu (CPL)", value: "5,47 €" },
  { label: "Ukupna potrošnja", value: "1.013 €" },
  { label: "CTR", value: "1,31 %" },
  { label: "CPC", value: "0,36 €" },
  { label: "CPM", value: "4,77 €" },
  { label: "Trajanje kampanje", value: "4 mj." },
  { label: "Doseg", value: "35.802" },
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
              Kompletan ekosustav od nule: Meta Ads kampanje, HubSpot CRM pipeline,
              16 automatiziranih n8n workflowova (webhook → AI analiza → personalizirana
              ponuda → nurture), server-side tracking i tjedni AI intelligence digest.
            </p>
          </div>
          <div className="reveal card-accent p-7" style={{ transitionDelay: "200ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">Rezultat</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              185 kvalificiranih leadova za 4 mjeseca, CPL 5,47 €, kampanja aktivna i danas.
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

        {/* Meta Ads screenshot */}
        <div className="reveal mb-16">
          <div className="rounded-xl overflow-hidden border border-white/5">
            <Image
              src="/meta-ads-report.png"
              alt="Meta Ads Manager — rezultati kampanje Leads_Test 1"
              width={1400}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-gray-700 text-[10px] mt-2 text-center tracking-wider uppercase">
            Meta Ads Manager · Leads_Test 1 · travanj – srpanj 2026.
          </p>
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
        <div className="reveal card-accent p-6 border-l-4 border-purple-600 mb-16">
          <p className="text-gray-400 text-sm italic leading-relaxed">
            Ovo nije samo Meta Ads upravljanje — svaki segment (kampanje, CRM, automatizacija, AI agenti) dizajniran je kao integrirani sustav, a ne kao zasebni alati koji rade neovisno.
          </p>
        </div>

        {/* Technical infrastructure */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent mb-12" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Tehnička infrastruktura
        </p>
        <h3 className="reveal font-playfair text-2xl sm:text-3xl font-bold text-white mb-10">
          Stack ispod haube
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* CAPI + GTM */}
          <div className="reveal card-accent p-6" style={{ transitionDelay: "0ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">Meta Pixel + CAPI</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Server-side tracking kroz Conversions API eliminira browser-side gubitak signala (adblockers, iOS 14+). Svaki event ima <code className="text-purple-300 text-xs bg-purple-950/40 px-1 rounded">event_id</code> za deduplication — platforma ne broji isti konverziju dvaput.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["CAPI browser + server", "event_id dedup", "EMQ optimizacija", "GTM container audit"].map((t) => (
                <span key={t} className="text-[10px] text-blue-400 bg-blue-950/40 border border-blue-800/40 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* HubSpot */}
          <div className="reveal card-accent p-6" style={{ transitionDelay: "80ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-orange-400 mb-3">HubSpot CRM pipeline</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Deal stagevi pokrivaju cijeli ciklus: New Lead → Contacted → Offer Sent → Won/Lost. Batch POST za sinkronizaciju kontakata, opt-out compliance na razini deal stagea, automatski stage prijelazi bez ručnog klikanja.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Deal stage automation", "Batch POST sync", "Opt-out compliance", "Free tier"].map((t) => (
                <span key={t} className="text-[10px] text-orange-400 bg-orange-950/40 border border-orange-800/40 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Google Sheets config */}
          <div className="reveal card-accent p-6" style={{ transitionDelay: "160ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-green-400 mb-3">Google Sheets — config layer</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Svi parametri workflowova (cijene, modeli stolica, email template varijante, follow-up intervali) žive u Sheets — ne u kodu. Klijent može promijeniti ponudu bez ijedne linije koda.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["No-code config", "Proizvod lookup", "Template varijante", "Master Sheet"].map((t) => (
                <span key={t} className="text-[10px] text-green-400 bg-green-950/40 border border-green-800/40 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* V9 Inbox triage */}
          <div className="reveal card-accent p-6 relative" style={{ transitionDelay: "240ms" }}>
            <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full text-green-300 bg-green-900/40 border border-green-700/50">
              Novo · V9
            </span>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">Inbox reply triage</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Gmail trigger hvata svaki dolazni mail u realu. AI klasificira interes i šalje strukturirani alert. Filter <code className="text-purple-300 text-xs bg-purple-950/40 px-1 rounded">-subject:[REGGE]</code> sprječava self-loop — vlastiti alertovi ne pokreću novi trigger.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Real-time Gmail trigger", "AI klasifikacija", "Self-loop zaštita", "GPT-4o-mini"].map((t) => (
                <span key={t} className="text-[10px] text-purple-400 bg-purple-950/40 border border-purple-800/40 px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
