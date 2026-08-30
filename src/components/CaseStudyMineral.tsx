"use client";

const stats = [
  { label: "Meta Ads — doseg", value: "134.600" },
  { label: "Meta Ads — prikazi", value: "218.400" },
  { label: "Meta Ads — angažman", value: "59.407" },
  { label: "Poruke/upiti", value: "981" },
  { label: "LinkedIn — novi pratitelji", value: "51" },
  { label: "LinkedIn — CPC", value: "0,57 €" },
  { label: "LinkedIn — stopa angažmana", value: "0,85 %" },
  { label: "LinkedIn — ukupni klikovi", value: "636" },
  { label: "Meta potrošnja", value: "172,41 €" },
];

export default function CaseStudyMineral() {
  return (
    <section id="case-study-mineral" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent mb-28" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Case Study 02
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-16 max-w-3xl">
          Strateški pivot: od pogrešne publike do B2B pozicioniranja
        </h2>

        {/* PSR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="reveal card-accent p-7" style={{ transitionDelay: "0ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">
              Problem
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mineral promet (zeolitni minerali za poljoprivredu i stočarstvo)
              pokušavao dosegnuti komercijalne poljoprivrednike i stočare, ali
              Meta Ads kampanje privlačile su male OPG-ove bez kupovne moći za
              B2B volumen.
            </p>
          </div>

          <div className="reveal card-accent p-7" style={{ transitionDelay: "100ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">
              Rješenje
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Analiza podataka → identificiran temeljni problem: kanal, ne
              kreativa. Strateški zaokret na LinkedIn B2B. Dva odvojena vizualna
              identiteta (žuta paleta za poljoprivredu, zelena za stočarstvo).
              AI video produkcija iz statičnih fotografija.
            </p>
          </div>

          <div className="reveal card-accent p-7" style={{ transitionDelay: "200ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">
              Ključni zaključak
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              981 poruka na 172€ potrošnje = <strong className="text-white">0,18€ po upitu</strong>. Problem nije
              bio budžet — problem je bio kanal. Prepoznavanje i pivot je bila
              prava odluka.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
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

        {/* Key note */}
        <div className="reveal card-accent p-6 border-l-4 border-blue-600">
          <p className="text-gray-400 text-sm italic leading-relaxed">
            Ovo dokazuje sposobnost čitanja podataka i djelovanja — ne guranje
            iste strategije bez obzira na rezultate.
          </p>
        </div>
      </div>
    </section>
  );
}
