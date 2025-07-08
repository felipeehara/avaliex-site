"use client"
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Container da imagem com efeitos premium */}
      <div className="absolute inset-0">
        <Image
          src="/images/engenheiros.jpg"
          alt="Imagem de fundo profissional"
          fill
          priority
          quality={100}
          className="object-cover"
          style={{
            filter: "brightness(0.6) contrast(1.1)",
            transform: "scale(1.01)", // Elimina bordas brancas
          }}
        />
        
        {/* Overlay sofisticado com gradiente */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />
      </div>

      {/* Conteúdo com animação sutil e hierarquia visual */}
      <div className="relative z-10 max-w-4xl px-6 transform transition-all duration-500 hover:scale-[1.01]">
        <h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-blue-400 drop-shadow-lg"
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            animation: "fadeInUp 0.8s ease-out",
          }}
        >
          Precisão Técnica em Cada Detalhe
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed"
          style={{
            animation: "fadeInUp 0.8s ease-out 0.2s forwards",
            opacity: 0,
          }}
        >
          Perícias, Avaliações e Projetos de Engenharia Civil e Mecânica com excelência técnica.
        </p>
        
        <div 
          className="flex flex-col md:flex-row gap-4 justify-center"
          style={{
            animation: "fadeInUp 0.8s ease-out 0.4s forwards",
            opacity: 0,
          }}
        >
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/20"
          >
            Solicitar Orçamento
          </button>
          
          <button 
            className="bg-transparent border-2 border-blue-400 hover:bg-blue-600/20 hover:text-white text-blue-300 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/10"
          >
            Falar com um Engenheiro
          </button>
        </div>
      </div>

      {/* Efeito de partículas sutis (opcional) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Animations CSS (adicionar no seu arquivo global.css) */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-100px) translateX(20px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </section>
  );
}