import { Appointment } from "./types";

const STORAGE_KEY = "virtucare_appointments";

export function getStoredAppointments(): Appointment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveAppointments(appointments: Appointment[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
}

export function isSlotBooked(
  appointments: Appointment[],
  doctorId: string,
  date: string,
  slotId: string
): boolean {
  return appointments.some(
    (apt) =>
      apt.doctorId === doctorId &&
      apt.date === date &&
      apt.slotId === slotId
  );
}
