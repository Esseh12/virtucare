import Link from 'next/link';
import { DOCTORS } from '@/lib/data';
import DoctorCard from '@/components/doctors/DoctorCard';
import PageHero from '@/components/ui/PageHero';
import PocketDoctorSection from '@/components/sections/PocketDoctorSection';
import AccessCareSection from '@/components/sections/AccessCareSection';
import Footer from '@/components/layout/Footer';
import FAQSection from '@/components/sections/FAQSection';

export const metadata = {
	title: 'Find Doctors – VirtuCare',
};

export default function DoctorsPage() {
	return (
		<div className='bg-slate-50'>
			<PageHero
				title='Find the Best Doctor for You'
				description='Browse available specialists and book an appointment in minutes, from the comfort of your home.'
				backgroundImage='/hero-image.png'
				actions={
					<Link
						href='#doctors'
						className='inline-flex items-center rounded-md bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700/75'>
						Book a Session
					</Link>
				}
			/>

			<div
				id='doctors'
				className='my-10 md:my-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 px-6 sm:px-12 scroll-mt-10 md:scroll-mt-16'>
				{DOCTORS.map((doctor) => (
					<DoctorCard
						key={doctor.id}
						doctor={doctor}
					/>
				))}
			</div>
			<PocketDoctorSection />
			<AccessCareSection />
			<FAQSection />
			<Footer />
		</div>
	);
}
