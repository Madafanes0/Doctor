import { db } from '../config/firestore.js';
import Doctor from '../models/Doctor.js';
import { Request, Response } from 'express';

// Obtener todos los doctores
export const getDoctors = async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection('medico').get();
    const doctors = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo médicos' });
  }
};
