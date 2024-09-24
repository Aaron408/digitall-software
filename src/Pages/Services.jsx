import Diccionario from "../Components/Diccionario";
import { useLanguage } from "../components/LanguageContext";
import Header from "../components/Header";

const Services = () => {
  const { language } = useLanguage();
  const t = Diccionario[language];

  const services = [
    { title: t.staticSitesTitle, description: t.staticSitesText, icon: "🌐" },
    { title: t.webAppsTitle, description: t.webAppsText, icon: "💻" },
    { title: t.mobileAppsTitle, description: t.mobileAppsText, icon: "📱" },
    {
      title: t.integratedSystemsTitle,
      description: t.integratedSystemsText,
      icon: "🔗",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-real-bg w-full">
      <Header />
      <div className="flex-grow p-4 sm:p-8 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">
            {t.servicesTitle}
          </h1>
          <p className="text-center text-gray-400 mb-12">
            {t.servicesDescription}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-400 text-justify">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
