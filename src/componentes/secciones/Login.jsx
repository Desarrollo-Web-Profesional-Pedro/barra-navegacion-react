const Login = () => {
  return (
    <section id="#login" className="h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Correo electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition-colors duration-300"
          >
            Ingresar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login
