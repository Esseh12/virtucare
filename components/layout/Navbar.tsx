'use client';

import { NAV_LINKS } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
	const pathname = usePathname();

	return (
		<header className='sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100'>
			<nav className='px-6 sm:px-20 flex items-center justify-between h-16'>
				<Link
					href='/doctors'
					className='flex items-center gap-2'>
					<Image
						src='/virtucare_logo.svg'
						alt='VirtuCare Logo'
						width={180}
						height={56}
						className='h-14 w-auto'
					/>
				</Link>

				<div className='flex items-center gap-1'>
					{NAV_LINKS.map((link) => {
						const isActive =
							pathname === link.href || pathname.startsWith(link.href + '/');
						return (
							<Link
								key={link.href}
								href={link.href}
								className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150
                  ${
										isActive ?
											'bg-teal-50 text-teal-700'
										:	'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
									}
                `}>
								{link.label}
							</Link>
						);
					})}
				</div>
			</nav>
		</header>
	);
}
