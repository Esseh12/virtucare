import { FAQS } from '../../lib/utils';
import { FAQItem } from '../ui/FaqItem';

export default function FAQSection() {
	return (
		<section className='w-full bg-white py-16 sm:py-24'>
			<div className='px-6 sm:px-10 lg:px-16'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-24'>
					<div className='lg:sticky lg:top-24 lg:self-start'>
						<p className='text-sm font-semibold uppercase tracking-widest text-teal-500'>
							FAQ
						</p>
						<h2 className='mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl'>
							Frequently Asked Questions
						</h2>
						<p className='mt-4 text-base leading-relaxed text-slate-500'>
							Can't find what you're looking for? Reach out to our support team
							and we'll be happy to help.
						</p>

						<a
							href='mailto:support@virtucare.com'
							className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 '>
							Contact Support
							<svg
								className='h-4 w-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</a>
					</div>

					<div className='lg:col-span-2'>
						{FAQS.map((faq) => (
							<FAQItem
								key={faq.id}
								question={faq.question}
								answer={faq.answer}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
