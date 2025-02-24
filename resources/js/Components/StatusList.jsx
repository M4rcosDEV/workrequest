export default function StatusList({ status }) {
    console.log("Dados recebidos no StatusList:", status); // Teste no console

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-bold mb-4">Lista de Status</h1>
            <ul className="list-disc pl-5">
                {status.length > 0 ? (
                    status.map((status) => (
                        <li key={status.id} className="text-gray-800">
                            {status.name}
                        </li>
                    ))
                ) : (
                    <p className="text-gray-500">Nenhum status encontrado.</p>
                )}
            </ul>

        </div>
    );
}

