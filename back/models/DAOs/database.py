import sqlite3

class DatabaseConnection:
    def __init__(self, db_name="hospital.db"):
        self.db_name = db_name

    def connect(self):
        """Establece la conexión con la base de datos SQLite"""
        try:
            return sqlite3.connect(self.db_name)
        except Exception as e:
            print(f"Error de conexión a la base de datos: {e}")
            return None

    def setup(self):
        """Crea las tablas necesarias si no existen"""
        conn = self.connect()
        cursor = conn.cursor()
        cursor.execute('''CREATE TABLE IF NOT EXISTS administradores (
                            id INTEGER PRIMARY KEY AUTOINCREMENT, 
                            nombre TEXT, 
                            email TEXT)''')

        cursor.execute('''CREATE TABLE IF NOT EXISTS enfermeras (
                            id INTEGER PRIMARY KEY AUTOINCREMENT, 
                            nombre TEXT, 
                            email TEXT)''')

        cursor.execute('''CREATE TABLE IF NOT EXISTS medicos (
                            id INTEGER PRIMARY KEY AUTOINCREMENT, 
                            nombre TEXT, 
                            especialidad TEXT)''')

        cursor.execute('''CREATE TABLE IF NOT EXISTS pacientes (
                            id INTEGER PRIMARY KEY AUTOINCREMENT, 
                            nombre TEXT, 
                            edad INTEGER)''')

        cursor.execute('''CREATE TABLE IF NOT EXISTS usuarios (
                            id INTEGER PRIMARY KEY AUTOINCREMENT, 
                            nombre TEXT, 
                            rol TEXT)''')

        conn.commit()
        conn.close()
