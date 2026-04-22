import { FEATURES } from '@/lib/utils';
import Image from 'next/image';

export default function AccessCareSection() {
	return (
		<section className='w-full bg-slate-50 py-16 sm:py-24'>
			<div className='grid grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-16'>
				<div className='flex justify-center'>
					<div className='relative h-105 w-full max-w-120'>
						<Image
							src='/illustration.png'
							alt='Doctor accessible via mobile phone illustration'
							fill
							quality={85}
							sizes='(max-width: 1024px) 90vw, 480px'
							className='object-contain'
						/>
					</div>
				</div>

				<div>
					<h2 className='text-3xl font-extrabold leading-snug text-slate-900 sm:text-4xl'>
						Access to care for everybody
					</h2>

					<p className='mt-4 text-base leading-relaxed text-slate-500 sm:text-lg'>
						You can speak to a doctor, psychologist and wellness expert via
						audio and video call options
					</p>

					<ul className='mt-10 space-y-8'>
						{FEATURES.map((feature) => (
							<li
								key={feature.id}
								className='flex items-start gap-5'>
								<div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-teal-100 bg-teal-50'>
									{feature.icon}
								</div>
								<div>
									<p className='text-base font-bold text-slate-800'>
										{feature.title}
									</p>
									<p className='mt-1 text-sm leading-relaxed text-slate-500'>
										{feature.description}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
