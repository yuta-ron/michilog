<?php

namespace App\Package\Domains\Route;

class Route
{
    public readonly int $layerId;
    public readonly string $geoJson;

    public function __construct(\App\Models\Route $route) {
        $this->layerId = $route->layer_id;
        $this->geoJson = $route->geo_json;
    }
}
