"use client";

import { useState, useEffect, useCallback } from "react";
import { Appointment } from "@/lib/types";
import {
  getStoredAppointments,
  saveAppointments,
  isSlotBooked,
} from "@/lib/storage";

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setAppointments(getStoredAppointments());
    setIsLoaded(true);
  }, []);

  const addAppointment = useCallback(
    (newAppointment: Appointment): boolean => {
      const alreadyBooked = isSlotBooked(
        appointments,
        newAppointment.doctorId,
        newAppointment.date,
        newAppointment.slotId
      );

      if (alreadyBooked) return false;

      const updated = [...appointments, newAppointment];
      setAppointments(updated);
      saveAppointments(updated);
      return true;
    },
    [appointments]
  );

  const cancelAppointment = useCallback(
    (appointmentId: string) => {
      const updated = appointments.filter((apt) => apt.id !== appointmentId);
      setAppointments(updated);
      saveAppointments(updated);
    },
    [appointments]
  );

  return {
    appointments,
    isLoaded,
    addAppointment,
    cancelAppointment,
  };
}
