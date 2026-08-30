"use client";

export default function AIVideoShowcase() {
  return (
    <section id="ai-video" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent mb-28" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Produkcija
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
          AI video produkcija
        </h2>
        <p className="reveal text-gray-400 text-lg mb-16 max-w-2xl">
          Statična fotografija → profesionalni video za oglase, spreman za
          testiranje unutar 24 sata. Bez klasične produkcije, bez glumaca, bez
          studija.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 — with video placeholder */}
          <div className="reveal card-accent overflow-hidden" style={{ transitionDelay: "0ms" }}>
            <div className="relative aspect-video bg-[#111] flex items-center justify-center">
              {/* TODO: zamijeniti s pravim video linkom kad bude dostupan */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(124, 58, 237, 0.2)",
                    border: "1px solid rgba(124, 58, 237, 0.4)",
                  }}
                >
                  <svg
                    className="w-6 h-6 text-purple-400 ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">
                  Video uskoro
                </p>
              </div>
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(37,99,235,0.3) 100%)",
                }}
              />
            </div>
            <div className="p-7">
              <h3 className="font-semibold text-white text-lg mb-2">
                Europa 92 — Denim bar
              </h3>
              <p className="text-xs text-purple-400 font-medium tracking-wide uppercase mb-3">
                Demonstracija
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI generacija videa iz product fotografije za Instagram Stories
                format.
              </p>
              <p className="text-gray-600 text-xs mt-3">Alati: Higgsfield AI</p>
            </div>
          </div>

          {/* Card 2 — coming soon */}
          <div className="reveal card-accent overflow-hidden" style={{ transitionDelay: "120ms" }}>
            <div className="relative aspect-video bg-[#111] flex items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span
                  className="text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(124,58,237,0.35)",
                    color: "#a78bfa",
                  }}
                >
                  U pripremi
                </span>
                <p className="text-gray-600 text-xs">Coming soon</p>
              </div>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.4) 0%, rgba(124,58,237,0.4) 100%)",
                }}
              />
            </div>
            <div className="p-7">
              <h3 className="font-semibold text-white text-lg mb-2">
                Regge Interijeri — HoReCa kampanja
              </h3>
              <p className="text-xs text-blue-400 font-medium tracking-wide uppercase mb-3">
                U pripremi
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                10-scenski video kampanja za Grace stolicu (AB046), ciljano na
                vlasnike boutique hotela. Promptovi i scenariji: gotovi.
                Generacija: planirana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
