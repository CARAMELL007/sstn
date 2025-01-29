import { router } from '@inertiajs/react';
import { use, useState } from 'react';
import FlashMessage from '@/Components/FlashMessage';
import { usePage } from '@inertiajs/react';

export default function Index({ employees, query, sortField, sortOrder }) {
    const [search, setSearch] = useState(query || '');
    const { flash } = usePage().props;
    const [sort, setSort] = useState({ field: sortField || 'emp_no', order: sortOrder || 'asc' });

    const handleSearch = (e) => {
        e.preventDefault();
        router.get('/employees', { search, sort: sort.field, order: sort.order });
    };

    const handlePagination = (url) => {
        if (url) {
            router.get(url, { search, sort: sort.field, order: sort.order });
        }
    };

    const handleSort = (field) => {
        const order = sort.field === field && sort.order === 'asc' ? 'desc' : 'asc';
        setSort({ field, order });  // Update the sort state
        router.get('/employees', { search, sort: field, order }); // Trigger re-fetch with new sort
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
                <FlashMessage flash={flash} />
                <h1 className="text-3xl font-bold mb-6 text-gray-900">Employee List</h1>
                <form onSubmit={handleSearch} className="mb-6 flex gap-2">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 shadow-sm focus:ring-2 focus:ring-blue-700 focus:outline-none"
                        placeholder="Search employees..."
                        aria-label="Search employees"
                    />
                    <button
                        type="submit"
                        className="bg-blue-700 text-white px-4 py-2 rounded shadow hover:bg-blue-800 focus:ring-2 focus:ring-blue-700"
                    >
                        Search
                    </button>
                </form>

                {employees.data.length > 0 ? (
                    <div className="w-full max-w-4xl">
                        <table className="w-full border-collapse border border-gray-300 text-center text-gray-900">
                            <thead className="bg-blue-700 text-white">
                                <tr>
                                    <th
                                        onClick={() => handleSort('emp_no')}
                                        className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-blue-800"
                                    >
                                        ID {sort.field === 'emp_no' && (sort.order === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        onClick={() => handleSort('first_name')}
                                        className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-blue-800"
                                    >
                                        First Name {sort.field === 'first_name' && (sort.order === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        onClick={() => handleSort('last_name')}
                                        className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-blue-800"
                                    >
                                        Last Name {sort.field === 'last_name' && (sort.order === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        onClick={() => handleSort('birth_date')}
                                        className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-blue-800"
                                    >
                                        Birth Date {sort.field === 'birth_date' && (sort.order === 'asc' ? '↑' : '↓')}
                                    </th>
                                    <th
                                        className="border border-gray-300 px-4 py-2 cursor-pointer hover:bg-blue-800"
                                    >
                                        Images
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.data.map((employee) => (
                                    <tr key={employee.emp_no} className="hover:bg-gray-100">
                                        <td className="border border-gray-300 px-4 py-2">{employee.emp_no}</td>
                                        <td className="border border-gray-300 px-4 py-2">{employee.first_name}</td>
                                        <td className="border border-gray-300 px-4 py-2">{employee.last_name}</td>
                                        <td className="border border-gray-300 px-4 py-2">{employee.birth_date}</td>
                                        <td className="border border-gray-300 px-4 py-2">
                                            {employee.images ? (
                                                <img src={`/storage/${employee.images}`} alt="Employee Images" className="w-16 h-16 rounded" />
                                            ) : (
                                                <span>No Image</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={() => handlePagination(employees.prev_page_url)}
                                disabled={!employees.prev_page_url}
                                className={`px-4 py-2 rounded font-medium shadow ${employees.prev_page_url
                                    ? 'bg-blue-700 text-white hover:bg-blue-800'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                aria-label="Previous page"
                            >
                                Previous
                            </button>
                            <span className="text-gray-600 font-medium">
                                Page {employees.current_page} of {employees.last_page}
                            </span>
                            <button
                                onClick={() => handlePagination(employees.next_page_url)}
                                disabled={!employees.next_page_url}
                                className={`px-4 py-2 rounded font-medium shadow ${employees.next_page_url
                                    ? 'bg-blue-700 text-white hover:bg-blue-800'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                aria-label="Next page"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500 text-center mt-6">Employees Not Found.</p>
                )}
            </div>
        </>
    );
}
