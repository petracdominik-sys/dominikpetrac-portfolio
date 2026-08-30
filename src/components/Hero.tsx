"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Primary blob — purple */}
        <div
          className="animate-blob absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #7c3aed 0%, #2563eb 50%, transparent 75%)",
            filter: "blur(80px)",
          }}
        />
        {/* Secondary blob — blue */}
        <div
          className="animate-blob absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle at 60% 60%, #2563eb 0%, #7c3aed 50%, transparent 75%)",
            filter: "blur(100px)",
            animationDelay: "-4s",
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className="reveal mb-4 text-xs font-semibold tracking-[0.35em] uppercase text-purple-400"
          style={{ transitionDelay: "0ms" }}
        >
          Dominik Petrac
        </p>

        {/* Main heading */}
        <h1
          className="reveal font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          style={{ transitionDelay: "100ms" }}
        >
          <span className="text-white">AI radi posao.&nbsp;</span>
          <br className="hidden sm:block" />
          <span className="text-white">Ja gradim&nbsp;</span>
          <span className="gradient-text">sustav.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="reveal max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed"
          style={{ transitionDelay: "200ms" }}
        >
          Automatizacija cijelog prodajnog ciklusa — od pronalaska pravih
          leadova do zatvorene prodaje.
        </p>

        {/* CTA */}
        <div
          className="reveal"
          style={{ transitionDelay: "300ms" }}
        >
          <a
            href="#kontakt"
            className="inline-block px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.35)",
            }}
          >
            Kontaktirajte me
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="reveal absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
          style={{ transitionDelay: "500ms" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
