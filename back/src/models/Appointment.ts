interface Appointment {
    id?: string;
    medicoId: string;
    fecha: string;
    hora: string;
    motivo: string;
    estado: string;
    pacienteId: string;
  }
  
  export default Appointment;
  