<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Prioridades;

class PrioridadesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Prioridades::create([
            'nome' => 'Atençao',
            'relevancia' => 'moderada',
        ]);
    }
}
