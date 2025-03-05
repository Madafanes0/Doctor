
const AppointmentList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Fecha</th>
            <th className="py-3 px-6 text-left">Hora</th>
            <th className="py-3 px-6 text-left">Médico/Paciente</th>
            <th className="py-3 px-6 text-left">Motivo</th>
            <th className="py-3 px-6 text-left">Estado</th>
            <th className="py-3 px-6 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm">
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-6 text-left whitespace-nowrap">DD/MM/YYYY</td>
            <td className="py-3 px-6 text-left">HH:MM</td>
            <td className="py-3 px-6 text-left">Nombre</td>
            <td className="py-3 px-6 text-left">Motivo de la cita</td>
            <td className="py-3 px-6 text-left">
              <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                Estado
              </span>
            </td>
            <td className="py-3 px-6 text-center">
              <div className="flex justify-center space-x-2">
                <button className="bg-green-500 hover:bg-green-700 text-white text-xs py-1 px-2 rounded">
                  Aceptar
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white text-xs py-1 px-2 rounded">
                  Rechazar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
