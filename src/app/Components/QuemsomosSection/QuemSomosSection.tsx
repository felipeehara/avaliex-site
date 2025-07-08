'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function QuemSomosSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dados acadêmicos para o modal (pode ser externalizado depois)
  const academicInfo = [
    {
      title: "Especialização em Biologia Forense",
      period: "2015 - 2016",
      institution: "Centro Universitário Filadélfia",
      description:
        "Título: PROVA PERICIAL: COMPARAÇÃO ENTRE O NOVO CÓDIGO DE PROCESSO CIVIL E O ANTIGO DE 1973. Orientador: Prof. Dr. Osmar Vieira",
    },
    {
      title: "Especialização em Engenharia de Segurança do Trabalho",
      period: "1994 - 1994",
      institution: "Universidade Estadual de Londrina",
      description: "Título: dispensado",
    },
    {
      title: "Aperfeiçoamento em Curso Básico de Perícias e Anomalias em Edificações",
      period: "1999 - 1999",
      institution: "Instituto Brasileiro de Avaliações e Perícias de Engenharia de São Paulo",
      description: "Título: dispensado. Ano de finalização: 1999",
    },
    {
      title: "Aperfeiçoamento em Engenharia de Avaliações e Perícias",
      period: "1999 - 1999",
      institution: "CENTRALCON - CURSOS EMPRESARIAIS",
      description: "Título: dispensado. Ano de finalização: 1999",
    },
    {
      title: "Graduação em andamento em Direito",
      period: "2010 - Atual",
      institution: "Centro Universitário Filadélfia",
      description: "",
    },
    {
      title: "Graduação em Direito",
      period: "2010 - 2015",
      institution: "Centro Universitário Filadélfia",
      description: "",
    },
    {
      title: "Graduação em Engenharia",
      period: "1984 - 1990",
      institution: "Universidade Estadual de Londrina",
      description: "",
    },
  ];

  return (
    <>
      <section id="quemsomos" className="bg-[#fdf8f4] py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          {/* Foto do Engenheiro com corte circular e sombra */}
          <div className="flex-shrink-0">
            <div className="rounded-full overflow-hidden shadow-xl w-80 h-80 mx-auto">
              <Image
                src="/images/zini.png"
                alt="Engenheiro Rogerio Trioschi"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Texto descritivo */}
          <div className="flex-1 bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Olá, Sou Rogerio Trioschi
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Graduado em Engenharia Civil (1991) e pós-graduado em Engenharia de Segurança do Trabalho (1993) pela renomada Universidade Estadual de Londrina - PR. Também possui graduação em Direito (2016) e especialização em Biologia Forense e Perícias Judiciais pelo Centro Universitário Filadélfia, em Londrina - PR.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Com vasta experiência em construção de edifícios altos em concreto armado, bases para silos graneleiros, análise de barragens em concreto e terra, além de processos construtivos em madeira, aço e alvenaria estrutural, atua com excelência em inspeções técnicas, avaliações patrimoniais e perícias especializadas.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Especialista em Engenharia de Segurança do Trabalho, domina gestão de segurança, análise de riscos, laudos técnicos, ergonomia, treinamentos e programas preventivos para garantir a máxima segurança e conformidade.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Perito Judicial desde 1997, atuando em comarcas do Paraná e São Paulo. Como coordenador e gerente de projetos da Avaliex Engenharia S/S Ltda., lidera projetos de consultoria técnica em todo o Brasil, prezando sempre por qualidade, ética e comprometimento.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#c6865c] text-white px-8 py-3 rounded-full font-semibold text-base shadow-md hover:bg-[#b5754f] focus:outline-none focus:ring-4 focus:ring-[#c6865c]/50 transition duration-300"
            >
              Veja mais +
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
{isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={() => setIsModalOpen(false)}
    aria-modal="true"
    role="dialog"
    tabIndex={-1}
  >
    <div
      className="bg-[#fdf8f4] rounded-3xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 mx-4 relative shadow-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        aria-label="Fechar modal"
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h3 className="text-3xl font-bold mb-6 text-[#c6865c]">
        Formação Acadêmica
      </h3>

      <div className="space-y-6">
        {academicInfo.map((item, idx) => (
          <div key={idx} className="border-l-4 border-[#c6865c] pl-4">
            <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-600 mb-1">
              {item.period} — <span className="italic">{item.institution}</span>
            </p>
            {item.description && (
              <p className="text-gray-700">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)}
      
    </>
  );
}
