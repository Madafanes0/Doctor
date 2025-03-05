from Doctor.back.models.DAOs.database import DatabaseConnection

class UsuarioController:
    def __init__(self, db_connection):
        self.db_connection = db_connection

    def registrar_usuario(self, nombre, rol):
        """Registra un usuario en la base de datos"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO usuarios (nombre, rol) VALUES (?, ?)", (nombre, rol))
        conn.commit()
        conn.close()
        print(f"Usuario {nombre} registrado como {rol}.")

    def obtener_usuarios(self):
        """Obtiene todos los usuarios registrados"""
        conn = self.db_connection.connect()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM usuarios")
        usuarios = cursor.fetchall()
        conn.close()
        return usuarios
