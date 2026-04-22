'use client';

import { useState } from 'react';

export function FAQItem({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) {
	const [open, setOpen] = useState(false);

	return (
		<div className='border-b border-slate-100 last:border-0'>
			<button
				onClick={() => setOpen((prev) => !prev)}
				className='flex w-full items-center justify-between gap-6 py-5 text-left'>
				<span className='text-base font-semibold text-slate-800'>
					{question}
				</span>
				<span
					className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
						open ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-500'
					}`}>
					<svg
						className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth={2.5}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 4v16m8-8H4'
						/>
					</svg>
				</span>
			</button>

			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					open ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
				}`}>
				<p className='text-sm leading-relaxed text-slate-500'>{answer}</p>
			</div>
		</div>
	);
}
