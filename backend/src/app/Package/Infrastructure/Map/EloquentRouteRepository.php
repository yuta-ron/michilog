<?php

namespace App\Package\Infrastructure\Map;

use App\Package\Domains\Route\Route;
use App\Package\Domains\Route\RouteRepositoryInterface;

class EloquentRouteRepository implements RouteRepositoryInterface
{
    /**
     * @param int $id
     * @return Route
     */
    public function getByLayerId(int $layerId): Route
    {
        $route = \App\Models\Route::where('layer_id', $layerId)->first();

        return new Route($route);;
    }
}
