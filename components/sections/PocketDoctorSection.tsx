import Image from 'next/image';
import Link from 'next/link';

export default function PocketDoctorSection() {
	return (
		<section className='w-full bg-white py-16 sm:py-24'>
			<div className='grid grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16'>
				<div className='order-2 lg:order-1'>
					<p className='text-3xl font-light leading-snug text-slate-700 sm:text-4xl'>
						Your Personal
					</p>
					<h2 className='text-3xl font-extrabold leading-snug text-slate-900 sm:text-4xl'>
						Doctor in your Pocket
					</h2>

					<p className='mt-6 text-base leading-relaxed text-slate-500 sm:text-lg'>
						As part of our Hospital at Home® Program, your vital signs can be
						monitored using IoT-enabled medical devices, wearables (Fitbit,
						Apple watch), etc
					</p>

					<Link
						href='/services'
						className='mt-8 inline-flex items-center rounded-lg bg-teal-700 py-3.5 px-6 text-sm font-semibold text-white transition-colors hover:bg-teal-700/75'>
						Learn More
					</Link>
				</div>

				<div className='relative order-1 flex justify-center lg:order-2'>
					<div className='relative h-105 w-full max-w-130'>
						<Image
							src='/personal-doctor-in-pocket.png'
							alt='App on phone and smartwatch showing health readings'
							fill
							quality={85}
							sizes='(max-width: 1024px) 90vw, 620px'
							className='object-contain'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
