from back.models.DAOs.database import DatabaseConnection
from back.controllers.cita_controller import CitaController
from back.controllers.administrador_controller import AdministradorController
from back.controllers.medico_controller import MedicoController
from back.controllers.paciente_controller import PacienteController

db = DatabaseConnection()
db.setup()  # Asegura que las tablas existen antes de ejecutar

admin_controller = AdministradorController(db)
medico_controller = MedicoController(db)
paciente_controller = PacienteController(db)

# Crear datos de prueba
admin_controller.crear_administrador("Admin1", "admin1@example.com")
medico_controller.registrar_medico("Dr. Pérez", "Cardiología")
paciente_controller.registrar_paciente("Juan Pérez", 30)

# Consultar registros
print(admin_controller.obtener_administradores())
print(medico_controller.obtener_medicos())
print(paciente_controller.obtener_pacientes())
