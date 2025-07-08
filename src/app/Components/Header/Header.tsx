'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Nossos Serviços', href: '#servicos' },
  { label: 'Quem Somos', href: '#quemsomos' },
  { label: 'Parceiros', href: '#parceiros' },
  { label: 'Contato', href: '/contact' }, // contato pode ser página separada
];

  // Link whatsapp já com a mensagem codificada
  const whatsappNumber = '5543999944146'; // formato internacional com DDI 55 (Brasil)
  const whatsappMessage = encodeURIComponent(
    'Olá, estou entrando em contato pelo site Avaliex Engenharia para solicitar orçamento.'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm text-gray-800'
          : 'bg-transparent text-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div
            className={`w-10 h-10 rounded-full ${
              isScrolled ? 'bg-blue-600' : 'bg-white'
            } flex items-center justify-center mr-3 transition-all duration-300 group-hover:bg-blue-500`}
          >
            <span className="text-white font-bold text-lg">XYZ</span>
          </div>
          <span
            className={`text-xl font-bold tracking-tight ${
              isScrolled ? 'text-gray-900' : 'text-white'
            } group-hover:text-blue-400 transition-colors duration-300`}
          >
            Avaliex Engenharia
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-gray-200 hover:text-white'
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Botão - Ação principal: WhatsApp */}
        <div className="hidden md:block">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Solicitar Orçamento</span>
            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-full focus:outline-none transition-colors ${
            isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div
          className={`px-6 pt-2 pb-6 space-y-3 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-neutral-900/95 backdrop-blur-md'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-200 hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="block"
          >
            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full text-sm font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
              Solicitar Orçamento
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
