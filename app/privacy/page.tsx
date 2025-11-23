// app/politica-privacidad/page.tsx
import { Metadata } from 'next';
import { Mail, Shield, Gamepad2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidad — Gaming Store',
  description: 'Conoce cómo Gaming Store protege tu información personal y datos de navegación.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-900 via-purple-900 to-gray-900 text-gray-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 to-pink-600/20"></div>
          
          <div className="relative container mx-auto px-6 py-24 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-purple-600/20 backdrop-blur-md rounded-full border border-purple-500/50">
                <Shield className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">
              <Gamepad2 className="inline-block mr-4 w-12 h-12" />
              Política de Privacidad
            </h1>
            <p className="text-xl text-purple-200">Gaming Store</p>
            <p className="mt-4 text-lg text-gray-300">
              Última actualización: <span className="font-semibold text-purple-400">23 de noviembre de 2025</span>
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-6 py-16 max-w-5xl">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-8 md:p-12 shadow-2xl">
            <article className="prose prose-invert prose-lg max-w-none">
              <p className="lead text-xl text-gray-300 mb-10">
                En <strong className="text-purple-400">Gaming Store</strong> valoramos tu privacidad por encima de todo. 
                Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestro sitio web y nuestros servicios.
              </p>

              <h2 className="text-3xl font-bold text-purple-400 mt-12 mb-6">1. Información que recopilamos</h2>

              <h3 className="text-2xl font-semibold text-pink-400 mt-8 mb-4">1.1 Información proporcionada por el usuario</h3>
              <p>Cuando creas una cuenta o accedes mediante Facebook u otro proveedor social, podemos recibir:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-gray-300">
                <li>Nombre</li>
                <li>Correo electrónico</li>
                <li>Foto de perfil</li>
                <li>ID público del proveedor (Facebook)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-pink-400 mt-8 mb-4">1.2 Información técnica</h3>
              <p>Recopilamos datos como:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-gray-300">
                <li>Dirección IP</li>
                <li>Tipo de dispositivo y navegador</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas</li>
                <li>Tiempos de navegación</li>
                <li>Cookies o tecnologías similares</li>
              </ul>

              <h3 className="text-2xl font-semibold text-pink-400 mt-8 mb-4">1.3 Cookies</h3>
              <p>Utilizamos cookies para:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-gray-300">
                <li>Mantener tu sesión iniciada</li>
                <li>Mejorar la experiencia del usuario</li>
                <li>Analítica y seguridad</li>
              </ul>

              <h2 className="text-3xl font-bold text-purple-400 mt-12 mb-6">2. Cómo usamos tu información</h2>
              <p>Usamos la información para:</p>
              <ul className="list-disc list-inside space-y-3 mt-4 ml-4 text-gray-300">
                <li>Crear y gestionar tu cuenta en Gaming Store</li>
                <li>Permitir acceso mediante Facebook Login</li>
                <li>Mostrar contenido personalizado</li>
                <li>Garantizar el funcionamiento correcto de la plataforma</li>
                <li>Mejorar nuestros servicios</li>
                <li>Enviar notificaciones importantes sobre actualizaciones o seguridad</li>
              </ul>

              <h2 className="text-3xl font-bold text-purple-400 mt-12 mb-6">3. Cómo compartimos la información</h2>
              <p className="text-xl font-bold text-green-400">¡Nunca vendemos tu información personal!</p>
              <p className="mt-4">Solo podemos compartir datos con:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-gray-300">
                <li>Proveedores de autenticación (por ejemplo, Facebook)</li>
                <li>Servicios de hosting y analítica</li>
                <li>Autoridades gubernamentales cuando sea legalmente necesario</li>
              </ul>

              <h2 className="text-3xl font-bold text-purple-400 mt-12 mb-6">4. Seguridad</h2>
              <p>
                Implementamos medidas técnicas y organizativas para proteger la información contra accesos no autorizados.<br />
                <strong className="text-yellow-400">Sin embargo, ningún sistema es 100% seguro.</strong>
              </p>

              <h2 className="text-3xl font-bold text-purple-400 mt-12 mb-6">5. Derechos del usuario</h2>
              <p>Puedes solicitar en cualquier momento:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-gray-300">
                <li>Acceso a tus datos</li>
                <li>Corrección o actualización</li>
                <li>Eliminación de la cuenta</li>
                <li>Revocación de permisos otorgados en Facebook</li>
              </ul>

              <h2 className="text-3xl font-bold text-purple-400 mt-12 mb-6">6. Servicios de terceros</h2>
              <p>
                Gaming Store puede contener integraciones con servicios externos.<br />
                No nos responsabilizamos por sus políticas de privacidad.
              </p>

              <h2 className="text-3xl font-bold text-purple-400 mt-12 mb-6">7. Modificaciones</h2>
              <p>
                Podemos actualizar esta política en cualquier momento.<br />
                Publicaremos la fecha de actualización en esta página.
              </p>

              <h2 className="text-3xl font-bold text-purple-400 mt-12 mb-6">8. Contacto</h2>
              <div className="bg-gray-700/50 rounded-xl p-6 border border-purple-500/50 mt-8">
                <p className="text-xl">
                  Para cualquier consulta relacionada con privacidad:
                </p>
                <div className="flex items-center gap-3 mt-4 text-purple-400">
                  <Mail className="w-6 h-6" />
                  <a 
                    href="mailto:gamingstore.support@gmail.com"
                    className="text-2xl font-bold hover:text-pink-400 transition-colors"
                  >
                    gamingstore.support@gmail.com
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Footer decorativo */}
        <div className="text-center py-12 text-gray-500">
          <p>© 2025 Gaming Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  );
}