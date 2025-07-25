/** @format */

import Link from "next/link";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50'>
			<h1 className='text-4xl font-bold text-green-600 mb-4'>Welcome to User Dashboard</h1>
			<p className='text-lg text-gray-600 mb-8'>
				Go to the <span className='font-semibold'>Users Chart</span> page to view user data and chart.
			</p>
			<Link
				href='/user-chart'
				className='px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition'>
				View Users Chart
			</Link>
		</main>
	);
}
