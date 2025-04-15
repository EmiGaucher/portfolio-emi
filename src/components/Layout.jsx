import LanguageToggle from '../components/LanguageToggle';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Layout({ children }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'es';
  const [activeSection, setActiveSection] = useState('about');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 4;
      for (const section of sections) {
        if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinkClass = (id) =>
    `block transition ${activeSection === id ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}`;

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex overflow-hidden">
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-zinc-900 border-b border-gray-800 flex justify-between items-center px-4 py-3">
        <h1 className="text-lg font-bold">{lang === 'es' ? 'Mi portafolio' : 'My portfolio'}</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`bg-zinc-900 fixed top-0 left-0 h-screen w-64 p-6 border-r border-gray-800 flex flex-col justify-between z-50 transition-transform duration-300 transform md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:fixed md:flex md:translate-x-0`}>
        <div>
          <h1 className="text-2xl font-bold mb-6 font-jetbrains hidden md:block">
            {lang === 'es' ? 'Mi portafolio' : 'My portfolio'}
          </h1>
          <nav className="space-y-4">
            <a href="#about" className={navLinkClass('about')} onClick={() => setSidebarOpen(false)}>🧠 {t('aboutTitle')}</a>
            <a href="#projects" className={navLinkClass('projects')} onClick={() => setSidebarOpen(false)}>🚀 {t('projects')}</a>
            <a href="#experience" className={navLinkClass('experience')} onClick={() => setSidebarOpen(false)}>💼 {t('experience')}</a>
            <a href="#education" className={navLinkClass('education')} onClick={() => setSidebarOpen(false)}>📚 {t('education')}</a>
            <a href="#contact" className={navLinkClass('contact')} onClick={() => setSidebarOpen(false)}>✉️ {t('contact')}</a>
          </nav>
        </div>
        <div className="mt-6">
          <LanguageToggle />
        </div>
      </aside>

      {/* Main content */}
      <motion.main
        className="ml-0 md:ml-64 flex-1 px-6 pt-32 md:pt-8 pb-12 overflow-y-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  );
}
