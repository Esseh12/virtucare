# VirtuCare – Appointment Booking App

A simplified virtual care platform where patients can browse doctors, book appointments, and manage their bookings.

**Live demo:** https://virtucare-red.vercel.app/doctors

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root route redirects to `/doctors`.

---

## Approach

I focused on getting the core flows right before adding any polish. The three main screens — doctor listing, booking, and appointments dashboard — map directly to user goals, so I kept the navigation minimal and obvious.

State management is intentionally simple: a single custom hook (`useAppointments`) owns all appointment data, reads from `localStorage` on mount, and writes back on every change. No external libraries needed.

---

## Key Decisions

**No state management library.** The data model is simple enough that a single `useAppointments` hook handles everything cleanly. Adding Redux or Zustand would be over-engineering for this scope.

**localStorage over a backend.** The spec allows this, and it means zero setup to run the app. The `storage.ts` helpers isolate all localStorage logic so it's easy to swap in an API later.

**Server components where possible.** The doctors listing and the booking page header are server components — they fetch data (from the mock) at build time. Only the booking form and appointments dashboard need `"use client"` because they manage interactive state.

**Double-booking prevention.** Before confirming a booking, `isSlotBooked()` checks the existing appointments array against the same doctorId + date + slotId combination. Booked slots are visually disabled in the UI.

**Appointments sorted by date then time.** The dashboard always shows the soonest appointment first, which is what a user would expect.

---

## Challenges

**`params` as a Promise in Next.js 15+.** The App Router now passes dynamic route params as a `Promise`, so the booking page uses `await params` to unwrap the `id` before looking up the doctor. This is a breaking change from earlier Next.js versions.

**Tailwind v4 CSS import order.** Tailwind v4 uses a CSS-first config via `@import "tailwindcss"`. Google Fonts `@import` must come before it, or the build emits a warning.

---

## Folder Structure

```
app/
  layout.tsx              # Root layout with Navbar
  page.tsx                # Redirects to /doctors
  doctors/
    page.tsx              # Doctor listing (server component)
    [id]/
      page.tsx            # Booking page (server component + client form)
  appointments/
    page.tsx              # Appointments dashboard (client component)

components/
  ui/                     # Shared primitives: Button, Badge, EmptyState
  layout/                 # Navbar
  doctors/                # DoctorCard
  booking/                # BookingForm
  appointments/           # AppointmentCard

hooks/
  useAppointments.ts      # All appointment state + localStorage sync

lib/
  types.ts                # Shared TypeScript types
  data.ts                 # Mock doctor data
  storage.ts              # localStorage read/write helpers
```

---

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
