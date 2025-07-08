'use client';

import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white pt-12 pb-6 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Logo */}
        <img 
          src="/images/logo-eng.png" 
          alt="Avaliex Engenharia" 
          className="w-16 h-16 mb-8" 
        />

        {/* Container principal com contato e horário */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-x-24 w-full">

          {/* Seção de Contato - Centralizada */}
          <div className="flex flex-col gap-4 items-center">
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-4">
              <FaWhatsapp className="text-[#c6865c] justify-self-end" />
              <span className="text-left">(43) 99999-1234</span>
              
              <FaPhone className="text-[#c6865c] justify-self-end" />
              <span className="text-left">(43) 3366-7788</span>
              
              <FaMapMarkerAlt className="text-[#c6865c] justify-self-end" />
              <span className="text-left">
                Rua Eng. Civil, 123 - Sala 45 <br />
                Centro | Londrina - PR
              </span>
              
              <FaEnvelope className="text-[#c6865c] justify-self-end" />
              <span className="text-left">joaoengenharia@gmail.com</span>
            </div>
          </div>

          {/* Barra vertical - apenas em desktop */}
          <div className="hidden lg:block w-px bg-gray-500 h-40" />

          {/* Horário de atendimento - Agora com grid para alinhamento perfeito */}
          {/* Horário de atendimento - Versão alinhada */}
<div className="flex flex-col items-center">
  <div className="bg-[#c6865c] text-white inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium mb-4">
    <FaClock /> Horário de Atendimento:
  </div>
  
  <div className="flex flex-col items-start gap-1">
    <div className="text-left">
      <span className="font-bold">Segunda a Sexta</span>
      <span className="ml-2">8h às 18h</span>
    </div>
    <div className="text-left">
      <span className="font-bold">Sábado</span>
      <span className="ml-2">8h às 12h</span>
    </div>
  </div>
</div>
        </div>



        {/* Linha inferior */}
        <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-300 text-xs w-full">
          © {new Date().getFullYear()} - Todos os direitos reservados. Site desenvolvido por{' '}
          <a
            href="https://instagram.com/felipe.eharaa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#c6865c] hover:underline"
          >
            Felipe Ehara
          </a>
        </div>
      </div>
    </footer>
  );
}