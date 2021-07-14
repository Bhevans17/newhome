<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('/', function () {
    return view('index');
});

Route::post('/', function (Request $request) {

    $validated = $request->validate([
        'search-query' => 'required|max:255|min:2',
    ]);

    dd($validated);
});

Route::get('/listings/buy', function (Request $request) {
    return view('listings');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
