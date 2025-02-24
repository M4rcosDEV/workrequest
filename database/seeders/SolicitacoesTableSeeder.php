<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Solicitacoes;

class SolicitacoesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Solicitacoes::create([
            'titulo' => 'Solicitação 2',
            'descricao' => 'Descrição da solicitação 2',
            'status_id' => 21,
            'user_id' => 2,
            'prioridade_id' => 6,
        ]);
    }
}
