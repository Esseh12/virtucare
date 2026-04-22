import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDoctorById } from '@/lib/data';
import BookingForm from '@/components/booking/BookingForm';
import Badge from '@/components/ui/Badge';
import FAQSection from '@/components/sections/FAQSection';
import Footer from '@/components/layout/Footer';

type Props = {
	params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
	const { id } = await params;
	const doctor = getDoctorById(id);
	return {
		title: doctor ? `Book with ${doctor.name} – VirtuCare` : 'Doctor Not Found',
	};
}

export default async function BookingPage({ params }: Props) {
	const { id } = await params;
	const doctor = getDoctorById(id);

	if (!doctor) notFound();

	return (
		<div className=''>
			<Link
				href='/doctors'
				className='inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors my-6 px-6 sm:px-12'>
				<svg
					className='w-4 h-4'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth={2}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
					/>
				</svg>
				Back to doctors
			</Link>

			<div className='grid grid-cols-1 lg:grid-cols-5 gap-6 px-6 sm:px-12 my-10'>
				<div className='lg:col-span-2'>
					<div className='bg-white rounded-2xl border border-slate-100 p-6 sticky top-24'>
						<div className='flex items-center gap-4 mb-4'>
							<div className='w-14 h-14 rounded-2xl bg-teal-700 flex items-center justify-center shrink-0'>
								<span className='text-white font-semibold'>
									{doctor.avatar}
								</span>
							</div>
							<div>
								<h1 className='text-lg font-semibold text-slate-900 leading-snug'>
									{doctor.name}
								</h1>
								<p className='text-xs text-slate-500 mt-0.5'>
									{doctor.qualification}
								</p>
							</div>
						</div>

						<Badge>{doctor.specialty}</Badge>

						<p className='mt-4 text-sm text-slate-600 leading-relaxed'>
							{doctor.bio}
						</p>

						<div className='mt-4 pt-4 border-t border-slate-100 flex items-center gap-1'>
							<svg
								className='w-4 h-4 text-amber-400 fill-amber-400'
								viewBox='0 0 20 20'>
								<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
							</svg>
							<span className='text-sm font-medium text-slate-700'>
								{doctor.rating}
							</span>
							<span className='text-xs text-slate-400'>
								({doctor.reviewCount} reviews)
							</span>
						</div>
					</div>
				</div>

				<div className='lg:col-span-3'>
					<div className='bg-white rounded-2xl border border-slate-100 p-6'>
						<h2 className='text-base font-semibold text-slate-900 mb-5'>
							Book an appointment
						</h2>
						<BookingForm doctor={doctor} />
					</div>
				</div>
			</div>

			<FAQSection />
			<Footer />
		</div>
	);
}
