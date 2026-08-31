"use client";

export default function Contact() {
  return (
    <section id="kontakt" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-800/50 to-transparent mb-28" />

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="reveal font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
            Razgovarajmo.
          </h2>
          <p className="reveal text-gray-400 text-lg mt-4">
            Otvoren za nove prilike i suradnje — javite se za kratak razgovor.
          </p>

          <div className="reveal mt-10" style={{ transitionDelay: "150ms" }}>
            <a
              href="mailto:petracdominik@gmail.com"
              className="inline-block px-10 py-4 text-sm font-semibold tracking-widest uppercase text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                boxShadow: "0 0 40px rgba(124, 58, 237, 0.4)",
              }}
            >
              Pišite mi
            </a>
          </div>
        </div>

        {/* Contact details */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
          {/* Phone */}
          <a
            href="tel:+385913322092"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+385 91 33 22 092</span>
          </a>

          <span className="hidden sm:block text-gray-700">·</span>

          {/* Email */}
          <a
            href="mailto:petracdominik@gmail.com"
            className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>petracdominik@gmail.com</span>
          </a>

          <span className="hidden sm:block text-gray-700">·</span>

          {/* Social */}
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dominik-petrac/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-gray-900/50 flex items-center justify-between text-gray-700 text-xs">
        <span>© 2026 Dominik Petrac</span>
        <span>Zagreb, Hrvatska</span>
      </div>
    </section>
  );
}
