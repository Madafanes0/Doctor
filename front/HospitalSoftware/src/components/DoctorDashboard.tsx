// DoctorDashboard.tsx
import React from 'react';
import AppointmentList from './AppointmentList';

const DoctorDashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Panel de Médico</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Mis Citas</h2>
        <AppointmentList />
      </div>
    </div>
  );
};

export default DoctorDashboard;