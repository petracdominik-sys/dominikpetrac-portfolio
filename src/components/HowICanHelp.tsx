"use client";

const services = [
  {
    title: "AI automatizacija & prodajni sustavi",
    body: "n8n workflowovi koji pokrivaju cijeli prodajni ciklus — od prvog upita do zatvorenog deala. CRM integracija, AI inbox triage, automatski follow-up.",
    metric: "2h ručnog rada/dan → 30s pregleda",
  },
  {
    title: "Performance marketing",
    body: "Meta Ads kampanje s CAPI server-side trackingom i optimizacijom po CPL-u. Upravljam aktivnim kampanjama s mjerljivim rezultatima, ne teorijom.",
    metric: "185 leadova · CPL 5,47 € · 4 mj.",
  },
  {
    title: "AI kreativa & video za oglase",
    body: "Higgsfield-generirani kinematski video i vizuali za Meta Ads, spremni za testiranje unutar dana. Produkcija bez studia, bez tima — samo alat i strategija.",
    metric: "Product foto → video oglas za < 24h",
  },
];

export default function HowICanHelp() {
  return (
    <section id="kako-mogu-pomoci" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Usluge
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-16">
          Kako mogu pomoći
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal card-accent p-7 relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="font-semibold text-white text-lg mb-3">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.body}</p>
              <p className="text-xs font-semibold text-purple-400 tracking-wide border-t border-purple-900/40 pt-3">
                {s.metric}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
