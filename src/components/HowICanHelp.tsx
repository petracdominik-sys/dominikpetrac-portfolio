"use client";

const services = [
  {
    title: "AI automatizacija & prodajni sustavi",
    body: "n8n workflowovi koji pokrivaju cijeli prodajni ciklus — od prvog upita do zatvorenog deala. CRM integracija, AI inbox triage, automatski follow-up. Jedini ručni korak: 30 sekundi pregleda drafta.",
  },
  {
    title: "Performance marketing",
    body: "Meta Ads kampanje s CAPI server-side trackingom, detekcijom umora kreative i optimizacijom po CPL-u. Upravljam aktivnim kampanjama s mjerljivim rezultatima, ne teorijom.",
  },
  {
    title: "AI kreativa & video za oglase",
    body: "Higgsfield-generirani kinematski video i vizuali za Meta Ads, spremni za testiranje unutar dana. Produkcija bez studia, bez tima — samo alat i strategija.",
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
              <h3 className="font-semibold text-white text-lg mb-3 pr-16">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
