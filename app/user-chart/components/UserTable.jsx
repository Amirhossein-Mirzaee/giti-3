/** @format */

"use client";

export default function UserTable({ users }) {
	return (
		<div className='overflow-x-auto mb-10'>
			<table className='min-w-full border border-gray-200'>
				<thead className='bg-gray-100'>
					<tr>
						<th className='px-4 py-2 border'>ID</th>
						<th className='px-4 py-2 border'>Name</th>
						<th className='px-4 py-2 border'>Username</th>
						<th className='px-4 py-2 border'>Email</th>
						<th className='px-4 py-2 border'>City</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id} className='hover:bg-gray-50'>
							<td className='px-4 py-2 border text-center'>{user.id}</td>
							<td className='px-4 py-2 border'>{user.name}</td>
							<td className='px-4 py-2 border'>{user.username}</td>
							<td className='px-4 py-2 border'>{user.email}</td>
							<td className='px-4 py-2 border'>{user.address.city}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
