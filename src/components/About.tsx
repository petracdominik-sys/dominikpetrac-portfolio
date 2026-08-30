"use client";

import Image from "next/image";

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
          <div className="reveal flex-shrink-0" style={{ transitionDelay: "0ms" }}>
            <Image
              src="/dominik-petrac.webp"
              alt="Dominik Petrac"
              width={256}
              height={384}
              className="rounded-2xl object-cover object-top"
              priority
            />
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
