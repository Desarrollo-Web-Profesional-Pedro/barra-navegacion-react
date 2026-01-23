import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contacto = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      titulo: "Email",
      info: "piter500monzon@gmail.com",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: <FaPhone />,
      titulo: "Telefono",
      info: "+52 415 177 5265",
      color: "text-green-600",
      bgColor: "bg-green-600/10",
    },
    {
      icon: <FaMapMarkerAlt />,
      titulo: "Ubicacion",
      info: "Guanajuato, Mexico",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">Contacto</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aqui para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Envianos un mensaje
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Asunto"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                rows="5"
                placeholder="Tu mensaje..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Informacion de contacto
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                >
                  <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center`}>
                    <span className={`text-xl ${item.color}`}>{item.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{item.titulo}</p>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-indigo-500/10 rounded-xl">
              <h4 className="font-bold text-indigo-700 mb-2">Horario de atencion</h4>
              <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sabados: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
