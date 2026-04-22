import Image from 'next/image';
import { ReactNode } from 'react';

interface PageHeroProps {
	title: string;
	description?: string;
	backgroundImage?: string;
	actions?: ReactNode;
	minHeight?: string;
}

export default function PageHero({
	title,
	description,
	backgroundImage,
	actions,
	minHeight = 'min-h-[480px]',
}: PageHeroProps) {
	return (
		<div
			className={`relative w-full ${minHeight} flex items-center overflow-hidden`}>
			{backgroundImage ?
				<>
					<Image
						src={backgroundImage}
						alt=''
						fill
						priority
						quality={80}
						sizes='100vw'
						className='object-cover object-center'
					/>
					<div className='absolute inset-0 bg-black/55' />
				</>
			:	<div className='absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900' />
			}

			<div className='relative z-10 mx-auto w-full  px-6 py-16 sm:px-10 lg:px-16'>
				<div className='max-w-xl'>
					<h1 className='text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl'>
						{title}
					</h1>

					{description && (
						<p className='mt-4 text-base leading-relaxed text-white/80 sm:text-lg'>
							{description}
						</p>
					)}

					{actions && (
						<div className='mt-8 flex flex-wrap gap-4'>{actions}</div>
					)}
				</div>
			</div>
		</div>
	);
}
