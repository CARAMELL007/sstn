import { useEffect, useState } from "react";


export default function FlashMessage({ flash }) {
    const [alert, setAlert] = useState(true)

    useEffect(() => {
        setAlert(true)
        setTimeout(() => {setAlert(false)}, 3000)

        return () => clearTimeout(setTimeout(() => {setAlert(false)}, 3000))
    }, [flash]);

    if (!alert || (!flash.success && !flash.error)) return null

    return (
        <div className={flash.success
            ? 'bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded relative'
            : 'bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded relative'}
            role="alert"
        >
            <strong className="font-bold">
                {flash.success ? 'Success: ' : 'Error: '}
            </strong>
            <span className="block sm:inline">{flash.success || flash.error}</span>
        </div>
    );
}
