<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\userController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('adduser', [userController::class, 'InsertNew']);
Route::get('getuser', [userController::class, 'DisplayCustomer']);
// Route::get('addMessage', [customerController::class, 'InsertMessage']);
// Route::get('viewTable', [customerController::class, 'DisplayCustomer']);

