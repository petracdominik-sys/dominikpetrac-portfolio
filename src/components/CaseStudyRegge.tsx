"use client";

const stats = [
  { label: "Leadovi generirani", value: "65" },
  { label: "Cijena po leadu (CPL)", value: "5,19 €" },
  { label: "CPM", value: "4,77 €" },
  { label: "CTR", value: "1,46 – 2,05 %" },
  { label: "CPC", value: "0,19 – 0,33 €" },
  { label: "Ukupna potrošnja", value: "440,77 €" },
  { label: "Doseg", value: "26.855" },
  { label: "Prikazi", value: "92.334" },
];

export default function CaseStudyRegge() {
  return (
    <section id="case-study-regge" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Case Study 01
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-16 max-w-3xl">
          Od nestrukturiranog upita do automatiziranog prodajnog sustava
        </h2>

        {/* PSR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Problem */}
          <div className="reveal card-accent p-7" style={{ transitionDelay: "0ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">
              Problem
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Regge Interijeri (premium HoReCa namještaj) imali su
              nestrukturirani digitalni marketing bez mjerljivosti — svaki upit
              dolazio ručno, bez CRM-a, bez praćenja, bez mogućnosti skaliranja.
            </p>
          </div>

          {/* Solution */}
          <div className="reveal card-accent p-7" style={{ transitionDelay: "100ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">
              Rješenje
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Kompletan ekosustav od nule: Meta Ads kampanje, HubSpot CRM
              pipeline, automatizirani V1–V7 workflow sustav (webhook → AI
              analiza → personalizirana ponuda → nurture), cold outreach B2B
              sustav za hotele i dizajnerske studije.
            </p>
          </div>

          {/* Result intro */}
          <div className="reveal card-accent p-7" style={{ transitionDelay: "200ms" }}>
            <p className="text-xs font-bold tracking-widest uppercase text-purple-400 mb-3">
              Rezultat
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Frequency 3,44 (zasićenje publike) → nova kampanja s boljim CTR
              (+40%) i nižim CPC (−18%). Kampanja aktivna i danas.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="reveal">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {stats.map((s, i) => (
              <div key={i} className="stat-card p-5 text-center">
                <p
                  className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-1"
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
        <div className="reveal card-accent p-6 border-l-4 border-purple-600">
          <p className="text-gray-400 text-sm italic leading-relaxed">
            Ovo nije samo Meta Ads upravljanje — svaki segment (kampanje, CRM,
            automatizacija, AI agenti) dizajniran je kao integrirani sustav, ne
            kao zasebni alati.
          </p>
        </div>
      </div>
    </section>
  );
}
