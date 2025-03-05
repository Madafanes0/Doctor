from Doctor.back.models.DAOs.database import DatabaseConnection

class AdministradorController:
    def __init__(self, db_connection):
        """Inicializa la conexión con la base de datos"""
        self.db_connection = db_connection

    def crear_administrador(self, nombre, email):
        """Agrega un administrador a la base de datos"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO administradores (nombre, email) VALUES (?, ?)", (nombre, email))
        conn.commit()
        conn.close()
        print(f"Administrador {nombre} agregado.")

    def obtener_administradores(self):
        """Lista todos los administradores"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM administradores")
        administradores = cursor.fetchall()
        conn.close()
        return administradores

    def eliminar_administrador(self, admin_id):
        """Elimina un administrador por su ID"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM administradores WHERE id = ?", (admin_id,))
        conn.commit()
        conn.close()
        print(f"Administrador con ID {admin_id} eliminado.")
