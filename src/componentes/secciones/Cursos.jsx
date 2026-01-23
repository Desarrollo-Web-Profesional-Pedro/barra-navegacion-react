import { FaReact, FaCss3Alt, FaNodeJs, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa";

const Cursos = () => {
  const cursos = [
    {
      icon: <FaReact />,
      titulo: "React JS",
      descripcion: "Aprende a crear aplicaciones web modernas con React",
      nivel: "Intermedio",
      duracion: "40 horas",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "hover:border-cyan-500",
    },
    {
      icon: <FaCss3Alt />,
      titulo: "Tailwind CSS",
      descripcion: "Domina el framework de CSS mas popular del momento",
      nivel: "Basico",
      duracion: "20 horas",
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
      borderColor: "hover:border-sky-500",
    },
    {
      icon: <FaNodeJs />,
      titulo: "Node.js",
      descripcion: "Desarrollo backend con JavaScript del lado del servidor",
      nivel: "Intermedio",
      duracion: "35 horas",
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      borderColor: "hover:border-green-600",
    },
    {
      icon: <FaDatabase />,
      titulo: "Bases de Datos",
      descripcion: "SQL y NoSQL para gestionar datos de forma eficiente",
      nivel: "Basico",
      duracion: "25 horas",
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      borderColor: "hover:border-blue-600",
    },
    {
      icon: <FaGitAlt />,
      titulo: "Git & GitHub",
      descripcion: "Control de versiones y colaboracion en proyectos",
      nivel: "Basico",
      duracion: "15 horas",
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
      borderColor: "hover:border-orange-600",
    },
    {
      icon: <FaDocker />,
      titulo: "Docker",
      descripcion: "Contenedores y despliegue de aplicaciones",
      nivel: "Avanzado",
      duracion: "30 horas",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "hover:border-blue-500",
    },
  ];

  return (
    <section id="cursos" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-primary">Cursos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explora nuestra oferta de cursos diseñados para impulsar tu carrera en tecnología
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map((curso, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 ${curso.borderColor} group`}
            >
              <div className={`text-5xl ${curso.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {curso.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{curso.titulo}</h3>
              <p className="text-gray-600 mb-4">{curso.descripcion}</p>
              <div className="flex justify-between text-sm">
                <span className={`${curso.bgColor} ${curso.color} px-3 py-1 rounded-full`}>
                  {curso.nivel}
                </span>
                <span className="text-gray-500">{curso.duracion}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;
