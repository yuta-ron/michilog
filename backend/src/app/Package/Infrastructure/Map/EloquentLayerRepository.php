<?php

namespace App\Package\Infrastructure\Map;

use App\Package\Domains\Layer\Layer;
use App\Package\Domains\Layer\LayerRepositoryInterface;
use App\Package\Domains\Route\RouteRepositoryInterface;

class EloquentLayerRepository implements LayerRepositoryInterface
{
    protected $routeRepository;

    public function __construct(RouteRepositoryInterface $rr) {
        $this->routeRepository = $rr;
    }

    /**
     * @param int $id
     * @return Layer[]
     */
    public function getByMapId(int $mapId): array
    {
        $layers = \App\Models\Layer::where('map_id', $mapId)->get();
        $larr = [];
        foreach ($layers as $layer) {
            $routes = $this->routeRepository->getByLayerId($layer->id);
            $larr[] = new Layer($layer, $routes);
        }

        return $larr;
    }

    /**
     * @param int $mapId
     * @return bool
     */
    public function clearByMapId(int $mapId): bool {
        return \App\Models\Layer::where('map_id', $mapId)->delete();
    }
}
