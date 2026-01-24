export const ContactSection = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'developer@example.com',
      link: 'mailto:developer@example.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+82 10-1234-5678',
      link: 'tel:+821012345678',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Seoul, Korea',
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: '💻',
      color: 'bg-gray-800 hover:bg-gray-900',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '💼',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Blog',
      url: 'https://blog.example.com',
      icon: '✍️',
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: '🐦',
      color: 'bg-sky-500 hover:bg-sky-600',
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Contact
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          언제든지 연락주세요!
        </p>

        {/* 연락처 정보 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => (
            <div
              key={info.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all"
            >
              <div className="text-4xl mb-3">{info.icon}</div>
              <h3 className="text-white font-semibold mb-2">{info.label}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-blue-300 hover:text-blue-200 transition-colors break-all"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-gray-300">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* 소셜 링크 */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Connect With Me
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white py-4 px-6 rounded-lg font-semibold text-center transition-all transform hover:scale-105 shadow-lg`}
              >
                <div className="text-3xl mb-2">{social.icon}</div>
                <div className="text-sm">{social.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
