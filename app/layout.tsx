import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
	title: 'VirtuCare – Book Doctor Appointments Online',
	description:
		'Find and book appointments with specialist doctors. Fast, simple, and secure.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='scroll-smooth min-h-screen'>
				<Navbar />
				<main className=''>{children}</main>
			</body>
		</html>
	);
}
