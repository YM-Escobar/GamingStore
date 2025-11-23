// app/terminos-y-condiciones/page.tsx
import { Metadata } from 'next';
import { FileText, Gamepad2, Shield, Mail, AlertTriangle, CheckCircle, Ban } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos y Condiciones — Gaming Store',
  description: 'Términos de uso y condiciones legales de Gaming Store.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 via-pink-700/20 to-purple-900/30"></div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-6 bg-purple-600/20 backdrop-blur-md rounded-full border border-purple-500/50 mb-8">
            <FileText className="w-20 h-20 text-purple-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center gap-4">
            <Gamepad2 className="w-14 h-14" />
            Términos y Condiciones
          </h1>
          
          <p className="text-2xl text-purple-200 font-light">Gaming Store</p>
          <p className="mt-6 text-lg text-gray-300">
            Última actualización: <span className="font-bold text-purple-400">23 de noviembre de 2025</span>
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-3xl border border-purple-500/40 p-10 md:p-16 shadow-2xl">
          <article className="prose prose-invert prose-lg max-w-none space-y-12">

            <p className="text-xl text-gray-300 leading-relaxed">
              ¡Bienvenido a <strong className="text-purple-400">Gaming Store</strong>! 
              Al usar nuestro sitio web, aceptas automáticamente los siguientes Términos y Condiciones.
            </p>

            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-purple-400 mb-3">1. Aceptación de las condiciones</h2>
                <p>Al acceder, registrarte o usar cualquier funcionalidad del sitio, confirmas que has leído y aceptas estos términos sin excepciones.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Ban className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-purple-400 mb-4">2. Uso prohibido del sitio</h2>
                <p className="text-red-300 font-semibold mb-4">Está estrictamente prohibido:</p>
                <ul className="space-y-3 text-gray-300 ml-4">
                  <li className="flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-red-400" /> Realizar actividades ilegales o fraudulentas</li>
                  <li className="flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-red-400" /> Crear cuentas falsas o múltiples con fines maliciosos</li>
                  <li className="flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-red-400" /> Intentar hackear, explotar o comprometer la seguridad del sitio</li>
                  <li className="flex items-center gap-3"><AlertTriangle className="w-5 h-5 text-red-400" /> Copiar, distribuir o usar contenido sin autorización</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400 mb-5 flex items-center gap-3">
                <Shield className="w-9 h-9 text-cyan-400" /> 3. Registro y seguridad de cuenta
              </h2>
              <ul className="space-y-3 text-gray-300 ml-8">
                <li>• Registro disponible vía correo o Facebook Login</li>
                <li>• Tú eres 100% responsable de la actividad en tu cuenta</li>
                <li>• Podemos suspender o eliminar cuentas que violen estos términos</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400 mb-4">4. Propiedad intelectual</h2>
              <p>Todos los textos, imágenes, diseños, logos y contenido son propiedad exclusiva de Gaming Store. Queda prohibida su reproducción sin permiso expreso.</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400 mb-5">5. Limitación de responsabilidad</h2>
              <p className="text-yellow-400 font-bold text-lg">Gaming Store NO se hace responsable por:</p>
              <ul className="mt-4 space-y-2 text-gray-300 ml-8">
                <li>• Fallos técnicos o interrupciones del servicio</li>
                <li>• Pérdida de datos del usuario</li>
                <li>• Problemas con servicios externos (Facebook, pagos, etc.)</li>
                <li>• Daños indirectos derivados del uso del sitio</li>
              </ul>
              <p className="mt-4 text-yellow-300 font-semibold">Usas Gaming Store bajo tu propio riesgo.</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400 mb-4">6. Cambios en el servicio</h2>
              <p>Nos reservamos el derecho de modificar, suspender o actualizar cualquier parte del servicio (funciones, precios, diseño) con o sin previo aviso.</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400 mb-4">7. Terminación de cuenta</h2>
              <p className="text-red-400 font-bold">Podemos eliminar tu acceso inmediatamente si detectamos violación grave de estos términos.</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400 mb-4">8. Ley aplicable</h2>
              <p>Estos términos se rigen por las leyes de <strong className="text-purple-300">Colombia</strong>.</p>
              <p className="text-sm text-gray-400 mt-2">(Cambia el país si tu proyecto está orientado a otra jurisdicción)</p>
            </div>

            {/* Contacto destacado */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-10 border border-purple-500/60 mt-16">
              <h2 className="text-4xl font-bold text-purple-300 mb-6 flex items-center gap-4">
                <Mail className="w-10 h-10" /> 9. Contacto
              </h2>
              <p className="text-xl mb-4">¿Dudas sobre los términos?</p>
              <a 
                href="mailto:gamingstore.support@gmail.com"
                className="inline-flex items-center gap-3 text-3xl font-bold text-pink-400 hover:text-pink-300 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-8 h-8" />
                gamingstore.support@gmail.com
              </a>
            </div>

          </article>
        </div>

        <footer className="text-center py-16 text-gray-500 mt-20">
          <p className="text-lg">© 2025 Gaming Store — Todos los derechos reservados.</p>
        </footer>
      </section>
    </div>
  );
}