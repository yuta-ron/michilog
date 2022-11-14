<?php

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

if (getenv('APP_ENV') != 'production') {
    Route::get('/', function () {
        return view('welcome');
    });
}

Route::prefix('api/v1')->group(function() {
    Route::prefix('auth/twitter')->group(function() {
        Route::post('login', 'App\Http\Controllers\Api\V1\AuthController@twitterAuthRedirect');
        Route::post('logout', 'App\Http\Controllers\Api\V1\AuthController@logout');
        Route::get('callback', 'App\Http\Controllers\Api\V1\AuthController@twitterAuthCallback');
    });
});
