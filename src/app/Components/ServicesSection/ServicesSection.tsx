'use client'
import { FaBuilding, FaClipboardCheck, FaTools, FaDraftingCompass } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      title: 'Perícia de Imóveis',
      description: 'Laudos técnicos detalhados para avaliações judiciais e extrajudiciais.',
      icon: FaClipboardCheck,
      color: 'from-sky-400 to-sky-600'
    },
    {
      title: 'Avaliações Técnicas',
      description: 'Análises precisas para determinar o valor real de imóveis e construções.',
      icon: FaBuilding,
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      title: 'Consultoria em Construção',
      description: 'Acompanhamento e supervisão técnica para obras com qualidade garantida.',
      icon: FaTools,
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      title: 'Projetos Mecânicos',
      description: 'Desenvolvimento e análise de projetos mecânicos para aplicações industriais.',
      icon: FaDraftingCompass,
      color: 'from-amber-400 to-amber-600'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="servicos" className="py-24 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
            Nossos Serviços
          </h2>
          <p className="mb-16 max-w-3xl mx-auto text-gray-600 text-lg md:text-xl leading-relaxed">
            Soluções técnicas com experiência, precisão e comprometimento. Estamos prontos para ajudar você com confiança e qualidade.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ title, description, icon: Icon, color }) => (
            <motion.div
              key={title}
              variants={item}
              transition={{ duration: 0.5 }}
              className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-lg border border-gray-200 hover:border-transparent transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* efeito hover suave */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-blue-400 via-purple-400 to-pink-500 rounded-2xl"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <div className={`w-16 h-16 mb-5 mx-auto rounded-xl flex items-center justify-center bg-gradient-to-br ${color} shadow-md`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>

                <button
                  type="button"
                  className="mt-auto inline-block px-5 py-2 rounded-full border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
                  aria-label={`Saiba mais sobre ${title}`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Saiba Mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
