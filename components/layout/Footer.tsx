import Link from 'next/link';
import Image from 'next/image';
import { LINKS, SOCIALS } from '@/lib/utils';

export default function Footer() {
	return (
		<footer className='w-full bg-teal-900 text-white'>
			<div className=' px-6 sm:px-10 lg:px-16'>
				<div className='grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5'>
					<div className='lg:col-span-2'>
						<Link href='/'>
							<Image
								src='/virtucare_logo.svg'
								alt='VirtuCare'
								width={180}
								height={40}
								className='h-14 w-auto brightness-0 invert'
							/>
						</Link>
						<p className='mt-4 max-w-xs text-sm leading-relaxed '>
							Connecting you to quality healthcare from the comfort of your
							home. Available 24/7, 365 days a year.
						</p>
						<div className='mt-6 flex items-center gap-3'>
							{SOCIALS.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={social.label}
									className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-800  transition-colors hover:bg-teal-500 hover:text-white'>
									{social.icon}
								</a>
							))}
						</div>
					</div>

					{Object.entries(LINKS).map(([group, items]) => (
						<div key={group}>
							<p className='text-xs font-semibold uppercase tracking-widest text-slate-300'>
								{group}
							</p>
							<ul className='mt-4 space-y-3'>
								{items.map((item) => (
									<li key={item.href}>
										<Link
											href={item.href}
											className='text-sm  transition-colors hover:text-teal-400'>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className='flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-6 sm:flex-row'>
					<p className='text-xs '>
						© {new Date().getFullYear()} VirtuCare. All rights reserved.
					</p>
					<div className='flex items-center gap-1 text-xs '>
						<span className='h-1.5 w-1.5 rounded-full bg-teal-500' />
						All systems operational
					</div>
				</div>
			</div>
		</footer>
	);
}
