<?php

namespace App\Package\Domains\Layer;

use App\Package\Domains\Route\Route;

class Layer
{
    public readonly string $name;
    public readonly string $hash;
    public readonly string $color;
    public readonly Route $route;
    public readonly int $map_id;

    public function __construct(\App\Models\Layer $layer, Route $route) {
        $this->name = $layer->name;
        $this->hash = $layer->hash;
        $this->color = $layer->color;
        $this->route = $route;
        $this->map_id = $layer->map_id;
    }
}
