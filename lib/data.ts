import { Doctor } from './types';

export const DOCTORS: Doctor[] = [
	{
		id: 'd1',
		name: 'Dr. Amara Nwosu',
		specialty: 'Cardiology',
		qualification: 'MBBS, FWACP',
		bio: 'Specialist in heart health with over 12 years experience in interventional cardiology and preventive cardiac care.',
		rating: 4.9,
		reviewCount: 214,
		avatar: 'AN',
		availableSlots: [
			{ id: 's1', time: '09:00', label: '9:00 AM' },
			{ id: 's2', time: '10:30', label: '10:30 AM' },
			{ id: 's3', time: '14:00', label: '2:00 PM' },
			{ id: 's4', time: '15:30', label: '3:30 PM' },
		],
	},
	{
		id: 'd2',
		name: 'Dr. Chidi Okafor',
		specialty: 'General Practice',
		qualification: 'MBBS, DFFP',
		bio: 'Primary care physician focused on preventive medicine, chronic disease management, and family health.',
		rating: 4.7,
		reviewCount: 389,
		avatar: 'CO',
		availableSlots: [
			{ id: 's1', time: '08:00', label: '8:00 AM' },
			{ id: 's2', time: '11:00', label: '11:00 AM' },
			{ id: 's3', time: '13:30', label: '1:30 PM' },
			{ id: 's4', time: '16:00', label: '4:00 PM' },
		],
	},
	{
		id: 'd3',
		name: 'Dr. Sade Bello',
		specialty: 'Dermatology',
		qualification: 'MBBS, FMCP',
		bio: 'Expert in medical and cosmetic dermatology, treating conditions from acne to complex skin disorders.',
		rating: 4.8,
		reviewCount: 162,
		avatar: 'SB',
		availableSlots: [
			{ id: 's1', time: '09:30', label: '9:30 AM' },
			{ id: 's2', time: '11:30', label: '11:30 AM' },
			{ id: 's3', time: '14:30', label: '2:30 PM' },
		],
	},
	{
		id: 'd4',
		name: 'Dr. Emeka Eze',
		specialty: 'Neurology',
		qualification: 'MBBS, FMCP (Neurology)',
		bio: 'Neurologist specialising in stroke, epilepsy, headache disorders, and neurodegenerative diseases.',
		rating: 4.9,
		reviewCount: 98,
		avatar: 'EE',
		availableSlots: [
			{ id: 's1', time: '10:00', label: '10:00 AM' },
			{ id: 's2', time: '13:00', label: '1:00 PM' },
			{ id: 's3', time: '15:00', label: '3:00 PM' },
		],
	},
	{
		id: 'd5',
		name: 'Dr. Zainab Musa',
		specialty: 'Paediatrics',
		qualification: 'MBBS, FMCPaed',
		bio: 'Paediatric specialist dedicated to child health, development, and well-baby care from newborns through adolescence.',
		rating: 4.8,
		reviewCount: 275,
		avatar: 'ZM',
		availableSlots: [
			{ id: 's1', time: '08:30', label: '8:30 AM' },
			{ id: 's2', time: '10:00', label: '10:00 AM' },
			{ id: 's3', time: '12:00', label: '12:00 PM' },
			{ id: 's4', time: '15:00', label: '3:00 PM' },
		],
	},
	{
		id: 'd6',
		name: 'Dr. Tunde Adeyemi',
		specialty: 'Orthopaedics',
		qualification: 'MBBS, FMCS (Ortho)',
		bio: 'Orthopaedic surgeon specialising in joint replacement, sports injuries, and fracture management.',
		rating: 4.7,
		reviewCount: 143,
		avatar: 'TA',
		availableSlots: [
			{ id: 's1', time: '09:00', label: '9:00 AM' },
			{ id: 's2', time: '11:00', label: '11:00 AM' },
			{ id: 's3', time: '14:00', label: '2:00 PM' },
		],
	},
];

export function getDoctorById(id: string): Doctor | undefined {
	return DOCTORS.find((doc) => doc.id === id);
}
