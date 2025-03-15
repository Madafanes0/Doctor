import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase-config';

const PatientAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const response = await fetch(`http://localhost:5032/api/appointments?pacienteId=${user.uid}`);
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Mis Citas</h1>
      <ul>
        {appointments.length === 0 ? (
          <p>No tienes citas agendadas.</p>
        ) : (
          appointments.map(appt => (
            <li key={appt.id} className="border p-4 my-2">
              <p>Fecha: {appt.fecha}</p>
              <p>Hora: {appt.hora}</p>
              <p>Motivo: {appt.motivo}</p>
              <p>Estado: {appt.estado}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PatientAppointments;
