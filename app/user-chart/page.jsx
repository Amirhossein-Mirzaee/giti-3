/** @format */

"use client";

import UserTable from "./components/UserTable";
import UserChart from "./components/UserChart";

export default function UsersChartPage() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const data = await res.json();
			setUsers(data);
		};

		fetchUsers();
	}, []);

	return (
		<div className='max-w-6xl mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-6 text-center text-gray-800'>User Table & Chart</h1>

			{users.length > 0 ? (
				<>
					<UserTable users={users} />
					<UserChart users={users} />
				</>
			) : (
				<p className='text-center'>Loading...</p>
			)}
		</div>
	);
}
