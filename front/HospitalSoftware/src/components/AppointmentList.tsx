import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase-config';

const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const response = await fetch(`http://localhost:5032/api/appointments?medicoId=${user.uid}`);
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
            <th className="py-3 px-6">Fecha</th>
            <th className="py-3 px-6">Hora</th>
            <th className="py-3 px-6">Motivo</th>
            <th className="py-3 px-6">Estado</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6">{appointment.fecha}</td>
              <td className="py-3 px-6">{appointment.hora}</td>
              <td className="py-3 px-6">{appointment.motivo}</td>
              <td className="py-3 px-6">{appointment.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
