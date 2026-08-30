"use client";

const cards = [
  {
    number: "01",
    title: "Prodajni lijevak & AI orkestracija",
    body: "Kompletan automatizirani pipeline: webhook prima upit → AI analizira i klasificira lead → personalizirana PDF ponuda → automatski follow-up → won/lost nurture email sekvenca. Izgrađeno u n8n s Claude Code kao build agentom.",
    badge: "Live i u produkciji",
    badgeColor: "text-green-400 bg-green-900/30 border-green-700/50",
  },
  {
    number: "02",
    title: "Cold outreach dual-track sustav",
    body: "Dva paralelna outreach toka (B2B klijenti + osobni job search) na istoj infrastrukturi — AI istraživanje prospekata, personalizirani emailovi, automatski follow-up. Scoring 40+ prospekata po ICP kriterijima, end-to-end testirano.",
    badge: "End-to-end testirano",
    badgeColor: "text-blue-400 bg-blue-900/30 border-blue-700/50",
  },
  {
    number: "03",
    title: "Tjedni AI intelligence digest",
    body: "Svaki ponedjeljak u 08:00, cloud rutina automatski skenira najnovije AI vijesti i agent predloške, filtrira relevantno za moj rad i upisuje u inbox za review. Bez ručnog traženja, bez propuštenih vijesti.",
    badge: "Automatizirano",
    badgeColor: "text-purple-400 bg-purple-900/30 border-purple-700/50",
  },
];

export default function AutomationShowcase() {
  return (
    <section id="automatizacija" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
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
      </div>
    </section>
  );
}
