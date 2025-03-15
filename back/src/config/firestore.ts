import admin from 'firebase-admin';
import dotenv from 'dotenv';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Cargar variables de entorno
dotenv.config();

// Importar clave de Firebase
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export { db };
