import MainLayout from "../../Layouts/MainLayout";
import { Head, usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

export default function StatusPage() {
    const { status } = usePage().props;
    const [name, setName] = useState("");
    const [editingId, setEditingId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        if (editingId) {
            // Atualizando status existente
            Inertia.put(`/status/${editingId}`, { name }, {
                preserveScroll: true,
                preserveState: true,
                only: ['status'],
                onSuccess: () => {
                    setName("");
                    setEditingId(null); // Sai do modo de edição
                },
            });
        }else{
            // Criando novo status
            Inertia.post("/status", { name }, {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    setName("");
                },
                only:['status']
            });
        }

    };  

    const handleEdit = (statusItem) => {
        setEditingId(statusItem.id);
        setName(statusItem.name); // Preenche o formulário com o nome do status
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setName(""); // Reseta o formulário
    };


    const handleDelete = (id) => {
        if (confirm("Tem certeza que deseja excluir?")) {
            Inertia.delete(`/status/${id}`, {
                preserveScroll: true,
                preserveState: true,
                only: ['status'],
                onSuccess: () => console.log("Deletado com sucesso"),
            });
        }
    };

    return (
        <MainLayout>
            <Head title="Status" />
            <h1 className="text-2xl font-bold mb-4">Status</h1>

            {/* Formulário de Cadastro/Edição */}
             <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Novo status"
                    className="border px-3 py-2 rounded-md"
                    required
                />
                <button type="submit" className={`px-4 py-2 rounded-md ${editingId ? "bg-green-500" : "bg-blue-500"} text-white`}>
                    {editingId ? "Salvar" : "Adicionar"}
                </button>

                {editingId && (
                    <button type="button" onClick={handleCancelEdit} className="bg-gray-500 text-white px-4 py-2 rounded-md">
                        Cancelar
                    </button>
                )}
            </form>
            
            
            <div className="overflow-x-auto">
            <div className="border border-gray-300 overflow-hidden w-1/2">
            {status.length > 0 ? (
                                <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-100 border-b">
                                        <th className="px-4 py-2 text-gray-600 border border-gray-300 text-center">Status</th>
                                        <th className="px-4 py-2 text-gray-600 border border-gray-300 text-center">Editar</th>
                                        <th className="px-4 py-2 text-gray-600 border border-gray-300 text-center">Excluir</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {status.map((item, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="px-4 py-2 border border-gray-300 text-center">{item.name}</td>
                                            <td className="px-4 py-2 border border-gray-300 text-center">
                                                <button onClick={() => handleEdit(item)} className="text-blue-500 hover:text-blue-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487a2.25 2.25 0 0 1 3.182 3.182L8.17 18.543a4.5 4.5 0 0 1-1.91 1.14l-3.206.902a.75.75 0 0 1-.924-.923l.902-3.206a4.5 4.5 0 0 1 1.14-1.91L16.862 3.487z" />
                                                    </svg>
                                                </button>
                                            </td>
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
                <p className="text-gray-600 ml-3">Nenhum status cadastrado</p>
            )}

            </div>
        </div>

        </MainLayout>
    );
}
