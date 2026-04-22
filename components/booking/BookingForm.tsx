"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Doctor, Appointment } from "@/lib/types";
import { useAppointments } from "@/hooks/useAppointments";
import Button from "@/components/ui/Button";

type BookingFormProps = {
  doctor: Doctor;
};

function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export default function BookingForm({ doctor }: BookingFormProps) {
  const router = useRouter();
  const { appointments, addAppointment } = useAppointments();

  const [date, setDate] = useState("");
  const [selectedSlotId, setSelectedSlotId] = useState("");
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function isSlotTaken(slotId: string): boolean {
    if (!date) return false;
    return appointments.some(
      (apt) =>
        apt.doctorId === doctor.id &&
        apt.date === date &&
        apt.slotId === slotId
    );
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!date) newErrors.date = "Please select a date.";
    if (!selectedSlotId) newErrors.slot = "Please select a time slot.";
    if (!reason.trim()) newErrors.reason = "Please enter a reason for your visit.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit() {
    setError("");
    if (!validate()) return;

    const selectedSlot = doctor.availableSlots.find((s) => s.id === selectedSlotId);
    if (!selectedSlot) return;

    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const newAppointment: Appointment = {
      id: generateId(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorSpecialty: doctor.specialty,
      date,
      slotId: selectedSlot.id,
      slotTime: selectedSlot.label,
      reason: reason.trim(),
      bookedAt: new Date().toISOString(),
    };

    const success = addAppointment(newAppointment);

    if (!success) {
      setError("This time slot was just booked. Please choose another.");
      setSubmitting(false);
      return;
    }

    router.push("/appointments");
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Select date
        </label>
        <input
          type="date"
          min={getTodayString()}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setSelectedSlotId("");
            setErrors((prev) => ({ ...prev, date: "" }));
          }}
          className={`
            w-full rounded-xl border px-4 py-2.5 text-sm text-slate-800
            focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
            transition-all duration-150
            ${errors.date ? "border-red-300 bg-red-50" : "border-slate-200 bg-white"}
          `}
        />
        {errors.date && (
          <p className="mt-1 text-xs text-red-600">{errors.date}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Select time slot
        </label>
        {!date && (
          <p className="text-sm text-slate-400 italic">Pick a date first to see slots.</p>
        )}
        {date && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {doctor.availableSlots.map((slot) => {
              const taken = isSlotTaken(slot.id);
              const selected = selectedSlotId === slot.id;

              return (
                <button
                  key={slot.id}
                  type="button"
                  disabled={taken}
                  onClick={() => {
                    setSelectedSlotId(slot.id);
                    setErrors((prev) => ({ ...prev, slot: "" }));
                  }}
                  className={`
                    py-2.5 rounded-xl border text-sm font-medium transition-all duration-150 cursor-pointer
                    ${
                      taken
                        ? "border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed line-through"
                        : selected
                        ? "border-teal-600 bg-teal-700 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:bg-teal-50"
                    }
                  `}
                >
                  {slot.label}
                  {taken && (
                    <span className="block text-xs font-normal">Booked</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
        {errors.slot && (
          <p className="mt-1.5 text-xs text-red-600">{errors.slot}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Reason for visit
        </label>
        <textarea
          rows={3}
          value={reason}
          onChange={(e) => {
            setReason(e.target.value);
            setErrors((prev) => ({ ...prev, reason: "" }));
          }}
          placeholder="Briefly describe your symptoms or concern..."
          className={`
            w-full rounded-xl border px-4 py-2.5 text-sm text-slate-800 resize-none
            focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
            placeholder:text-slate-400 transition-all duration-150
            ${errors.reason ? "border-red-300 bg-red-50" : "border-slate-200 bg-white"}
          `}
        />
        {errors.reason && (
          <p className="mt-1 text-xs text-red-600">{errors.reason}</p>
        )}
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <Button
        onClick={handleSubmit}
        loading={submitting}
        size="lg"
        className="w-full"
      >
        Confirm Appointment
      </Button>
    </div>
  );
}
