// AppointmentBooking.tsx
import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const AppointmentBooking: React.FC = () => {
  const [doctors, setDoctors] = useState<{ id: string; name: string }[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      const doctorCollection = collection(db, 'medico');
      const doctorSnapshot = await getDocs(doctorCollection);
      setDoctors(doctorSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any)));
    };
    fetchDoctors();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, 'citas'), {
      medicoId: selectedDoctor,
      fecha: date,
      hora: time,
      estado: 'Pendiente',
      pacienteId: 'some-patient-id', // Replace with actual user session
      motivo: reason
    });
    alert('Cita agendada con éxito');
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
    </div>
  );
};

export default AppointmentBooking;