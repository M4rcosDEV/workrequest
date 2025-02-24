import { usePage } from '@inertiajs/react';

export default function TestPage() {
    const { props } = usePage();
    console.log("Dados recebidos:", props.status); // Verifique o console

    return (
        <div>
            <h1>Test Page</h1>
            {props.status && (
                <ul>
                    {props.status.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}

                        {/* <h1>Home</h1> */}
            {/* <StatusList status={status} /> */}
            {/* <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        You're logged in!
                    </div>
                </div>
            </div> */}
        </div>
    );
}