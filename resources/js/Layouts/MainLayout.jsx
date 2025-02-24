import { usePage } from "@inertiajs/react";
import SideBar from "../Components/SideBar";
import { useState } from "react";

export default function MainLayout({ children }) {
    const { auth } = usePage().props; // Pegando o usuário globalmente
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const closeSidebar = () => {
        console.log('clicou');
        setSidebarOpen(!sidebarOpen);
    };
    

    return (
        <div className="bg-gray-100 h-screen flex">
            
            {/* Botão Hambúrguer */}
            {!sidebarOpen && (
                <button
                    className="absolute top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md"
                    onClick={closeSidebar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            )}


            {/* Sidebar com animação */}
            <div className={`fixed inset-y-0 left-0 z-40 transform bg-white shadow-xl transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} `}>
                <SideBar user={auth?.user} closeSidebar={closeSidebar} />
            </div>

            {/* Conteúdo da página */}
            <div className={`flex-1 p-4 transition-all duration-300 ease-in-out mt-1 ${sidebarOpen ? "ml-[300px]" : "ml-[50px]"}`}>
                {children}
            </div>
        </div>
    );
}
