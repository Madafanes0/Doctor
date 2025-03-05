from Doctor.back.models.DAOs.database import DatabaseConnection

class MedicoController:
    def __init__(self, db_connection):
        self.db_connection = db_connection

    def registrar_medico(self, nombre, especialidad):
        """Registra un médico en la base de datos"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO medicos (nombre, especialidad) VALUES (?, ?)", (nombre, especialidad))
        conn.commit()
        conn.close()
        print(f"Médico {nombre} registrado.")

    def obtener_medicos(self):
        """Obtiene todos los médicos registrados"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM medicos")
        medicos = cursor.fetchall()
        conn.close()
        return medicos