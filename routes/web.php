<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StatusController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SolicitacoesController;
use App\Http\Controllers\PrioridadesController;
use Inertia\Inertia;    


// Rotas para usuários não autenticados (Guest)
Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);
    
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);
});


// Rotas para usuários autenticados
Route::middleware('auth')->group(function () {
    // Logout
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/solicitacoes', [SolicitacoesController::class, 'index'])->name('solicitacoes.index');

    //CRUD status
    Route::get('/status', [StatusController::class, 'index'])->name('status.index');
    Route::post('/status', [StatusController::class, 'criarStatus'])->name('status.criar');
    Route::put('/status/{status}', [StatusController::class, 'editarStatus'])->name('status.editar');
    Route::delete('/status/{status}', [StatusController::class, 'deletarStatus'])->name('status.deletar');

    //CRUD prioridades
    Route::get('/prioridades', [PrioridadesController::class, 'index'])->name('prioridades.index');
    Route::post('/prioridades', [PrioridadesController::class, 'criarPrioridades'])->name('prioridades.criar');
    Route::put('/prioridades/{prioridades}', [PrioridadesController::class, 'editarPrioridades'])->name('prioridades.editar');
    //Route::delete('/prioridades/{prioridades}', [PrioridadesController::class, 'deletarPrioridades'])->name('prioridades.deletar');
    Route::delete('/prioridades/{prioridades}', [PrioridadesController::class, 'deletarPrioridades'])->name('prioridades.deletar');

});



//Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
//Route::post('register', [RegisteredUserController::class, 'store']);

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

//require __DIR__.'/auth.php';
