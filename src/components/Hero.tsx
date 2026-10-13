import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useMockup } from '../context/MockupContext';
import { IMAGES, CHECKOUT_URL } from '../data/content';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { mockupImage } = useMockup();

  return (
    <section className="relative overflow-hidden bg-[#100D0B] text-white pt-4 pb-8 sm:pt-10 sm:pb-16 border-b border-amber-900/30">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
        <img
          src={IMAGES.cloudsBg}
          alt="Luz divina sobre las Escrituras"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-radial from-transparent via-[#100D0B]/85 to-[#100D0B] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-3.5 sm:px-4 text-center">
        {/* 1. Nome do Produto (fonte clássica Cinzel, mais destacado, compacto para não empurrar os elementos) */}
        <p className="font-cinzel text-amber-400 font-extrabold text-sm min-[360px]:text-base sm:text-lg tracking-wider uppercase leading-tight mb-1.5 sm:mb-2">
          GUÍA PRÁCTICA PARA COMPRENDER LA BIBLIA
        </p>

        {/* 2. Headline (otimizada para mobile com entrelinhas aproximadas) */}
        <h1 className="font-montserrat text-lg min-[360px]:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.12] min-[360px]:leading-[1.15] sm:leading-[1.15] md:leading-[1.18] text-[#F7E7CE] max-w-3xl mx-auto mb-2.5 sm:mb-4 text-balance uppercase">
          COMPRENDE LA BIBLIA DE PRINCIPIO A FIN CON{' '}
          <span className="text-[#E5B558] text-gold-gradient">
            CLARIDAD, PROFUNDIDAD Y PODER ESPIRITUAL
          </span>
        </h1>

        {/* 3. Mockup em destaque */}
        <div className="relative max-w-[280px] min-[360px]:max-w-[320px] sm:max-w-md md:max-w-lg mx-auto mb-2.5 sm:mb-4 group">
          <div className="absolute -inset-3 bg-gradient-to-t from-amber-600/20 to-transparent blur-2xl rounded-full opacity-70 pointer-events-none" />
          <div className="relative">
            <img
              src={mockupImage}
              alt="Kit Guía Práctica para Comprender la Biblia y 5 Bonos de Regalo"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-56 min-[360px]:max-h-64 sm:max-h-72 md:max-h-84 object-contain mx-auto transform transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* 4. Subheadline */}
        <p className="text-xs sm:text-sm md:text-base text-[#E2DACB] max-w-xl mx-auto leading-relaxed mb-3 sm:mb-4 font-normal text-balance">
          Aprende un método sencillo en 5 dimensiones para estudiar cualquier pasaje bíblico con contexto, claridad histórica y profunda aplicación devocional.
        </p>

        {/* 5. Botão CTA */}
        <div className="w-full max-w-md mx-auto">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full box-border inline-flex items-center justify-center gap-2 px-4 sm:px-8 py-3.5 sm:py-4 bg-[#18A957] hover:bg-[#15934c] text-white font-extrabold text-xs min-[360px]:text-sm sm:text-base rounded-full shadow-[0_10px_25px_-5px_rgba(24,169,87,0.45)] hover:shadow-[0_15px_30px_-5px_rgba(24,169,87,0.6)] transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase tracking-wider text-center"
          >
            <span>QUIERO MI GUÍA PRÁCTICA AHORA</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </a>

          <p className="text-[10px] sm:text-xs text-stone-400 mt-2 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span>🔒 Acceso Inmediato</span>
            <span>•</span>
            <span>⚡ Garantía de 7 Días</span>
            <span>•</span>
            <span className="text-[#E5B558] font-bold">Por solo $6.90 USD</span>
          </p>
        </div>
      </div>
    </section>
  );
};
