export type TimeSlot = {
  id: string;
  time: string;
  label: string;
};

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  bio: string;
  availableSlots: TimeSlot[];
  rating: number;
  reviewCount: number;
  avatar: string;
};

export type Appointment = {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  date: string;
  slotId: string;
  slotTime: string;
  reason: string;
  bookedAt: string;
};
