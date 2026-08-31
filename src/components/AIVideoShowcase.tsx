"use client";

import Image from "next/image";

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
          {/* Card 1 — Regge Bari */}
          <div className="reveal card-accent overflow-hidden" style={{ transitionDelay: "0ms" }}>
            {/* Foto → Video split */}
            <div className="flex h-56 overflow-hidden">
              {/* Left: source photo */}
              <div className="relative flex-1 bg-gray-950 overflow-hidden">
                <Image
                  src="/bari-foto.webp"
                  alt="Bari stolica — originalna fotografija"
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.5)" }}>
                    Originalna foto
                  </span>
                </div>
              </div>
              {/* Arrow */}
              <div className="flex items-center justify-center w-8 flex-shrink-0 bg-[#0d0d0d]">
                <span className="text-purple-600 text-base font-bold">→</span>
              </div>
              {/* Right: video */}
              <div className="relative flex-1 bg-[#111] flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover">
                  <source src="/bari.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-2 right-2">
                  <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.6)", color: "#a78bfa" }}>
                    AI video
                  </span>
                </div>
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-semibold text-white text-lg mb-2">
                Regge Interijeri — Bari stolica
              </h3>
              <p className="text-xs text-purple-400 font-medium tracking-wide uppercase mb-3">
                Statična foto → AI video
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Product fotografija Bari stolice pretvorena u animirani video
                klip za Meta oglase. Bez studija, glumaca ili kamere.
              </p>
              <p className="text-gray-600 text-xs mt-3">Alati: Higgsfield AI</p>
            </div>
          </div>

          {/* Card 2 — Europa 92 */}
          <div className="reveal card-accent overflow-hidden" style={{ transitionDelay: "120ms" }}>
            {/* Foto → Video split */}
            <div className="flex h-56 overflow-hidden">
              {/* Left: source photo */}
              <div className="relative flex-1 bg-gray-950 overflow-hidden">
                <Image
                  src="/europa92-foto.webp"
                  alt="Europa 92 — originalna fotografija"
                  fill
                  className="object-contain object-top"
                />
                <div className="absolute bottom-2 left-2">
                  <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.5)" }}>
                    Originalna foto
                  </span>
                </div>
              </div>
              {/* Arrow */}
              <div className="flex items-center justify-center w-8 flex-shrink-0 bg-[#0d0d0d]">
                <span className="text-purple-600 text-base font-bold">→</span>
              </div>
              {/* Right: video */}
              <div className="relative flex-1 bg-[#111] flex items-center justify-center overflow-hidden">
                <video autoPlay muted loop playsInline className="h-full w-auto">
                  <source src="/europa92.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-2 right-2">
                  <span className="text-[9px] uppercase tracking-widest px-2 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.6)", color: "#a78bfa" }}>
                    AI video
                  </span>
                </div>
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-semibold text-white text-lg mb-2">
                Europa 92 — Denim bar
              </h3>
              <p className="text-xs text-purple-400 font-medium tracking-wide uppercase mb-3">
                Statična foto → Instagram Story
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Product fotografija animirana u Instagram Stories format. AI
                generacija pokreta iz jedne statične fotografije.
              </p>
              <p className="text-gray-600 text-xs mt-3">Alati: Higgsfield AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
