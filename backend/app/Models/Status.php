<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Status extends Model
{
    use HasFactory;
    protected $table = 'status';

    protected $fillable = [
        'nome',
    ];

    public function solicitacoes()
    {
        return $this->hasMany(Solicitacoes::class, 'status_id');
    }
}
