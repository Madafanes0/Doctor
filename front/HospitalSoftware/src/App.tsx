import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DoctorDashboard from './components/DoctorDashboard';
import AppointmentList from './components/AppointmentList';

function App() {
  return (
    <Router>
      <div className='flex justify-center w-full '>
        {/* Navbar */}
        <nav className="bg-blue-600 text-white fixed top-0 left-0 w-full shadow-lg z-50">
          <div className="container w-full flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <h1 className="text-xl font-bold">Clínica</h1>

            {/* Menú de navegación */}
            <div className="flex space-x-8">
              <Link to="/" className="hover:bg-blue-700 px-4 py-2 rounded">Inicio</Link>
              <Link to="/dashboard" className="hover:bg-blue-700 px-4 py-2 rounded">Panel Médico</Link>
              <Link to="/appointments" className="hover:bg-blue-700 px-4 py-2 rounded">Citas</Link>
            </div>
          </div>
        </nav>

        {/* Espaciador para que el contenido no quede cubierto por la navbar */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<h2 className="text-center mt-10 text-2xl">Bienvenido a la Clínica</h2>} />
            <Route path="/dashboard" element={<DoctorDashboard />} />
            <Route path="/appointments" element={<AppointmentList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;