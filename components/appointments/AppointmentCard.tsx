"use client";

import { Appointment } from "@/lib/types";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

type AppointmentCardProps = {
  appointment: Appointment;
  onCancel: (id: string) => void;
};

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function AppointmentCard({
  appointment,
  onCancel,
}: AppointmentCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center flex-shrink-0">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5"
          />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-slate-900 text-sm">
            {appointment.doctorName}
          </h3>
          <Badge>{appointment.doctorSpecialty}</Badge>
        </div>

        <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25" />
            </svg>
            {formatDate(appointment.date)}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {appointment.slotTime}
          </span>
        </div>

        <p className="mt-1.5 text-xs text-slate-600 bg-slate-50 rounded-lg px-2.5 py-1.5 inline-block">
          {appointment.reason}
        </p>
      </div>

      <Button
        variant="danger"
        size="sm"
        onClick={() => onCancel(appointment.id)}
        className="flex-shrink-0"
      >
        Cancel
      </Button>
    </div>
  );
}
