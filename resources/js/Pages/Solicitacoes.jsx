import MainLayout from "../Layouts/MainLayout";
import { Head, usePage,Link } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Solicitacoes() {
    const { solicitacoes, auth } = usePage().props;
    const [loading, setLoading] = useState(true);
    const [sortedSolicitacoes, setSortedSolicitacoes] = useState([]);

    const [dropdownOpen, setDropdownOpen] = useState(null);

    const toggleDropdown = (id) => {
        setDropdownOpen(dropdownOpen === id ? null : id);
    };

    console.log(solicitacoes);

    useEffect(() => {
        if (solicitacoes) {
            setLoading(false);

            // Ordena as solicitações pela prioridade
            const sorted = [...solicitacoes].sort((a, b) => {
                const prioridadeOrder = { alto: 1, moderada: 2, leve: 3 };
                return prioridadeOrder[a.prioridade.relevancia] - prioridadeOrder[b.prioridade.relevancia];
            });

            setSortedSolicitacoes(sorted);
        }
    }, [solicitacoes]);

    return (
        <MainLayout>
            <Head title="Solicitações" />
            <h1 className="text-2xl font-bold">Solicitações</h1>

            {loading ? (
                <div className="flex justify-center items-center mt-4">
                    <svg className="animate-spin h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 100 16z"></path>
                    </svg>
                    <span className="ml-2 text-gray-600">Carregando...</span>
                </div>
            ) : (
                sortedSolicitacoes.length > 0 ? (
                    <ul className="mt-4 space-y-4">
                    {sortedSolicitacoes.map((solicitacao) => {
                        const prioridadeClasses = {
                            alto: "bg-red-100 border-red-500 text-red-800",
                            moderada: "bg-yellow-100 border-yellow-500 text-yellow-800",
                            baixa: "bg-green-100 border-green-500 text-green-800",
                        };
        
                        return (
                            <li
                                key={solicitacao.id}
                                className={`border p-4 rounded-lg shadow-md transition-transform transform hover:scale-[1.01] hover:shadow-lg ${prioridadeClasses[solicitacao.prioridade.relevancia]}`}
                            >
                                <div className="flex items-center justify-between">
                                    <strong className="text-lg">{solicitacao.titulo}</strong>
                                    <div className="relative">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white border">
                                            {solicitacao.prioridade.relevancia.toUpperCase()}
                                        </span>
        
                                        {/* Verifica se a solicitação pertence ao usuário autenticado */}
                                        {solicitacao.user_id === auth.user.id && (
                                            <button
                                                onClick={() => toggleDropdown(solicitacao.id)}
                                                className="ml-2 px-3 py-1 text-white text-xs rounded-md"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="black" /* Define a cor preta */
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className={`w-5 h-5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>

                                            </button>
                                        )}
        
                                        {/* Dropdown de opções */}
                                        {dropdownOpen === solicitacao.id && (
                                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    👁 Visualizar
                                                </Link>
                                                <Link
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    ✏️ Editar
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
        
                                <p className="text-gray-700 mt-2">{solicitacao.descricao}</p>
        
                                <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
                                    <span className="font-medium">Status: {solicitacao.status.name}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                ) : (
                    <p className="mt-4 text-gray-600">Não há solicitações no momento.</p>
                )
            )}
        </MainLayout>
    );
}
