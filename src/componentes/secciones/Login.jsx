import { FaLock, FaEnvelope } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section id="login" className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Panel izquierdo - Decorativo */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 text-white hidden md:flex flex-col justify-center items-center">
            <ImBooks className="text-8xl mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-center">BARG Cursos</h2>
            <p className="text-center text-white/80">
              Accede a tu cuenta para continuar aprendiendo y mejorar tus habilidades
            </p>
          </div>

          {/* Panel derecho - Formulario */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Bienvenido</h2>
              <p className="text-gray-600 mt-2">Inicia sesion en tu cuenta</p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Correo electronico
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Contrasena
                </label>
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="********"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary" />
                  <span className="text-gray-600">Recordarme</span>
                </label>
                <a href="#" className="text-indigo-600 hover:text-purple-600 transition-colors">
                  ¿Olvidaste tu contrasena?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
              >
                Iniciar Sesion
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                ¿No tienes cuenta?{" "}
                <a href="#" className="text-indigo-600 hover:text-purple-600 font-semibold transition-colors">
                  Registrate
                </a>
              </p>
            </div>

            <div className="mt-6">
              <Link
                to="/"
                className="block text-center text-gray-500 hover:text-indigo-600 transition-colors"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
