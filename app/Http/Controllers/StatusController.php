<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Status;
use Inertia\Inertia;
use Inertia\Response;


class StatusController extends Controller
{

    public function index(): Response
    {
        $status = Status::all();
        \Log::info('Status:', $status->toArray());
    
        return Inertia::render('Cadastros/StatusPage', [
            'status' => $status,
        ]);
    }
    

    public function criarStatus(Request $request)
    {
        try{

            $request->validate([
                'name' => 'required|string|max:255',
            ]);

            $status = Status::create([
                'name' => $request->name,
            ]);
            \Log::info('Status criado com sucesso!');

            return redirect()->route('status.index');
        }catch(\Exception $e){
            \Log::error('Erro ao criar status: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Não foi possível criar o status: ' . $e->getMessage());
        }

    }
    
    public function editarStatus(Request $request, Status $status)
    {
        try{

            $request->validate([
                'name' => 'required|string|max:255',
            ]);

            $status->update([
                'name' => $request->name,
            ]);
            \Log::info('Status atualizado com sucesso!');

            return redirect()->back()->with('success', 'Status atualizado com sucesso!');
        }catch(\Exception $e){
            \Log::error('Erro ao criar status: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Não foi possível atualizado o status: ' . $e->getMessage());
        }
    }

    // Deletar Status
    public function deletarStatus(Status $status)
    {
        try{

            $status->delete();
            \Log::info('Status ID {$status->id} excluído com sucesso!');

            return redirect()->route('status.index');
        }catch(\Exception $e){
            \Log::error("Erro ao excluir status ID {$status->id}: " . $e->getMessage());
            return redirect()->back()->with('error', 'Não foi possível excluir o status: ' . $e->getMessage());
        }
    }
}
