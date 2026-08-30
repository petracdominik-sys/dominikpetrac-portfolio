"use client";

const groups = [
  {
    title: "Automatizacija & AI",
    tools: ["n8n", "Claude / Claude Code", "Higgsfield"],
  },
  {
    title: "CRM & Podaci",
    tools: ["HubSpot"],
  },
  {
    title: "Kreativa & Oglasi",
    tools: ["CapCut", "Meta Ads Manager", "Google Ads"],
  },
];

export default function TechStack() {
  return (
    <section id="tehnologije" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent mb-28" />

        <p className="reveal text-xs font-semibold tracking-[0.35em] uppercase text-purple-400 mb-4">
          Stack
        </p>
        <h2 className="reveal font-playfair text-4xl sm:text-5xl font-bold text-white mb-16">
          Tehnologije i alati
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((g, i) => (
            <div
              key={i}
              className="reveal card-accent p-7"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-purple-400 mb-5">
                {g.title}
              </p>
              <div className="flex flex-col gap-3">
                {g.tools.map((t, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-3 text-gray-300 text-sm font-medium"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #a78bfa, #60a5fa)",
                      }}
                    />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
