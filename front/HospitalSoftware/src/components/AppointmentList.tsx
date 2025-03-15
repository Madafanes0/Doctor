
// AppointmentList.tsx
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';

const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const appointmentCollection = collection(db, 'citas');
      const appointmentSnapshot = await getDocs(appointmentCollection);
      setAppointments(appointmentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
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
            <th className="py-3 px-6">Médico/Paciente</th>
            <th className="py-3 px-6">Motivo</th>
            <th className="py-3 px-6">Estado</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-6">{appointment.fecha}</td>
              <td className="py-3 px-6">{appointment.hora}</td>
              <td className="py-3 px-6">{appointment.medicoId}</td>
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