/**
 * Componente Banner - Banner principal del sitio web
 * Incluye animaciones y diseño responsive
 */
import { motion } from "motion/react";
import { ImBooks } from "react-icons/im";

const Banner = () => {
  // Animación de fade-in para el banner
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  // Animación de escala para el ícono
  const scaleAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 },
  };

  // Animación de deslizamiento para el botón
  const slideUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.5 },
  };

  return (
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Columna izquierda - Contenido de texto */}
        <motion.div {...fadeIn} className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bienvenido a{" "}
            <span className="text-primary">El Sitio de BARG</span>
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Descubre los mejores cursos en línea para impulsar tu carrera
            profesional. Aprende a tu propio ritmo con contenido de alta
            calidad.
          </p>
          <motion.div {...slideUp}>
            <button className="bg-primary hover:bg-secondary text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explorar Cursos
            </button>
          </motion.div>
        </motion.div>

        {/* Columna derecha - Elemento visual animado */}
        <motion.div
          {...scaleAnimation}
          className="flex justify-center items-center"
        >
          <div className="relative">
            {/* Círculo de fondo animado */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-20"
            />
            {/* Ícono principal */}
            <div className="relative bg-gradient-to-br from-primary to-secondary p-12 md:p-20 rounded-full shadow-2xl">
              <ImBooks className="text-white text-8xl md:text-9xl" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sección de características con animaciones */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
      >
        {[
          {
            title: "Cursos de Calidad",
            description: "Contenido actualizado y relevante",
          },
          {
            title: "Aprende a tu Ritmo",
            description: "Acceso 24/7 desde cualquier dispositivo",
          },
          {
            title: "Certificados",
            description: "Obtén certificados al completar cursos",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary"
          >
            <h3 className="text-xl font-bold mb-2 text-primary">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
