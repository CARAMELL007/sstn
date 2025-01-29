import FlashMessage from "@/Components/FlashMessage";
import { useForm, usePage } from "@inertiajs/react";

export default function Create({ departments }) {
    const { data, setData, post, errors } = useForm({
        first_name: '',
        last_name: '',
        department: '',
        birth_date: '',
        gender: '',
        hire_date: '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('employees.store'));
    };

    const { flash } = usePage().props

    return (
        <>
            <FlashMessage flash={flash} />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg w-1/4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                maxLength={14}
                                required
                            />
                            {errors.first_name && <div className="text-red-500 text-xs italic">{errors.first_name}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                maxLength={16}
                                required
                            />
                            {errors.last_name && <div className="text-red-500 text-xs italic">{errors.last_name}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="birth_date" className="block text-gray-700 text-sm font-bold mb-2">Birth Date</label>
                            <input
                                type="date"
                                id="birth_date"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.birth_date}
                                onChange={(e) => setData('birth_date', e.target.value)}
                                required
                            />
                            {errors.birth_date && <div className="text-red-500 text-xs italic">{errors.birth_date}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                            <select
                                id="gender"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.gender}
                                onChange={(e) => setData('gender', e.target.value)}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            {errors.gender && <div className="text-red-500 text-xs italic">{errors.gender}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="hire_date" className="block text-gray-700 text-sm font-bold mb-2">Hire Date</label>
                            <input
                                type="date"
                                id="hire_date"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.hire_date}
                                onChange={(e) => setData('hire_date', e.target.value)}
                                required
                            />
                            {errors.hire_date && <div className="text-red-500 text-xs italic">{errors.hire_date}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">Department</label>
                            <select
                                id="department"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.department}
                                onChange={(e) => setData('department', e.target.value)}
                                required
                            >
                                <option value="">Select Department</option>
                                {departments.map((department) => (
                                    <option key={department.dept_no} value={department.dept_no}>
                                        {department.dept_name}
                                    </option>
                                ))}
                            </select>
                            {errors.dept_no && <div className="text-red-500 text-xs italic">{errors.dept_no}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">Choose an image</label>
                            <input
                                type="file"
                                id="image"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => setData('image', e.target.files[0])}
                                required
                            />
                            {errors.image && <div className="text-red-500 text-xs italic">{errors.image}</div>}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Add Employee
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}