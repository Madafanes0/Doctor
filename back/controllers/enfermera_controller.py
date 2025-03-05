from Doctor.back.models.DAOs.database import DatabaseConnection

class EnfermeraController:
    def __init__(self, db_connection):
        self.db_connection = db_connection

    def registrar_enfermera(self, nombre, email):
        """Registra una enfermera en la base de datos"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO enfermeras (nombre, email) VALUES (?, ?)", (nombre, email))
        conn.commit()
        conn.close()
        print(f"Enfermera {nombre} registrada.")

    def obtener_enfermeras(self):
        """Obtiene todas las enfermeras registradas"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM enfermeras")
        enfermeras = cursor.fetchall()
        conn.close()
        return enfermeras
