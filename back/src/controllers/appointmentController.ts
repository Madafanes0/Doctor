import { db } from '../config/firestore.js';
import Appointment from '../models/Appointment.js';
import { Request, Response } from 'express';
import { Query, CollectionReference } from 'firebase-admin/firestore';


export const getAppointments = async (req: Request, res: Response): Promise<void> => {
    try {
      const { medicoId, pacienteId } = req.query;
  
      console.log(`🔍 Buscando citas para medicoId: ${medicoId}, pacienteId: ${pacienteId}`);
  
      if (!medicoId && !pacienteId) {
        res.status(400).json({ error: 'Se requiere medicoId o pacienteId para buscar citas' });
        return;
      }
  
      let query = db.collection('citas') as FirebaseFirestore.Query;
  
      if (medicoId) {
        query = query.where('medicoId', '==', medicoId);
      } else if (pacienteId) {
        query = query.where('pacienteId', '==', pacienteId);
      }
  
      const snapshot = await query.get();
  
      if (snapshot.empty) {
        console.log(`⚠️ No se encontraron citas`);
      }
  
      const appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
      console.log(`✅ Citas encontradas:`, appointments);
  
      res.status(200).json(appointments);
    } catch (error) {
      console.error(`❌ Error en getAppointments:`, error);
      res.status(500).json({ error: 'Error obteniendo citas' });
    }
  };
  
  

export const addAppointment = async (req: Request, res: Response): Promise<void> => {
    try {
      const newAppointment = req.body;
  
      if (!newAppointment.medicoId) {
        res.status(400).json({ error: 'medicoId es requerido' });
        return;
      }
  
      const docRef = await db.collection('citas').add(newAppointment);
  
      console.log(`✅ Cita agregada con ID: ${docRef.id}`);
  
      res.status(201).json({ id: docRef.id, ...newAppointment });
    } catch (error) {
      console.error('❌ Error al agregar la cita:', error);
      res.status(500).json({ error: 'Error agregando cita' });
    }
  };
