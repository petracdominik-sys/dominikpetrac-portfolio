"use client";

export default function About() {
  return (
    <section id="o-meni" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent mb-28" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          O meni
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-16">
          O meni
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Photo placeholder */}
          <div className="reveal flex-shrink-0" style={{ transitionDelay: "0ms" }}>
            <div
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              {/* TODO: zamijeni s pravom fotografijom */}
              <div className="flex flex-col items-center gap-2 text-center px-4">
                <svg
                  className="w-10 h-10 text-purple-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-[10px] text-purple-800 uppercase tracking-widest">
                  Foto
                </span>
              </div>
              {/* Gradient overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30"
                style={{
                  background:
                    "linear-gradient(to top, rgba(124,58,237,0.3), transparent)",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="reveal flex-1" style={{ transitionDelay: "120ms" }}>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              Gradim automatizirane sustave za prodaju i marketing — od AI video
              produkcije za oglase do CRM procesa koji sami prate i bogate bazu
              leadova.
            </p>
            <p className="text-gray-400 leading-relaxed mb-5">
              Trenutne kampanje koje vodim generiraju rezultate uz CPC od{" "}
              <span className="text-white font-medium">0,19 €</span> i CTR do{" "}
              <span className="text-white font-medium">2,05%</span>. Svaki
              ponedjeljak pratim najnovije AI alate kroz automatski digest, pa po
              potrebi ažuriram i optimiziram vlastite sustave — uključujući
              vlastitog AI agenta koji radi za mene.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Ne prodajem teoriju. Svaki sustav koji nudim, prvo sam izgradio na
              sebi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
