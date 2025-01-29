import { useForm } from '@inertiajs/react';
import FlashMessage from '@/Components/FlashMessage';
import { usePage } from '@inertiajs/react';

export default function Create({ departments }) {
    const { flash } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        first_name: '',
        last_name: '',
        gender: '',
        birth_date: '',
        hire_date: '',
        dept_no: '',
        images: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('first_name', data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('gender', data.gender);
        formData.append('birth_date', data.birth_date);
        formData.append('hire_date', data.hire_date);
        formData.append('dept_no', data.dept_no);
        if (data.images) {
            formData.append('images', data.images);
        }
        post(route('employees.store'), {
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
                <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
                    <FlashMessage flash={flash} />
                    <h1 className="text-3xl font-bold text-center mb-6">Create Employee</h1>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        {/* First Name */}
                        <div className="mb-4">
                            <label htmlFor="first_name" className="block text-gray-700 font-medium mb-2">
                                First Name
                            </label>
                            <input
                                id="first_name"
                                name="first_name"
                                type="text"
                                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.first_name ? 'border-red-500' : 'border-gray-300'}`}
                                value={data.first_name}
                                onChange={(e) => setData('first_name', e.target.value)}
                                required
                            />
                            {errors.first_name && (
                                <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="mb-4">
                            <label htmlFor="last_name" className="block text-gray-700 font-medium mb-2">
                                Last Name
                            </label>
                            <input
                                id="last_name"
                                name="last_name"
                                type="text"
                                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.last_name ? 'border-red-500' : 'border-gray-300'}`}
                                value={data.last_name}
                                onChange={(e) => setData('last_name', e.target.value)}
                                required
                            />
                            {errors.last_name && (
                                <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
                            )}
                        </div>

                        {/* Gender */}
                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                                value={data.gender}
                                onChange={(e) => setData('gender', e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Select Gender
                                </option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            {errors.gender && (
                                <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                            )}
                        </div>

                        {/* Birth Date */}
                        <div className="mb-4">
                            <label htmlFor="birth_date" className="block text-gray-700 font-medium mb-2">
                                Birth Date
                            </label>
                            <input
                                id="birth_date"
                                name="birth_date"
                                type="date"
                                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.birth_date ? 'border-red-500' : 'border-gray-300'}`}
                                value={data.birth_date}
                                onChange={(e) => setData('birth_date', e.target.value)}
                                required
                            />
                            {errors.birth_date && (
                                <p className="text-red-500 text-sm mt-1">{errors.birth_date}</p>
                            )}
                        </div>

                        {/* Hire Date */}
                        <div className="mb-4">
                            <label htmlFor="hire_date" className="block text-gray-700 font-medium mb-2">
                                Hire Date
                            </label>
                            <input
                                id="hire_date"
                                name="hire_date"
                                type="date"
                                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.hire_date ? 'border-red-500' : 'border-gray-300'}`}
                                value={data.hire_date}
                                onChange={(e) => setData('hire_date', e.target.value)}
                                required
                            />
                            {errors.hire_date && (
                                <p className="text-red-500 text-sm mt-1">{errors.hire_date}</p>
                            )}
                        </div>

                        {/* Department */}
                        <div className="mb-4">
                            <label htmlFor="dept_no" className="block text-gray-700 font-medium mb-2">
                                Department
                            </label>
                            <select
                                id="dept_no"
                                name="dept_no"
                                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.dept_no ? 'border-red-500' : 'border-gray-300'}`}
                                value={data.dept_no}
                                onChange={(e) => setData('dept_no', e.target.value)}
                                required
                            >
                                <option value="" disabled>
                                    Select a department
                                </option>
                                {departments.map((department) => (
                                    <option key={department.dept_no} value={department.dept_no}>
                                        {department.dept_name}
                                    </option>
                                ))}
                            </select>
                            {errors.dept_no && (
                                <p className="text-red-500 text-sm mt-1">{errors.dept_no}</p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label htmlFor="images" className="block text-gray-700 font-medium mb-2">
                                Images
                            </label>
                            <input
                                id="images"
                                name="images"
                                accept="images/*"
                                type="file"
                                className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.images ? 'border-red-500' : 'border-gray-300'}`}
                                onChange={(e) => setData('images', e.target.files[0])}
                            />
                            {errors.images && (
                                <p className="text-red-500 text-sm mt-1">{errors.images}</p>
                            )}
                        </div>


                        {/* Submit Button */}
                        <div className="flex justify-end mt-6">
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none"
                            >
                                Add Employee
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
