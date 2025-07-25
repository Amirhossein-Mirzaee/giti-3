/** @format */

"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function UserChart({ users }) {
	const data = {
		labels: users.map((user) => user.name),
		datasets: [
			{
				label: "Username Length",
				data: users.map((user) => user.name.length),
				backgroundColor: "rgba(34,197,94,0.7)",
				borderRadius: 6,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			legend: { position: "top" },
		},
	};

	return (
		<div className='bg-white p-6 rounded-lg shadow-md'>
			<h2 className='text-xl font-semibold mb-4 text-center'>Chart: Length of User Names</h2>
			<Bar data={data} options={options} />
		</div>
	);
}
