/**
 * Componente principal de la aplicación
 * Incluye la barra de navegación y el banner principal
 */
import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-gray-50 min-h-screen'>
      <Navbar />
      <Banner />
    </div>
  )
}

export default App