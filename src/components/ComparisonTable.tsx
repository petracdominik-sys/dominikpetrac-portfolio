"use client";

const rows = [
  {
    topic: "Praćenje leadova",
    without: "Ručni unos u tablicu, lako se izgubi",
    with: "CRM automatski prima, klasificira i otvara deal",
  },
  {
    topic: "Follow-up",
    without: "Oslanja se na sjećanje — deal stagnira i umre",
    with: "Automatska sekvenca: D+2, D+5, D+14 bez ijednog klika",
  },
  {
    topic: "Odgovaranje na upite",
    without: "Ručno pisanje ponude svaki put, sat do dva po ponudi",
    with: "AI generira personaliziranu ponudu za 30s, ti samo odobriš",
  },
  {
    topic: "Tracking & podaci",
    without: "Ne zna koji oglas donosi stvarne klijente",
    with: "CAPI server-side tracking — točni podaci i za iOS 14+",
  },
  {
    topic: "Skalabilnost",
    without: "Više klijenata = više sati rada, proporcionalno",
    with: "Sustav radi isti posao za 5 ili 50 leadova tjedno",
  },
  {
    topic: "Reakcija na promjene",
    without: "Shvati problem tek kad izgubi deal ili potroši budžet",
    with: "Stalled deal detektor i inbox triage alertiraju u realnom vremenu",
  },
  {
    topic: "Alati",
    without: "Plaća n8n, HubSpot, Meta — svaki radi zasebno",
    with: "Integrirani stack: svaki event u jednom alatu okida sljedeći korak",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/30 to-transparent mb-20" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Zašto sustav
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-16">
          Freelancer bez sustava{" "}
          <span className="gradient-text">vs Dominik</span>
        </h2>

        {/* Desktop table */}
        <div className="reveal hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left pb-5 text-gray-600 text-xs font-semibold tracking-widest uppercase w-[22%]" />
                <th className="pb-5 w-[39%]">
                  <div className="rounded-lg px-4 py-2 text-gray-500 text-xs font-semibold tracking-widest uppercase text-center border border-gray-800/60 bg-gray-900/30">
                    Freelancer bez sustava
                  </div>
                </th>
                <th className="pb-5 pl-3 w-[39%]">
                  <div
                    className="rounded-lg px-4 py-2 text-xs font-semibold tracking-widest uppercase text-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(37,99,235,0.2))",
                      border: "1px solid rgba(124,58,237,0.35)",
                      color: "#a78bfa",
                    }}
                  >
                    S Dominikom
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-900/60"
                >
                  <td className="py-4 pr-4 text-gray-500 text-xs font-semibold uppercase tracking-wider leading-tight align-top pt-5">
                    {row.topic}
                  </td>
                  <td className="py-4 pr-3 align-top">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center">
                        <span className="text-gray-500 text-[10px] font-bold">✕</span>
                      </span>
                      <p className="text-gray-500 text-sm leading-relaxed">{row.without}</p>
                    </div>
                  </td>
                  <td className="py-4 pl-3 align-top">
                    <div className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-purple-900/50 flex items-center justify-center">
                        <span className="text-purple-400 text-[10px] font-bold">✓</span>
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed">{row.with}</p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div key={i} className="reveal card-accent overflow-hidden" style={{ transitionDelay: `${i * 40}ms` }}>
              <div className="px-5 py-3 border-b border-gray-800/60">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">{row.topic}</p>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-500 text-[10px] font-bold">✕</span>
                  </span>
                  <p className="text-gray-500 text-sm leading-relaxed">{row.without}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-purple-900/50 flex items-center justify-center">
                    <span className="text-purple-400 text-[10px] font-bold">✓</span>
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed">{row.with}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
