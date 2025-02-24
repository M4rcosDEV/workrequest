<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Solicitacoes;
use Inertia\Response;
use Inertia\Inertia;

class SolicitacoesController extends Controller
{
    public function index(): Response
    {
        $solicitacoes = Solicitacoes::with(['user', 'status', 'prioridade'])->get();

        return Inertia::render('Solicitacoes', [
            'solicitacoes' => $solicitacoes
        ]);
    }  
}
