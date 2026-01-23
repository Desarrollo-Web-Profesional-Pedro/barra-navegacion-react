const Servicios = () => {
  return (
    <section id="#servicios" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 shadow-lg rounded-xl bg-orange-50">Desarrollo Web</div>
          <div className="p-6 shadow-lg rounded-xl bg-orange-50">Diseño UI/UX</div>
          <div className="p-6 shadow-lg rounded-xl bg-orange-50">Consultoría</div>
        </div>
      </div>
    </section>
  )
}

export default Servicios
