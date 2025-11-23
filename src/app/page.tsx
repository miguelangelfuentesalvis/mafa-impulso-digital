
'use client';

import {
  Zap,
  Check,
  Globe,
  Smartphone,
  MessageCircle,
  Clock,
  ChevronDown,
  Mail,
  Users,
  Rocket,
  ChartColumn,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const FAQItem = ({ question, children }: { question: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between font-bold text-left"
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
             <Image src="/images/logo-header.png" alt="Logo de MAFA Growth Digital" width={180} height={51} />
          </a>
          <div className="hidden md:flex gap-2 items-center">
            <a href="#features" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition">Caracteristicas</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition">Precios</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition">Proceso</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition">FAQ</a>
          </div>
          <div className="md:hidden flex gap-2">
            <a href="#features" className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded text-sm transition">Caract.</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-2 py-1 rounded text-sm transition">Precios</a>
          </div>
          <a href="https://wa.me/56940156689?text=Hola%20MAFA%20%F0%9F%91%8B%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Impulso%20Digital.%20%C2%BFCu%C3%A1les%20son%20los%20pr%C3%B3ximos%20pasos%3F" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition font-bold text-sm md:text-base">Contactar</a>
        </div>
      </header>

      <section className="bg-gradient-to-r from-purple-900 via-purple-700 to-blue-600 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Impulsa tu Negocio con una Landing Page Profesional en Días, No Semanas</h1>
              <p className="text-xl mb-8 text-purple-100">
                Tu plataforma de ventas lista para atraer clientes y vender 24/7.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400" /><span >Diseño optimizado para conversión</span></div>
                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400" /><span >Dominio + Hosting por 1 año</span></div>
                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400" /><span >WhatsApp y Redes integradas</span></div>
                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400" /><span >Mantención incluida</span></div>
              </div>
              <a href="https://wa.me/56940156689?text=Hola%20MAFA%20%F0%9F%91%8B%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Impulso%20Digital.%20%C2%BFCu%C3%A1les%20son%20los%20pr%C3%B3ximos%20pasos%3F" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105">
                👉 Quiero mi Impulso Digital
              </a>
            </div>
            <div className="hidden md:block">
              <Image src="/images/ofertamafa.png" alt="Oferta especial de MAFA Impulso Digital" width={500} height={333} className="w-full max-w-lg mx-auto rounded-lg shadow-2xl" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
             <Image src="/images/logo-header.png" alt="Logo de MAFA Growth Digital" width={240} height={68} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por qué emprendedores y PYMES eligen <span className="text-blue-600">MAFA</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white flex flex-col gap-6 rounded-xl border shadow-sm p-6 hover:shadow-lg transition border-l-4 border-blue-600"><Zap className="w-12 h-12 text-blue-600 mb-4" /><h3 className="text-xl font-bold mb-2">Trabajo Rápido y Profesional</h3><p className="text-gray-600">Entregas en 7 días hábiles sin comprometer la calidad de tu presencia digital.</p></div>
            <div className="bg-white flex flex-col gap-6 rounded-xl border shadow-sm p-6 hover:shadow-lg transition border-l-4 border-purple-600"><ChartColumn className="w-12 h-12 text-purple-600 mb-4" /><h3 className="text-xl font-bold mb-2">Diseño Pensado en Vender</h3><p className="text-gray-600">Cada elemento está estratégicamente diseñado para convertir visitantes en clientes.</p></div>
            <div className="bg-white flex flex-col gap-6 rounded-xl border shadow-sm p-6 hover:shadow-lg transition border-l-4 border-green-600"><Users className="w-12 h-12 text-green-600 mb-4" /><h3 className="text-xl font-bold mb-2">Acompañamiento Real</h3><p className="text-gray-600">No solo entregamos, acompañamos tu proyecto con soporte durante 12 meses.</p></div>
            <div className="bg-white flex flex-col gap-6 rounded-xl border shadow-sm p-6 hover:shadow-lg transition border-l-4 border-cyan-600"><Globe className="w-12 h-12 text-cyan-600 mb-4" /><h3 className="text-xl font-bold mb-2">Experiencia Digitalizando Negocios</h3><p className="text-gray-600">Años de experiencia ayudando PYMES a transformarse digitalmente con éxito.</p></div>
            <div className="bg-white flex flex-col gap-6 rounded-xl border shadow-sm p-6 hover:shadow-lg transition border-l-4 border-blue-600"><MessageCircle className="w-12 h-12 text-blue-600 mb-4" /><h3 className="text-xl font-bold mb-2">Lenguaje Cercano</h3><p className="text-gray-600">Hablamos tu idioma. Comunicación clara, adaptada a las necesidades de PYMES.</p></div>
            <div className="bg-white flex flex-col gap-6 rounded-xl border shadow-sm p-6 hover:shadow-lg transition border-l-4 border-purple-600"><Rocket className="w-12 h-12 text-purple-600 mb-4" /><h3 className="text-xl font-bold mb-2">Escalabilidad</h3><p className="text-gray-600">Tu landing crece con tu negocio. Ampliaciones y nuevas funciones cuando las necesites.</p></div>
          </div>
        </div>
      </section>
      
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Qué Incluye <span className="text-purple-600">MAFA Impulso Digital</span></h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-600">
              <div className="flex items-start gap-4">
                <Globe className="w-12 h-12 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Landing Page Profesional</h3>
                  <p className="text-gray-700">Diseño estratégico, claro, moderno y 100% responsive. Tu plataforma de ventas optimizada para convertir.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border-l-4 border-purple-600">
              <div className="flex items-start gap-4">
                <Smartphone className="w-12 h-12 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Dominio + Hosting por 12 meses</h3>
                  <p className="text-gray-700">Infraestructura completa lista para operar. Tu negocio en línea sin preocupaciones técnicas.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-lg border-l-4 border-cyan-600">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-12 h-12 text-cyan-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Integración WhatsApp + Redes</h3>
                  <p className="text-gray-700">Contacto directo con tus clientes. Integración de redes sociales para maximizar tu alcance.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-l-4 border-green-600">
              <div className="flex items-start gap-4">
                <Zap className="w-12 h-12 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Soporte y Mantención Incluidos</h3>
                  <p className="text-gray-700">Ajustes, actualizaciones y correcciones sin costo durante 12 meses. Estamos contigo siempre.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">🎁 Regalos Exclusivos que Sí Importan</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Estas bonificaciones aumentan significativamente el valor de tu inversión</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6 rounded-xl border p-8 bg-white shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <Clock className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Soporte y Mantención por 12 meses</h3>
                  <p className="text-gray-700 mb-4">Ajustes, actualizaciones y correcciones sin costo. Nuestro equipo está disponible para ti.</p>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                    <li>✓ Correcciones de errores</li>
                    <li>✓ Actualizaciones de seguridad</li>
                    <li>✓ Cambios menores de contenido</li>
                    <li>✓ Soporte técnico prioritario</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-xl border p-8 bg-white shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-4">
                <ChartColumn className="w-12 h-12 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Asesoría Estratégica de Marca + Redes</h3>
                  <p className="text-gray-700 mb-4">Revisión personalizada para potenciar tu identidad y comunicación digital.</p>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                    <li>✓ Análisis de marca</li>
                    <li>✓ Estrategia de redes sociales</li>
                    <li>✓ Recomendaciones de contenido</li>
                    <li>✓ Optimización de mensajería</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Plan y Precio</h2>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 shadow-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-sm opacity-90 mb-2">Valor Real</p>
                  <p className="text-2xl font-bold line-through opacity-75">$210.000</p>
                </div>
                <div className="border-l border-r border-white border-opacity-30">
                  <p className="text-sm opacity-90 mb-2">Precio MAFA</p>
                  <p className="text-3xl font-bold">$89.990</p>
                </div>
                <div>
                  <p className="text-sm opacity-90 mb-2">Ahorro</p>
                  <p className="text-2xl font-bold text-green-300">57% OFF</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 text-lg mt-8">Un sistema completo de ventas por menos de lo que pagarías por un mes de anuncios.</p>
            <div className="text-center mt-8">
              <a href="https://wa.me/56940156689?text=Hola%20MAFA%20%F0%9F%91%8B%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Impulso%20Digital.%20%C2%BFCu%C3%A1les%20son%20los%20pr%C3%B3ximos%20pasos%3F" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105">
                👉 Quiero iniciar mi Impulso Digital
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explica el Proceso en 3 Pasos</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Hablamos</h3>
              <p className="text-gray-600">Me envías tu información y referencias. Entendemos tu visión y necesidades específicas.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Diseñamos y Construimos</h3>
              <p className="text-gray-600">Tu landing queda lista en pocos días. Diseño profesional, funcional y optimizado.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Publicamos y Acompañamos</h3>
              <p className="text-gray-600">Te entregamos acceso completo + soporte por 1 año. Tu negocio en línea funcionando.</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-12 text-lg">
            <strong >Objetivo:</strong> Eliminar miedo y transmitir simplicidad en cada paso.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Beneficios a Largo Plazo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold mb-2">Más Confianza Visual</h3>
                <p className="text-gray-600">Una presencia profesional genera confianza inmediata en tus clientes potenciales.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Canal Directo de Ventas</h3>
                <p className="text-gray-600">Comunícate directamente con clientes sin intermediarios. Control total de tus ventas.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Marca Profesional</h3>
                <p className="text-gray-600">Diferénciate de la competencia con una identidad digital sólida y coherente.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                <Rocket className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Base Digital Estable</h3>
                <p className="text-gray-600">Cimiento sólido para escalar tu negocio. Infraestructura confiable y segura.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Presencia 24/7</h3>
                <p className="text-gray-600">Tu negocio trabaja mientras duermes. Ventas sin límites de horario.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                <ChartColumn className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Crecimiento Medible</h3>
                <p className="text-gray-600">Analiza resultados y optimiza continuamente. Datos para decisiones inteligentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-900 via-purple-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu negocio merece verse profesional y vender siempre.</h2>
          <p className="text-xl mb-8 text-purple-100">MAFA Impulso Digital te da el impulso que estabas esperando.</p>
          <a href="https://wa.me/56940156689?text=Hola%20MAFA%20%F0%9F%91%8B%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Impulso%20Digital.%20%C2%BFCu%C3%A1les%20son%20los%20pr%C3%B3ximos%20pasos%3F" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition transform hover:scale-105">
            👉 Quiero Impulsar mi Negocio
          </a>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
             <FAQItem question="¿En cuánto tiempo estará lista la landing?">
                <p>Tu Landing Page estará lista en un plazo máximo de 7 días hábiles desde que nos entregas toda la información necesaria (textos, imágenes, etc.).</p>
            </FAQItem>
            <FAQItem question="¿Qué información debo entregar?">
                <p>Necesitamos que nos proporciones los textos para cada sección, las imágenes o videos que quieras incluir, y los datos de contacto y redes sociales. Nosotros te guiaremos con una estructura clara.</p>
            </FAQItem>
            <FAQItem question="¿Qué cambios incluye la mantención?">
                <p>La mantención cubre cambios menores de contenido (actualizar precios, textos, imágenes), corrección de errores y actualizaciones de seguridad. No incluye rediseños completos ni nuevas secciones.</p>
            </FAQItem>
            <FAQItem question="¿Cuántas secciones tiene la landing?">
                <p>El plan incluye hasta 6 secciones diseñadas estratégicamente para presentar tu negocio y convertir visitantes, pero podemos ajustarnos si necesitas algo más específico.</p>
            </FAQItem>
            <FAQItem question="¿Qué pasa después del año?">
                <p>Después del primer año, solo deberás cubrir el costo de renovación del dominio y hosting (aproximadamente $45.000 CLP anual). La mantención es opcional y puedes renovarla si lo deseas.</p>
            </FAQItem>
            <FAQItem question="¿Puedo ampliarla más adelante?">
                <p>¡Claro! Tu landing page está construida para ser escalable. Si en el futuro necesitas añadir una tienda online, un blog, o más secciones, podemos hacerlo sin problemas.</p>
            </FAQItem>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 text-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/images/logo-header.png" alt="Logo de MAFA Growth Digital" width={180} height={51} className="mb-4" />
              <p className="text-gray-600">Transformando negocios digitalmente.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#features" className="hover:text-blue-600 transition">Características</a></li>
                <li><a href="#pricing" className="hover:text-blue-600 transition">Precios</a></li>
                <li><a href="#process" className="hover:text-blue-600 transition">Proceso</a></li>
                <li><a href="#faq" className="hover:text-blue-600 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="mailto:mafagrowthdigital@gmail.com" className="hover:text-blue-600 transition flex items-center gap-2"><Mail className="w-4 h-4" /> Email</a></li>
                <li><a href="https://wa.me/56940156689?text=Hola%20MAFA%20%F0%9F%91%8B%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Impulso%20Digital.%20%C2%BFCu%C3%A1les%20son%20los%20pr%C3%B3ximos%20pasos%3F" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</a></li>
                <li><a href="https://mafagrowthdigital.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition flex items-center gap-2"><Globe className="w-4 h-4" /> Web</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Síguenos</h4>
              <div className="flex gap-4 text-gray-600">
                <a href="https://www.instagram.com/mafagrowthdigital/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
                <a href="https://www.facebook.com/mafagrowthdigital/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="https://x.com/MafaGrowth" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter w-6 h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
                <a href="https://github.com/miguelangelfuentesalvis" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
            <p>© 2024 MAFA Growth Digital. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/56940156689?text=Hola%20MAFA%20%F0%9F%91%8B%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Impulso%20Digital.%20%C2%BFCu%C3%A1les%20son%20los%20pr%C3%B3ximos%20pasos%3F" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110" title="Contactar por WhatsApp">
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
