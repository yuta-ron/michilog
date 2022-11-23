<?php

use App\Http\Controllers\Api\V1\LocationController;
use App\Http\Controllers\Api\V1\MapController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::prefix('api/v1')->middleware('auth')->group(function() {
    Route::get('/user', function (Request $request) {
        $user = [
            'name' => $request->user()->name,
            'icon_url' => $request->user()->icon_url,
            'meta' => [
                'map_count'=> $request->user()->maps()->count(),
            ]
        ];
        return response()->json($user);
    });
    Route::get('maps',MapController::class. '@list');
    Route::post('maps',MapController::class. '@create');
    Route::get('maps/{id}',MapController::class. '@index');
    Route::put('maps/{id}',MapController::class. '@update');
    Route::delete('maps', MapController::class. '@destroy');
    Route::post('locations', LocationController::class. '@create');

});
