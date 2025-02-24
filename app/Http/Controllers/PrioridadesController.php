<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prioridades;
use Inertia\Inertia;
use Inertia\Response;

class PrioridadesController extends Controller
{
    public function index(): Response
    {
        $prioridades = Prioridades::all();
        \Log::info('Prioridades:', $prioridades->toArray());
    
        return Inertia::render('Cadastros/PrioridadesPage', [
            'prioridades' => $prioridades,
        ]);
    }
    

    public function criarPrioridades(Request $request)
    {
        try{

            $request->validate([
                'nome' => 'required|string|max:255',
            ]);

            $prioridades = Prioridades::create([
                'nome' => $request->nome,
                'relevancia' => $request->relevancia,
            ]);
            \Log::info('Prioridade criado com sucesso!');

            return redirect()->route('prioridades.index');
        }catch(\Exception $e){
            \Log::error('Erro ao criar prioridade: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Não foi possível criar a prioridade: ' . $e->getMessage());
        }

    }
    
    public function editarPrioridades(Request $request, Prioridades $prioridades)
    {
        try {
            $request->validate([
                'nome' => 'required|string|max:255',
                'relevancia' => 'required|string|max:255',
            ]);
    
            $prioridades->update([
                'nome' => $request->nome,
                'relevancia' => $request->relevancia,
            ]);
    
            \Log::info("Prioridade ID {$prioridades->id} atualizada com sucesso!");
    
            return redirect()->back()->with('success', 'Prioridade atualizada com sucesso!');
        } catch (\Exception $e) {
            \Log::error("Erro ao atualizar prioridade ID {$prioridades->id}: " . $e->getMessage());
            return redirect()->back()->with('error', 'Não foi possível atualizar a prioridade: ' . $e->getMessage());
        }
    }

    // Deletar Status
    public function deletarPrioridades($id)
    {
        try {
            // Buscar prioridade manualmente
            $prioridade = Prioridades::find($id);
    
            // Se não existir, retorna erro
            if (!$prioridade) {
                \Log::error("Erro ao excluir: Prioridade ID {$id} não encontrada.");
                return redirect()->back()->with('error', 'Prioridade não encontrada.');
            }
    
            // Excluir prioridade
            $prioridade->delete();
            \Log::info("Prioridade ID {$id} excluída com sucesso!");
    
            return redirect()->route('prioridades.index')->with('success', 'Prioridade excluída com sucesso!');
        } catch (\Exception $e) {
            \Log::error("Erro ao excluir prioridade ID {$id}: " . $e->getMessage());
            return redirect()->back()->with('error', 'Não foi possível excluir a prioridade: ' . $e->getMessage());
        }
    }
    
}
