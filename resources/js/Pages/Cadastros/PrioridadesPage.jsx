import MainLayout from "../../Layouts/MainLayout";
import { Head, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

export default function StatusPage() {
    const { prioridades } = usePage().props;
    const [nome, setNome] = useState("");
    const [relevancia, setRelevancia] = useState("");
    const [editando, setEditando] = useState(false);
    const [idEditando, setIdEditando] = useState(null);

    const handleDelete = (id) => {
        if (confirm("Tem certeza que deseja excluir?")) {
            console.log(id);
            Inertia.delete(`/prioridades/${id}`, {
                preserveScroll: true,
                preserveState: true,
                only: ['prioridades'],
                onSuccess: () => console.log("Deletado com sucesso"),
            });
        }
    };


    const handleEdit = (item) => {
        setNome(item.nome);
        setRelevancia(item.relevancia);
        setEditando(true);
        setIdEditando(item.id);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome.trim()) return;

        if (editando) {
            // Atualiza a prioridade existente
            Inertia.put(`/prioridades/${idEditando}`, { nome, relevancia }, {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    setNome("");
                    setRelevancia("");
                    setEditando(false);
                    setIdEditando(null);
                },
                only: ['prioridades']
            });
        } else {
            // Cria uma nova prioridade
            Inertia.post("/prioridades", { nome, relevancia }, {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    setNome("");
                    setRelevancia("");
                },
                only: ['prioridades']
            });
        }
    };

    return (
        <MainLayout>
            <Head title="Prioridades" />
            <h1 className="text-2xl font-bold mb-4">Prioridades</h1>

            {/* Formulário de Cadastro/Edição */}
            <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
                <input 
                    type="text" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                    placeholder="Nova prioridade"
                    className="border px-3 py-2 rounded-md"
                    required
                />
                <select 
                    value={relevancia} 
                    onChange={(e) => setRelevancia(e.target.value)} 
                    className="w-48 border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 ease-in-out bg-white text-gray-700"
                    required
                >
                    <option value="" disabled>Relevância</option>
                    <option value="alto" className="font-semibold text-red-600">🔴 Alto</option>
                    <option value="moderada" className="font-semibold text-yellow-500">🟡 Moderada</option>
                    <option value="leve" className="font-semibold text-green-600">🟢 Leve</option>
                </select>


                <button type="submit" className={`px-4 py-2 rounded-md text-white ${editando ? 'bg-green-500' : 'bg-blue-500'}`}>
                    {editando ? "Salvar" : "Adicionar"}
                </button>

                {editando && (
                    <button type="button" onClick={() => {
                        setNome("");
                        setRelevancia("");
                        setEditando(false);
                        setIdEditando(null);
                    }} className="px-4 py-2 rounded-md bg-gray-400 text-white">
                        Cancelar
                    </button>
                )}

            </form>
            <div className="overflow-x-auto">
            <div className="border border-gray-300 overflow-hidden w-1/2">
            {prioridades.length > 0 ? (
                                <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 border-b">
                                        <th className="px-4 py-2 text-gray-600 border border-gray-300 text-center">Prioridade</th>
                                        <th className="px-4 py-2 text-gray-600 border border-gray-300 text-center">Relevancia</th>
                                        <th className="px-4 py-2 text-gray-600 border border-gray-300 text-center">Excluir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {prioridades.map((item, index) => (
                                        <tr key={index} className={`border-b
                                            ${
                                                item.relevancia === 'alto' ? 'bg-red-400 hover:bg-red-600 ' :
                                                item.relevancia === 'moderada' ? 'bg-yellow-400 hover:bg-yellow-600': 'bg-green-300 hover:bg-green-600'}`}
                                                onClick={() => handleEdit(item)}        
                                        >
                                            <td className="px-4 py-2 border border-gray-300 text-center">{item.nome}</td>
                                            <td className="px-4 py-2 border border-gray-300 text-center">{item.relevancia}</td>
                                            <td className="px-4 py-2 border border-gray-300 text-center">
                                                <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
            ) : (
                <p className="text-gray-600 ml-3">Nenhuma prioridade cadastrada</p>
            )}

            </div>
        </div>

        </MainLayout>
    );
}
