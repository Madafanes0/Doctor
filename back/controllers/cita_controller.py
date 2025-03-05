from Doctor.back.models.DAOs.database import DatabaseConnection

class CitaController:
    def __init__(self, db_connection):
        self.db_connection = db_connection
    
    def agendar_cita(self, paciente_id, medico_id, fecha, hora, motivo):
        conn = self.db_connection.connect()
        if conn is None:
            print("Database connection failed.")
            return
        cursor = conn.cursor()
        cursor.execute("INSERT INTO citas (paciente_id, medico_id, fecha, hora, motivo, estado) VALUES (?, ?, ?, ?, ?, ?)",
                       (paciente_id, medico_id, fecha, hora, motivo, "Pendiente"))
        conn.commit()
        conn.close()
    
    def obtener_citas(self, user_id):
        conn = self.db_connection.connect()
        if conn is None:
            print("Database connection failed.")
            return []
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM citas WHERE paciente_id = ? OR medico_id = ?", (user_id, user_id))
        citas = cursor.fetchall()
        conn.close()
        return citas