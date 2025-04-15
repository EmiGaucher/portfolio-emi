import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'es';

  const toggleLanguage = () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm text-gray-300 hover:text-white px-3 py-1 border border-gray-500 rounded-md"
    >
      {currentLang === 'es' ? 'EN' : 'ES'}
    </button>
  );
};

export default LanguageToggle;
