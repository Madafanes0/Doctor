class Cita:
    def __init__(self, fecha, hora, motivo, estado):
        self.fecha = fecha
        self.hora = hora
        self.motivo = motivo
        self.estado = estado
    
    def confirmar(self):
        self.estado = "Confirmada"
    
    def cancelar(self):
        self.estado = "Cancelada"