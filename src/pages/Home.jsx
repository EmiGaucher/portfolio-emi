import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <Layout>
      <motion.section className="text-center py-20 bg-zinc-900 text-white" {...fadeIn}>
        <h1 className="text-5xl font-bold mb-4 font-jetbrains">Emiliano Gaucher</h1>
        <p className="text-lg text-gray-400">
          Software Developer • Web Developer • Salesforce Developer
        </p>
      </motion.section>

      <motion.section id="about" className="py-16 border-t border-gray-800 bg-zinc-900 text-white" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-4 font-jetbrains">{t('aboutTitle')}</h2>
        <p className="text-lg text-gray-300">{t('about')}</p>
      </motion.section>

      <motion.section id="projects" className="py-16 border-t border-gray-800 bg-zinc-900 text-white" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-8 font-jetbrains">{t('projects')}</h2>
        <div className="grid gap-6 md:grid-cols-1">
          <a
            href="https://www.britopizza.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800 hover:bg-gray-700 transition rounded-xl p-6 flex items-center gap-4"
          >
            <img
              src="/src/assets/logo-britopizza.png"
              alt="BritoPizza"
              className="w-20 h-20 rounded-full shadow-md object-cover"
            />
            <div>
              <h3 className="text-xl font-bold mb-1 font-jetbrains">
                BritoPizza 🍕
              </h3>
              <p className="text-gray-300 text-sm">
                {t('projectBrito')}
              </p>
            </div>
          </a>
        </div>
      </motion.section>

      <motion.section id="experience" className="py-16 border-t border-gray-800 bg-zinc-900 text-white" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-4 font-jetbrains">{t('experience')}</h2>
        <ul className="space-y-6 text-gray-300">
          <li>
            <strong>Tata Consultancy Services (TCS)</strong> — {t('expTCSRole')}<br />
            <span className="text-sm text-gray-400">Remote, {t('expTCSDate')}</span><br />
            {t('expTCSDesc')}
          </li>
          <li>
            <strong>Altimetrik</strong> — Salesforce Developer<br />
            <span className="text-sm text-gray-400">Remote, Dec 2023 – Apr 2024</span><br />
            {t('expAltimetrikDesc')}
          </li>
          <li>
            <strong>Granja Naturalia</strong> — {t('expGranjaRole')}<br />
            <span className="text-sm text-gray-400">Uruguay, 2023</span><br />
            {t('expGranjaDesc')}
          </li>
          <li>
            <strong>Estampa</strong> — {t('expEstampaRole')}<br />
            <span className="text-sm text-gray-400">Uruguay, 2022 – 2023</span><br />
            {t('expEstampaDesc')}
          </li>
        </ul>
      </motion.section>

      <motion.section id="education" className="py-16 border-t border-gray-800 bg-zinc-900 text-white" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-4 font-jetbrains">{t('education')}</h2>
        <ul className="space-y-6 text-gray-300">
          <li>
            <strong>Hack Academy</strong> — Full Stack Web Development Bootcamp<br />
            <span className="text-sm text-gray-400">Mar 2023 – Jun 2023</span><br />
            {t('eduHack')} <a href="https://b-ra.vercel.app/" target="_blank" rel="noreferrer" className="underline text-green-400">b-ra.vercel.app</a>
          </li>
          <li>
            <strong>CoderHouse</strong> — JavaScript<br />
            <span className="text-sm text-gray-400">Sep 2022 – Nov 2022</span>
          </li>
          <li>
            <strong>CoderHouse</strong> — HTML y CSS<br />
            <span className="text-sm text-gray-400">May 2022 – Jul 2022</span>
          </li>
        </ul>
      </motion.section>

      <motion.section id="contact" className="py-16 border-t border-gray-800 bg-zinc-900 text-white" {...fadeIn}>
        <h2 className="text-3xl font-bold mb-4 font-jetbrains">{t('contact')}</h2>
        <ContactForm />
      </motion.section>
    </Layout>
  );
}
