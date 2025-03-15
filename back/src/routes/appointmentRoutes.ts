import express from 'express';
import { getAppointments, addAppointment } from '../controllers/appointmentController.ts';

const router = express.Router();

router.get('/', getAppointments);
router.post('/', addAppointment);

export default router;
