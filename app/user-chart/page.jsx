/** @format */

"use client";

import { useEffect, useState } from "react";

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

	return <div></div>;
}
