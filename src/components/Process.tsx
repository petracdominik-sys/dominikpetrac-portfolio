"use client";

const steps = [
  {
    number: "01",
    title: "Analiza",
    body: "Razgovor o tvojim ciljevima, procesima i postojećim sustavima. Identificiramo gdje automatizacija donosi najveću vrijednost.",
  },
  {
    number: "02",
    title: "Dizajn i build",
    body: "Gradim sustav — od arhitekture do produkcijskog deploymenta. Sve je testirano i dokumentirano prije predaje.",
  },
  {
    number: "03",
    title: "Predaja i razvoj",
    body: "Sustav je tvoj. Educira sam sebe i šaljem rezultate automatski. Po potrebi — daljnji razvoj i optimizacija.",
  },
];

export default function Process() {
  return (
    <section id="proces" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent mb-28" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Suradnja
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-16">
          Kako surađujemo
        </h2>

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row gap-0 lg:gap-0">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-8 left-[calc(16.666%+1.5rem)] right-[calc(16.666%+1.5rem)] h-px bg-gradient-to-r from-purple-800/40 via-purple-600/60 to-purple-800/40 z-0" />

          {steps.map((s, i) => (
            <div
              key={i}
              className="reveal flex-1 flex flex-col items-start lg:items-center relative z-10 px-0 lg:px-8 mb-12 lg:mb-0"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Number circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 font-playfair text-xl font-bold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(37,99,235,0.3) 100%)",
                  border: "1px solid rgba(124, 58, 237, 0.5)",
                }}
              >
                {s.number}
              </div>
              <h3 className="font-semibold text-white text-xl mb-3 lg:text-center">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed lg:text-center max-w-xs">
                {s.body}
              </p>

              {/* Vertical connector — mobile only */}
              {i < steps.length - 1 && (
                <div className="lg:hidden w-px h-8 bg-gradient-to-b from-purple-700/50 to-transparent mt-8 ml-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
