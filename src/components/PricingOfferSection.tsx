import React, { useState } from 'react';
import { useMockup } from '../context/MockupContext';
import { CHECKOUT_URL } from '../data/content';
import { Check, Mail, Timer } from 'lucide-react';

interface PricingOfferSectionProps {
  onCtaClick?: () => void;
}

export const PricingOfferSection: React.FC<PricingOfferSectionProps> = () => {
  const { mockupImage } = useMockup();
  const [spotsLeft] = useState(6);

  const price = { symbol: '$', amount: '6.90', original: '$29.00', note: 'USD' };

  const items = [
    'Ebook Completo: Guía Práctica para Comprender la Biblia (+120 páginas en PDF y ePub)',
    'BONO 1: Ficha de Estudio Bíblico — Crece en tu Fe (Plantillas PDF y digitales)',
    'BONO 2: 50 Preguntas para Profundizar en Cualquier Pasaje Bíblico (Método 5-5-5)',
    'BONO 3: Línea del Tiempo Bíblica: A Través de la Historia (18 etapas bíblicas)',
    'BONO 4: Guía de los Principales Personajes Bíblicos (Mapa de relaciones)',
    'BONO 5: Desafío Bíblico Mapa 5D — 21 Días (Plan guiado día a día)',
    'Acceso seguro, inmediato y de por vida con todas las actualizaciones futuras',
    'Compatible con celular, tablet, computadora y lectores electrónicos Kindle',
  ];

  return (
    <section id="oferta" className="bg-[#120F0D] text-white py-16 md:py-24 px-4 border-b border-[#30261C]">
      <div className="max-w-xl mx-auto">
        {/* Main Card (Container com border-radius: 0px) */}
        <div className="bg-[#181512] rounded-none p-4 sm:p-10 border-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
          {/* Subtle gold corner ribbon / aura */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#D4AF37]/15 blur-3xl pointer-events-none" />

          {/* Bundle Mockup */}
          <div className="relative mb-6">
            <img
              src={mockupImage}
              alt="Guía Práctica para Comprender la Biblia y Bonos"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain mx-auto drop-shadow-2xl rounded-none"
            />
          </div>

          {/* Heading */}
          <div className="text-center mb-6">
            <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] text-[#E5B558] uppercase block mb-1">
              PRECIO ESPECIAL DE LANZAMIENTO
            </span>

            <div className="mt-2">
              <span className="text-stone-400 line-through text-sm sm:text-base mr-2">
                De {price.original}
              </span>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight my-1">
                ¡Por solo <span className="text-[#E5B558]">{price.symbol}{price.amount}</span> {price.note}!
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A89D8B] mt-1">
              (Puedes pagar en tu moneda local con cualquier método)
            </p>
          </div>

          {/* Checklist header */}
          <div className="pt-4 border-t border-white/10 mb-6">
            <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#E5B558] mb-4 text-center sm:text-left">
              Al adquirir hoy tu <span className="text-white">Guía Práctica</span>, recibirás:
            </h4>

            {/* Items list */}
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {items.map((item, idx) => {
                const isBonus = item.startsWith('BONO');
                const isHighlight = item.startsWith('Acceso') || item.startsWith('Compatible') || item.startsWith('Ebook');

                return (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#18A957]/20 text-[#18A957] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span
                      className={`leading-snug ${
                        isBonus
                          ? 'text-[#F3CA65] font-semibold'
                          : isHighlight
                          ? 'text-[#6EE7B7] font-medium'
                          : 'text-[#E5DFD5]'
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Limited spots banner */}
          <div className="bg-amber-950/40 border border-amber-500/30 rounded-none p-3 text-center mb-6">
            <div className="text-xs sm:text-sm font-bold text-amber-300 flex items-center justify-center gap-1.5">
              <Timer className="w-4 h-4 animate-pulse text-amber-400" />
              <span>Oferta limitada con descuento · Últimos {spotsLeft} cupos</span>
            </div>
          </div>

          {/* Big CTA Button */}
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-full box-border px-3 sm:px-8 py-3.5 sm:py-5 bg-[#18A957] hover:bg-[#15944c] active:scale-[0.98] text-white font-bold text-xs min-[360px]:text-[13px] sm:text-base md:text-lg tracking-normal sm:tracking-wider uppercase rounded-full transition-all duration-200 cta-green-shadow flex items-center justify-center text-center cursor-pointer shadow-xl mb-4 leading-tight sm:leading-snug"
          >
            <span className="block max-w-full break-words text-balance">QUIERO MI GUÍA PRÁCTICA AHORA</span>
          </a>

          {/* Delivery Note */}
          <div className="flex items-center justify-center gap-2 text-xs text-[#B5A895]">
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>Entrega inmediata por correo electrónico</span>
          </div>
        </div>
      </div>
    </section>
  );
};
