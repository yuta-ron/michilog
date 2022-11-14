<?php

namespace App\Package\Domains\Route;

interface RouteRepositoryInterface
{
    /**
     * @param int $id
     * @return Route
     */
    public function getByLayerId(int $layerId): Route;
}
