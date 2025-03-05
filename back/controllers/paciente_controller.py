from Doctor.back.models.DAOs.database import DatabaseConnection

class PacienteController:
    def __init__(self, db_connection):
        self.db_connection = db_connection

    def registrar_paciente(self, nombre, edad):
        """Registra un paciente en la base de datos"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO pacientes (nombre, edad) VALUES (?, ?)", (nombre, edad))
        conn.commit()
        conn.close()
        print(f"Paciente {nombre} registrado.")

    def obtener_pacientes(self):
        """Obtiene todos los pacientes registrados"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM pacientes")
        pacientes = cursor.fetchall()
        conn.close()
        return pacientes
