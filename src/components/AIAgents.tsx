"use client";

const agents = [
  {
    id: "01",
    name: "Tjedni AI Intelligence Digest",
    trigger: "Svaki ponedjeljak · 08:00",
    triggerColor: "text-blue-400 bg-blue-950/40 border-blue-800/40",
    desc: "Autonomno skenira najnovije AI vijesti i istraživanja, filtrira relevantno za moj rad i klijente, generira strukturirani digest i dostavlja u inbox. Bez ijednog ručnog koraka.",
    steps: [
      "Cloud routine skenira izvore",
      "Claude filtrira po relevantnosti",
      "Generira digest s ključnim točkama",
      "Dostava u inbox — svaki ponedjeljak 08:00",
    ],
    tech: ["Claude", "Cloud routine", "Email"],
    badge: null,
  },
  {
    id: "02",
    name: "Inbox Reply Triage",
    trigger: "Real-time · Gmail trigger",
    triggerColor: "text-green-400 bg-green-950/40 border-green-800/40",
    desc: "Hvata svaki dolazni email (category:primary). AI klasificira interes i tip upita, šalje strukturirani alert. Self-loop zaštita: filter -subject:[REGGE] sprječava vlastite alertove od triggera.",
    steps: [
      "Gmail trigger — svaki novi mail",
      "GPT-4o-mini klasificira interes i tip",
      "Strukturirani alert s kontekstom",
      "Self-loop filter aktivan",
    ],
    tech: ["n8n", "GPT-4o-mini", "Gmail API"],
    badge: "V9 · Novo",
  },
  {
    id: "03",
    name: "Prospect Research Agent",
    trigger: "Per-batch · on demand",
    triggerColor: "text-purple-400 bg-purple-950/40 border-purple-800/40",
    desc: "Za svakog prospekata autonomno istražuje kompaniju i signal događaje. Generira research brief s tagovima Fact / Inference / Question — osnova za personalizirani email koji ne zvuči kao masovni outreach.",
    steps: [
      "Prospect lista → n8n",
      "AI istraživanje per prospekt",
      "Fact / Inference / Question brief",
      "Email draft spreman za review",
    ],
    tech: ["Claude", "n8n", "Apollo.io"],
    badge: null,
  },
];

export default function AIAgents() {
  return (
    <section id="ai-agenti" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent mb-28" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          AI Agenti
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
          Autonomni agenti koji rade —{" "}
          <span className="gradient-text">svaki dan</span>
        </h2>
        <p className="reveal text-gray-400 text-lg mb-16 max-w-2xl">
          Workflow čeka trigger. Agent ima zadatak, ima kontekst, sam donosi odluke — i radi dok spavaš.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="reveal card-accent p-6 flex flex-col gap-4 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {agent.badge && (
                <span className="absolute top-4 right-4 text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full text-green-300 bg-green-900/40 border border-green-700/50">
                  {agent.badge}
                </span>
              )}

              <span className="font-playfair text-5xl font-bold text-purple-900/40 leading-none select-none">
                {agent.id}
              </span>

              <div>
                <h3 className="font-semibold text-white text-base leading-snug mb-3">
                  {agent.name}
                </h3>
                <span className={`inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded border ${agent.triggerColor}`}>
                  {agent.trigger}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed flex-1">{agent.desc}</p>

              <div className="space-y-1.5 border-t border-gray-800/60 pt-4">
                {agent.steps.map((step, si) => (
                  <div key={si} className="flex items-start gap-2">
                    <span className="text-purple-700 text-xs mt-0.5 flex-shrink-0">→</span>
                    <p className="text-gray-600 text-xs leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {agent.tech.map((t) => (
                  <span key={t} className="text-[10px] text-gray-600 bg-gray-900/60 border border-gray-800/40 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
