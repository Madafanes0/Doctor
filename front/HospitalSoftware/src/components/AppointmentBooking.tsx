import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';

const AppointmentBooking: React.FC = () => {
  const [doctors, setDoctors] = useState<{ id: string; name: string }[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const navigate = useNavigate();
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:5032/api/doctors');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const user = auth.currentUser;
    if (!user) {
      alert("Debes iniciar sesión antes de agendar una cita.");
      return;
    }

    const newAppointment = {
      medicoId: selectedDoctor,
      fecha: date,
      hora: time,
      estado: 'Pendiente',
      pacienteId: user.uid,
      motivo: reason
    };

    try {
      const response = await fetch('http://localhost:5032/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAppointment)
      });

      if (response.ok) {
        alert('Cita agendada con éxito');
      } else {
        console.error('Error creating appointment');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLoginModal(false);
      navigate('/patient-appointments');
    } catch (err) {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Agendar Cita</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Médico</label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            required
            className="border p-2 w-full"
          >
            <option value="">Seleccione un médico</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="border p-2 w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Hora</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required className="border p-2 w-full" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Motivo de la Consulta</label>
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} required className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Agendar Cita</button>
      </form>

      <button onClick={() => setShowLoginModal(true)} className="mt-4 bg-gray-500 text-white p-2 rounded w-full">
        Ver Mis Citas
      </button>

      {showLoginModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-1/3">
            <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full mb-2"
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full mb-2"
                required
              />
              <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
