import { FaCode, FaPaintBrush, FaChalkboardTeacher, FaMobileAlt } from "react-icons/fa";

const Servicios = () => {
  const servicios = [
    {
      icon: <FaCode />,
      titulo: "Desarrollo Web",
      descripcion:
        "Creamos sitios web modernos y funcionales utilizando las ultimas tecnologias del mercado.",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      hoverBg: "group-hover:bg-blue-600",
    },
    {
      icon: <FaPaintBrush />,
      titulo: "Diseno UI/UX",
      descripcion:
        "Disenamos interfaces atractivas y experiencias de usuario intuitivas para tus proyectos.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      hoverBg: "group-hover:bg-pink-500",
    },
    {
      icon: <FaChalkboardTeacher />,
      titulo: "Capacitacion",
      descripcion:
        "Ofrecemos cursos y talleres personalizados para empresas y equipos de trabajo.",
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      hoverBg: "group-hover:bg-green-600",
    },
    {
      icon: <FaMobileAlt />,
      titulo: "Apps Moviles",
      descripcion:
        "Desarrollamos aplicaciones moviles nativas y multiplataforma para iOS y Android.",
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      hoverBg: "group-hover:bg-purple-600",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones tecnologicas a la medida de tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${servicio.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 ${servicio.hoverBg} transition-colors duration-300`}>
                <span className={`text-3xl ${servicio.color} group-hover:text-white transition-colors duration-300`}>
                  {servicio.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {servicio.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
