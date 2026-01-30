'use client';

import { useEffect, useState } from 'react';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const [mounted, setMounted] = useState(false);
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    setMounted(true);

    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
     
      <div className="absolute inset-0 z-0">
       
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a12] via-[#050508] to-[#0a0a12]" />
        
      
        <div className="absolute inset-0 hero-gradient" />
        
       
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-[#00ff88]/5 rounded-full blur-3xl" />
        
     
        <div className="absolute inset-0 grid-bg" />
        
       
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent" />

        <div className="noise-overlay" />
      </div>

     
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          
          <div className={`font-mono text-xs text-gray-600 mb-6 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-[#00d4ff]">const</span> developer <span className="text-gray-500">=</span> {'{'}
          </div>

          <h1 className={`font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-7xl leading-[0.9] mb-6 tracking-tight ${mounted ? 'animate-fade-in delay-100' : 'opacity-0'}`}>
            <span className="text-white block">MATEO</span>
            <span className="gradient-text text-glow block">DOGLIANI</span>
          </h1>

         
          <div className={`font-mono text-base sm:text-lg text-gray-400 mb-4 ${mounted ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            <span className="text-[#00d4ff]">role:</span>{' '}
            <span className="typing-cursor">&quot;{typedText}&quot;</span>
          </div>

          <div className={`font-mono text-xs text-gray-600 mb-8 ${mounted ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
            {'}'};
          </div>

          <p className={`font-body text-gray-400 text-lg sm:text-xl leading-relaxed mb-6 max-w-lg ${mounted ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            No solo hago webs. Construyo{' '}
            <span className="text-white font-medium">
              mobile apps, sistemas enterprise, y backends robustos
            </span>.
          </p>

         
          <div className={`flex flex-wrap gap-2 mb-10 ${mounted ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
            {['Mobile', 'Web', 'Backend', 'Enterprise'].map((item) => (
              <span
                key={item}
                className="px-3 py-1 border border-gray-700/50 rounded-full text-xs text-gray-400 font-mono"
              >
                {item}
              </span>
            ))}
          </div>

        
          <div className={`flex flex-wrap gap-4 ${mounted ? 'animate-fade-in delay-500' : 'opacity-0'}`}>
            <a
              href="#proyectos"
              className="px-7 py-3.5 bg-[#00d4ff] text-[#050508] font-semibold rounded-lg hover:bg-[#00e5ff] transition-all duration-300 hover:scale-[1.03] font-body"
              data-hoverable
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="px-7 py-3.5 border border-gray-700 text-white font-semibold rounded-lg hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all duration-300 font-body"
              data-hoverable
            >
              Contactar
            </a>
          </div>
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs font-mono">scroll</span>
          <div className="w-5 h-8 border border-gray-600 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-[#00d4ff] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}