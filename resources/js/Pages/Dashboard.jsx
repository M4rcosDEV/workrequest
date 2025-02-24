import MainLayout from "../Layouts/MainLayout"; // Sem extensão .jsx
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <MainLayout>
            <Head title="Dashboard" />
            <h1 className="text-2xl font-bold">Dashboard</h1>
        </MainLayout>
    );
}
