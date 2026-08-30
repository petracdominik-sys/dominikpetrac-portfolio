"use client";

const services = [
  {
    title: "Pronalaženje i kvalifikacija leadova",
    body: "AI istraživanje prospekata, personalizirani outreach i kvalifikacijski sustavi — baza raste sama, bez ručnog traženja.",
  },
  {
    title: "Prodajni lijevak & CRM",
    body: "AI agenti prate, kvalificiraju i bogate bazu — svaki lead se prati kroz cijeli ciklus, ništa ne ispada iz sustava.",
  },
  {
    title: "AI video i kreativa za oglase",
    body: "Higgsfield-generirani video i vizuali za oglase, spremni za testiranje unutar dana, ne tjedana.",
  },
  {
    title: "Automatizacija oglasnih kampanja",
    body: "Detekcija umora kreative, sprječavanje preklapanja publike, budžet koji se sam prilagođava.",
  },
  {
    title: "AI vidljivost (GEO/AEO)",
    body: "Provjera i optimizacija kako AI modeli (ChatGPT, Claude, Perplexity) pronalaze i preporučuju brend — sljedeća generacija SEO-a.",
    isNew: true,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal card-accent p-7 relative"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {s.isNew && (
                <span className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-full text-purple-300 bg-purple-900/40 border border-purple-700/50">
                  Novo
                </span>
              )}
              <h3 className="font-semibold text-white text-lg mb-3 pr-16">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="reveal mt-10 text-xs text-gray-600 text-center leading-relaxed">
          40 specijaliziranih AI sustava za scoring leadova, analizu poziva,
          content strategiju i još mnogo toga — dostupno na upit.
        </p>
      </div>
    </section>
  );
}
