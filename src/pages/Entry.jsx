import { useState } from 'react';
import Home from './Home';

export default function Entry() {
  const [pin, setPin] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'es');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === '1998') {
      localStorage.setItem('lang', language); // guardar antes de pasar a Home
      setFadeOut(true);
      setTimeout(() => setAccessGranted(true), 700);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
    setPin('');
  };

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  if (accessGranted) return <Home />;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col justify-center items-center p-6 transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center animate-fade-in font-jetbrains">
        {language === 'es' ? 'Hola, soy Emiliano 👋' : "Hi, I'm Emiliano 👋"}
      </h1>

      {/* Botón estilizado para cambiar idioma */}
      <button
        onClick={toggleLanguage}
        className="mb-6 px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors text-sm"
      >
        {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      </button>

      <p className="text-gray-400 mb-8 text-center">
        {language === 'es' ? 'Portfolio Personal – Acceso con PIN' : 'Personal Portfolio – PIN Access'}
      </p>

      <form onSubmit={handleSubmit} className={`w-full max-w-sm ${shake ? 'animate-shake' : ''}`}>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder={language === 'es' ? 'Ingresá el PIN' : 'Enter the PIN'}
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 mb-4"
        />
        <button type="submit" className="w-full p-3 bg-green-600 hover:bg-green-500 rounded-md">
          {language === 'es' ? 'Ingresar' : 'Enter'}
        </button>
        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">
            {language === 'es' ? 'PIN incorrecto' : 'Incorrect PIN'}
          </p>
        )}
      </form>
    </div>
  );
}
