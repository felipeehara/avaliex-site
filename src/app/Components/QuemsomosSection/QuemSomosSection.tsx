'use client';

import Image from 'next/image';

export default function QuemSomosSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Imagem com corte arredondado */}
        <div className="flex-shrink-0">
          <div className="rounded-[50%] overflow-hidden shadow-lg w-[320px] h-[320px] mx-auto">
            <Image
              src="/images/zini.png" // Substitua pela imagem real
              alt="Engenheiro responsável"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex-1 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Olá, Sou João Andrade
          </h2>
          <p className="text-gray-600 mb-3">
            Engenheiro Civil – CREA/SP 123456
          </p>
          <p className="text-gray-600 mb-3">
            Graduado em Engenharia Civil pela Universidade Estadual de Maringá, com mais de 10 anos de experiência em avaliações, perícias e consultorias técnicas.
          </p>
          <p className="text-gray-600 mb-3">
            Atuo com foco em soluções eficientes e confiáveis para o setor da construção civil, realizando laudos técnicos, análises estruturais e acompanhamento de obras.
          </p>
          <p className="text-gray-600 mb-6">
            Membro do IBAPE-SP e CREA-SP, participando ativamente de eventos e atualizações na área de engenharia diagnóstica.
          </p>

          <button className="bg-[#c6865c] text-white px-6 py-3 rounded-full font-semibold text-sm shadow hover:shadow-md transition-all">
            Veja mais +
          </button>
        </div>
      </div>
    </section>
  );
}
