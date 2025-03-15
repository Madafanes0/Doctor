# 🏥 Hospital Software

Este es un sistema de gestión de citas médicas desarrollado con **React, TypeScript, Express y Firebase**.

## 📌 Requisitos
Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (v16 o superior)
- **npm** o **yarn**
- **Firebase CLI** (opcional, solo si quieres modificar Firestore)

---

## 🚀 Instalación y configuración

### 🔹 1️⃣ Clonar el repositorio
```bash
 git clone https://github.com/Madafanes0/Doctor.git
 cd Doctor
```

### 🔹 2️⃣ Configurar el backend
```bash
 cd back
 npm install
```

**Configurar variables de entorno:**
Crea un archivo **.env** en la carpeta `back` con el siguiente contenido:
```env
PORT=5032
FIREBASE_CONFIG={"apiKey":"TU_API_KEY","authDomain":"TU_AUTH_DOMAIN","projectId":"TU_PROJECT_ID","storageBucket":"TU_STORAGE_BUCKET","messagingSenderId":"TU_MESSAGING_SENDER_ID","appId":"TU_APP_ID"}
```
**Iniciar el servidor backend:**
```bash
 npm run dev
```

📌 **El backend estará corriendo en** `http://localhost:5032`

---

### 🔹 3️⃣ Configurar el frontend
```bash
 cd ../front
 npm install
```

**Configurar Firebase en el frontend:**
1. En `front/src/firebase-config.ts`, agrega tus credenciales de Firebase:
```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

**Iniciar el frontend:**
```bash
 npm run dev
```
📌 **El frontend estará corriendo en** `http://localhost:5173`

---

## 🏥 Funcionalidades
✅ **Agendar citas:** Los pacientes pueden seleccionar un médico y agendar una cita.
✅ **Ver citas agendadas:** Los pacientes pueden ver sus citas tras iniciar sesión.
✅ **Panel del médico:** Los médicos pueden ver sus citas tras autenticarse.
✅ **Autenticación con Firebase Authentication:**
- Los médicos solo ven sus propias citas.
- Los pacientes solo ven las citas que agendaron.
✅ **Persistencia de datos con Firebase Firestore.**

---

## 📌 API Backend

📍 **Obtener citas de un médico:**
```http
GET /api/appointments?medicoId=MEDICO_UID
```
📍 **Obtener citas de un paciente:**
```http
GET /api/appointments?pacienteId=PACIENTE_UID
```
📍 **Crear una cita:**
```http
POST /api/appointments
Content-Type: application/json
{
  "medicoId": "MEDICO_UID",
  "pacienteId": "PACIENTE_UID",
  "fecha": "2025-03-20",
  "hora": "10:00 AM",
  "motivo": "Consulta general",
  "estado": "Pendiente"
}
```
---

## 🛠 Herramientas y tecnologías usadas
- **Frontend:** React + TypeScript + Tailwind CSS
- **Backend:** Express.js + TypeScript
- **Base de datos:** Firebase Firestore
- **Autenticación:** Firebase Authentication

---

## 📝 Autor
👤 **Madafanes**
📧 Contacto: dcisneros0206@gmail.com

🚀 ¡Disfruta del proyecto y contribuye si puedes! 🎉