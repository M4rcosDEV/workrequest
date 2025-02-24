import MainLayout from "../Layouts/MainLayout";
import { Head,usePage } from "@inertiajs/react";

export default function Solicitacoes() {
    const { solicitacoes } = usePage().props;

    return (
        <MainLayout>
            <Head title="Solicitações" />
            <h1 className="text-2xl font-bold">Solicitações</h1>
            
            {solicitacoes.length > 0 ? (
                <ul>
                    {solicitacoes.map((solicitacao) => (
                        <li key={solicitacao.id}>
                            {solicitacao.titulo} - {solicitacao.status.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Não há solicitações no momento.</p>
            )}
        </MainLayout>
    );
}
