import { FaGraduationCap, FaUsers, FaLaptopCode } from "react-icons/fa";

const About = () => {
  const stats = [
    { icon: <FaGraduationCap />, number: "500+", label: "Estudiantes", color: "text-blue-600" },
    { icon: <FaUsers />, number: "20+", label: "Instructores", color: "text-green-600" },
    { icon: <FaLaptopCode />, number: "50+", label: "Cursos", color: "text-purple-600" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Sobre <span className="text-primary">Nosotros</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Impulsamos tu carrera profesional
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              En BARG Cursos nos dedicamos a ofrecer educacion de calidad en el
              area de tecnologia y desarrollo web. Nuestro objetivo es preparar
              a los estudiantes para los retos del mundo laboral actual.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Contamos con instructores experimentados y un plan de estudios
              actualizado que te permitira adquirir las habilidades mas
              demandadas en la industria.
            </p>
            <div className="flex gap-4">
              <div className="bg-cyan-500/10 p-4 rounded-lg">
                <p className="text-cyan-600 font-bold text-2xl">5+</p>
                <p className="text-gray-600 text-sm">Anos de experiencia</p>
              </div>
              <div className="bg-pink-500/10 p-4 rounded-lg">
                <p className="text-pink-600 font-bold text-2xl">98%</p>
                <p className="text-gray-600 text-sm">Satisfaccion</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center gap-4"
              >
                <div className={`text-4xl ${stat.color}`}>{stat.icon}</div>
                <div>
                  <p className="text-3xl font-bold text-gray-800">{stat.number}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
