import { Link } from '@inertiajs/react';

export default function SideBar({ user }) {
    console.log(`USUARIO CONECTADO: ${user.email}`);
    return (
        <div className="relative flex flex-col bg-white text-gray-700 h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-5 p-4">
                <img
                    src="/user.png" 
                    alt="Usuário"
                    className="w-12 h-12 rounded-full mx-auto mb-4"
                />

                <h5 className="block antialiased font-sans text-xl text-center text-gray-900">
                    {user.name ? user.name : 'Usuário'}
                </h5>
                <h5 className="block antialiased font-sans text-xl text-center text-gray-900">
                    {user.email ? user.email : 'Email'}
                </h5>
                <hr className='mt-5' />
            </div>
            
            <nav className="flex flex-col gap-2 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
                <Link 
                    href={route('dashboard')}  // <- Certifique-se de que está correto!
                    className="flex items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-50 hover:text-blue-900"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    Dashboard
                </Link>

                <Link href={route('solicitacoes')} 
                    className="flex items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-50 hover:text-blue-900"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                </svg>

                    Minhas Solicitações
                </Link>

                <Link href={route('solicitacoes')}
                    className="flex items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-50 hover:text-blue-900"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 mr-2">
                            <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                    </svg>
                    Solicitações
                </Link>

                <Link href={'#'}
                    className="flex items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-50 hover:text-blue-900"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

        

                    Cadastros
                </Link>

                <Link href={'#'}
                    className="flex items-center w-full p-3 rounded-lg text-start transition-all hover:bg-blue-50 hover:text-blue-900"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>


                    Relatorios
                </Link>
        
                <Link href={route('logout')} 
                    className="flex items-center w-full p-3 rounded-lg text-start transition-all hover:bg-red-50 hover:text-red-900"
                    method="post" // Faz a requisição corretamente como POST
                    as="button" // Renderiza como <button> para evitar comportamento estranho de links
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6 mr-2"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" 
                        />
                    </svg>
                    Sair
                </Link>
            </nav>
        </div>
    );
}
