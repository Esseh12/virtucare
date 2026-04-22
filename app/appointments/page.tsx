'use client';

import Link from 'next/link';
import { useAppointments } from '@/hooks/useAppointments';
import AppointmentCard from '@/components/appointments/AppointmentCard';
import EmptyState from '@/components/ui/EmptyState';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/Footer';

export default function AppointmentsPage() {
	const { appointments, isLoaded, cancelAppointment } = useAppointments();

	if (!isLoaded) {
		return (
			<div className='space-y-4 px-6 sm:px-12 my-10'>
				<div className='mb-8'>
					<div className='h-7 w-48 bg-slate-200 rounded-lg animate-pulse' />
					<div className='h-4 w-72 bg-slate-100 rounded-lg animate-pulse mt-2' />
				</div>
				{[1, 2, 3].map((i) => (
					<div
						key={i}
						className='h-24 bg-slate-100 rounded-2xl animate-pulse'
					/>
				))}
			</div>
		);
	}

	return (
		<div>
			<div className='flex items-center justify-between mb-8 px-6 sm:px-12 my-10'>
				<div>
					<h1 className='text-2xl font-semibold text-slate-900'>
						My Appointments
					</h1>
					<p className='mt-1 text-sm text-slate-500'>
						{appointments.length > 0 ?
							`You have ${appointments.length} upcoming appointment${appointments.length > 1 ? 's' : ''}.`
						:	'You have no upcoming appointments.'}
					</p>
				</div>
				<Link href='/doctors'>
					<Button
						variant='secondary'
						size='sm'>
						Book new
					</Button>
				</Link>
			</div>

			{appointments.length === 0 ?
				<EmptyState
					title='No appointments yet'
					description='When you book an appointment, it will appear here. You can cancel or view details from this page.'
					action={
						<Link href='/doctors'>
							<Button>Browse doctors</Button>
						</Link>
					}
				/>
			:	<div className='space-y-3 px-6 sm:px-12 my-10'>
					{appointments
						.slice()
						.sort((a, b) => {
							if (a.date !== b.date) return a.date.localeCompare(b.date);
							return a.slotTime.localeCompare(b.slotTime);
						})
						.map((appointment) => (
							<AppointmentCard
								key={appointment.id}
								appointment={appointment}
								onCancel={cancelAppointment}
							/>
						))}
				</div>
			}

			<Footer />
		</div>
	);
}
