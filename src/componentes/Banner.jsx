/**
 * Componente Banner - Banner simple con animaciones
 * Muestra el menú de navegación de forma visual
 */
import React from "react";
import { motion } from "motion/react";
    
const Banner = () => {
  return (
    <div className="container py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-primary text-white rounded-md py-20 px-10 text-center space-y-8"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl font-bold"
        >
          INICIO
        </motion.h1>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl font-semibold"
        >
          ACERCA DE
        </motion.h2>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-5xl font-semibold"
        >
          CURSOS
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Banner;
