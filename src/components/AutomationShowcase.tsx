"use client";

const workflows = [
  {
    id: "V1",
    title: "Intake & kvalifikacija",
    desc: "Webhook prima lead iz Meta Ads forme → Sheets lookup identifikacira model stolice → HubSpot kreira kontakt i deal → hot-lead alert za VIP upite.",
    nodes: "57 čvorova",
    status: "live",
  },
  {
    id: "V3",
    title: "Generacija ponude",
    desc: "OpenAI generira personaliziranu ponudu prema modelu, količini i tipu klijenta. Email draft s cijenom ili bez — konfigurirano u Sheets. Jedini touchpoint: 30s review.",
    nodes: "52 čvora",
    status: "live",
  },
  {
    id: "V4–V6",
    title: "Follow-up & nurture sekvence",
    desc: "Automatski timed follow-up nakon slanja ponude. Stalled deal detektor prepoznaje stagnirane deale i šalje alert. Reengagement sekvenca u 3 razine intenziteta.",
    nodes: "multi-workflow",
    status: "live",
  },
  {
    id: "V7",
    title: "Post-close nurture",
    desc: "Won workflow: D+7 check-in, D+30 cross-sell prijedlog. Lost workflow: win-back sekvenca 3–6 mj. nakon gubitka deala. Automatski, bez ičijeg inputa.",
    nodes: "2 workflowa",
    status: "live",
  },
  {
    id: "V8",
    title: "HubSpot sync & compliance",
    desc: "Batch POST sinkronizacija kontakata, deal stage automacija, opt-out compliance provjera. Google Sheets kao config layer — svaka promjena parametara bez dodirivanja koda.",
    nodes: "config-driven",
    status: "live",
  },
  {
    id: "V9",
    title: "Inbox reply triage",
    desc: "Gmail trigger hvata svaki dolazni mail (category:primary, -subject:[REGGE]). AI klasificira interes, route alert na pravi inbox. Self-loop zaštita: vlastiti alertovi se isključuju iz triggeringa.",
    nodes: "novi · sept. 2026.",
    status: "new",
  },
];

const proofCards = [
  {
    number: "01",
    title: "Prodajni lijevak — end-to-end",
    body: "9 workflowova pokriva cijeli ciklus: Meta Ads → intake → ponuda → follow-up → won/lost nurture. Izgrađeno i testirano na živom klijentu (Regge Interijeri) s realnim budžetom.",
    badge: "Live i u produkciji",
    badgeColor: "text-green-400 bg-green-900/30 border-green-700/50",
  },
  {
    number: "02",
    title: "Cold outreach dual-track",
    body: "Dva paralelna outreach toka (B2B klijenti + osobni job search) na istoj infrastrukturi — AI istraživanje prospekata, personalizirani emailovi, automatski follow-up. ICP scoring 40+ prospekata.",
    badge: "End-to-end testirano",
    badgeColor: "text-blue-400 bg-blue-900/30 border-blue-700/50",
  },
  {
    number: "03",
    title: "Tjedni AI intelligence digest",
    body: "Svaki ponedjeljak u 08:00, cloud rutina automatski skenira najnovije AI vijesti, filtrira relevantno za moj rad i upisuje u inbox za review. Bez ručnog traženja.",
    badge: "Automatizirano",
    badgeColor: "text-purple-400 bg-purple-900/30 border-purple-700/50",
  },
];

const roadmap = [
  { label: "Meta Ads MCP", desc: "Direktna read/write kontrola kampanja iz Claude — kad budget prelazi €50/dan." },
  { label: "Apollo.io outreach", desc: "150 prospekata/mj na free tier — automatski enrich + ICP scoring + personalizirani outreach." },
  { label: "Telegram AI digest", desc: "Tjedni digest direktno u Telegram bot — bez emaila, bez klikanja." },
  { label: "Higgsfield Regge videi", desc: "Kinematski klipovi za Issa, Grace i unutarnje stolice — za A/B testiranje novog kreativa." },
];

export default function AutomationShowcase() {
  return (
    <section id="automatizacija" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* === PROOF OF WORK === */}
        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Proof of work
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
          Automatizacija koja već radi —{" "}
          <span className="gradient-text">za mene</span>
        </h2>
        <p className="reveal text-gray-400 text-lg mb-16 max-w-2xl">
          Ne prodajem teoriju. Svaki sustav koji nudim klijentima, prvo sam
          izgradio i testirao na vlastitim procesima.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {proofCards.map((c, i) => (
            <div
              key={i}
              className="reveal card-accent p-7 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-playfair text-5xl font-bold text-purple-900/60 leading-none select-none">
                {c.number}
              </span>
              <h3 className="font-semibold text-white text-lg leading-snug">
                {c.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {c.body}
              </p>
              <span
                className={`self-start text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${c.badgeColor}`}
              >
                {c.badge}
              </span>
            </div>
          ))}
        </div>

        {/* === V1-V9 BREAKDOWN === */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent mb-16" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Arhitektura sustava
        </p>
        <h3 className="reveal font-playfair text-3xl sm:text-4xl font-bold text-white mb-4">
          9 workflowova — V1 do V9
        </h3>
        <p className="reveal text-gray-500 text-sm mb-12 max-w-xl leading-relaxed">
          Svaki workflow rješava jedan specifičan problem u prodajnom ciklusu. Zajedno pokrivaju cijeli funnel — od prvog klika do win-back emaila.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {workflows.map((w, i) => (
            <div
              key={i}
              className="reveal card-accent p-6 flex flex-col gap-3 relative"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {w.status === "new" && (
                <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full text-green-300 bg-green-900/40 border border-green-700/50">
                  Novo
                </span>
              )}
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded font-mono"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(37,99,235,0.25))",
                    color: "#a78bfa",
                    border: "1px solid rgba(124,58,237,0.3)",
                  }}
                >
                  {w.id}
                </span>
                <span className="text-[10px] text-gray-700 font-medium">{w.nodes}</span>
              </div>
              <h4 className="font-semibold text-white text-sm leading-snug">{w.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>

        {/* === ROADMAP === */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent mb-16" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Sljedeći koraci
        </p>
        <h3 className="reveal font-playfair text-3xl sm:text-4xl font-bold text-white mb-12">
          Što je u planu
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roadmap.map((r, i) => (
            <div
              key={i}
              className="reveal flex gap-4 card-accent p-5"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-1.5 flex-shrink-0 rounded-full mt-1 self-stretch"
                style={{
                  background: "linear-gradient(180deg, #7c3aed 0%, #2563eb 100%)",
                  opacity: 0.5,
                }}
              />
              <div>
                <p className="text-white font-semibold text-sm mb-1">{r.label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
