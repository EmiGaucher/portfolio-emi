import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_s4bsuic',
      'template_kzsghai',
      form.current,
      'TpZ9ccxLXEyawaq8n'
    ).then(() => {
      toast.success(t('sent'));
      form.current.reset();
    }).catch(() => {
      toast.error(t('error'));
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mt-6 grid gap-4 max-w-md mx-auto">
      <input
        type="text"
        name="user_name"
        placeholder={`${t('name')} / Name`}
        className="p-3 bg-gray-800 text-white rounded-md border border-gray-600"
        required
      />
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        className="p-3 bg-gray-800 text-white rounded-md border border-gray-600"
        required
      />
      <textarea
        name="message"
        placeholder={`${t('message')} / Message`}
        rows="4"
        className="p-3 bg-gray-800 text-white rounded-md border border-gray-600"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className={`bg-green-600 hover:bg-green-500 transition px-4 py-2 rounded-md text-white flex justify-center items-center gap-2 ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        )}
        {loading ? t('sending') : t('send')}
      </button>
    </form>
  );
}
